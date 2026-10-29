// Cada objeto es una tarjeta del portfolio. Para sumar una app, agregá un objeto acá.
//
// Campos:
//   id        identificador único (sin espacios)
//   icon      emoji del ícono
//   color     fondo del ícono: 'blue' | 'orange' | 'red' | 'indigo' | 'purple' | 'teal' (ver .app-* en styles.css)
//   para      oficio / rubro al que ayuda (se muestra arriba del nombre)
//   name      nombre de la app
//   tagline   frase corta debajo del nombre
//   antes     cómo se trabajaba sin la app
//   ahora     qué cambia con la app
//   features  hasta 4 beneficios, contados para el dueño del negocio: [{ icon: nombre Tabler sin "ti-", label }]
//   demoUrl   link a la demo; si es null muestra "Demo próximamente"
//   demoLabel texto del link (opcional, por defecto "Ver demo")

export const apps = [
  {
    id: 'piletaspro',
    icon: '💧',
    color: 'blue',
    para: 'Pileteros · mantenimiento de piletas',
    name: 'PiletasPro',
    tagline: 'El negocio de tu pileta, en orden.',
    antes: 'Clientes, visitas, cobros y mensajes anotados a mano o perdidos en WhatsApp.',
    ahora: 'Todo en una sola app pensada para el piletero, y cada cliente ve sus visitas y pagos desde su propio portal.',
    features: [
      { icon: 'calendar', label: 'La ruta del día de cada piletero' },
      { icon: 'user-circle', label: 'Tus clientes ven visitas y pagos' },
      { icon: 'receipt', label: 'Cobros y deudas al día' },
      { icon: 'chart-bar', label: 'Cuánto ganás cada mes' },
    ],
    demoUrl: null,
  },
  {
    id: 'gestion-napolitana',
    icon: '🍕',
    color: 'orange',
    para: 'Pizzerías napolitanas',
    name: 'Gestión Napolitana',
    tagline: 'Pedidos, mesas, cocina y caja de tu pizzería, en un solo lugar.',
    antes: 'Pedidos por teléfono y WhatsApp, comandas en papel, el stock en una planilla y la caja en un cuaderno.',
    ahora: 'Los clientes piden y pagan online, los mozos cargan las mesas desde el celular, la cocina sabe qué producir y la caja se arma sola.',
    features: [
      { icon: 'shopping-bag', label: 'Pedidos web con pago online' },
      { icon: 'armchair', label: 'Mesas y mozos desde el celular' },
      { icon: 'package', label: 'Stock y producción al día' },
      { icon: 'file-invoice', label: 'Factura electrónica AFIP' },
    ],
    demoUrl: null,
  },
  {
    id: 'proveedorapp',
    icon: '🏷️',
    color: 'red',
    para: 'Distribuidoras y mayoristas',
    name: 'ProveedorApp',
    tagline: 'Del pedido al cobro, sin papel ni WhatsApp.',
    antes: 'Pedidos por WhatsApp, remitos en papel y cuentas de clientes en un cuaderno.',
    ahora: 'Cada cliente hace su pedido desde su propio portal y vos seguís pedido, entrega y cobro en un solo lugar.',
    features: [
      { icon: 'user-circle', label: 'Tus clientes piden solos' },
      { icon: 'tag', label: 'Precios según el tipo de cliente' },
      { icon: 'truck', label: 'Cada pedido: armado, en camino, entregado' },
      { icon: 'credit-card', label: 'El saldo de cada cliente al día' },
    ],
    demoUrl: null,
  },
  {
    id: 'turnos-ctacte',
    icon: '📅',
    color: 'indigo',
    para: 'Estudios de pilates, yoga y actividades grupales',
    name: 'Turnos para Estudios',
    tagline: 'Turnos, alumnos y cobros, con el reparto al socio calculado solo.',
    antes: 'Planillas para los cupos y cálculos a mano para saber cuánto le toca al dueño del espacio.',
    ahora: 'La app calcula lo que debe cada alumno, lo que le corresponde al socio y quién cobró qué.',
    features: [
      { icon: 'calendar', label: 'Turnos y cupos de cada clase' },
      { icon: 'coin', label: 'Qué debe cada alumno' },
      { icon: 'chart-pie', label: 'Reparto con el socio automático' },
      { icon: 'wifi-off', label: 'Funciona sin internet' },
    ],
    demoUrl: null,
  },
  {
    id: 'quieromisfotos',
    icon: '📸',
    color: 'purple',
    para: 'Fotógrafos deportivos',
    name: 'Quiero Mis Fotos',
    tagline: 'Subí las fotos del evento y que cada deportista compre las suyas.',
    antes: 'Fotos subidas a carpetas compartidas, pedidos uno por uno por mensaje y cobros por transferencia a mano.',
    ahora: 'El fotógrafo sube el evento, cada deportista encuentra y compra sus fotos, y el cobro y la entrega son automáticos.',
    features: [
      { icon: 'photo-up', label: 'Subís todo el evento de una vez' },
      { icon: 'search', label: 'Cada uno encuentra sus fotos' },
      { icon: 'credit-card', label: 'Cobro y descarga automáticos' },
      { icon: 'world', label: 'Tu propia web de fotógrafo' },
    ],
    demoUrl: 'https://quieromisfotos.com.ar',
    demoLabel: 'Ver sitio',
  },
  {
    id: 'viajes',
    icon: '🧳',
    color: 'teal',
    para: 'Grupos que viajan juntos',
    name: 'Viajes',
    tagline: 'El viaje del grupo organizado, y las cuentas claras.',
    antes: 'Itinerario en un chat, gastos anotados en el celular de uno y la cuenta de quién le debe a quién al volver.',
    ahora: 'Todo el grupo ve el plan, carga lo que gasta y la app calcula cuánto le toca poner a cada uno.',
    features: [
      { icon: 'route', label: 'Itinerario compartido' },
      { icon: 'receipt', label: 'Gastos y tickets del grupo' },
      { icon: 'scale', label: 'Quién le debe a quién' },
      { icon: 'backpack', label: 'Mochila de cada viajero' },
    ],
    demoUrl: null,
  },
]
