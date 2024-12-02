import { createRoot } from 'react-dom/client'
import './App.css'
import { Header } from './UI/Header/header'
import { Mn } from './UI/Main/About/mn'
import { Hard } from './UI/Main/Skills/Hard skill/hard'
import { Soft } from './UI/Main/Skills/Soft skill/soft'


createRoot(document.getElementById('root')!).render(
  <div className='App'>
    <Header />
    <Mn />
    <Hard />
    <Soft />
  </div>
)
