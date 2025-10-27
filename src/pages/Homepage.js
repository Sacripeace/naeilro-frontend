
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../css/Homepage.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CiLocationOn } from "react-icons/ci";
import data from '../datas/academy_data.json'

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
                    <h1 className='search'>나의 학원 찾기</h1>
                    <p className='academy'>학원 등록+</p>
                    <div>
                        <div className='container2'>
                            <div className='func'>
                                <div className='region'><CiLocationOn />지역</div>
                                <div className='reg'>
                                    <div className='region-01'>전호</div>
                                    <div className='region-01'>강동</div>
                                </div>
                            </div>
                            <div className='func'>
                                <div className='subject'>과목</div>
                                    <div className='reg'>
                                        <div className='region-01'>JAVA</div>
                                        <div className=' region-01'>AI</div>
                                        <div className=' region-01'>Game Developing</div>
                                    </div>
                            </div>
                        </div>
                        <div className='container-courses'>
                                <div className='courses'>
                                    <img 
                                    src={data[0].image}
                                    alt='there is no image'/>
                                </div>
                                <div className='courses'>
                                    <img 
                                    src={data[1].image}
                                    alt='there is no image'/>
                                </div>
                                <div className='courses'>
                                    <img 
                                    src={data[2].image}
                                    alt='there is no image'/>
                                </div>
                                <div className='courses'>
                                    <img 
                                    src={data[3].image}
                                    alt='there is no image'/>
                                </div>
                                <div className='courses'>
                                    <img 
                                    src={data[4].image}
                                    alt='there is no image'/>
                                </div>
                                <div className='courses'>
                                    <img 
                                    src={data[5].image}
                                    alt='there is no image'/>
                                </div>
                            </div>
                    </div>
            </div>
        </main>
    );
}

export default Homepage;