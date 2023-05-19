import Link from 'next/link'
import Image from 'next/image'
import {name, slogan} from '@/pages/_app'
import styles from './styles.module.css'

export const Logo = () => {
	
	let title = `${name()}: ${slogan()}`
	
	return (
		<>
			<Link className={`${styles.logo} navbar-brand`} href={'/'}>
				<Image
					src="/img/theme/logo-nacional-moveis-colchoes.svg"
					alt={title}
					title={title}
					fill={true}
				/>
			</Link>
		</>
	)
}