import React from 'react'
import styled from 'styled-components'

import './app.css'

const App: React.FC = () => {

  return (
    <Container>
    <div className="app">
      <header className="app-header">
        <p className="app-title">Testing Electron with React.js</p>

        <div className="card">
          <div className="card-picture">
            <img src="https://images.pexels.com/photos/3616770/pexels-photo-3616770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="card-image" />
          </div>
          <div className="card-body">
            <h3 className="card-title">Card Title</h3>
            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, laudantium?</p>
          </div>
        </div>
      </header>
    </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: cornflowerblue;
  height: 100vh;
  padding: 1rem;
`

export default App
