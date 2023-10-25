import './skills.css';
import { Grid } from '@mui/material';
import Image from 'next/image';

export default function Skills() {
  return (
    <>
      <div className="skills">
        <div className="title">Skills</div>
        <div className="contents">
          <div className="frontendFrame">
            <div className="frontendText">Frontend</div>
            <div className="frontendBorder"></div>
            <Grid className="frontendContent" container spacing={2}>
              <Grid item xs={6} sm={4} md={2}>
                <Image src="/Html.png" alt="Html" width={96} height={96} />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image src="/Css.png" alt="Css" width={96} height={96} />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image
                  src="/JavaScript.png"
                  alt="JavaScript"
                  width={96}
                  height={96}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image
                  src="/TypeScript.png"
                  alt="TypeScript"
                  width={96}
                  height={96}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image src="/React2.png" alt="React2" width={96} height={96} />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image src="/NextJS.png" alt="NextJS" width={96} height={96} />
              </Grid>
            </Grid>
          </div>
          <div className="backendFrame">
            <div className="backendText">Backend</div>
            <div className="backendBorder"></div>
            <Grid className="backendContent" container spacing={2}>
              <Grid item xs={6} sm={4} md={2}>
                <Image
                  src="/JavaScript.png"
                  alt="JavaScript"
                  width={96}
                  height={96}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image
                  src="/TypeScript.png"
                  alt="TypeScript"
                  width={96}
                  height={96}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image src="/NodeJS.png" alt="NodeJS" width={96} height={96} />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image src="/NestJS.png" alt="NestJS" width={96} height={96} />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image
                  src="/MongoDB.png"
                  alt="MongoDB"
                  width={96}
                  height={96}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image src="/MySQL.png" alt="MySQL" width={96} height={96} />
              </Grid>
            </Grid>
          </div>
          <div className="deploymentFrame">
            <div className="deploymentText">Deployment</div>
            <div className="deploymentBorder"></div>
            <Grid className="deploymentContent" container spacing={2}>
              <Grid item xs={6} sm={4} md={2}>
                <Image src="/AWS.png" alt="AWS" width={96} height={96} />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Image src="/Vercel.png" alt="Vercel" width={96} height={96} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
