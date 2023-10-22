import './about_me.css';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <>
      <div className="aboutMe">
        <h1>Netpo</h1>
        <Grid container spacing={4} className="gridItem">
          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <Image src="/Person.png" alt="person" width={240} height={117} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <Image
                src="/BirthdayCake.png"
                alt="BirthdayCake"
                width={240}
                height={117}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <Image src="/Email.png" alt="Email" width={240} height={117} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <Link href="tel:010-5490-4147" target="_blank">
                <Image src="/Phone.png" alt="Phone" width={240} height={117} />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="formBoxes">
              <Link href="https://github.com/net2720" target="_blank">
                <Image src="/Git.png" alt="Git" width={240} height={117} />
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
