import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Scientific Lean Owl</title>
        <meta property="og:title" content="Scientific Lean Owl" />
      </Helmet>
      <button type="button" className="button">
        Button
      </button>
      <h1>Heading</h1>
    </div>
  )
}

export default Home
