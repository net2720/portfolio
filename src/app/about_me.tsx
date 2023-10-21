import './about_me.css';
import { Grid } from '@mui/material';

export default function AboutMe() {
  return (
    <>
      <div className="aboutMe">
        <h1>Netpo</h1>
        <Grid container spacing={4} className="gridItem">
          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <div className="formName">이름</div>
              <div className="formValue">노은탁</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <div className="formName">생년월일</div>
              <div className="formValue">1990.12.16</div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <div className="formName">이메일</div>
              <div className="formValue">popcron13@gmail.com</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <div className="formName">연락처</div>
              <div className="formValue">010-5490-4147</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <div className="formName">Git</div>
              <div className="formValue">github.com/net2720</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
