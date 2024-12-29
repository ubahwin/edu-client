import React from 'react'
import '@/main/styles/cource.scss'
import '@/main/model/Cource.ts'

const CourceCell: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div key={course.id} className="course">
      <div className="course-text">
        <h2 className="course-title">{course.title}</h2>
        <p className="course-description">{course.description}</p>
      </div>
      <img src={course.imageUrl} alt={course.title} className="course-image"/>
    </div>
  )
}

export default CourceCell
