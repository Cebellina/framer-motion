# Framer Motion POC

En enkel Proof of Concept (POC) skapad med React, Vite och Framer Motion / Motion for React.

Projektet visar hur Framer Motion kan användas för att skapa animationer och interaktioner i ett React-projekt.

## Funktioner

* Visa och dölj ett interaktivt kort
* Animation när kortet visas
* Animation när kortet försvinner
* Hover-effekt
* Spring-animation
* Kortet går att dra med musen
* AnimatePresence används för exit-animation

## Kodexempel

```jsx
<AnimatePresence>
  {showCard && (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring" }}
      drag
    >
      Interaktivt kort
    </motion.article>
  )}
</AnimatePresence>
```

## Installation

Installera projektets dependencies:

```bash
npm install
```

Installera Motion:

```bash
npm install motion
```

## Starta projektet

```bash
npm run dev
```

Öppna sedan localhost-adressen som visas i terminalen.

## Tekniker

* React
* Vite
* JavaScript
* Framer Motion / Motion for React
* CSS

## Syfte

Syftet med projektet är att demonstrera hur Framer Motion kan användas tillsammans med React för att skapa animationer med relativt lite kod.

POC:n visar bland annat `initial`, `animate`, `exit`, `whileHover`, `transition`, `drag` och `AnimatePresence`.