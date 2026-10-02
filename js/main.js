/**
 * SAN ROQUE FUMIGACIONES - LA COSTA (SRQ)
 * Main Controller:
 * 1. Generador de avispas vectoriales SVG con vuelo orgánico en bucle
 * 2. Pre-loader interactivo con barra de progreso, niebla sanitizante y huida
 * 3. Selector de cotización inmediata directa a WhatsApp (02257) 580350
 * 4. Navegación responsive y control de menú mobile
 */

document.addEventListener('DOMContentLoaded', () => {
  initWaspPreloader();
  initNavigation();
  initQuoteForm();
  initReplayButton();
  initHeaderCockroachAnimation();
});

/* ==========================================================================
   1. PRELOADER Y ANIMACIÓN DE AVISPAS EN BUCLE
   ========================================================================== */
function initWaspPreloader() {
  const preloader = document.getElementById('preloader');
  const stage = document.getElementById('wasps-stage');
  const mist = document.getElementById('sanitizer-mist');
  const fill = document.getElementById('progress-bar-fill');
  const percentText = document.getElementById('progress-percent');
  const statusText = document.getElementById('progress-status-text');
  const skipBtn = document.getElementById('btn-skip-preloader');

  if (!preloader || !stage) return;

  // Generar avispas SVG en el escenario
  createWasps(stage);

  // Estados de progreso
  let progress = 0;
  const statusSteps = [
    { at: 0, text: 'Detectando plagas perimetrales...' },
    { at: 28, text: 'Localizando avisperos y focos activos...' },
    { at: 60, text: 'Preparando fórmulas ecológicas certificadas...' },
    { at: 85, text: 'Sanitizando y despejando el área...' },
    { at: 100, text: '¡Área 100% libre de plagas y protegida!' }
  ];

  // Simulación de carga fluida
  const interval = setInterval(() => {
    // Incremento variable orgánico
    progress += Math.floor(Math.random() * 8) + 4;
    if (progress > 100) progress = 100;

    if (fill) fill.style.width = `${progress}%`;
    if (percentText) percentText.textContent = `${progress}%`;

    // Actualizar texto según avance
    for (let i = statusSteps.length - 1; i >= 0; i--) {
      if (progress >= statusSteps[i].at) {
        if (statusText) statusText.textContent = statusSteps[i].text;
        break;
      }
    }

    if (progress >= 100) {
      clearInterval(interval);
      triggerSanitizationAndDismiss(preloader, stage, mist);
    }
  }, 75);

  // Botón Saltar
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearInterval(interval);
      if (fill) fill.style.width = '100%';
      if (percentText) percentText.textContent = '100%';
      triggerSanitizationAndDismiss(preloader, stage, mist, true);
    });
  }
}

/**
 * Dispara la dispersión de avispas, niebla de sanitización y fade-out suave
 */
function triggerSanitizationAndDismiss(preloader, stage, mist, instant = false) {
  if (mist) mist.classList.add('active');
  if (stage) stage.classList.add('scatter');

  const waitTime = instant ? 200 : 480;

  setTimeout(() => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 700);
  }, waitTime);
}

/**
 * Genera avispas vectoriales SVG con alas batientes de alta velocidad
 */
function createWasps(container) {
  container.innerHTML = '';

  const wasps = [
    { className: 'wasp-1', scale: 1 },
    { className: 'wasp-2', scale: 0.9 },
    { className: 'wasp-3', scale: 0.95 },
    { className: 'wasp-4', scale: 0.75 }
  ];

  wasps.forEach(w => {
    const waspEl = document.createElement('div');
    waspEl.className = `wasp-entity ${w.className}`;
    waspEl.innerHTML = getWaspSVG();
    container.appendChild(waspEl);
  });
}

/**
 * Plantilla SVG de avispa estilizada con franjas amarillas/negras, aguijón y alas
 */
function getWaspSVG() {
  return `
    <svg viewBox="0 0 100 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Degradado de alas traslúcidas -->
        <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#E0F2FE" stop-opacity="0.85"/>
          <stop offset="70%" stop-color="#BAE6FD" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#7DD3FC" stop-opacity="0.3"/>
        </linearGradient>

        <!-- Rayas de avispa -->
        <linearGradient id="bodyStripes" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="25%" stop-color="#FACC15"/>
          <stop offset="45%" stop-color="#1E293B"/>
          <stop offset="70%" stop-color="#EAB308"/>
          <stop offset="88%" stop-color="#0F172A"/>
          <stop offset="100%" stop-color="#CA8A04"/>
        </linearGradient>
      </defs>

      <!-- Patas finas traseras -->
      <path d="M45 45 Q35 60 25 65 M48 47 Q40 65 38 72 M52 46 Q58 65 62 70" stroke="#0F172A" stroke-width="1.8" stroke-linecap="round" fill="none"/>

      <!-- Aguijón trasero afilado -->
      <polygon points="12,43 20,41 20,45" fill="#0F172A"/>

      <!-- Abdomen segmentado con franjas amarillo/negro -->
      <ellipse cx="32" cy="43" rx="16" ry="11" fill="url(#bodyStripes)" transform="rotate(-6 32 43)"/>

      <!-- Anillos segmentados del abdomen -->
      <path d="M26 33 Q28 43 26 53 M32 32 Q34 43 32 54 M38 33 Q40 43 38 53" stroke="#0F172A" stroke-width="1.5" fill="none"/>

      <!-- Peciolo (Cintura delgada de avispa) -->
      <rect x="47" y="41" width="4" height="4" rx="2" fill="#0F172A"/>

      <!-- Tórax robusto oscuro -->
      <ellipse cx="58" cy="42" rx="9" ry="8" fill="#1E293B"/>
      <!-- Brillo de quitina en tórax -->
      <ellipse cx="56" cy="38" rx="4" ry="2" fill="#475569" opacity="0.6"/>

      <!-- Cabeza con ojos compuestos -->
      <ellipse cx="71" cy="41" rx="6" ry="7" fill="#0F172A"/>
      <!-- Ojo compuesto brillante -->
      <ellipse cx="73" cy="39" rx="3.2" ry="4" fill="#EAB308"/>
      <ellipse cx="74" cy="38" rx="1.2" ry="1.8" fill="#FFFFFF" opacity="0.8"/>

      <!-- Mandíbulas -->
      <polygon points="76,43 79,45 76,46" fill="#FACC15"/>

      <!-- Antenas curvadas con articulación -->
      <path d="M73 35 Q80 26 86 28 M74 36 Q82 29 88 32" stroke="#0F172A" stroke-width="1.6" stroke-linecap="round" fill="none"/>

      <!-- Ala Delantera Izquierda con aleteo CSS -->
      <g class="wasp-wing-left">
        <path d="M54 36 C50 16 75 10 78 26 C80 34 65 38 54 36 Z" fill="url(#wingGrad)" stroke="#38BDF8" stroke-width="0.8"/>
        <!-- Nervaduras del ala -->
        <path d="M57 34 Q66 22 74 20 M63 28 Q70 24 74 26" stroke="#0284C7" stroke-width="0.5" fill="none" opacity="0.6"/>
      </g>

      <!-- Ala Trasera Derecha con aleteo inverso -->
      <g class="wasp-wing-right">
        <path d="M50 37 C42 22 62 16 66 28 C68 34 58 38 50 37 Z" fill="url(#wingGrad)" stroke="#38BDF8" stroke-width="0.7"/>
      </g>
    </svg>
  `;
}

/* ==========================================================================
   2. NAVEGACIÓN Y MENÚ MOBILE
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .nav-link');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar al hacer clic en cualquier enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active link al scrollear
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute('id');

      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        document.querySelectorAll('.desktop-nav .nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   3. COTIZADOR DIRECTO A WHATSAPP: (02257) 580350
   ========================================================================== */
function initQuoteForm() {
  const form = document.getElementById('srq-quote-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('form-nombre')?.value.trim() || 'Cliente';
    const tipo = document.getElementById('form-tipo')?.value || 'Comercio';
    const localidad = document.getElementById('form-localidad')?.value || 'Partido de La Costa';
    const plaga = document.getElementById('form-plaga')?.value || 'Fumigación Anual';
    const mensaje = document.getElementById('form-mensaje')?.value.trim() || 'Solicito cotización y asesoramiento.';

    const textoWhatsApp = 
`*SOLICITUD DE COTIZACIÓN - SAN ROQUE FUMIGACIONES (LA COSTA)*
• *Cliente / Empresa:* ${nombre}
• *Tipo de Propiedad:* ${tipo}
• *Localidad:* ${localidad} (Partido de La Costa)
• *Servicio Requerido:* ${plaga}
• *Consulta:* ${mensaje}

_Enviado desde el sitio web oficial de San Roque Fumigaciones._`;

    const url = `https://wa.me/5492257580350?text=${encodeURIComponent(textoWhatsApp)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

/* ==========================================================================
   4. BOTÓN REPLAY PARA VER LA ANIMACIÓN DE AVISPAS
   ========================================================================== */
function initReplayButton() {
  const replayBtn = document.getElementById('btn-replay-wasps');
  const preloader = document.getElementById('preloader');
  const stage = document.getElementById('wasps-stage');
  const mist = document.getElementById('sanitizer-mist');
  const fill = document.getElementById('progress-bar-fill');
  const percentText = document.getElementById('progress-percent');
  const statusText = document.getElementById('progress-status-text');

  if (!replayBtn || !preloader) return;

  replayBtn.addEventListener('click', () => {
    if (stage) stage.classList.remove('scatter');
    if (mist) mist.classList.remove('active');
    preloader.classList.remove('fade-out');
    preloader.style.display = 'flex';

    if (fill) fill.style.width = '0%';
    if (percentText) percentText.textContent = '0%';
    if (statusText) statusText.textContent = 'Detectando plagas perimetrales...';

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Regenerar y correr de nuevo
    setTimeout(() => {
      initWaspPreloader();
    }, 200);
  });
}

/* ==========================================================================
   5. ANIMACIÓN INTERACTIVA EN HEADER: CUCARACHA FUMIGADA POR SAN ROQUE (SRQ)
   ========================================================================== */
function initHeaderCockroachAnimation() {
  const actor = document.getElementById('cucaracha-actor');
  const stage = document.getElementById('cucaracha-stage');
  const spray = document.getElementById('cuca-spray-nozzle');
  const stamp = document.getElementById('cuca-stamp-badge');
  const instantBtn = document.getElementById('btn-cuca-instant');

  if (!actor || !stage || !spray || !stamp) return;

  let isDead = false;
  let isWalking = false;
  let cycleTimeout = null;
  let walkAnimationInterval = null;

  function runCockroachCycle() {
    if (isDead) return;

    // Resetear actor
    actor.classList.remove('dead');
    actor.style.opacity = '1';
    actor.style.transition = 'none';
    spray.classList.remove('active');
    stamp.classList.remove('show');

    const stageWidth = stage.clientWidth || 300;
    const startX = -60;
    // Objetivo relativo según ancho disponible (entre 35% y 50%)
    const targetX = Math.max(30, Math.min(stageWidth - 75, Math.floor(stageWidth * 0.42)));

    actor.style.left = `${startX}px`;
    actor.classList.add('cuca-moving');
    isWalking = true;

    let currentX = startX;
    const speed = 2.2; // Velocidad de avance de la plaga

    if (walkAnimationInterval) clearInterval(walkAnimationInterval);

    walkAnimationInterval = setInterval(() => {
      if (!isWalking) {
        clearInterval(walkAnimationInterval);
        return;
      }

      currentX += speed;
      actor.style.left = `${currentX}px`;

      if (currentX >= targetX) {
        clearInterval(walkAnimationInterval);
        isWalking = false;
        actor.classList.remove('cuca-moving');

        // Pausa en el lugar y olfateo de antenas antes de ser detectada y fumigada
        cycleTimeout = setTimeout(() => {
          killCockroach();
        }, 1200);
      }
    }, 16);
  }

  function killCockroach() {
    if (isDead) return;
    isDead = true;
    isWalking = false;
    if (walkAnimationInterval) clearInterval(walkAnimationInterval);
    if (cycleTimeout) clearTimeout(cycleTimeout);

    actor.classList.remove('cuca-moving');

    // 1. Activar chorro y sonido visual de aerosol SRQ
    spray.classList.add('active');

    // 2. Cucaracha sufre shock y se da vuelta boca arriba con patas al aire
    setTimeout(() => {
      actor.classList.add('dead');

      // 3. Aparece el sello oficial ¡FUMIGADA!
      setTimeout(() => {
        stamp.classList.add('show');
      }, 140);
    }, 180);

    // 4. Retraer spray luego de fumigar
    setTimeout(() => {
      spray.classList.remove('active');
    }, 1100);

    // 5. Mantener la cucaracha muerta para satisfacción visual
    setTimeout(() => {
      actor.style.transition = 'opacity 0.6s ease';
      actor.style.opacity = '0';

      // 6. Reiniciar ciclo con nueva detección de plaga
      setTimeout(() => {
        isDead = false;
        runCockroachCycle();
      }, 1600);
    }, 3200);
  }

  // Interacción al hacer clic en la cucaracha
  actor.addEventListener('click', (e) => {
    e.stopPropagation();
    killCockroach();
  });

  // Botón directo "⚡ Fumigar"
  if (instantBtn) {
    instantBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      killCockroach();
    });
  }

  // Iniciar la primera invasión al estar listo el sitio
  setTimeout(() => {
    runCockroachCycle();
  }, 1200);
}

