import {Logo} from '@/components/Logo/Logo'
import {Menu} from '@/components/Theme/Header/Middle/Menu/Menu'
import {Pesquisa} from '@/components/Theme/Header/Middle/Pesquisa/Pesquisa'
import {SocialMedia} from '@/components/Theme/Header/Middle/SocialMedia/SocialMedia'
import {Grupo} from '@/types/Grupo'
import styles from './styles.module.css'

type Props = {
	grupos: Grupo[]
}
export const Middle = ({grupos}: Props) => {
	return (
		<>
			<div className={`${styles.container} container`}>
				<Logo/>
				<div className={styles.div}>
					<Menu grupos={grupos}/>
					<Pesquisa/>
				</div>
				<div className={styles.socialMedia}>
					<SocialMedia/>
				</div>
			</div>
		</>
	)
}