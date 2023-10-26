'use client';
import './header.css';
import { useState } from 'react';

export default function Header() {
  //const [menuHover, setMenuHover] = useState(false);
  const [openMenuIconState, setOpenMenuIconState] = useState(false);

  function handlePopUpToggle() {
    setOpenMenuIconState(!openMenuIconState);
  }

  function scrollMoveAndClosePopUp() {
    setOpenMenuIconState(false);
  }
  return (
    <>
      <div className="header">
        <div className="headerContents">
          <div className="headerTitle">{`Netpo's portfolio`}</div>
          <div className="menuForm">
            <div className="menu">About Me</div>
            <div className="menu">Skills</div>
            <div className="menu">Projects</div>
          </div>
          <button className="menuIcon" onClick={handlePopUpToggle}>
            <div className="iconText">Menu</div>
          </button>
          {openMenuIconState ? (
            <div>
              <div onClick={scrollMoveAndClosePopUp}>About Me</div>
              <div onClick={scrollMoveAndClosePopUp}>Skills</div>
              <div onClick={scrollMoveAndClosePopUp}>Projects</div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
