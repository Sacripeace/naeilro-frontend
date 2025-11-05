import { Link, useParams } from 'react-router-dom';
import '../css/academy.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Academy(){
    const { aUid } = useParams();
    const [academy, setAcademy] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     axios.get(`http://localhost:8080/academy/${aUid}`)
        .then(res => {
            console.log("🔍 실제 응답 데이터:", res.data);
            console.log("🔍 academyName:", res.data.academyName);
            console.log("🔍 현재 aUid:", aUid);
            setAcademy(res.data)})
        
        .catch(console.error)
        .finally(() => setLoading(false));
        
    }, [aUid]);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    return(
        <main className='academymain'>
            <div className='academycontainer'>
                <div className='academytitle'>
                    <p>학원 정보</p>
                    <a href='/academy-register'>학원 정보 수정하기</a>
                </div>
                <div className='academyline'></div>
                <div className='academyinformation'>
                    <img 
                        src={academy.academyImage ? `data:image/jpeg;base64,${academy.academyImage}` : '/images/default-academy.jpg'} 
                        alt='학원 사진'
                    />
                    <div className='informationdetail'>
                        <p>학원 이름 : {academy.academyName}</p>
                        <div>
                            <div>
                                <p>과목 : {academy.subjectsTitle}</p>
                                <p>전화번호 : {academy.phoneNumber}</p>
                                <p>주소 : {academy.address}</p>
                            </div>
                        </div>
                        {academy.address && (
                            <div className='academymap'>
                                <iframe
                                    title="academy-map"
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(academy.address)}&output=embed`}
                                    style={{ width: '100%', height: '100%', border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className='academysubline'></div>

                <div className='hometeachertitle'>
                    <p>모집 중인 강좌</p>
                    <a href='/teacher-register'>강좌 추가 하기</a>
                </div>
                <div className='teacher-container'>
                    {/* academy.teachers로 접근 */}
                    {academy.teachers && academy.teachers.length > 0 ? (
                        academy.teachers.map((t, index) => (
                            <div key={t.tUid || index} className='card'>
                                <img 
                                    src={t.teacherImage ? `data:image/jpeg;base64,${t.teacherImage}` : '/images/default-teacher.jpg'} 
                                    alt={t.teacherName} 
                                />
                                <div className='teacherposition'>
                                    <p>이름 : {t.teacherName}</p>
                                    <p>경력 : {t.career}</p>
                                    <p>과목 : {t.teacherSubject}</p>
                                </div>
                                <div className='teacherexplain'>
                                    <Link to={t.subjectExplain || '#'}>해당 과정이 궁금하시다면 Click!</Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>등록된 강좌가 없습니다.</p>
                    )}
                </div>
            </div>
            <div className='viewmore'>
                <button><img src='/images/down.png' alt='down'></img>더보기</button>
            </div>
        </main>
    );
}

export default Academy;