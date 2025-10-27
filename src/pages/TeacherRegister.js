import "../css/teacher_register.css";

function TeacherRegister(){
    return(
        <main className="teacherbody">
            <div className="teachercontainer">
                <div className="teachertitle">
                    <p>강사 정보 등록</p>
                    <p>강사 추가+</p>
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
                                <p>과목</p>
                                <div className="teachercheckcontainer">
                                    <button>게임 개발</button>
                                    <button>AI 개발</button>
                                    <button>Java</button>
                                </div>
                            </div>
                        </div>
                        <div className="teacherbox">
                            <div className="teachername">
                                <p className="teacherrecruit">모집 인원</p>
                                <input placeholder="모집 인원 수를 입력해 주세요"></input>
                            </div>
                        </div>
                    </div>

                    <div className="teacherimageupload"><p>사진을 등록해 주세요</p></div>
                </div>
                <div className="teachersubline"></div>
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
                                <p>과목</p>
                                <div className="teachercheckcontainer">
                                    <button>게임 개발</button>
                                    <button>AI 개발</button>
                                    <button>Java</button>
                                </div>
                            </div>
                        </div>
                        <div className="teacherbox">
                            <div className="teachername">
                                <p className="teacherrecruit">모집 인원</p>
                                <input placeholder="모집 인원 수를 입력해 주세요"></input>
                            </div>
                        </div>
                    </div>

                    <div className="teacherimageupload"><p>사진을 등록해 주세요</p></div>
                </div>
                <div className="teacherokcontainer">
                    <button>완료</button>
                </div>
            </div>
        </main>
    );
}

export default TeacherRegister;