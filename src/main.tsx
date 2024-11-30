import { createRoot } from 'react-dom/client'
import { Header } from './UI/Header/header'
import { Mn } from './UI/Main/About/mn'
import { Project } from './UI/Main/Project/project'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <div className='App'>
    <Header />
    <Mn />
    <Project />
  </div>
)
