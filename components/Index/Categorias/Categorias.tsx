import Link from 'next/link'
import Image from 'next/image'
import {Categoria} from '@/types/Categoria'
import {setNormalText} from '@/pages/_app'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.css'

let settings = {
	autoplay: true,
	dots: false,
	infinite: true,
	speed: 500,
	arrows: false,
	slidesToShow: 8,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}]
}

type Props = {
	categorias: Categoria[]
}

export const Categorias = ({categorias}: Props) => {
	
	return (
		<>
			<div className={styles.categorias}>
				<div className="container">
					<div className={styles.subTitulo}>
						<h2>O que está precisando?</h2>
						<Link href={'/departamentos'} className="btn btn-outline-secondary btn-sm rounded-pill">
							<span>Confira todos os <strong>Departamentos</strong></span>
							<i className="fa-solid fa-angle-right"></i>
						</Link>
					</div>
					<ul className={styles.ul}>
						<Slider {...settings}>
							{categorias.map((categoria, key) => (
								<li key={key}>
									<Link href={`/produtos/${categoria.grupo}/${categoria.slug}`}>
										<Image
											src={`/img/categorias/${categoria.slug}.webp`}
											alt=""
											width={100}
											height={100}
										/>
										<span>
										{setNormalText(categoria.nome)}
									</span>
									</Link>
								</li>
							))}
						</Slider>
					</ul>
				</div>
			</div>
		</>
	)
}