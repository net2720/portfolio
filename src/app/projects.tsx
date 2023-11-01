import './projects.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setScreenWidth(window.innerWidth);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let portfolioSnapshot = '/PortfolioSnapshotPC.png';
  let iloveRefactor = '/iloveRefactorPC.png';
  let ilove = '/ilovePC.png';
  let modakbul = '/modakbulPC.png';
  let imageWidth = 240;
  let imageHeight = 320;

  if (screenWidth < 900) {
    portfolioSnapshot = '/PortfolioSnapshotMobile.png';
    iloveRefactor = '/iloveRefactorMobile.png';
    modakbul = '/modakbulMobile.png';
    ilove = '/iloveMobile.png';
    imageWidth = 320;
    imageHeight = 240;
  }

  return (
    <>
      <div className="projects" id="projectsPage">
        <div className="title">Projects</div>
        <div className="projectContainer">
          <div className="projectForm">
            <div className="projectImage">
              <Link
                href="https://portfolio-pi-ruddy-39.vercel.app/"
                target="_blank"
              >
                <Image
                  src={portfolioSnapshot}
                  alt="portfolioSnapshot"
                  width={imageWidth}
                  height={imageHeight}
                />
              </Link>
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
              <div className="stackForm">
                <div className="stackTitle">사용한 기술</div>
                <div className="stacks">
                  NextJS, TypeScript, HTML, CSS, Vercel
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectForm">
            <div className="projectImage">
              <Link href="https://tdcnext.vercel.app/" target="_blank">
                <Image
                  src="/tdcNextSnapshot.png"
                  alt="tdcNext"
                  width={imageWidth}
                  height={imageHeight}
                />
              </Link>
            </div>
            <div className="line"></div>
            <div className="projectIntroduceForm">
              <div className="projectTitle">NextJS Todo-list</div>
              <div className="projectIntroduce">
                NextJS를 익히기 위해서 제작한 토이프로젝트입니다.
                <br />
                <br />
                NextJS 환경에서는 페이지와 서버를 한번에 구현할 수 있다는 점을
                이용하여 DB와 연동하여 스스로의 TASK를 정하기 위해 제작중입니다.
                <br />
                <br />
                해당 프로젝트는 완성을 목표로 하기 보다는 제 개인이 언제든지
                편하게 사용하기 위하여 계속 업데이트 될 예정입니다.
                <br />
                <br />
                현재 AJAX 통신과 DB 연동은 마친 상태이며 추후 AWS를 이용하여 더
                원활하게 바꿀 계획이며 CSS를 수정하여 UI를 더 보기좋게 바꿀
                예정입니다.
              </div>
              <div className="stackForm">
                <div className="stackTitle">사용한 기술</div>
                <div className="stacks">
                  NextJS, TypeScript, HTML, MySQL, Vercel
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectForm">
            <div className="projectImage">
              <Link href="http://125.188.246.81:3000" target="_blank">
                <Image
                  src={iloveRefactor}
                  alt="iloveRefactor"
                  width={imageWidth}
                  height={imageHeight}
                />
              </Link>
            </div>
            <div className="line"></div>
            <div className="projectIntroduceForm">
              <div className="projectTitle">아이사랑 리팩토링</div>
              <div className="projectIntroduce">
                부트캠프 당시 2차 프로젝트 이후 2인 협업하여 리팩토링한 프로젝트
                입니다.
                <br />
                <br />
                기존에 페이지 부분을 JavaScript로 제작하였기 때문에 우선적으로
                TypeScript를 채택하여 일부 페이지 리팩토링을 진행하였습니다.
                <br />
                <br />
                기존 프로젝트 당시 Back-end Part를 담당하였기 때문에 페이지를
                구현하기 위함이 가장 컸으며 React를 익히고 적용하는 데 초점을
                두었습니다.
                <br />
                <br />
                담당한 페이지는 메인 페이지, 병원 정보 페이지, 내 정보 페이지를
                담당하였으며 일부 서버 코드 변경 및 개인 DB를 이용 중입니다.
              </div>
              <div className="stackForm">
                <div className="stackTitle">사용한 기술</div>
                <div className="stacks">
                  HTML, CSS, React, TypeScript, NestJS, MySQL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectForm">
            <div className="projectImage">
              <Link href="http://125.188.246.81:3000" target="_blank">
                <Image
                  src={ilove}
                  alt="ilove"
                  width={imageWidth}
                  height={imageHeight}
                />
              </Link>
            </div>
            <div className="line"></div>
            <div className="projectIntroduceForm">
              <div className="projectTitle">아이사랑</div>
              <div className="projectIntroduce">
                부트캠프 당시 2차 프로젝트 완성본입니다.
                <br />
                <br />
                병원 검색 및 병원 진료 정보 그리고 예약을 관리하는 웹사이트를
                기획하여 제작된 프로젝트입니다.
                <br />
                <br />
                당시 Back-end Part중 User / Admin / Kid / Review API 구현 및
                전체 파트 API별 부하 테스트를 담당하였습니다.
                <br />
                <br />
                기존 Node.js와 Express를 벗어나서 NestJS라는 새로운 framework를
                사용할 수 있는 계기가 되었고 PrismaORM 그리고 SQL을 사용하는 DB
                등 모든 것이 저에게 있어서는 새로운 시도였습니다.
              </div>
              <div className="stackForm">
                <div className="stackTitle">사용한 기술</div>
                <div className="stacks">
                  TypeScript, NestJS, PrismaORM, MySQL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectForm">
            <div className="projectImage">
              <Link href="https://github.com/net2720/modakbul" target="_blank">
                <Image
                  src={modakbul}
                  alt="modakbul"
                  width={imageWidth}
                  height={imageHeight}
                />
              </Link>
            </div>
            <div className="line"></div>
            <div className="projectIntroduceForm">
              <div className="projectTitle">모닥불 쇼핑몰</div>
              <div className="projectIntroduce">
                부트캠프 당시 1차 프로젝트 완성본입니다.
                <br />
                <br />
                당시 Back-end Part중 Cart API 구현을 담당하였습니다.
                <br />
                <br />
                JavaScript를 활용한 첫 프로젝트가 되었습니다. express를 이용하여
                back-end API를 구현하였고 MongoDB를 활용하여 Data를 참조하여
                활용하는 방법에 대해서 익힐 수 있었습니다.
                <br />
                <br />
                짧은 제작 기간과 첫 프로젝트 당시의 지식의 한계로 많은 아쉬움과
                쇄신의 계기가 된 프로젝트 입니다. 현 링크는 프로젝트 이후 간단한
                리팩토링을 거친 부분을 링크해 두었습니다.
              </div>
              <div className="stackForm">
                <div className="stackTitle">사용한 기술</div>
                <div className="stacks">JavaScript, Node.js, MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
