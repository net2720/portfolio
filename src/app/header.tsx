'use client';
import './header.css';
import { useState } from 'react';

export default function Header() {
  const [openMenuIconState, setOpenMenuIconState] = useState(false);

  function handlePopUpToggle() {
    setOpenMenuIconState(!openMenuIconState);
  }

  function scrollMoveAndClosePopUp(componentId: string) {
    const element = document.getElementById(componentId);
    if (element) {
      const currentPosition = window.scrollY;
      const targetPosition =
        element.getBoundingClientRect().top + currentPosition - 50;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
    setOpenMenuIconState(false);
  }

  function handleToTheTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div className="header">
        <div className="headerContents">
          <button
            className="headerTitle"
            onClick={handleToTheTop}
          >{`Netpo's portfolio`}</button>
          <div className="menuForm">
            <button
              className="menu"
              onClick={() => {
                scrollMoveAndClosePopUp('aboutMePage');
              }}
            >
              About Me
            </button>
            <button
              className="menu"
              onClick={() => {
                scrollMoveAndClosePopUp('skillsPage');
              }}
            >
              Skills
            </button>
            <button
              className="menu"
              onClick={() => {
                scrollMoveAndClosePopUp('projectsPage');
              }}
            >
              Projects
            </button>
          </div>
          <button
            className={openMenuIconState ? 'menuIconClicked' : 'menuIcon'}
            onClick={handlePopUpToggle}
          >
            <div className="iconText">Menu</div>
          </button>
          {openMenuIconState ? (
            <div className="underSideMenu">
              <button
                className="underSideMenuContents"
                onClick={() => {
                  scrollMoveAndClosePopUp('aboutMePage');
                }}
              >
                About Me
              </button>
              <button
                className="underSideMenuContents"
                onClick={() => {
                  scrollMoveAndClosePopUp('skillsPage');
                }}
              >
                Skills
              </button>
              <button
                className="underSideMenuContents"
                onClick={() => {
                  scrollMoveAndClosePopUp('projectsPage');
                }}
              >
                Projects
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
