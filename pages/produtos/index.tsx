import Head from 'next/head'
import {Grupo} from '@/types/Grupo'
import {api, description, getToken, name, slogan} from '@/pages/_app'
import {Header} from '@/components/Theme/Header/Header'
import {Footer} from '@/components/Theme/Footer/Footer'

export const getStaticProps = async () => {
	
	let token: string = await getToken()
	let grupos: Grupo = await api('/grupos', token)
	
	return {
		props: {
			grupos,
		},
		revalidate: 300
	}
}

type Props = {
	grupos: Grupo[]
}

export default function produtos({grupos}: Props) {
	return (
		<>
			<Head>
				<title>{`${name()}: ${slogan()}`}</title>
				<meta name="description" content={`${description()}`}/>
			</Head>
			<main>
				<Header grupos={grupos}/>
				<h1>Produtos</h1>
				<Footer grupos={grupos}/>
			</main>
		</>
	)
}
