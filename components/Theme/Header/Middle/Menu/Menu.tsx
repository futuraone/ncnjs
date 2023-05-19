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
			<nav className={`${styles.nav} d-flex`}>
				<div className={styles.inputGroup}>
					<div className={styles.menu}>
						{grupos.sort(function (a, b) {
							return a.nome.localeCompare(b.nome)
						}).map((grupo, key) => (
							<div key={key}>
								<button className={`${styles.dropDownToggle} btn btn-primary dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<strong>{setNormalText(grupo.nome)}</strong>
								</button>
								<ul className={`${styles.dropDownMenu} dropdown-menu`}>
									{grupo.subgrupos.sort(function (a, b) {
										return a.nome.localeCompare(b.nome)
									}).map((subgrupo, k) => (
										<li key={k}>
											<Link className={`${styles.dropDownItem} dropdown-item`} href={`/produtos/${grupo.slug}/${subgrupo.slug}`}>
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
									<li>
										<hr className="dropdown-divider"/>
									</li>
									<li>
										<Link className={`${styles.btVerTudo} dropdown-item`} href={`/produtos/${grupo.slug}`}>
											<i className="fa-solid fa-angle-right"></i>
											Ver tudo em <strong> {setNormalText(grupo.nome)}</strong>
										</Link>
									</li>
								</ul>
							</div>
						))}
					</div>
				</div>
			</nav>
		</>
	)
}