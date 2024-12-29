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

  useEffect(() => {
    loadCources()
  }, [])

  const mockCourses: Course[] = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React, including components, hooks, and state management.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/swag-wallpaper?seed=${Math.random()}`
    },
    {
      id: 2,
      title: 'Advanced TypeScript',
      description: 'Master TypeScript features like generics, utility types, and decorators.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 3,
      title: 'JavaScript Essentials',
      description: 'Get started with JavaScript, the language of the web, and learn core programming concepts.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/swag-wallpaper?seed=${Math.random()}`
    },
    {
      id: 4,
      title: 'CSS for Beginners',
      description: 'Learn how to style websites with CSS, including layouts, animations, and responsive design.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 5,
      title: 'HTML Crash Course',
      description: 'Understand the fundamentals of HTML and build your first web pages from scratch.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/swag-wallpaper?seed=${Math.random()}`
    },
    {
      id: 6,
      title: 'Full-Stack Development',
      description: 'Become a full-stack developer by mastering front-end and back-end technologies.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 7,
      title: 'Python for Data Science',
      description: 'Learn Python and its libraries for data analysis, visualization, and machine learning.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 8,
      title: 'SQL and Databases',
      description: 'Explore SQL and learn how to interact with relational databases efficiently.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/swag-wallpaper?seed=${Math.random()}`
    },
    {
      id: 9,
      title: 'Node.js Fundamentals',
      description: 'Learn how to build server-side applications using Node.js and Express.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 10,
      title: 'Vue.js Basics',
      description: 'Discover how to build dynamic user interfaces with Vue.js.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 11,
      title: 'DevOps Essentials',
      description: 'Understand the principles of DevOps and learn tools like Docker and Kubernetes.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 12,
      title: 'Cybersecurity Fundamentals',
      description: 'Learn how to protect systems and data from cyber threats and vulnerabilities.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 13,
      title: 'Artificial Intelligence',
      description: 'Get an introduction to AI concepts and explore real-world applications.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 14,
      title: 'React Native for Mobile Apps',
      description: 'Build cross-platform mobile apps using React Native.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/swag-wallpaper?seed=${Math.random()}`
    },
    {
      id: 15,
      title: 'UX/UI Design Basics',
      description: 'Learn how to create intuitive and user-friendly designs for web and mobile.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/random-image?seed=${Math.random()}`
    },
    {
      id: 16,
      title: 'Blockchain Development',
      description: 'Dive into blockchain technology and build decentralized applications.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/swag-wallpaper?seed=${Math.random()}`
    },
    {
      id: 17,
      title: 'Machine Learning with Python',
      description: 'Understand machine learning algorithms and implement them using Python.',
      imageUrl: `https://random-image-pepebigotes.vercel.app/api/swag-wallpaper?seed=${Math.random()}`
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
              <CourceCell course={course}/>
            ))
          )
        }
      </div>
    </Header>
  )
}

export default MainPage
