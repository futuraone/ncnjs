import Link from 'next/link'
import Image from 'next/image'
import {facebook, instagram} from '@/pages/_app'
import styles from './styles.module.css'

export const SocialMedia = () => {
	
	return (
		<>
			<div className={styles.socialMedia}>
				<ul>
					<li>
						<Link href={instagram()} target={'_blank'}>
							<Image
								src="/img/theme/social/instagram.png"
								alt="Instagram"
								title="Instagram"
								width={25}
								height={25}
							/>
						</Link>
					</li>
					<li>
						<Link href={facebook()} target={'_blank'}>
							<Image
								src="/img/theme/social/facebook.svg"
								alt="Facebook"
								title="Facebook"
								width={25}
								height={25}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}