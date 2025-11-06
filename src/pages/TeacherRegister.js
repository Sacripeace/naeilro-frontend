import { useState } from "react";
import "../css/teacher_register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TeacherRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    teacherName: "",
    career: "",
    teacherSubject: "", // ✅ capacity → teacherSubject
    subjectExplain: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
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
    // 필수 입력 검증
    if (!form.teacherName.trim()) {
      alert("성명을 입력해 주세요.");
      return;
    }
    if (!form.career.trim()) {
      alert("경력을 입력해 주세요.");
      return;
    }
    if (!form.teacherSubject.trim()) {
      alert("과목을 입력해 주세요.");
      return;
    }
    if (!form.subjectExplain.trim()) {
      alert("과목설명을 입력해 주세요.");
      return;
    }
    if (!imageFile) {
      alert("강사님 사진을 등록해 주세요.");
      return;
    }

    try {
      // FormData 생성
      const formData = new FormData();
      formData.append("teacherName", form.teacherName);
      formData.append("career", form.career);
      formData.append("teacherSubject", form.teacherSubject); // ✅ 수정
      formData.append("subjectExplain", form.subjectExplain);
      formData.append("capacity", ""); // ✅ 백엔드에서 요구하는 필드 (빈 값)
      formData.append("aUid", "1"); // ✅ 임시로 1 (세션에서 가져와야 함)
      formData.append("teacherImage", imageFile);
      // 강사 정보 등록
      await axios.post("http://localhost:8080/teacher", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      alert("강사 등록 완료!");
      
      // 폼 초기화
      setForm({
        teacherName: "",
        career: "",
        teacherSubject: "",
        subjectExplain: "",
      });
      setImageFile(null);
      setPreviewUrl(null);
      
    } catch (error) {
      console.error("등록 실패:", error);
      console.error("에러 상세:", error.response);

      if (error.response) {
        const errorMessage =
          typeof error.response.data === "string"
            ? error.response.data
            : error.response.data?.message || "등록 실패";

        if (error.response.status === 401) {
          alert("로그인이 필요합니다.");
          navigate("/login");
        } else {
          alert(errorMessage);
        }
      } else if (error.request) {
        alert("서버와 연결할 수 없습니다.");
      } else {
        alert("요청 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <main className="teacherbody">
      <div className="teachercontainer">
        {/* 🔷 상단 메뉴 버튼 영역 */}
        <div className="info_submit_box">
          <div
            className={`info_submit_btn ${
              activeMenu === "academy" ? "active" : ""
            }`}
            onClick={() => {
              setActiveMenu("academy");
              navigate("/academy-register");
            }}
          >
            학원 정보 등록
          </div>
          <div
            className={`info_submit_btn ${
              activeMenu === "teacher" ? "active" : ""
            }`}
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
              <div className="text_lable">과목</div>
              <div className="input_title">
                <input
                  type="text"
                  name="teacherSubject"
                  value={form.teacherSubject}
                  onChange={handleChange}
                  placeholder="수업하실 과목을 입력해 주세요."
                  className="input_box_css"
                />
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
      </div>
    </main>
  );
}

export default TeacherRegister;