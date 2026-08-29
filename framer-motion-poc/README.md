# Framer Motion POC

En liten Proof of Concept (POC) skapad med React, Vite och Framer Motion (numera kännetecknat som Motion for React).

Projektet visar hur Motion kan användas tillsammans med React för att skapa animationer, interaktioner och visuella UI-effekter med relativt lite kod.

## Funktioner

- Visa och dölj ett animerat kort
- Animation när kortet visas
- Animation när kortet försvinner
- Hover-effekt på kortet
- Tap-effekt när man klickar
- Kortet går att dra med musen
- AnimatePresence används för exit-animation
- Interaktiv knapp inne i kortet
- Animerade hjärtan visas när knappen klickas
- Knapptexten ändras efter klick

## Kodexempel

```jsx
<AnimatePresence>
  {showCard && (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.9 }}
      whileHover={{ scale: 1.06, rotate: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      drag
    >
      <h2>Hello there!</h2>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setLoveSent(!loveSent)}
      >
        {loveSent ? "Love sent! 💕" : "Send love 💌"}
      </motion.button>
    </motion.article>
  )}
</AnimatePresence>