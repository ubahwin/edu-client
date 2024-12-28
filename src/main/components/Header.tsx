import React from 'react'
import '@/main/styles/header.scss'
import person from '@assets/person.png'
import cap from '@assets/study.png'

const Header = ({ children }) => {
  return (
    <>
      <header className="header-container">
        <h1 className="title">EduPlatform</h1>
        {/*<h2 className="subtitle">Образовательная платформа</h2>*/}

        <div className="header-buttons">
          <div className="header-button">
            <img src={cap}/>
            <span>Курсы</span>
          </div>

          <div className="header-button">
            <img src={person}/>
            <span>Аккаунт</span>
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
