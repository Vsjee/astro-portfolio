import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './proyectsCarouselStyles.css';

import ProyectCard from './card/ProyectCard';
import { proyectsData } from './data/proyectsData';

import { Autoplay, Pagination, Navigation } from 'swiper';
import type { ProyectInfo } from './models/proyectsData.model';

function ProyectsCarousel() {
    return (
        <section className='section__carousel '>
            <h1>Work/Proyects</h1>
            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'>
                {proyectsData.map((item: ProyectInfo) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <ProyectCard card={item} />
                        </SwiperSlide>
                    );
                })}
                <SwiperSlide className='moreProyects'>
                    <p>Want to see more proyects</p>
                    <a href='https://github.com/Vsjee' target='_blank'>
                        <button className='moreProyects__btn'>
                            Click here...
                        </button>
                    </a>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
export default ProyectsCarousel;
