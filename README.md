# 🎓 Naillo (내일로) - 학원 및 강사 매칭 플랫폼

> **"배움을 통해 내일로 나아가는 플랫폼"**
> **Learn today, Lead Tomorrow.**

**Naillo**는 수강생에게는 맞춤형 학원 정보를 제공하고, 학원 관리자에게는 학원 및 강사 정보를 효율적으로 관리할 수 있도록 돕는 웹 애플리케이션입니다.

---

## 📋 목차
1. [프로젝트 소개](#-프로젝트-소개)
2. [주요 기능](#-주요-기능)
3. [기술 스택](#-기술-스택)
4. [프로젝트 구조](#-프로젝트-구조)
5. [설치 및 실행 방법](#-설치-및-실행-방법)
6. [API 연동 정보](#-api-연동-정보)

---

## 🚀 프로젝트 소개
사용자는 지역과 관심 과목을 기반으로 학원을 검색할 수 있으며, 학원 관리자는 회원가입 후 자신의 학원 정보를 등록하고 소속 강사들의 프로필과 커리큘럼을 관리할 수 있습니다.

---

## ✨ 주요 기능

### 1. 사용자 (수강생) 기능
- **메인 페이지 (`Homepage`)**
  - **배너 슬라이드**: 주요 공지사항 및 정부 지원 사업 링크 배너 (Swiper 활용)
  - **학원 검색**: 지역(천호, 종로 등) 및 과목(Java, AI, 게임 개발 등) 필터링 시스템
  - **학원 목록**: 조건에 맞는 학원 카드 리스트 출력 및 '더보기' 기능
- **학원 상세 정보 (`Academy`)**
  - 학원 기본 정보 (이름, 전화번호, 주소) 확인
  - **위치 정보**: 구글 맵(Google Maps) Embed API를 통한 학원 위치 시각화
  - **강사 목록**: 소속 강사 프로필, 경력, 담당 과목 및 커리큘럼 링크 확인

### 2. 관리자 (학원 관계자) 기능
- **인증 시스템 (`Auth`)**
  - **회원가입**: 아이디(5~20자) 및 비밀번호(영문/숫자/특수문자 8자 이상) 유효성 검사
  - **로그인/로그아웃**: 세션 기반 인증 및 Context API(`AuthContext`)를 통한 전역 상태 관리
  - **계정 찾기**: 사업자명, 전화번호, 이메일을 이용한 아이디 찾기 및 비밀번호 재설정
- **데이터 관리**
  - **학원 정보 등록/수정**: 학원명, 연락처, 주소 등록 및 대표 이미지 업로드 (미리보기 지원)
  - **강사 관리**: 강사 사진, 성명, 경력, 과목 정보 등록 및 삭제 기능
  - **회원 탈퇴**: 본인 확인 후 계정 및 데이터 삭제 처리

---

## 🛠 기술 스택

| 분류 | 기술 | 비고 |
| :-- | :-- | :-- |
| **Language** | JavaScript (ES6+) | |
| **Framework** | React.js | Create React App |
| **Routing** | React Router v6 | 페이지 이동 (`useNavigate`, `useParams`) |
| **State Mngt** | Context API | 로그인 상태 관리 (`AuthContext`) |
| **HTTP Client** | Axios | REST API 통신 (`withCredentials: true`) |
| **UI Library** | Swiper | 메인 배너 슬라이더 구현 |
| **Styling** | CSS3 | 컴포넌트별 CSS 모듈화 |

---

## 📂 프로젝트 구조

```
src/
├── components/
│   ├── Academy.js           # 학원 상세 페이지 (정보 조회, 강사 삭제, 탈퇴)
│   ├── AcademyRegister.js   # 학원 정보 등록 및 수정 (이미지 업로드)
│   ├── FindMyId.js          # 관리자 아이디 찾기
│   ├── Homepage.js          # 메인 페이지 (검색, 배너, 리스트)
│   ├── Login.js             # 관리자 로그인
│   ├── RePassword.js        # 비밀번호 재설정
│   ├── Signup.js            # 관리자 회원가입
│   └── TeacherRegister.js   # 강사 등록 페이지
├── context/
│   └── AuthContext.js       # 인증 상태 관리 Provider
├── css/                     # 스타일 시트 폴더
│   ├── academy.css
│   ├── academy_register.css
│   ├── login_Style.css
│   ├── teacher_register.css
│   └── Homepage.css
└── App.js                   # 라우팅 설정
```

---

## 💻 설치 및 실행 방법

이 프로젝트를 로컬 환경에서 실행하려면 **Node.js**가 설치되어 있어야 합니다.

### 1. 저장소 클론 (Clone)
```bash
git clone https://github.com/your-username/naillo-project.git
cd naillo-project
```

### 2. 패키지 설치 (Install Dependencies)
```bash
npm install
```

### 3. 프로젝트 실행 (Run)
```bash
npm start
```

### 4. 화면 접속
브라우저 주소창에 아래 주소를 입력하세요.
- `http://localhost:3000`

---

## 🔌 API 연동 정보

| Method | Endpoint | 설명 |
| --- | --- | --- |
| **GET** | `/academies` | 전체 학원 목록 조회 (메인 페이지) |
| **GET** | `/academy/{id}` | 특정 학원 상세 정보 조회 |
| **GET** | `/session` | 현재 로그인된 세션 정보 확인 |
| **POST** | `/login` | 관리자 로그인 |
| **POST** | `/signup` | 관리자 회원가입 |
| **POST** | `/findmyid` | 관리자 아이디 찾기 |
| **POST** | `/repassword` | 비밀번호 재설정 |
| **PATCH** | `/academy/upload` | 학원 정보 수정 (이미지 포함, FormData) |
| **POST** | `/teacher` | 강사 정보 등록 (이미지 포함, FormData) |
| **DELETE** | `/teacher/delete/{id}` | 특정 강사 삭제 |
| **DELETE** | `/academy/self` | 관리자 회원 탈퇴 |

---

## 📝 라이선스
이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

## 👤 개발자 정보
- **프로젝트명**: Naillo (내일로)
- **개발 기간**: [프로젝트 기간을 입력하세요]
- **GitHub**: [GitHub 링크를 입력하세요]
- **Contact**: [이메일을 입력하세요]