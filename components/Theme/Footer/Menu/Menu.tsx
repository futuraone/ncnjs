import Link from 'next/link'
import Image from 'next/image'
import {Grupo} from '@/types/Grupo'
import {setNormalText} from '@/pages/_app'
import styles from './styles.module.css'

type Props = {
	grupos: Grupo[]
}
export const Menu = ({grupos}: Props) => {
	return (
		<>
			<nav className={styles.nav}>
				{grupos.sort(function (a, b) {
					return a.nome.localeCompare(b.nome)
				}).map((grupo, key) => (
					<div key={key}>
						<h3>
							<Link href={`/produtos/${grupo.slug}`}>
								{setNormalText(grupo.nome)}
							</Link>
						</h3>
						<ul>
							{grupo.subgrupos.sort(function (a, b) {
								return a.nome.localeCompare(b.nome)
							}).map((subgrupo, k) => (
								<li key={k}>
									<Link href={`/produtos/${grupo.slug}/${subgrupo.slug}`}>
										<Image
											src={`/img/theme/icons/${grupo.slug}/${subgrupo.slug}.svg`}
											alt={subgrupo.nome}
											width={20}
											height={20}
										/>
										{setNormalText(subgrupo.nome)}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</nav>
		</>
	)
}