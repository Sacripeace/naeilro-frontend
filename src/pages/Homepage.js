
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../css/Homepage.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CiLocationOn } from "react-icons/ci";
import data from '../datas/academy_data.json'
import { useState } from 'react';
import { Link} from 'react-router-dom';

function Homepage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2,setIsOpen2] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleRegionClick = (region) => {
    setSelectedRegion(selectedRegion === region ? null : region);
    };
    const handleCourseClick = (course) => {
        setSelectedCourse(selectedCourse === course ? null : course);
    };

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
        delay: 4000,
        disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide><img src='/images/banner2.jpeg' alt=''></img></SwiperSlide>
        <SwiperSlide><a href='https://www.gov.kr/portal/rcvfvrSvc/dtlEx/149200005007'><img src='/images/banner3.png' alt=''></img></a></SwiperSlide>
        <SwiperSlide><img src='/images/banner1.jpeg' alt=''></img></SwiperSlide>
        <SwiperSlide><img src='/images/banner4.jpeg' alt=''></img></SwiperSlide>
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
                                    <div className={`region-01 ${selectedRegion === '천호' ? 'active' : ''}`}
                                        onClick={() => handleRegionClick('천호')}>천호
                                    </div>
                                    <div className={`region-01 ${selectedRegion === '강동' ? 'active' : ''}`}
                                        onClick={() => handleRegionClick('강동')}>강동
                                    </div>
                                </div>
                            </div>
                            <div className='func'>
                                <div className='region' onClick={toggleDropdown2}>과목</div>
                                    <div className='reg1' style={{ maxHeight: isOpen2 ? '200px' : '0px'}}>
                                        <div className={`region-01 ${selectedCourse === 'Java' ? 'active' : ''}`}
                                            onClick={() => handleCourseClick('Java')}>Java</div>
                                        <div className={`region-01 ${selectedCourse === 'AI' ? 'active' : ''}`}
                                        onClick={() => handleCourseClick('AI')}>AI 개발</div>
                                        <div className={`region-01 ${selectedCourse === '게임 개발' ? 'active' : ''}`}
                                        onClick={() => handleCourseClick('게임 개발')}>게임 개발</div>
                                    </div>
                            </div>
                        </div>
                        <div className='container-courses'>
                            {data.map(item => (
                                <Link to={`/academy/${item.uid}`}className='courses'>
                                <div key={item.id} >
                                    <img 
                                        src={item.image}
                                        alt={item.title || 'course image'}
                                    />
                                    <div className='course-info'>
                                        <h3>{item.academy_name}</h3>
                                        <p>{item.subject_name}</p>
                                    </div>
                                </div>
                                </Link>
                            ))}
                        </div>
                        <div className='viewmore'>
                            <button><img src='/images/down.png' alt='down'></img>더보기</button>
                        </div>
                    </div>
            </div>
        </main>
    );
}

export default Homepage;