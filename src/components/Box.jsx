import React from 'react'

const Box = ({ name, courseName }) => {
  return (
    <>
      <h1>Academy Name: {name}</h1>
      <h2>Course Name: {courseName}</h2>
    </>
  )
}

export default Box;