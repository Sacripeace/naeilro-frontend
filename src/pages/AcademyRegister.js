import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/academy_register.css";
import axios from "axios";

function AcademyRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    academyName: "",
    subject: "",
    phoneNumber: "",
    address: ""
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [activeTab, setActiveTab] = useState("academy");

  // ✅ 회원가입 시 저장된 학원명/연락처 불러오기
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios.get("http://localhost:8080/api/member/profile", {
      headers: { Authorization: token },
    })
      .then((res) => {
        setForm((prev) => ({
          ...prev,
          academyName: res.data.academyName || "",
          phoneNumber: res.data.phoneNumber || "",
        }));
      })
      .catch((err) => {
        console.error("학원명/연락처 불러오기 실패", err);
      });
  }, []);

  // ✅ 입력 핸들링
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ 이미지 업로드
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // ✅ 등록 제출
  const handleSubmit = async () => {
    console.log("=== handleSubmit 시작 ===");
    console.log("imageFile:", imageFile);
    console.log("form:", form);

    // 이미지 검증
    if (!imageFile) {
      alert("학원 사진을 등록해주세요.");
      return;
    }

    // 필수 입력 검증
    if (!form.academyName || !form.subject || !form.phoneNumber || !form.address) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);  // "image" → "file"
    formData.append("academyName", form.academyName);
    formData.append("subjects", form.subject);  // "subject" → "subjects"
    formData.append("phoneNumber", form.phoneNumber);
    formData.append("address", form.address);

    console.log("=== FormData 확인 ===");
    for (let [key, value] of formData.entries()) {
      console.log(key, ":", value);
    }

    try {
      const response = await axios.patch("http://localhost:8080/academy/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,  // 세션 전송
      });
      
      console.log("성공:", response.data);
      alert("학원 정보 수정 완료!");
    
      navigate(`/teacher-register`);
    } catch (error) {
      console.error("=== 에러 상세 ===");
      console.error("전체 에러:", error);
      console.error("응답 데이터:", error.response?.data);
      console.error("응답 상태:", error.response?.status);
      alert(error.response?.data || "등록 실패");
    }
  };

  return (
    <main className="teacherbody">
      <div className="teachercontainer">
        {/* 상단 탭 네비게이션 */}
        <div className="info_submit_box">
          <div
            className={`info_submit_btn ${activeTab === "academy" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("academy");
              navigate("/academy-register");
            }}
          >
            학원 정보 등록
          </div>
          <div
            className={`info_submit_btn ${activeTab === "teacher" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("teacher");
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

        <div className="teacher_register_outbox">
          <div>
            {/* 학원명 */}
            <div className="input_title_outbox">
              <div className="text_lable">학원명</div>
              <div className="input_title">
                <input
                  type="text"
                  name="academyName"
                  value={form.academyName}
                  onChange={handleChange}
                  className="input_box_css"
                  placeholder="학원명을 입력해 주세요."
                />
              </div>
            </div>

            {/* 과목 */}
            <div className="input_title_outbox">
              <div className="text_lable">과목</div>
              <div className="input_title">
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="input_box_css"
                  placeholder="과목명을 입력해 주세요."
                />
              </div>
            </div>

            {/* 연락처 */}
            <div className="input_title_outbox">
              <div className="text_lable">연락처</div>
              <div className="input_title">
                <input
                  type="text"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="input_box_css"
                  placeholder="연락처를 입력해 주세요."
                />
              </div>
            </div>

            {/* 주소 */}
            <div className="input_title_outbox">
              <div className="text_lable">주소</div>
              <div className="input_title">
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="input_box_css"
                  placeholder="주소를 입력해 주세요."
                />
              </div>
            </div>
          </div>

          {/* 이미지 등록 */}
          <div
            className="image_upload_box"
            onClick={() => document.getElementById("imageInput").click()}
            style={{ cursor: "pointer" }}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="학원 사진 미리보기"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "450px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <p>학원 사진을 등록해 주세요.</p>
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

export default AcademyRegister;