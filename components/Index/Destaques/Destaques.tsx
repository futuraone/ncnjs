import React from 'react'
import Link from 'next/link'
import {Produto as ProdutoIndividual} from '@/components/Produto/Produto'
import {Produto as ProdutoTipo} from '@/types/Produto'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.css'

let settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	autoplaySpeed: 7000,
	arrows: true,
	slidesToShow: 5,
	slidesToScroll: 5,
	autoplay: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}]
}

type Props = {
	produtos: ProdutoTipo[];
	tipo: string;
	nome: string;
	chamada: string;
}

export const Destaques = ({produtos, tipo, nome, chamada}: Props) => {
	return (
		<>
			<div className={`destaques-home destaques-${tipo}`}>
				<div className="container">
					<div className={styles.subTitulo}>
						<h2>{chamada}</h2>
						<Link href={`/produtos/${tipo}`} className="btn btn-outline-secondary btn-sm rounded-pill">
							<span>Ver tudo em <strong>{nome}</strong></span>
							<i className="fa-solid fa-angle-right"></i>
						</Link>
					</div>
					<div className={styles.container}>
						<Slider {...settings}>
							{produtos.map((produto, index) => (
								<div key={index}>
									<ProdutoIndividual produto={produto}/>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	)
}