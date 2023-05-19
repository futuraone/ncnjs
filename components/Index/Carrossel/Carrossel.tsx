import React from 'react'
import Link from 'next/link'
import {Banner} from '@/types/Banner'
import {assetUrl} from '@/pages/_app'
import {Autoplay, Navigation, Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type Props = {
	banners: Banner[];
}

export const Carrossel = ({banners}: Props) => {
	
	return (
		<>
			<Swiper
				slidesPerView={1}
				loop={true}
				pagination={{
					clickable: true
				}}
				autoplay={{
					delay: 4000,
					disableOnInteraction: true
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{banners.map((banner, index) => (
					<SwiperSlide key={index}>
						<Link href={banner.link} target="_blank">
							<picture>
								<source media="(max-width: 768px)" srcSet={assetUrl() + banner.mobile}/>
								<img data-index={index} src={assetUrl() + banner.desktop} className="d-block w-100" alt=""/>
							</picture>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}