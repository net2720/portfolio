import './footer.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Link
          className="footerContents"
          href="https://github.com/net2720"
          target="_blank"
        >
          <Image src="/GitHub.png" alt="GitHub" width={64} height={64} />
        </Link>
        <Link
          className="footerContents"
          href="tel:010-5490-4147"
          target="_blank"
        >
          <Image src="/Phone2.png" alt="Phone2" width={64} height={64} />
        </Link>
      </div>
    </>
  );
}
