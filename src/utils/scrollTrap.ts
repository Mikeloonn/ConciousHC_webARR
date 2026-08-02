// Atrapa el evento de rueda del mouse sobre un contenedor scrollable para
// que el scroll no se propague a la página (Lenis suele capturar el wheel en
// window y, por tanto, mueve la página entera en lugar del dropdown).
//
// Si el contenedor no puede seguir scrolleando en la dirección del gesto, el
// evento se deja pasar para no bloquear artificialmente al usuario.
//
// Uso:  onWheel={trapWheelScroll}
export const trapWheelScroll = (e: React.WheelEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const { scrollTop, scrollHeight, clientHeight } = el;
  const deltaY = e.deltaY;

  const atTop = scrollTop <= 0;
  const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

  // Si el contenido cabe sin scroll, no hay nada que atrapar.
  if (scrollHeight <= clientHeight) return;

  // Si el gesto subiría más arriba del tope, o bajaría más allá del fondo,
  // evitamos el comportamiento por defecto para que la página no se mueva.
  if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom)) {
    e.preventDefault();
  }

  // En cualquier caso, detenemos la propagación para que Lenis no lo reciba.
  e.stopPropagation();
};
