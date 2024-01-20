import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import img01 from '../assets/img01.jpg';
import img02 from '../assets/img02.jpg';
import img03 from '../assets/img03.jpg';
import img04 from '../assets/img04.jpg';
import img05 from '../assets/img05.jpg';
import img06 from '../assets/img06.jpg';

const SwiperComponent = ({ activeTab }) => {
	const images = [
		[img01, img02, img03],
		[img04, img05, img06],
	];

	const onSwiperInit = (swiper) => {
		var slideCount = swiper.slides.length;
		if (slideCount === 3) {
			swiper.slideTo(1, 0);
		} else if (slideCount === 4) {
			swiper.slideTo(1, 0);
		} else if (slideCount >= 5) {
			swiper.slideTo(2, 0);
		}
	};

	return (
		<Swiper
			onInit={onSwiperInit}
			pagination={{ clickable: true }}
			effect='coverflow'
			centeredSlides={true}
			slidesPerView='auto'
			coverflowEffect={{
				rotate: 0,
				stretch: -60,
				depth: 400,
				modifier: 1,
				slideShadows: true,
			}}
			modules={[EffectCoverflow, Pagination]}
			className='swiper-container'
		>
			{images[activeTab].map((img, index) => (
				<SwiperSlide key={index}>
					<div className='slider-image'>
						<img src={img} alt={`slide_image_${index + 1}`} />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperComponent;
