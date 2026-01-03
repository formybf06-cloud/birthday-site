import { useState, useEffect } from "react";
import gsap from "gsap";
import cat from "./assets/cat.png";
import lovePhoto from "./assets/love-photo.png";
import rose from "./assets/rose.png";
import "@fontsource/dancing-script";



/* ================= FLOATING HEARTS ================= */
function FloatingHearts() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.bottom = "-30px";
      heart.style.fontSize = Math.random() * 10 + 14 + "px";
      heart.style.opacity = Math.random() * 0.5 + 0.4;
      heart.style.pointerEvents = "none";
      heart.style.zIndex = 1;
      heart.style.animation = "floatUp 7s linear forwards";

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    };

    const interval = setInterval(createHeart, 900);
    return () => clearInterval(interval);
  }, []);

  return null;
}

/* ================= ICONS ================= */
const PhotoIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="3" stroke="#b11226" strokeWidth="2" />
    <circle cx="9" cy="10" r="1.5" fill="#b11226" />
    <path d="M21 16l-5-5-6 6" stroke="#b11226" strokeWidth="2" />
  </svg>
);

const FlowerIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 7c1.5-3 5-2 5 1s-3.5 4-5 2-5-1-5-2 3.5-4 5-1z"
      stroke="#b11226"
      strokeWidth="2"
    />
    <path d="M12 13v6" stroke="#b11226" strokeWidth="2" />
  </svg>
);

const MusicIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
    <path d="M9 18a2 2 0 1 1 0-4" stroke="#b11226" strokeWidth="2" />
    <path d="M11 6v10" stroke="#b11226" strokeWidth="2" />
    <path d="M11 6l8-2v10" stroke="#b11226" strokeWidth="2" />
  </svg>
);

const LetterIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="3" stroke="#b11226" strokeWidth="2" />
    <path d="M3 7l9 6 9-6" stroke="#b11226" strokeWidth="2" />
  </svg>
);

const IconBox = ({ children, label, onClick }) => (
  <div style={styles.gift} onClick={onClick}>
    {children}
    <div style={styles.giftLabel}>{label}</div>
  </div>
);

/* ================= MAIN APP ================= */
export default function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 60, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [step]);

  return (
    <div style={styles.app}>
      <FloatingHearts />

      <div className="card" style={styles.card}>
        {step === 0 && (
          <>
            {/* 🐱 CAT IMAGE (UNCHANGED) */}
            <img src={cat} alt="Cute Cat" style={styles.cat} />

            <h1 style={styles.title}>
              Hello <br /> My Love!
            </h1>

            <p style={styles.text}>Something special is waiting for you. Are you ready?</p>

            <div style={styles.row}>
              <button style={styles.primaryBtn} onClick={() => setStep(2)}>
                Yes, I am
              </button>
              <button style={styles.secondaryBtn} onClick={() => setStep(1)}>
                No thanks
              </button>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h1 style={styles.titleSmall}>I promise you’ll like it 💕</h1>
            <button style={styles.primaryBtn} onClick={() => setStep(0)}>
              Try again
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 style={styles.subtitle}>A little something for you</h2>
            <div style={styles.grid}>
              <IconBox label="Photo" onClick={() => setStep(3)}><PhotoIcon /></IconBox>
              <IconBox label="Flowers" onClick={() => setStep(4)}><FlowerIcon /></IconBox>
              <IconBox label="Song" onClick={() => setStep(5)}><MusicIcon /></IconBox>
              <IconBox label="Message" onClick={() => setStep(6)}><LetterIcon /></IconBox>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 style={styles.subtitle}> Memory of us</h2>
            <div style={styles.photoBox}>
  <img
    src={lovePhoto}
    alt="Our memory"
    style={styles.photo}
  />
</div>

            <button style={styles.primaryBtn} onClick={() => setStep(2)}>Back</button>
          </>
        )}

        {step === 4 && (
  <>
    <h2 style={styles.subtitle}>Flowers for you</h2>

    <div style={styles.flowerCard}>
      <img src={rose} alt="Rose" style={styles.flowerImg} />

      <h3 style={styles.flowerName}>Loove</h3>
      <p style={styles.flowerText}> Happy Birthday to you!</p>

      <div style={styles.notes}>
  {/* LEFT SIDE */}
  <div style={{ ...styles.note, top: "22%", left: "4%" }}>
    Together, we flourish like flowers in endless sun 🌻
  </div>

  <div style={{ ...styles.note, top: "55%", left: "8%", animationDelay: "1s" }}>
     Ever-blooming love 🌷
  </div>

  

  {/* RIGHT SIDE */}
  <div style={{ ...styles.note, top: "26%", right: "4%" }}>
   Petals of joy 🌼
  </div>

  <div style={{ ...styles.note, top: "58%", right: "6%", animationDelay: "1.5s" }}>
    With you, love is not rushed—it grows slowly, deeply, and beautifully.
  </div>

  
</div>

    </div>

    <button style={styles.primaryBtn} onClick={() => setStep(2)}>Back</button>
  </>
)}


        

        {step === 5 && (
          <>
            <h2 style={styles.subtitle}>Your Fav Song--Aile Bhetna Au--</h2>
            <iframe
              width="100%"
              height="300"
              style={styles.video}
              src="https://www.youtube.com/embed/_zT0slYbCOY"
              allowFullScreen
            />
            <button style={styles.primaryBtn} onClick={() => setStep(2)}>Back</button>
          </>
        )}

        {step === 6 && (
  <>
    <h2 style={styles.subtitle}>Message for you</h2>

    <div style={styles.messagePaper}>
      <h3 style={styles.messageTitle}>HAPPY BIRTHDAY LOO</h3>

      <div style={styles.messageDivider} />

      <p style={styles.messageText}>
        To my favourite person Loo,<br /><br />
        “You are my heart’s peaceful happiness and its loudest joy.” From the moment we met, you’ve filled my life with warmth and laughter. Every day with you is a gift, and today is the perfect day to thank you and celebrate the most treasured gift I’ve ever received—you.
        <br /><br />
        Your heart is full of love, warmth, and care. The way you notice the little things and always make me feel cherished makes me feel incredibly lucky to have you in my life. Being with you feels like home—I feel safe, happy, and even a little like a child again, free and full of joy.
        <br /><br />
        Thank you for being my babe, my bestie, and my one-and-only love and comfort. I am so grateful for every hug, every smile, and every moment we share. You mean everything to me, and I hope I am always the first one to wish you a happy birthday and celebrate this day and many more together.
      </p>

      <div style={styles.messageSignature}>
        — Forever yours, Ashiya ❤️
      </div>
    </div>

    <button style={styles.primaryBtn} onClick={() => setStep(2)}>
      Back
    </button>
  </>
)}

      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  app: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    background:
      "radial-gradient(circle at 30% 20%, #ffe4ea, #ffffff 45%)",
  },
  

  messagePaper: {
  background: "#fffdf8",
  borderRadius: 20,
  padding: "26px",
  marginBottom: 24,
  border: "2px dashed #b11226",
  boxShadow: "inset 0 0 0 1px rgba(177,18,38,0.05)",
},

messageText: {
  fontFamily: "'Dancing Script', cursive",
  fontSize: "1.35rem",
  lineHeight: 1.9,
  color: "#2f2f2f",
  textAlign: "left",
},


messageTitle: {
  fontSize: "1.6rem",
  color: "#b11226",
  fontWeight: 800,
  marginBottom: 10,
  textAlign: "center",
},

messageDivider: {
  height: 1,
  background: "#b11226",
  opacity: 0.3,
  margin: "12px 0 18px",
},

messageText: {
  fontFamily: "'Dancing Script', cursive",
  fontSize: "1.3rem",
  lineHeight: 1.9,
  color: "#2f2f2f",
  textAlign: "left",
},



messageSignature: {
  marginTop: 20,
  textAlign: "right",
  fontFamily: "'Dancing Script', cursive",
  fontSize: "1.2rem",
  color: "#b11226",
},



  photo: {
  width: "100%",
  height: "auto",
  display: "block",
  borderRadius: 24,
},

flowerCard: {
  position: "relative",
  background: "#fff",
  borderRadius: 32,
  padding: "40px 24px",
  marginBottom: 24,
  border: "3px solid #b11226",
  overflow: "hidden",
},


flowerImg: {
  width: "180px",
  display: "block",
  margin: "0 auto 12px auto",
  animation: "softZoom 6s ease-in-out infinite",
},



flowerName: {
  marginTop: 12,
  fontSize: "28px",
  color: "#b11226",
  letterSpacing: 2,
  fontWeight: 700,
},

flowerText: {
  fontSize: "1rem",
  color: "#555",
  marginBottom: 20,
},

notes: {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
},

note: {
  position: "absolute",
  maxWidth: 170,
  padding: "12px 16px",
  fontSize: 14,
  background: "#fff",
  borderRadius: 999,
  border: "2px solid #b11226",
  color: "#b11226",
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
  animation: "floatBubble 6s ease-in-out infinite",
},


note: {
  position: "absolute",
  maxWidth: 160,
  padding: "10px 14px",
  fontSize: 13,
  background: "#fff",
  borderRadius: 16,
  border: "2px solid #b11226",
  color: "#b11226",
},



  card: {
    background: "#fff",
    borderRadius: "32px",
    padding: "40px",
    maxWidth: "540px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
  },
  cat: { width: "90px", marginBottom: 16 },
  title: { fontSize: "3rem", color: "#b11226", fontWeight: 800 },
  titleSmall: { fontSize: "2.3rem", color: "#b11226", fontWeight: 800 },
  subtitle: { fontSize: "2rem", color: "#b11226", marginBottom: 20 },
  text: { fontSize: "1.1rem", marginBottom: 24 },
  row: { display: "flex", gap: 16, justifyContent: "center" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 },
  gift: {
    border: "2px solid #b11226",
    borderRadius: 20,
    padding: 24,
    cursor: "pointer",
  },
  giftLabel: { marginTop: 8, color: "#b11226", fontWeight: 600 },
  primaryBtn: {
    padding: "14px 28px",
    borderRadius: 999,
    background: "#b11226",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "14px 28px",
    borderRadius: 999,
    border: "2px solid #b11226",
    background: "transparent",
    color: "#b11226",
    cursor: "pointer",
  },
  photoBox: {
  width: "100%",
  marginBottom: 24,
  borderRadius: 24,
  overflow: "hidden",
  background: "#000",
},

  flowerBox: { fontSize: "3rem", margin: 24 },
  video: { borderRadius: 16, border: "none" },
  letter: { textAlign: "left", lineHeight: 1.7 },
};

/* ================= HEART ANIMATION ================= */
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatBubble {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
  @keyframes softZoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}


@keyframes floatUp {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 0.8; }
  100% { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(style);
