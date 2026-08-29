import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./App.css";

function App() {
  const [showCard, setShowCard] = useState(true);
  const [loveSent, setLoveSent] = useState(false);

  return (
    <main className="app">
      <h1>Framer Motion POC</h1>
      <h2>... numera "Motion for React"</h2>

      <p className="description">
        Ett litet exempel på animationer och interaktioner skapat med Motion for
        React.
      </p>

      <button
        className="toggle-button"
        onClick={() => setShowCard(!showCard)}
      >
        {showCard ? "Dölj kort" : "Visa kort"}
      </button>

      <div className="card-area">
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
              dragConstraints={{
                left: -100,
                right: 100,
                top: -40,
                bottom: 40,
              }}
            >
              <div className="card-icon">💗</div>

              <h2>Hello there!</h2>

              <p>Här kommer en liten pop-up ruta för att meddela att du är fantastisk! ✨</p>

              <div className="card-tags">
                <span>💜 Kämpa! </span>
                <span>✨ Kämpa! </span>
                <span>🌸 Kämpa! </span>
              </div>

              <div className="love-area">
                <motion.button
                  className="card-button"
                  onClick={() => setLoveSent(!loveSent)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {loveSent ? "Love sent! 💕" : "Send love 💌"}
                </motion.button>

                <AnimatePresence>
                  {loveSent && (
                    <motion.div
                      className="hearts"
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: -10,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.5,
                        y: -30,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      💗 💕 💜
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;