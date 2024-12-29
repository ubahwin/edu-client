import React from 'react'
import '@/main/styles/account-page.scss'

const AccountPage = () => {
  return (
    <div className="account-container">
      <div className="account-info">
        <div className="account-info-cell">
          <div className="account-info-title">Имя:</div>
          <div className="account-info-description">Иван</div>
        </div>

        <div className="account-info-cell">
          <div className="account-info-title">Фамилия:</div>
          <div className="account-info-description">Вдовин</div>
        </div>

        <div className="account-info-cell">
          <div className="account-info-title">e-mail:</div>
          <div className="account-info-description">ivan@mail.ru</div>
        </div>
      </div>
      <div className="account-button-exit">Выйти</div>
    </div>
  )
}

export default AccountPage
