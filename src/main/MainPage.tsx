import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '@/main/components/Header.tsx'
import CourceCell from '@/main/components/CourceCell.tsx'
import AccountPage from '@/main/components/AccountPage.tsx'
import '@/main/styles/main-page.scss'
import '@/main/styles/cource.scss'
import '@/main/model/Cource.ts'

interface CoursesResponse {
  courses: Course[]
}

const MainPage = () => {
  const [cources, setCourses] = useState<Course[]>([])
  const [isAccountPage, setIsAccountPage] = useState<boolean>(false)

  const loadCources = async () => {
    axios.get<CoursesResponse>('http://localhost:8080/cources')
      .then(({ data }) => {
        setCourses(data.courses)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // useEffect(() => {
  //   loadCources()
  // }, [])

  const mockCourses = [
    {
      id: 1,
      title: 'Введение в React',
      description: 'Изучите основы React, включая компоненты, хуки и управление состоянием.',
      imageUrl: 'https://img.icons8.com/?size=160&id=asWSSTBrDlTW&format=png'
    },
    {
      id: 2,
      title: 'Продвинутый TypeScript',
      description: 'Освойте возможности TypeScript, такие как дженерики, утилитарные типы и декораторы.',
      imageUrl: 'https://img.icons8.com/?size=160&id=Xf1sHBmY73hA&format=png'
    },
    {
      id: 3,
      title: 'Основы JavaScript',
      description: 'Познакомьтесь с JavaScript, языком веб-разработки, и изучите основные концепции программирования.',
      imageUrl: 'https://img.icons8.com/?size=96&id=oWebJmNFm7y0&format=png'
    },
    {
      id: 4,
      title: 'CSS для начинающих',
      description: 'Научитесь стилизовать сайты с помощью CSS, включая макеты, анимации и адаптивный дизайн.',
      imageUrl: 'https://img.icons8.com/?size=160&id=1044&format=png'
    },
    {
      id: 5,
      title: 'Краткий курс по HTML',
      description: 'Поймите основы HTML и создайте свои первые веб-страницы с нуля.',
      imageUrl: 'https://img.icons8.com/?size=160&id=v8RpPQUwv0N8&format=png'
    },
    {
      id: 6,
      title: 'Full-Stack разработка',
      description: 'Станьте full-stack разработчиком, освоив технологии фронтенда и бэкенда.',
      imageUrl: 'https://img.icons8.com/?size=160&id=94158&format=png'
    },
    {
      id: 7,
      title: 'Python для Data Science',
      description: 'Изучите Python и его библиотеки для анализа данных, визуализации и машинного обучения.',
      imageUrl: 'https://img.icons8.com/?size=160&id=94158&format=png'
    },
    {
      id: 8,
      title: 'SQL и базы данных',
      description: 'Изучите SQL и научитесь эффективно работать с реляционными базами данных.',
      imageUrl: 'https://img.icons8.com/?size=96&id=3764&format=png'
    },
    {
      id: 9,
      title: 'Основы Node.js',
      description: 'Научитесь создавать серверные приложения с использованием Node.js и Express.',
      imageUrl: 'https://img.icons8.com/?size=160&id=94158&format=png'
    },
    {
      id: 10,
      title: 'Основы Vue.js',
      description: 'Узнайте, как создавать динамические пользовательские интерфейсы с Vue.js.',
      imageUrl: 'https://img.icons8.com/?size=160&id=94158&format=png'
    }
  ]

  return (
    <Header isAccountPage={isAccountPage} setIsAccountPage={setIsAccountPage}>
      <div className="main-page-container">
        {
          isAccountPage ? (
            <AccountPage/>
          ) : (
            mockCourses.map((course) => (
              <CourceCell key={course.id} course={course}/>
            ))
          )
        }
      </div>
    </Header>
  )
}

export default MainPage
