import Head from 'next/head'
import {Grupo} from '@/types/Grupo'
import {api, description, getToken, name, slogan} from '@/pages/_app'
import {Header} from '@/components/Theme/Header/Header'
import {Footer} from '@/components/Theme/Footer/Footer'
import {Breadcrumb} from '@/components/Breadcrumb/Breadcrumb'

export const getStaticProps = async () => {
	
	let token: string = await getToken()
	let grupos: Grupo[] = await api('/grupos', token)
	
	return {
		props: {
			grupos
		},
		revalidate: 60
	}
}

type Props = {
	grupos: Grupo[];
}

export default function Custom404({grupos}: Props) {
	
	let titulo = 'Nada encontrado'
	
	let links = [
		{
			nome: titulo,
			link: '/404'
		}
	]
	
	return (
		<>
			<Head>
				<title>{`${name()}: ${slogan()}`}</title>
				<meta name="description" content={description()}/>
			</Head>
			<main>
				<Header grupos={grupos}/>
				<Breadcrumb links={links}/>
				<div className="container text-center">
					<h1>{titulo}</h1>
					<p>Gostaria de fazer uma pesquisa?</p>
				</div>
				<Footer grupos={grupos}/>
			</main>
		</>
	)
}