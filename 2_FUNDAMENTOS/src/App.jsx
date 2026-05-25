import React from 'react'
import FirstComponent from './components/FirstComponent'
import './App.css'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponents from './components/MyComponents'
import Events from './components/Events'
import Desafio from './components/Desafio'

function App() {
  return (
    <div className='App'>
      <h1>Fundamentos de React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponents/>
        <Events/>
      <h1>Desafio basico de react</h1>
        <Desafio/>
    </div>
  )
}
export default App
