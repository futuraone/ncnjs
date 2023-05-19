import Head from 'next/head'
import {Grupo} from '@/types/Grupo'
import {Banner} from '@/types/Banner'
import {Categoria} from '@/types/Categoria'
import {Produto} from '@/types/Produto'
import {api, description, getCategorias, getToken, name, slogan} from '@/pages/_app'
import {Header} from '@/components/Theme/Header/Header'
import {Footer} from '@/components/Theme/Footer/Footer'
import {Carrossel} from '@/components/Index/Carrossel/Carrossel'
import {Categorias} from '@/components/Index/Categorias/Categorias'
import {Destaques} from '@/components/Index/Destaques/Destaques'

export const getStaticProps = async () => {
	
	let token: string = await getToken()
	let grupos: Grupo[] = await api('/grupos', token)
	let banners: Banner[] = await api('/banners', token)
	let categorias: Categoria[] = getCategorias(grupos)
	let destaquesColchoes = await api('/destaques/colchoes', token)
	let destaquesEletro = await api('/destaques/eletro', token)
	let destaquesMoveis = await api('/destaques/moveis', token)
	
	return {
		props: {
			grupos,
			banners,
			categorias,
			destaquesColchoes,
			destaquesEletro,
			destaquesMoveis
		},
		revalidate: 60
	}
}

type Props = {
	grupos: Grupo[];
	banners: Banner[];
	categorias: Categoria[];
	destaquesColchoes: Produto[];
	destaquesEletro: Produto[];
	destaquesMoveis: Produto[];
}

export default function Home({
	                             grupos,
	                             banners,
	                             categorias,
	                             destaquesColchoes,
	                             destaquesEletro,
	                             destaquesMoveis
                             }: Props) {
	return (
		<>
			<Head>
				<title>{`${name()}: ${slogan()}`}</title>
				<meta name="description" content={description()}/>
			</Head>
			<main>
				<Header grupos={grupos}/>
				<Carrossel banners={banners}/>
				<Categorias categorias={categorias}/>
				<Destaques produtos={destaquesColchoes} tipo={'colchoes'} nome={'Colchões'} chamada={'Colchões em Oferta'}/>
				<Destaques produtos={destaquesEletro} tipo={'eletro'} nome={'Eletro'} chamada={'Eletros em Promoção'}/>
				<Destaques produtos={destaquesMoveis} tipo={'moveis'} nome={'Móveis'} chamada={'Móveis com desconto'}/>
				<Footer grupos={grupos}/>
			</main>
		</>
	)
}