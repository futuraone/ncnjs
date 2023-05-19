import styles from './styles.module.css'
import {Grupo} from '@/types/Grupo'
import {setNormalText} from '@/pages/_app'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
	grupos: Grupo[]
}
export const Aside = ({grupos}: Props) => {
	return (
		<>
			<aside className={styles.aside}>
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
										{setNormalText(subgrupo.nome)}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</aside>
		</>
	)
}