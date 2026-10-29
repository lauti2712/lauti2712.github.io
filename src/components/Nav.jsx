export default function Nav({ brand, links }) {
  return (
    <nav>
      <a href="#" className="nav-logo"><i className="ti ti-code" />{brand}</a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
    </nav>
  )
}
