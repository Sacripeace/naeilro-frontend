
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../css/Homepage.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CiLocationOn } from "react-icons/ci";
import data from '../datas/academy_data.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2,setIsOpen2] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

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
                <div className='title-box'>
                    <h1 className='search'>나의 학원 찾기</h1>
                    <Link to={"/academy-register"} className='academy'>
                    <p>학원 등록+</p>
                    </Link>
                    
                </div>
                    <div>
                        <div className='container2'>
                            <div className='func'>
                                <div className='region' onClick={toggleDropdown}><CiLocationOn />지역</div>
                                <div className='reg'style={{ maxHeight: isOpen ? '200px' : '0px'}}>
                                    <div className='region-01'>천호</div>
                                    <div className='region-01'>강동</div>
                                </div>
                            </div>
                            <div className='func'>
                                <div className='subject' onClick={toggleDropdown2}>과목</div>
                                    <div className='reg1' style={{ maxHeight: isOpen2 ? '200px' : '0px'}}>
                                        <div className='region-01'>Java</div>
                                        <div className=' region-01'>AI 개발</div>
                                        <div className=' region-01'>게임 개발</div>
                                    </div>
                            </div>
                        </div>
                        <div className='container-courses'>
                            {data.map(item => (
                                <div key={item.id} className='courses'>
                                    <img 
                                        src={item.image}
                                        alt={item.title || 'course image'}
                                    />
                                    <div className='course-info'>
                                        <h3>{item.academy_name}</h3>
                                        <p>{item.subject_name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </main>
    );
}

export default Homepage;