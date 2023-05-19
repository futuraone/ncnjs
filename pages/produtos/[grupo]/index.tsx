import Head from 'next/head'
import {GetStaticProps} from 'next'
import {ParsedUrlQuery} from 'querystring'
import {Grupo} from '@/types/Grupo'
import {Produto} from '@/types/Produto'
import {Produto as ProdutoIndividual} from '@/components/Produto/Produto'
import {api, description, getToken, name, setNormalText, slogan} from '@/pages/_app'
import {Header} from '@/components/Theme/Header/Header'
import {Footer} from '@/components/Theme/Footer/Footer'
import {Breadcrumb} from '@/components/Breadcrumb/Breadcrumb'
import {Aside} from '@/components/Aside/Aside'
import {useEffect} from 'react'
import Infinite from '@/components/Infinite/Infinite'


export const getStaticPaths = async () => {
	let token: string = await getToken()
	let grupos: Grupo[] = await api('/grupos', token)
	let paths = grupos.map(grupo => ({
		params: {grupo: grupo.slug.toString()}
	}))
	return {paths, fallback: false}
}

interface Params extends ParsedUrlQuery {
	grupo: string
}

export const getStaticProps: GetStaticProps = async (context) => {
	
	let token: string = await getToken()
	let grupos: Grupo[] = await api('/grupos', token)
	
	let {grupo} = context.params as Params
	let produtos = await api(`/produtos/${grupo}`, token)
	
	let titulo
	
	grupos.map((item) => {
		if (item.slug === grupo) {
			titulo = setNormalText(item.nome)
		}
	})
	
	let links = [
		{
			nome: 'Produtos',
			link: '/produtos'
		},
		{
			nome: titulo,
			link: `/produtos/${grupo}`
		}
	]
	
	return {
		props: {grupo, grupos, produtos, titulo, links, token},
		revalidate: 300
	}
}

type Props = {
	grupo: string,
	grupos: Grupo[],
	produtos: Produto[],
	titulo: string,
	links: [],
	token: string
}

export default function Grupo({grupo, grupos, produtos, titulo, links, token}: Props) {
	
	let fullTitle = `${titulo} • ${name()}: ${slogan()}`
	
	return (
		<>
			<Head>
				<title>{fullTitle}</title>
				<meta name="description" content={`${fullTitle} • ${description()}`}/>
			</Head>
			<main>
				<Header grupos={grupos}/>
				<Breadcrumb links={links}/>
				<div className={`destaques-${grupo}`}>
					<div className="container">
						<div className="row">
							<div className="col-md-2">
								<Aside grupos={grupos}/>
							</div>
							<div className="col-md-10">
								<div className="row">
									<h1 className="mt-5 mb-5">{titulo}</h1>
									{produtos.map((produto, index) => (
										<div className="col-md-3" key={index}>
											<ProdutoIndividual produto={produto}/>
										</div>
									))}
								</div>
								<Infinite endpoint={`/produtos/${grupo}`} token={token}/>
							</div>
						</div>
					</div>
				</div>
				<Footer grupos={grupos}/>
			</main>
		</>
	)
}
