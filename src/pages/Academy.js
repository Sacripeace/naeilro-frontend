import { Link,useNavigate,useParams } from 'react-router-dom';
import '../css/academy.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";

function Academy(){
    const { aUid } = useParams();
    const [academy, setAcademy] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggedInAuid, setLoggedInAuid] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);

    const handleDeleteAcademy = async () => {
    const ok = window.confirm('정말로 탈퇴하시겠습니까?');
    if (!ok) return;

    try {
        await axios.delete("http://localhost:8080/academy/self", { withCredentials: true });
        alert("회원 탈퇴가 완료되었습니다.");

        localStorage.removeItem("isLoggedIn");
        logout?.();

        navigate("/");
    } catch (error) {
        console.error("탈퇴 실패:", error);
        alert(error.response?.data || "탈퇴에 실패했습니다.");
    }
};

    useEffect(() => {
    axios.get('http://localhost:8080/session', { withCredentials: true })
        .then(res => {
            setLoggedInAuid(res.data.aUid);
            setIsReady(true);  // 추가
        })
        .catch(err => {
            console.error('세션 정보를 가져올 수 없습니다:', err);
            setIsReady(true);  // 추가
        });
}, [aUid]);

    useEffect(() => {
        axios.get(`http://localhost:8080/academy/${aUid}`, { withCredentials: true })
        .then(res => {
        setAcademy(res.data);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }, [aUid]);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    const handleDeleteTeacher = (tUid, teacherName) => {
        console.log('삭제할 tUid:', tUid, 'teacherName:', teacherName);
        if (window.confirm(`${teacherName} 강사를 삭제하시겠습니까?`)) {
            axios.delete(`http://localhost:8080/teacher/delete/${tUid}`, { withCredentials: true })
                .then(res => {
                    alert('강사가 삭제되었습니다.');
                    return axios.get(`http://localhost:8080/academy/${aUid}`, { withCredentials: true });
                })
                .then(res => {
                    setAcademy(res.data);
                })
                .catch(err => {
                    console.error('삭제 실패:', err);
                    alert(err.response?.data || '강사 삭제에 실패했습니다.');
                });
        }
    };

    return(
        <main className='academymain'>
            <div className='academycontainer'>
                <div className='academytitle'>
                    <p>학원 정보</p>
                    <div>
                    {isReady && String(loggedInAuid) === String(aUid) && (
                        <button onClick={handleDeleteAcademy}>회원탈퇴</button>
                    )}
                    {isReady && String(loggedInAuid) === String(aUid) && (
                    <a href='/academy-register'>학원 정보 수정하기</a>
                    )}
                    </div>
                </div>
                <div className='academyline'></div>
                <div className='academyinformation'>
                    <img 
                        src={academy.academyImage ? `data:image/jpeg;base64,${academy.academyImage}` : '/images/default-academy.png'} 
                        alt='학원 사진'
                    />
                    <div className='informationdetail'>
                        <p>학원 이름 : {academy.academyName}</p>
                        <div>
                            <div>
                                <p>과목 : {academy.subjectsTitle}</p>
                                <p>전화번호 : {academy.phoneNumber}</p>
                                <p>주소 : {academy.address}</p>
                                <p>위치</p>
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
                    <p>모집 중인 수업</p>
                    {isReady && String(loggedInAuid) === String(aUid) && (
                    <a href='/teacher-register/'>수업 추가 하기</a>
                    )}
                </div>
                <div className='teacher-container'>
                    {academy.teachers && academy.teachers.length > 0 ? (
                        academy.teachers.map((t, index) => (
                            <div key={t.tUid || index} className='card'>
                                <div className='imageboxbox'>
                                    <img 
                                        src={t.teacherImage ? `data:image/jpeg;base64,${t.teacherImage}` : '/images/default-teacher.jpg'} 
                                        alt={t.teacherName} a
                                    />
                                </div>
                                <div className='teacherposition'>
                                    <p>이름 : {t.teacherName}</p>
                                    <p>경력 : {t.career}</p>
                                    <p>과목 : {t.teacherSubject}</p>
                                </div>
                                <div className='teacherexplain'>
                                    <Link to={t.subjectExplain || '#'}>해당 과정이 궁금하시다면 Click!</Link>
                                </div>
                                {String(loggedInAuid) === String(academy.aUid) && (
                                <img
                                    className='deleteimg'
                                    src='/images/delete.png'
                                    alt='삭제'
                                    onClick={() => handleDeleteTeacher(t.tUid, t.teacherName)}
                                />
                            )}
                            </div>
                        ))
                    ) : (
                        <p>등록된 강좌가 없습니다.</p>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Academy;