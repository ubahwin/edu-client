import React, { ReactNode } from 'react'
import '@/main/styles/header.scss'
import person from '@assets/person.png'
import cap from '@assets/study.png'

interface HeaderProps {
  isAccountPage: boolean;
  setIsAccountPage: (newValue: boolean) => void;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ isAccountPage, setIsAccountPage, children }) => {
  return (
    <>
      <header className="header-container">
        <h1 className="title">EduPlatform</h1>

        <div className="header-buttons">
          <div className="header-button" onClick={() => setIsAccountPage(false)}>
            <img src={cap}/>
            <span>Курсы</span>
            {isAccountPage ? null : <div className="header-button-divider"></div>}
          </div>

          <div className="header-button" onClick={() => setIsAccountPage(true)}>
            <img src={person}/>
            <span>Аккаунт</span>
            {isAccountPage ? <div className="header-button-divider"></div> : null}
          </div>
        </div>
      </header>

      <div className="pre-header">
        {children}
      </div>
    </>
  )
}

export default Header
