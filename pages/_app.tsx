import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import {useEffect} from 'react'
import type {AppProps} from 'next/app'
import {Grupo} from '@/types/Grupo'
import {Categoria} from '@/types/Categoria'
import Head from 'next/head'

export default function App({Component, pageProps}: AppProps) {
	
	useEffect(() => {
		require('bootstrap/dist/js/bootstrap.bundle.min.js')
	}, [])
	
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

// Pegar variáveis .env:

export const name = () => {
	return process.env.NEXT_PUBLIC_NAME as string
}
export const slogan = () => {
	return process.env.NEXT_PUBLIC_SLOGAN as string
}
export const description = () => {
	return process.env.NEXT_PUBLIC_DESCRIPTION as string
}
export const email = () => {
	return process.env.NEXT_PUBLIC_EMAIL as string
}
export const phone = () => {
	return process.env.NEXT_PUBLIC_PHONE as string
}
export const host = () => {
	return process.env.NEXT_PUBLIC_HOST as string
}
export const instagram = () => {
	return process.env.NEXT_PUBLIC_INSTAGRAM as string
}
export const facebook = () => {
	return process.env.NEXT_PUBLIC_FACEBOOK as string
}
export const assetUrl = () => {
	return process.env.NEXT_PUBLIC_ASSET_URL as string
}

// Lojas:

export const lojas = () => {
	return [
		{
			endereco: 'Praça Bom Jesus, nº 16, Anápolis - GO',
			telefone: '(62) 3321-7121',
			foto: 'loja-bom-Jesus.webp',
			mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995.7572255884402!2d-48.95833357370748!3d-16.327258216798857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda2e98a9b0ecf8ba!2sNacional%20Colch%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1603387210346!5m2!1spt-BR!2sbr'
		},
		{
			endereco: 'Av. Mato Grosso, nº 99, Anápolis - GO',
			telefone: '(62) 3099-5581',
			foto: 'loja-mato-grosso.webp',
			mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.4534645375084!2d-48.946431822077145!3d-16.327875324948756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea4641d4e4b23%3A0x343545a121ff48b5!2sNacional%20Colch%C3%B5es%20An%C3%A1polis!5e0!3m2!1spt-BR!2sbr!4v1603391386469!5m2!1spt-BR!2sbr'
		},
		{
			endereco: 'Av. Fernando Costa, nº 532, Vila Jaiara, Anápolis - GO',
			telefone: '(62) 3319-4947',
			foto: 'loja-fernando-costa.webp',
			mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.5063970081865!2d-48.96873698840533!3d-16.294621171740037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea1516aca56cb%3A0x5447c60c87412cd7!2sNacional%20M%C3%B3veis%20e%20Colch%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1603391447908!5m2!1spt-BR!2sbr'
		}
	]
}

// Pegar Token:

export const getToken = async () => {
	
	let url = `${process.env.API_URL}/pegar-chave`
	
	let data = {
		username: process.env.API_USER as string,
		password: process.env.API_PASSWORD as string
	}
	
	let config = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	}
	
	let res = await fetch(url, config)
	let json = await res.json()
	
	return json.access_token
}

// Consultas à API:

export const api = async (endpoint: string, token: string) => {
	
	let url = process.env.API_URL + endpoint
	
	let config = {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	}
	
	try {
		let res = await fetch(url, config)
		return await res.json()
	} catch (error) {
		return []
	}
}

// Definir texto normal:

export const setNormalText = (text: string) => {
	return text[0].toUpperCase() + text.substring(1).toLowerCase()
}

// Limpa Caracteres HREF Telefone:

export const clearTel = (phone: string) => {
	return phone.replace(/[^0-9]/g, '')
}

// WhatsApp HREF:

export const WhatsAppHref = () => {
	let phone = process.env.NEXT_PUBLIC_PHONE as string
	let whatsapp = clearTel(phone)
	return `https://wa.me/55${whatsapp}`
}

// Pegar Categorias:

export const getCategorias = (grupos: Grupo[]) => {
	
	let categorias: Categoria[] = []
	
	grupos.map((grupo) => (
		<>
			{grupo.subgrupos.map(function (subgrupo: any) {
				subgrupo.grupo = grupo.slug
				categorias.push(subgrupo)
			})}
		</>
	))
	
	return categorias.sort(() => Math.random() - 0.5)
}