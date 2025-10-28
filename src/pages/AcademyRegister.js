import { Link } from 'react-router-dom';
import '../css/academy_register.css';

function AcademyRegister(){
    return(
        <main className='academybody'>
            <div className='academycontainer'>
                <div className="academytitle">
                    <p>학원 정보 등록</p>
                    <Link to="/teacher-register">강사 정보 등록</Link>
                </div>
                <div className='academyline'></div>

                <p className='academypic'>학원 사진</p>
                <div className='academyimg'>이미지를 등록해 주세요.</div>

                <div className='academysubline'></div>

                <div className='academycontent'>
                    <div>
                        <div>
                            <p>학원명</p>
                            <input placeholder='학원명을 입력해 주세요.'></input>
                        </div>
                        <div>
                            <p>과목명</p>
                            <input placeholder='수업하실 과목을 입력해 주세요.'></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>연락처</p>
                            <input placeholder='연락처를 입력해 주세요.'></input>
                        </div>
                        <div>
                            <p className='addressmargin'>주소</p>
                            <input placeholder='학원의 주소를 입력해 주세요.'></input>
                        </div>
                    </div>   
                </div>

                <div className='academydescription'>
                    <p>소개</p>
                    <input placeholder='학원에 대한 간단한 소개글을 작성해주세요.'></input>
                </div>

                <div className="academyokcontainer">
                    <button>완료</button>
                </div>
            </div>
            


        </main>
    );
}

export default AcademyRegister;