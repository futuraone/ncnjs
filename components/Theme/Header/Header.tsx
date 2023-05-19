import {Grupo} from '@/types/Grupo'
import {Top} from '@/components/Theme/Header/Top/Top'
import {Middle} from '@/components/Theme/Header/Middle/Middle'
import {Bottom} from '@/components/Theme/Header/Bottom/Bottom'
import styles from './styles.module.css'

type Props = {
	grupos: Grupo[]
}

export const Header = ({grupos}: Props) => {
	return (
		<>
			<header className={styles.header}>
				<Top/>
				<Middle grupos={grupos}/>
				<Bottom/>
			</header>
		</>
	)
}