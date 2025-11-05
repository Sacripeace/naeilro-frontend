import { useState } from "react";
import "../css/teacher_register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TeacherRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    teacherName: "",
    career: "",
    capacity: "",
    subjectExplain: "",
  });

  const subjects = ["게임 개발", "AI 개발", "Java"];
  const [selected, setSelected] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // ✅ 현재 활성화된 메뉴 상태 (강사 or 학원)
  const [activeMenu, setActiveMenu] = useState("teacher");

  // ✅ 입력 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ 이미지 처리
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // ✅ 등록 처리
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("teacherName", form.teacherName);
    formData.append("career", form.career);
    formData.append("capacity", form.capacity);
    formData.append("subject", subjects[selected] || "");
    formData.append("subjectExplain", form.subjectExplain);
    if (imageFile) formData.append("image", imageFile);

    try {
      await axios.post("http://localhost:8080/api/teacher", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("강사 등록 완료!");
    } catch (error) {
      console.error("등록 실패:", error);
      alert("등록 실패");
    }
  };

  return (
    <main className="teacherbody">
      <div className="teachercontainer">

        {/* 🔷 상단 메뉴 버튼 영역 */}
        <div className="info_submit_box">
          <div
            className={`info_submit_btn ${activeMenu === "academy" ? "active" : ""}`}
            onClick={() => {
              setActiveMenu("academy");
              navigate("/academy-register");
            }}
          >
            학원 정보 등록
          </div>
          <div
            className={`info_submit_btn ${activeMenu === "teacher" ? "active" : ""}`}
            onClick={() => {
              setActiveMenu("teacher");
              navigate("/teacher-register");
            }}
          >
            강사 정보 등록
          </div>
          <button className="submit_btn" onClick={handleSubmit}>
            등록
          </button>
        </div>

        <hr className="up_line"></hr>

        {/* <div className="teacherline"></div> */}

        {/* 🔶 강사 등록 내용 */}
        <div className="teacher_register_outbox">
          <div>
            <div className="input_title_outbox">
              <div className="text_lable">성명</div>
              <div className="input_title">
                <input
                  type="text"
                  name="teacherName"
                  value={form.teacherName}
                  onChange={handleChange}
                  placeholder="강사님의 성명을 입력해 주세요."
                  className="input_box_css"
                />
              </div>
            </div>

            <div className="input_title_outbox">
              <div className="text_lable">경력</div>
              <div className="input_title">
                <input
                  type="text"
                  name="career"
                  value={form.career}
                  onChange={handleChange}
                  placeholder="간단한 경력을 입력해 주세요."
                  className="input_box_css"
                />
              </div>
            </div>

            <div className="input_title_outbox">
              <div className="text_lable">모집인원</div>
              <div className="input_title">
                <input
                  type="text"
                  name="capacity"
                  value={form.capacity}
                  onChange={handleChange}
                  placeholder="모집 인원수를 입력해 주세요."
                  className="input_box_css"
                />
              </div>
            </div>

            <div className="input_title_outbox">
              <div className="text_lable">과목</div>
              <div>
                <div className="subject_title">
                  {subjects.map((subject, index) => (
                    <button
                      key={index}
                      className={`subject-btn ${
                        selected === index ? "active" : ""
                      }`}
                      onClick={() =>
                        setSelected((prev) => (prev === index ? null : index))
                      }
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="input_title_outbox">
              <div className="text_lable">과목설명</div>
              <div className="input_title">
                <input
                  type="text"
                  name="subjectExplain"
                  value={form.subjectExplain}
                  onChange={handleChange}
                  placeholder="해당 과목 커리큘럼 링크를 입력해 주세요."
                  className="input_box_css"
                />
              </div>
            </div>
          </div>

          {/* 🔷 이미지 업로드 */}
          <div
            className="image_upload_box"
            onClick={() => document.getElementById("imageInput").click()}
            style={{ cursor: "pointer" }}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="강사 사진 미리보기"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "450px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <p>강사님 사진을 등록해주세요.</p>
            )}
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
        </div>

        <hr className="down_line"></hr>

        {/* <div className="teacherline"></div> */}
      </div>
    </main>
  );
}

export default TeacherRegister;