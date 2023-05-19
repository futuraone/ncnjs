import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import {host} from '@/pages/_app'

type Props = {
	nome: string;
	path: string;
}
export const Share = ({nome, path}: Props) => {
	
	let url = host() + path
	
	const nativeShare = (event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
		event.preventDefault()
		
		const button = (event.target as HTMLLIElement)
		
		if (navigator.share) {
			navigator.share({
				title: button.getAttribute('data-title') as string,
				url: button.getAttribute('data-url') as string,
			})
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error))
		}
	}
	
	const instagramShare = (event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
		event.preventDefault()
		const button = (event.target as HTMLLIElement)
		let url = button.getAttribute('data-url') as string
		let el: HTMLTextAreaElement = document.createElement('textarea')
		el.value = url
		el.setAttribute('readonly', '')
		el.style.position = 'absolute'
		el.style.left = '-9999px'
		document.body.appendChild(el)
		el.select()
		document.execCommand('copy')
		document.body.removeChild(el)
		alert('Link copiado!')
		window.location.href = 'https://instagram.com/'
	}
	
	return (
		<>
			<div className={styles.compartilhar}>
				<i className="fas fa-share-alt" aria-hidden="true"></i>
				<ul>
					<li onClick={nativeShare}>
						<i className="fa-solid fa-share-from-square" data-title={nome} data-url={url}></i>
					</li>
					<li onClick={instagramShare}>
						<Image
							src="/img/theme/social/instagram.png"
							alt="Instagram"
							title="Instagram"
							priority={true}
							width={50}
							height={50}
							data-url={url}
						/>
					</li>
				</ul>
			</div>
		</>
	)
}