import {Grupo} from '@/types/Grupo'
import {WhatsApp} from '@/components/Theme/Footer/WhatsApp/WhatsApp'
import {Links} from '@/components/Theme/Header/Bottom/Links'
import {Menu} from '@/components/Theme/Footer/Menu/Menu'
import {NossasLojas} from '@/components/Theme/Footer/NossasLojas/NossasLojas'
import {Logo} from '@/components/Logo/Logo'
import {SocialMedia} from '@/components/Theme/Header/Middle/SocialMedia/SocialMedia'
import {Bottom} from '@/components/Theme/Footer/Bottom/Bottom'
import styles from './styles.module.css'

type Props = {
	grupos: Grupo[]
}
export const Footer = ({grupos}: Props) => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.links}>
					<Links/>
				</div>
				<Menu grupos={grupos}/>
				<div className={styles.whatsapp}>
					<WhatsApp/>
				</div>
				<div className={styles.lojas}>
					<h3 className="pt-4 text-center">Nossas Lojas</h3>
					<NossasLojas/>
				</div>
				<div className={styles.logo}>
					<Logo/>
				</div>
				<div className={styles.socialMedia}>
					<SocialMedia/>
				</div>
				<Bottom/>
			</footer>
		</>
	)
}