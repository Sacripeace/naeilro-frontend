import data from '../datas/academy_data.json';
import { Link, useParams } from 'react-router-dom';

import '../css/academy.css';

function Academy(){
    const { uid } = useParams();
    const academy = data.find((item) => item.uid === Number(uid));
    

    return(
        <main className='academymain'>
            <div className='academycontainer'>
            <div className='academytitle'>
                <p>학원 정보</p>
                <a href='/academy-register'>학원 정보 수정하기</a>
            </div>
            <div className='academyline'></div>
            <div className='academyinformation'>
                <img src={academy.image} alt='사진'></img>
                <div className='informationdetail'>
                    <p>{academy.academy_name}</p>
                    <div>
                        <div>
                            <p>과목 : {academy.subject_name}</p>
                            <p>전화번호 : {academy.phone_number}</p>
                            <p>주소 : {academy.address}</p>
                        </div>
                        <div>
                            <p>소개 :</p>
                            <p>{academy.description}</p>
                        </div>
                    </div>
                    <div className='academymap'>
                        <iframe
                            title="academy-map"
                            src={`https://www.google.com/maps?q=${encodeURIComponent(academy.address)}&output=embed`}
                            style={{ width: '100%', height: '100%', border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
            <div className='academysubline'></div>


            <div className='hometeachertitle'>
                <p>모집 중인 강좌</p>
                <a href='/teacher-register'>강좌 추가 하기</a>
            </div>
            <div className='teacher-container'>
                {academy.teacher.map((t, index) => (
                    <div key={index} className='card'>
                        <img src={t.image} alt={t.teacher_name} />
                        <div className='teacherposition'>
                            <p>이름 : {t.teacher_name}</p>
                            <p>경력 : {t.career}</p>
                            <p>과목 : {t.teacher_subject}</p>
                        </div>
                        <div className='teacherexplain'>
                            <Link to={t.subject_explain}>해당 과정이 궁금하시다면 Click! </Link>
                        </div>
                    </div>
                ))}
            </div>
            
            </div>
            <div className='viewmore'>
                <button><img src='/images/down.png' alt='down'></img>더보기</button>
            </div>

        </main>
    );
}

export default Academy;