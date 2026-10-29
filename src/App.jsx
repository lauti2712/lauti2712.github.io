import { site } from './data/site.js'
import { apps } from './data/apps.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import AppCard from './components/AppCard.jsx'
import Section from './components/Section.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav brand={site.brand} links={site.nav} />
      <Hero {...site.hero} />

      <Section id="apps" {...site.appsSection}>
        <div className="apps-grid">
          {apps.map((app) => (
            <AppCard key={app.id} {...app} />
          ))}
        </div>
      </Section>

      <div className="divider" />
      <About {...site.about} />
      <div className="divider" />
      <Contact {...site.contact} />
      <Footer text={site.footer} />
    </>
  )
}
