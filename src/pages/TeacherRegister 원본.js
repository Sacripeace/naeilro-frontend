import { useState } from "react";
import "../css/teacher_register.css";

function TeacherRegister(){

    const [selected, setSelected] = useState(null);

    return(
        <main className="teacherbody">
            <div className="teachercontainer">
                <div className="teachertitle">
                    <p>강사 정보 등록</p>
                    <button>등록</button>
                </div>
                <div className="teacherline"></div>
                <div className="teachercontent">
                    <div>
                        <div className="teacherbox">
                            <div className="teachername">
                                <p>성명</p>
                                <input placeholder="강사님의 성명을 입력해 주세요"></input>
                            </div>
                        </div>
                        <div className="teacherbox">
                            <div className="teachername">
                                <p>경력</p>
                                <input placeholder="간단한 경력을 입력해 주세요"></input>
                            </div>
                        </div>
                        <div className="teacherbox">
                            <div className="teachername">
                                <p className="teacherrecruit">모집 인원</p>
                                <input placeholder="모집 인원 수를 입력해 주세요"></input>
                            </div>
                        </div>  
                        <div className="teacherbox">
                            <div className="teachername">
                                <p>과목</p>
                                <div className="teachercheckcontainer">


                                    {["게임 개발", "AI 개발", "Java"].map((subject, index) => (
                                        <button
                                        key={index}
                                        className={selected === index ? "active" : ""}
                                        onClick={() => setSelected(prev => (prev === index ? null : index))}
                                        >
                                        {subject}
                                        </button>


                                    ))}

                                    
                                </div>
                            </div>
                        </div>
                        <div className="teacherbox">
                            <div className="teachername">
                                <p className="teacherrecruit">과목 설명</p>
                                <input placeholder="해당 과목 커리큘럼 링크를 달아주세요"></input>
                            </div>
                        </div>
                    </div>

                    <div className="teacherimageupload"><p>사진을 등록해 주세요</p></div>
                
                </div>
            </div>
        </main>
    );
}

export default TeacherRegister;