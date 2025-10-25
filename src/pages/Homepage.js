
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../css/Homepage.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Homepage() {

    return(
        <main>
            <div className="main">
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                <h1 className='courses'>강의 목록</h1>
                <div className='container'>
                    <div className='course'>course</div>
                    <div className='course'>course</div>
                    <div className='course'>course</div>
                    <div className='course'>course</div>
                    <div className='course'>course</div>
                </div>
                    <h1 className='search'>나의 학원 찾기</h1>
                    <p className='academy'>학원 등록+</p>
                    <div>
                        <div className='region'>지역</div>
                        <div className=''></div>
                    </div>
            </div>
        </main>
    );
}

export default Homepage;