// Textos generales del sitio. Las apps están en apps.js.

export const site = {
  brand: 'Soluciones Cotidianas',
  nav: [
    { href: '#apps', label: 'Apps' },
    { href: '#about', label: 'Nosotros' },
    { href: '#contact', label: 'Contacto' },
  ],
  hero: {
    // \n se muestra como salto de línea
    title: 'Soluciones simples a\nnecesidades diarias',
    text: 'Anotar un pedido, cobrar una deuda, saber qué falta comprar. Esas cosas chicas del día a día parecen irrelevantes, pero se llevan horas. Las resolvemos con apps simples, pensadas para tu oficio.',
    cta: { href: '#apps', icon: 'apps', label: 'Ver aplicaciones' },
  },
  appsSection: {
    label: 'portafolio',
    title: 'Aplicaciones desarrolladas',
    sub: 'Cada app nació de una necesidad concreta de un negocio real, pensada para usarse desde el celular.',
  },
  about: {
    label: 'quiénes somos',
    title: 'Sobre nosotros',
    main: {
      title: 'Las pequeñas cosas también importan',
      text: 'Lo que para el emprendedor parece irrelevante (una planilla, un mensaje, una cuenta hecha a mano) es lo que más tiempo le quita. Cada app que construimos nace de uno de esos problemas cotidianos de un negocio real.',
    },
    cards: [
      { icon: 'device-mobile', title: 'Mobile-first', text: 'Instalables en el celular, diseño responsive desde el primer pixel.' },
      { icon: 'bolt', title: 'Tiempo real', text: 'Cambios instantáneos en todos los dispositivos conectados.' },
    ],
  },
  contact: {
    title: '¿Tenés un proyecto en mente?',
    text: 'Hablemos sobre cómo una app a medida puede mejorar tu operación.',
    // Para sumar mail: { icon: 'mail', label: 'Email', href: 'mailto:tu@mail.com' }
    links: [
      {
        icon: 'brand-whatsapp',
        label: 'Escribinos por WhatsApp',
        href: 'https://wa.me/5493424856528?text=' + encodeURIComponent('Hola vengo desde Soluciones Cotidianas'),
      },
    ],
  },
  footer: 'Soluciones Cotidianas · Construido con dedicación · 2026',
}
