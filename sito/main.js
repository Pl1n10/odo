// Dati di contatto: si modificano solo qui.
// Un valore vuoto lascia il link sulla sezione Contatti (o nasconde la voce, per email e P.IVA).
const CONTATTI = {
  calendario: "",          // es. "https://cal.com/odoardo-vitolo/30min"
  whatsapp: "",            // numero internazionale senza + né spazi, es. "393331234567"
  linkedin: "",            // es. "https://www.linkedin.com/in/..."
  email: "",
  piva: "",
};

const MESSAGGIO_WHATSAPP = "Ciao Odoardo, vorrei parlare del mio marketing.";

const href = {
  calendario: CONTATTI.calendario,
  whatsapp: CONTATTI.whatsapp &&
    `https://wa.me/${CONTATTI.whatsapp}?text=${encodeURIComponent(MESSAGGIO_WHATSAPP)}`,
  linkedin: CONTATTI.linkedin,
  email: CONTATTI.email && `mailto:${CONTATTI.email}`,
};

document.querySelectorAll("[data-link]").forEach((a) => {
  const url = href[a.dataset.link];
  if (!url) return;
  a.href = url;
  if (url.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noopener";
  }
});

document.querySelectorAll("[data-se]").forEach((el) => {
  el.hidden = !CONTATTI[el.dataset.se];
});
document.querySelectorAll("[data-testo]").forEach((el) => {
  el.textContent = CONTATTI[el.dataset.testo];
});
document.querySelectorAll("[data-anno]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const testata = document.querySelector(".testata");
const apertura = document.querySelector(".apertura");
new IntersectionObserver(([e]) => {
  testata.classList.toggle("is-staccata", !e.isIntersecting);
}).observe(apertura);
