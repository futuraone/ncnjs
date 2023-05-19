import Link from 'next/link'
import {name, slogan} from '@/pages/_app'
import styles from './styles.module.css'

export const Bottom = () => {
	
	let year = new Date().getFullYear()
	
	return (
		<>
			<div className={styles.bottom}>
				<div className="container">
					<p>
						<Link href={'/'}>
							{`${name()}: ${slogan()}`}
						</Link>
					</p>
					<p>Todos os direitos reservados © {year}</p>
				</div>
			</div>
		</>
	)
}
