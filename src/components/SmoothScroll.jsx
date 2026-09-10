import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { gsap, ScrollTrigger } from "../lib/gsap";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      anchors: true,
      respectReducedMotion: true,
    });

    /*
     * Cada vez que Lenis mueve el scroll,
     * notificamos a ScrollTrigger.
     */
    lenis.on("scroll", ScrollTrigger.update);

    /*
     * GSAP trabaja en segundos.
     * Lenis espera milisegundos.
     * Por eso multiplicamos por 1000.
     */
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    /*
     * Cleanup
     *
     * Muy importante en React para evitar
     * crear múltiples instancias de Lenis.
     */
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}

export default SmoothScroll;