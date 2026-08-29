import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function App() {
  const [showCard, setShowCard] = useState(true);

  return (
    <div>
      <h1>Framer Motion POC</h1>

      <button onClick={() => setShowCard(!showCard)}>
        {showCard ? "Dölj kort" : "Visa kort"}
      </button>

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
    </div>
  );
}

export default App;