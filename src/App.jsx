import React from 'react'
import { motion } from 'framer-motion'
import { Bell, Twitter, Instagram, Github } from 'lucide-react'

const App = () => {
  return (
    <div className="landing-container">
      {/* Background Stripes */}
      <div className="bg-stripes"></div>

      {/* Floating Clouds */}
      <motion.img 
        src="/images/cloud.png" 
        className="cloud cloud-1"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 100, opacity: 0.6 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.img 
        src="/images/cloud.png" 
        className="cloud cloud-2"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 300, opacity: 0.4 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 10 }}
      />

      {/* Main Content */}
      <main className="content">
        <motion.div 
          className="coming-soon-box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="ribbon">NEW ADVENTURE</div>
          <h1>COMING<br />SOON GUYS!</h1>
          <p>We are building something specially for you. ✨</p>
          
          <div className="notify-input">
            <input type="email" placeholder="Enter your email..." />
            <button><Bell size={18} /> Notify Me</button>
          </div>
        </motion.div>
      </main>

      {/* Japanese Vertical Text */}
      <div className="japanese-sidebar">
        <span className="vertical-text">こんにちは</span>
      </div>

      {/* Chibi Characters */}
      <motion.img 
        src="/images/chibi_blue.png" 
        className="chibi chibi-left"
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      />
      
      <motion.img 
        src="/images/chibi_pink.png" 
        className="chibi chibi-right"
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
      />

      {/* Footer Socials */}
      <footer className="footer">
        <div className="socials">
          <motion.a href="#" whileHover={{ y: -5 }}><Twitter size={20} /></motion.a>
          <motion.a href="#" whileHover={{ y: -5 }}><Instagram size={20} /></motion.a>
          <motion.a href="#" whileHover={{ y: -5 }}><Github size={20} /></motion.a>
        </div>
        <p>© 2026 Agitakhairunnisa. All Rights Reserved.</p>
      </footer>

      {/* Custom Styles for this App */}
      <style dangerouslySetInnerHTML={{ __html: `
        .landing-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .bg-stripes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: repeating-linear-gradient(
            90deg,
            var(--bg-cream),
            var(--bg-cream) 60px,
            var(--bg-stripe) 60px,
            var(--bg-stripe) 100px
          );
          opacity: 0.5;
        }

        .cloud {
          position: absolute;
          pointer-events: none;
          z-index: 0;
        }
        .cloud-1 { top: 10%; left: 5%; width: 250px; }
        .cloud-2 { top: 25%; right: 10%; width: 180px; }

        .content {
          z-index: 10;
          text-align: center;
          padding: 20px;
        }

        .coming-soon-box {
          background-color: var(--primary-yellow);
          padding: 4rem 3rem;
          border-radius: 4px; /* Matches the reference's sharp corners but slightly softened */
          box-shadow: 20px 20px 0px rgba(0,0,0,0.05);
          position: relative;
        }

        .ribbon {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--text-dark);
          color: white;
          padding: 5px 20px;
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 2px;
        }

        .coming-soon-box h1 {
          font-size: 4rem;
          font-weight: 800;
          color: white;
          line-height: 0.9;
          margin-bottom: 1.5rem;
          text-shadow: 4px 4px 0px rgba(0,0,0,0.1);
        }

        .coming-soon-box p {
          color: white;
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .notify-input {
          display: flex;
          gap: 10px;
          background: white;
          padding: 8px;
          border-radius: 30px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .notify-input input {
          border: none;
          padding: 10px 20px;
          border-radius: 30px;
          flex: 1;
          outline: none;
          font-family: 'Outfit';
        }

        .notify-input button {
          background: var(--text-dark);
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s;
        }

        .notify-input button:hover {
          transform: scale(1.05);
        }

        .japanese-sidebar {
          position: absolute;
          right: 5%;
          top: 0;
          height: 100%;
          width: 80px;
          background-color: var(--primary-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: upright;
          font-size: 3rem;
          font-weight: 700;
          color: white;
          letter-spacing: 15px;
        }

        .chibi {
          position: absolute;
          bottom: -20px;
          width: 300px;
          z-index: 15;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
        }
        .chibi-left { left: 5%; }
        .chibi-right { right: 15%; }

        .footer {
          position: absolute;
          bottom: 20px;
          text-align: center;
          color: var(--text-dark);
          opacity: 0.6;
          z-index: 20;
        }

        .socials {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 5px;
        }
        .socials a { color: var(--text-dark); }

        @media (max-width: 768px) {
          .chibi { width: 180px; }
          .chibi-left { left: -20px; }
          .chibi-right { right: 20px; }
          .coming-soon-box h1 { font-size: 2.5rem; }
          .japanese-sidebar { display: none; }
          .coming-soon-box { padding: 3rem 1.5rem; }
        }
      `}} />
    </div>
  )
}

export default App
