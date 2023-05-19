import {Links} from './Links'
import styles from './styles.module.css'

export const Bottom = () => {
	return (
		<>
			<div className={styles.bottomHeader}>
				<div className="container">
					{/* Mobile */}
					<nav className={styles.mobile}>
						<button className={`${styles.btHamburguer} btn btn-primary`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavGeralHeader" aria-controls="offcanvasNavGeralHeader">
							<i className="fa-solid fa-bars"></i>
						</button>
						<div className={`${styles.offCanvas} offcanvas offcanvas-start`} id="offcanvasNavGeralHeader" aria-labelledby="offcanvasNavGeralHeaderLabel">
							<div className={`${styles.offCanvasHeader} offcanvas-header`}>
								<i className="fa-solid fa-xmark" data-bs-dismiss="offcanvas" aria-label="Close"></i>
							</div>
							<div className={`${styles.offCanvasBody} offcanvas-body`}>
								<Links/>
							</div>
						</div>
					</nav>
					{/* Desktop */}
					<nav className={styles.desktop}>
						<Links/>
					</nav>
				</div>
			</div>
		</>
	)
}