import { useState } from 'react'

type Section = 'home' | 'about' | 'work' | 'contact'

export function App() {
  const [section, setSection] = useState<Section>('home')

  return (
    <div>
      <header className="nav">
        <nav className="container">
          <ul className="menu">
            <li><button className={section === 'home' ? 'active' : ''} onClick={() => setSection('home')}>Home</button></li>
            <li><button className={section === 'about' ? 'active' : ''} onClick={() => setSection('about')}>Sobre mi</button></li>
            <li><button className={section === 'work' ? 'active' : ''} onClick={() => setSection('work')}>Mis Trabajos</button></li>
            <li><button className={section === 'contact' ? 'active' : ''} onClick={() => setSection('contact')}>Contacto</button></li>
          </ul>
        </nav>
      </header>

      {section === 'home' && (
        <main className="container page">
          <p className="eyebrow">portfolio.</p>
          <h1 className="title">Liam Kohen</h1>
          <p className="subtitle">Diseñador UI y estudiante de Arquitectura</p>
        </main>
      )}

      {section === 'about' && (
        <section className="container page">
          <h2>Sobre mi</h2>
          <p>Texto breve de presentación. Esto se puede ajustar luego.</p>
        </section>
      )}

      {section === 'work' && (
        <section className="container page">
          <h2>Mis Trabajos</h2>
          <div className="grid">
            <article className="card">Proyecto 1</article>
            <article className="card">Proyecto 2</article>
            <article className="card">Proyecto 3</article>
          </div>
        </section>
      )}

      {section === 'contact' && (
        <section className="container page">
          <h2>Contacto</h2>
          <p>Escríbeme a <a href="mailto:liam@example.com">liam@example.com</a></p>
        </section>
      )}

      <footer className="footer container">
        <small>© {new Date().getFullYear()} Liam Kohen</small>
      </footer>
    </div>
  )
}


