import { useState } from 'react'

import { Header } from './components/HeaderComponents/Header.jsx'
import { NavBar } from './components/NavBarComponents/NavBar.jsx'
import { Footer } from './components/FooterComponents/Footer.jsx'

import './App.css'

import profileImg from './assets/profile.jpg'

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Header/>
      
      <section className="main-content">
        <aside className="sidebarLeft">
          <NavBar onSelect={setSelected}/>
        </aside>

        <article className="blog-post">
          <h2 className="post-title">My First Blog Post</h2>
        </article>

        <aside className="sidebarRight">
          <p className="sidebar-text">Sidebar Content</p>
        </aside>

      </section>

      <Footer/>
   
    </>
  )
}

export default App
