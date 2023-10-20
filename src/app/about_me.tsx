import './about_me.css';

export default function AboutMe() {
  return (
    <>
      <div className="aboutMe">
        <h1>Netpo</h1>
        <div>
          <div className="form">
            <div className="formName">이름</div>
            <div className="formValue">노은탁</div>
          </div>
          <div className="form">
            <div className="formName">생년월일</div>
            <div className="formValue">199.12.16</div>
          </div>
        </div>
        <div>
          <div className="form">
            <div className="formName">이메일</div>
            <div className="formValue">popcron13@gmail.com</div>
          </div>
          <div className="form">
            <div className="formName">연락처</div>
            <div className="formValue">010-5490-4147</div>
          </div>
          <div className="form">
            <div className="formName">Git</div>
            <div className="formValue">github.com/net2720</div>
          </div>
        </div>
      </div>
    </>
  );
}
