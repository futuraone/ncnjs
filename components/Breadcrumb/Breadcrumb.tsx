import Link from 'next/link'
import {Breadcrumb as BreadcrumbType} from '@/types/Breadcrumb'
import styles from './styles.module.css'
import {name} from '@/pages/_app'

type Props = {
	links: BreadcrumbType[]
}
export const Breadcrumb = ({links}: Props) => {
	return (
		<>
			<nav className={styles.breadcrumb}>
				<div className="container">
					<ol>
						<li>
							<Link href={'/'}>
								{name()}
							</Link>
						</li>
						{links.map((link, key) => (
							<li key={key}>
								<Link href={link.link}>
									{link.nome}
								</Link>
							</li>
						))}
					</ol>
				</div>
			</nav>
		</>
	)
}