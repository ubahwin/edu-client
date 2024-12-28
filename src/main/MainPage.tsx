import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '@/main/components/Header.tsx'

interface CoursesResponse {
  courses: string[]
}

const MainPage = () => {
  const [cources, setCourses] = useState<string[]>([])

  const loadCources = async () => {
    axios.get<CoursesResponse>('http://localhost:8080/cources')
      .then(({ data }) => {
        setCourses(data.courses)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    loadCources()
  }, [])

  return (
    <Header>
      <div className="main-page-container">

        <div>HELLO</div>
      </div>
    </Header>
  )
}

export default MainPage
