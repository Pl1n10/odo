# odo — sito di Odoardo Vitolo

Sito vetrina di Odoardo Vitolo, responsabile marketing esterno per studi
professionali e PMI. Una pagina statica (HTML + CSS + un po' di JS), niente
build, pensata per Netlify. Avviato il 2026-10-27.

## Struttura

- `sito/` — il sito pubblicabile (`publish = "."` in `netlify.toml`)
- `materiali/` — gitignored: i due export Lovable, gli screenshot e le foto
  originali che Odoardo ha mandato

## Decisioni

- **Il verde acqua `#46C2AF` è una superficie, mai un colore per il testo.**
  Su fondo chiaro arriva a 2:1 e non si legge. Il testo sul verde è inchiostro
  `#0D2B27` (6,9:1); su carta i link usano `#1D6F64` (5,5:1).
- Il testo nasce dalla fusione dei due tentativi Lovable: titolo, settore
  sanitario e call di 30 minuti dalla versione A, il "Chi sono" personale dalla B.
- Font Red Hat Display/Text **ospitati sul sito** (`sito/fonts/`): niente
  Google Fonts esterni, quindi niente IP dei visitatori a Google.
- Nessun cookie, nessuna analytics. Se si aggiungono, serve il banner.

## Da completare (servono dati da Odoardo)

Tutti i contatti si impostano in un punto solo, `CONTATTI` in `sito/main.js`.
Finché un valore è vuoto il link porta alla sezione Contatti; email e P.IVA
spariscono.

- [ ] link di prenotazione (Cal.com o Calendly, evento da 30 minuti)
- [ ] numero WhatsApp
- [ ] profilo LinkedIn
- [ ] email
- [ ] P.IVA (obbligatoria nel sito se ha partita IVA)
- [ ] prezzi dei due percorsi, se vuole mostrarli (ora "su misura")
- [ ] dominio
- [ ] pagina privacy: breve, ma serve se si aggiunge un modulo o un'analytics

## Provarlo in locale

    cd sito && python3 -m http.server 8437 --bind 127.0.0.1
