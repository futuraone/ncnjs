import React from 'react'
import Link from 'next/link'
import {Logo} from '@/components/Logo/Logo'
import {clearTel, lojas} from '@/pages/_app'
import styles from './styles.module.css'
import Image from 'next/image'

export const NossasLojas = () => {
	return (
		<>
			<div className={styles.lojas}>
				<ul>
					<li>
						<div className={styles.coluna}>
							<i className="fa-solid fa-location-dot" title="Endereço"></i> <br/>
							<span className={styles.badge}>Clique nos endereços abaixo para abrir o <b>mapa de localização</b></span>
						</div>
						<div className={styles.coluna}>
							<i className="fa-solid fa-phone-flip" title="Telefone"></i> <br/>
							<span className={styles.badge}>Clique nos números abaixo para <b>ligar agora</b></span>
						</div>
					</li>
					{lojas().map((loja, key) => (
						<li key={key}>
							<div className={styles.coluna}>
								<button type="button" className={`${styles.btn} btn`} data-bs-toggle="modal" data-bs-target={`#modal-${key}`}>
									<Image
										src={`/img/lojas/${loja.foto}`}
										alt=''
										width={100}
										height={100}
									/>
									{loja.endereco}
									<i className="fa-solid fa-arrow-up-right-from-square"></i>
								</button>
								<div className="modal fade" id={`modal-${key}`} aria-labelledby={`modalLabel-${key}`} aria-hidden="true">
									<div className="modal-dialog modal-xl">
										<div className="modal-content">
											<div className="modal-header">
												<h1 className={`${styles.h1} modal-title fs-5`} id={`modalLabel-${key}`}>
													<Logo/>
												</h1>
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div className="modal-body">
												<iframe src={loja.mapa} width="100%" height="500" aria-hidden="false"></iframe>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.coluna}>
								<Link href={`tel:+55${clearTel(loja.telefone)}`}>
									{loja.telefone}
									<i className="fa-solid fa-arrow-up-right-from-square"></i>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}