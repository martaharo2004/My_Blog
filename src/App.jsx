import { useState } from 'react'

import { Header } from './components/HeaderComponents/Header.jsx'
import { NavBar } from './components/NavBarComponents/NavBar.jsx'
import { Footer } from './components/FooterComponents/Footer.jsx'
import { SectionComponent } from './components/SectionComponent.jsx'
import { IndexNav } from './components/IndexNavComponents/Indexnav.jsx'

import { navItems } from './data/navItems.js'


import './App.css'

import profileImg from './assets/profile.jpg'

function App() {
  const [selected, setSelected] = useState(navItems[0]);

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <>
      <Header/>
      
      <section className="main-content">
        <aside className="sidebarLeft">
          <NavBar onSelect={handleSelect}/>
        </aside>

        <article className="blog-post">
          <SectionComponent selected={selected}/>
        </article>

        <aside className="sidebarRight">
          <IndexNav indexNavItems={selected?.sections ?? []} />
        </aside>
      </section>

      <Footer onSelect={handleSelect}/>
    </>
  )
}

export default App
