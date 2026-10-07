import { useEffect, useState } from 'react'

import { Header } from './components/HeaderComponents/Header.jsx'
import { NavBar } from './components/NavBarComponents/NavBar.jsx'
import { Footer } from './components/FooterComponents/Footer.jsx'
import { SectionComponent } from './components/SectionComponent.jsx'
import { IndexNav } from './components/IndexNavComponents/IndexNav.jsx'

import { navItems } from './data/navItems.js'


import './App.css'

import profileImg from './assets/mh-def.png'

function App() {
  const [selected, setSelected] = useState(navItems.find(item => item.id === 1));
  const [projectTarget, setProjectTarget] = useState(null);
  useEffect(() => {
    if (projectTarget) document.getElementById(String(projectTarget))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selected, projectTarget]);

  const handleSelect = (item) => {
    setProjectTarget(null);
    setSelected(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header/>
      
      <section className="main-content">
        <aside className="sidebarLeft">
          <NavBar onSelect={handleSelect} selectedId={selected?.id} />
        </aside>

        <article className="blog-post">
          <SectionComponent selected={selected} onOpenProject={(groupId, projectId) => {
            setSelected(navItems.find(item => item.projectGroupId === groupId));
            setProjectTarget(projectId);
          }}/>
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
