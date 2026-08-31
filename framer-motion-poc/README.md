# Framer Motion POC

A small Proof of Concept (POC) built with React, Vite, and Framer Motion (now known as Motion for React).

This project demonstrates how Motion can be used together with React to create animations, interactions, and visual UI effects with relatively little code.

## Features

- Show and hide an animated card
- Enter animation when the card appears
- Exit animation when the card disappears
- Hover effect on the card
- Tap effect on click
- Draggable card
- AnimatePresence for exit animations
- Interactive button inside the card
- Animated hearts appear when the button is clicked
- Button text changes after clicking

## Code Example

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
```