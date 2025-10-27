import "../css/teacher_register.css";

function TeacherRegister(){
    return(
        <main className="body">
            <div className="container">
                <div className="title">
                    <p>강사 정보 등록</p>
                    <p>강사 추가+</p>
                </div>
                <div className="line"></div>
                <div className="content">
                    <div>
                        <div className="box">
                            <div className="name">
                                <p>성명</p>
                                <input placeholder="강사님의 성명을 입력해 주세요"></input>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <p>경력</p>
                                <input placeholder="간단한 경력을 입력해 주세요"></input>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <p>과목</p>
                                <div className="checkcontainer">
                                    <button>게임 개발</button>
                                    <button>AI 개발</button>
                                    <button>Java</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <p className="recruit">모집 인원</p>
                                <input placeholder="모집 인원 수를 입력해 주세요"></input>
                            </div>
                        </div>
                    </div>

                    <div className="imageupload"><p>사진을 등록해 주세요</p></div>
                </div>
                <div className="subline"></div>
                <div className="content">
                    <div>
                        <div className="box">
                            <div className="name">
                                <p>성명</p>
                                <input placeholder="강사님의 성명을 입력해 주세요"></input>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <p>경력</p>
                                <input placeholder="간단한 경력을 입력해 주세요"></input>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <p>과목</p>
                                <div className="checkcontainer">
                                    <button>게임 개발</button>
                                    <button>AI 개발</button>
                                    <button>Java</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <p className="recruit">모집 인원</p>
                                <input placeholder="모집 인원 수를 입력해 주세요"></input>
                            </div>
                        </div>
                    </div>

                    <div className="imageupload"><p>사진을 등록해 주세요</p></div>
                </div>
                <div className="okcontainer">
                    <button>완료</button>
                </div>
            </div>
        </main>
    );
}

export default TeacherRegister;