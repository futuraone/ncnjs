import styles from './styles.module.css'

export const Pesquisa = () => {
	
	return (
		<>
			<form className={`${styles.form} d-flex`} role="search">
				<span className={styles.span}>
					<i className="fa-solid fa-magnifying-glass"></i>
				</span>
				<input type="search" className={`${styles.input} form-control`} placeholder="Pesquisa..." aria-label="Pesquisa" aria-describedby="pesquisa"/>
				<button type="button" className={styles.btPesquisa}>
					Buscar
					<i className="fa-solid fa-angle-right"></i>
				</button>
			</form>
		</>
	)
}