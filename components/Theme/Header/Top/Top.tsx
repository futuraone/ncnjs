import Image from 'next/image'
import {name, phone, WhatsAppHref} from '@/pages/_app'
import styles from './styles.module.css'

export const Top = () => {
	return (
		<>
			<div className={styles.whatsapp}>
				<a
					href={WhatsAppHref()}
					target="_blank"
				>
					<Image
						src="/img/theme/social/whatsapp.png"
						alt={name()}
						width={25}
						height={25}
					/>
					<span>
						<i>Televendas WhatsApp</i>
						<u>Compre agora e economize!</u>
						<b>{phone()}</b>
					</span>
				</a>
			</div>
		</>
	)
}