import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {api, description, getCategorias, getToken, name, setNormalText, slogan} from '@/pages/_app'
import {Header} from '@/components/Theme/Header/Header'
import {Footer} from '@/components/Theme/Footer/Footer'
import {Breadcrumb as BreadcrumbType} from '@/types/Breadcrumb'
import {Breadcrumb as Breadcrumb} from '@/components/Breadcrumb/Breadcrumb'
import {Grupo} from '@/types/Grupo'
import {Categoria} from '@/types/Categoria'
import styles from './styles.module.css'

export const getStaticProps = async () => {
	
	let token: string = await getToken()
	let grupos: Grupo[] = await api('/grupos', token)
	let categorias: Categoria[] = getCategorias(grupos)
	let titulo = 'Departamentos'
	
	let links: BreadcrumbType[] = [
		{
			nome: titulo,
			link: '/departamentos'
		}
	]
	
	return {
		props: {grupos, titulo, links, categorias},
		revalidate: 300
	}
}

type Props = {
	grupos: Grupo[];
	titulo: string;
	links: BreadcrumbType[];
	categorias: Categoria[];
}

export default function Departamentos({grupos, titulo, links, categorias}: Props) {
	
	const seleciona = function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		
		const button = (event.target as HTMLButtonElement)
		
		const categoria = button.getAttribute('data-categoria') as string
		const departamentos: NodeListOf<HTMLLIElement> = document.querySelectorAll('#departamentos li')
		
		departamentos.forEach(function (element, index): void {
			element.style.display = 'block'
		})
		
		departamentos.forEach(function (element) {
			if (element.dataset.categoria == categoria || categoria == 'tudo') {
				return
			}
			element.style.display = 'none'
		})
		
		const botoesDepartamentos: NodeListOf<HTMLButtonElement> = document.querySelectorAll('#bts-departamentos button')
		
		botoesDepartamentos.forEach(function (element) {
			element.classList.remove('btn-primary', 'btn-outline-primary')
		})
		
		botoesDepartamentos.forEach(function (element) {
			if (element.dataset.categoria == categoria) {
				element.classList.add('btn-primary')
			} else {
				element.classList.add('btn-outline-primary')
			}
		})
	}
	
	return (
		<>
			<Head>
				<title>{`Departamentos • ${name()}: ${slogan()}`}</title>
				<meta name="description" content={description()}/>
			</Head>
			<main>
				<Header grupos={grupos}/> <Breadcrumb links={links}/>
				<div className="container">
					<h1>{titulo}</h1>
					<div className="text-center">
						<div className="btn-group" role="group" id="bts-departamentos">
							<button type="button" className="btn btn-primary" onClick={seleciona} data-categoria="tudo">Tudo</button>
							<button type="button" className="btn btn-outline-primary" onClick={seleciona} data-categoria="colchoes">Colchões</button>
							<button type="button" className="btn btn-outline-primary" onClick={seleciona} data-categoria="eletro">Eletro</button>
							<button type="button" className="btn btn-outline-primary" onClick={seleciona} data-categoria="moveis">Móveis</button>
						</div>
					</div>
					<div>
						<ul className={styles.departamentos} id="departamentos">
							{categorias.sort(function (a, b) {
								return a.nome.localeCompare(b.nome)
							}).map((categoria, key) => (
								<li key={key} data-categoria={categoria.grupo}>
									<Link href={`/produtos/${categoria.grupo}/${categoria.slug}`}>
										<Image src={`/img/categorias/${categoria.slug}.webp`} alt="" priority={true} width={120} height={120}/>
										<span>
											{setNormalText(categoria.nome)}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<Footer grupos={grupos}/>
			</main>
		</>
	)
}