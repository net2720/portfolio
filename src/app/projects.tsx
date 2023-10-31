import './projects.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <div className="projects" id="projectsPage">
        <div className="title">Projects</div>
        <div className="projectContainer">
          <div className="projectForm">
            <div className="projectImage">
              <Image
                src="/PortfolioSnapshot.png"
                alt="PortfolioSnapshot"
                width={240}
                height={320}
              />
            </div>
            <div className="line"></div>
            <div className="projectIntroduceForm">
              <div className="projectTitle">포트폴리오 웹사이트</div>
              <div className="projectIntroduce">
                포트폴리오 용도로 제작한 개인 웹 사이트 입니다.
                <br />
                지금 현재 보고 계신 페이지에 해당합니다.
                <br />
                <br />팀 프로젝트 위주로 진행한 프로젝트가 많아 개인 만의
                페이지를 만들어 보기 위하여 제작하였습니다.
                <br />
                <br />
                이번 프로젝트는 개인의 포트폴리오 제작 목적도 있었지만 페이지와
                CSS를 학습하고 더 나은 방향으로 적용하기 위하여 계속 고쳐나갈
                계획입니다.
                <br />
                <br />
                또한 프로젝트가 생길 때마다 커리어와 포트폴리오를 갱신하기
                위해서 계속 업데이트 될 예정입니다.
              </div>
              <div className="stackForm">{/*Grid 쓸 예정*/}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
