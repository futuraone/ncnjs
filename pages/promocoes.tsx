import Head from 'next/head'
import {Grupo} from '@/types/Grupo'
import {Produto} from '@/types/Produto'
import {api, description, getToken, name, slogan} from '@/pages/_app'
import {Header} from '@/components/Theme/Header/Header'
import {Footer} from '@/components/Theme/Footer/Footer'
import {Produto as ProdutoIndividual} from '@/components/Produto/Produto'
import {Breadcrumb} from '@/components/Breadcrumb/Breadcrumb'

export const getStaticProps = async () => {
	
	let token: string = await getToken()
	let grupos: Grupo[] = await api('/grupos', token)
	let produtos: Produto[] = await api('/promocoes', token)
	
	return {
		props: {
			grupos,
			produtos
		},
		revalidate: 60
	}
}

type Props = {
	grupos: Grupo[];
	produtos: Produto[];
}

export default function Promocoes({grupos, produtos}: Props) {
	
	let titulo = 'Promoções'
	
	let links = [
		{
			nome: titulo,
			link: '/promocoes'
		}
	]
	
	return (
		<>
			<Head>
				<title>{`Promoções • ${name()}: ${slogan()}`}</title>
				<meta name="description" content={description()}/>
			</Head>
			<main>
				<Header grupos={grupos}/>
				<Breadcrumb links={links}/>
				<div className="container">
					<h1>{titulo}</h1>
					<div className="row">
						{produtos.map((produto, index) => (
							<div className="col-md-3" key={index}>
								<ProdutoIndividual produto={produto}/>
							</div>
						))}
					</div>
				</div>
				<Footer grupos={grupos}/>
			</main>
		</>
	)
}