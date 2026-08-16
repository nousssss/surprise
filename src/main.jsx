
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const TOTAL = 11;

const students = [
  "سهيلة عمراوي",
  "كوثر إبراهيم",
  "فاطمة عياد",
  "إيناس بشيري",
  "الحاسي جهيدة",
  "سمراء بن فليس",
  "حفصة حمدان",
  "كوثر بن حمزة",
  "سارة البعدوي",
  "مريم السيدي",
  "نعيمة شوافي",
];

const islands = [
  { id: 1, emoji: "🌸", title: "رسالة ١", caption: "بداية الحكاية", collectible: "🌸", secret: "وجدتِ زهرة صغيرة! ✿", action: "اضغطي على الزهرة", kind: "garden" },
  { id: 2, emoji: "🏡", title: "رسالة ٢", caption: "ذكرى جميلة", collectible: "🦋", secret: "فراشة صغيرة كانت تنتظركِ! 🦋", action: "هل رأيتِ الفراشة؟", kind: "home" },
  { id: 3, emoji: "🌳", title: "رسالة ٣", caption: "لحظة لا تُنسى", collectible: "🐦", secret: "حتى العصفور جاء ليستمع! 🐦", action: "اضغطي على العصفور", kind: "tree" },
  { id: 4, emoji: "🪻", title: "رسالة ٤", caption: "من القلب", collectible: "🏮", secret: "أنرتِ الفانوس! ✨", action: "أضيئي الفانوس", kind: "gazebo" },
  { id: 5, emoji: "🌷", title: "رسالة ٥", caption: "كلمات امتنان", collectible: "🎀", secret: "وجدتِ شريطة جميلة! 🎀", action: "خذي الشريطة", kind: "garden2" },
  { id: 6, emoji: "⛺", title: "رسالة ٦", caption: "محطة دافئة", collectible: "📖", secret: "هناك كتاب صغير هنا… 📖", action: "افتحي الكتاب", kind: "tent" },
  { id: 7, emoji: "🌴", title: "رسالة ٧", caption: "معًا في الطريق", collectible: "🩷", secret: "قلب صغير لكِ! 🩷", action: "التقطي القلب", kind: "home2" },
  { id: 8, emoji: "💜", title: "رسالة ٨", caption: "أثر طيب", collectible: "🪻", secret: "زهرة اللافندر تهديكِ رائحتها 🌿", action: "المسي الزهرة", kind: "pergola" },
  { id: 9, emoji: "🏮", title: "رسالة ٩", caption: "من ذكرياتنا", collectible: "🌙", secret: "القمر ظهر لكِ! 🌙", action: "المسي القمر", kind: "lantern" },
  { id: 10, emoji: "🕌", title: "رسالة ١٠", caption: "اقتربنا...", collectible: "⭐", secret: "نجمة أخيرة قبل النهاية! ⭐", action: "التقطي النجمة", kind: "dome" },
  { id: 11, emoji: "🌿", title: "رسالة ١١", caption: "النهاية الجميلة", collectible: "🤍", secret: "وجدتِ قلب الرحلة كله 🤍", action: "افتحي الحديقة الأخيرة", kind: "final" },
];


function App() {
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [collection, setCollection] = useState([]);
  const [travelerStage, setTravelerStage] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const [activeIsland, setActiveIsland] = useState(null);
  const [letter, setLetter] = useState(null);
  const [discovery, setDiscovery] = useState(null);
  const [celebration, setCelebration] = useState(false);




  const statusMessage = useMemo(() => {
    if (progress === 0) return "رحلتنا تبدأ هنا…";
    if (progress < 4) return "بدأت الذكريات تتجمع 🤍";
    if (progress < 7) return "كم رسالة جميلة اكتشفنا! ✨";
    if (progress < 10) return "اقتربنا من النهاية… 🌷";
    if (progress < 11) return "هناك مفاجأة أخيرة تنتظركِ…";
    return "جمعتِ كل ذكريات الرحلة! 💗";
  }, [progress]);

  const openIsland = (id) => {
    if (id > progress + 1) return;
    setActiveIsland(id);
  };

  const closeIsland = () => setActiveIsland(null);

  const collectSecret = (id) => {
    setCollection((prev) => prev.includes(id) ? prev : [...prev, id]);
  };

  const openEnvelope = () => {
    const id = activeIsland;
    setActiveIsland(null);
    setTimeout(() => setDiscovery(id), 120);
  };

  const closeDiscovery = () => setDiscovery(null);

  const openLetter = () => {
    const id = discovery;
    setDiscovery(null);
    setTimeout(() => {
      setLetter(id);
    }, 120);
  };

  const closeLetter = () => {
    const finishing = letter === TOTAL;
    setLetter(null);
    setCelebration(false);
    if (finishing) {
      setTimeout(() => setCelebration(true), 280);
    }
  };

  const discoverAndContinue = () => {
  const completedNewLetter = letter === progress + 1 && progress < TOTAL;
  const finishing = letter === TOTAL;

  if (letter <= progress) {
    collectSecret(letter);
  }

  setLetter(null);
  setCelebration(false);

  if (completedNewLetter) {
    const nextStage = letter;

    // Start walking while she is still at the current island.
    setIsWalking(true);

    // Let React/browser paint the walking state first.
    setTimeout(() => {
      // Now move the character to the next island.
      setTravelerStage(nextStage);

      // The island becomes unlocked too.
      setProgress(nextStage);
    }, 100);

    // Stop the walking animation after she arrives.
    setTimeout(() => {
      setIsWalking(false);
    }, 3400);
  }

  if (finishing) {
    setTimeout(() => setCelebration(true), 280);
  }
};

  const resetJourney = () => {
  setProgress(0);
  setCollection([]);
  setTravelerStage(0);  
  setIsWalking(false);

  setActiveIsland(null);
  setDiscovery(null);
  setLetter(null);
  setCelebration(false);
  setStarted(false);
};

  return (
    <main className="app">
      {!started ? (
        <Welcome onStart={() => setStarted(true)} progress={progress} />
      ) : (
        <Journey
  progress={progress}
  collection={collection}
  statusMessage={statusMessage}
  onOpen={openIsland}
  onReset={resetJourney}
  travelerStage={travelerStage}
  isWalking={isWalking}
/>
      )}

      {activeIsland && (
        <IslandPlayground
          number={activeIsland}
          collected={collection.includes(activeIsland)}
          onCollect={() => collectSecret(activeIsland)}
          onClose={closeIsland}
          onOpenEnvelope={openEnvelope}
        />
      )}

      {discovery && (
        <DiscoveryScene
          number={discovery}
          onClose={closeDiscovery}
          onOpenLetter={openLetter}
        />
      )}

      {letter && (
        <LetterModal
          number={letter}
          progress={progress}
          onClose={closeLetter}
          onDiscover={discoverAndContinue}
        />
      )}

      {celebration && (
        <FinalCelebration onClose={() => setCelebration(false)} />
      )}
    </main>
  );
}

function Welcome({ onStart, progress }) {
  return (
    <section className="welcome-screen">
      <div className="welcome-cloud cloud-a" />
      <div className="welcome-cloud cloud-b" />
      <div className="welcome-stars">✦　✧　·　✦　·　✧</div>

      <div className="welcome-card">
        <div className="mini-label">مَعْهَدُ الإتقان</div>
        <div className="moon">☾</div>
        <div className="flowers">❀　✦　❀</div>
        <h1>رحلتنا معًا</h1>
        <p className="intro">
          إلى معلمتنا الغالية<br />
          <strong>عفاف رياش</strong>
        </p>
        <div className="story">
          <span>المستوى الثاني</span>
          <b>⇐</b>
          <span>المستوى الثالث</span>
        </div>
        <p className="soft-copy">
          ١١ رسالة صغيرة، من ١١ قلبًا…<br />
          اجتمعت لتقول لكِ: شكرًا 🤍
        </p>
        <button className="start-button" onClick={onStart}>
          {progress > 0 ? "أكملي الرحلة" : "ابدئي الرحلة"}
          <span>✦</span>
        </button>
        <div className="welcome-note">هناك أشياء صغيرة مخبّأة على الطريق… 👀</div>
      </div>
    </section>
  );
}

function Journey({
  progress,
  collection,
  statusMessage,
  onOpen,
  onReset,
  travelerStage,
  isWalking,
}) {
  return (
    <section className="journey">
      <div className="sky-decoration">
        <span className="sky-moon">☾</span>
        <span className="cloud cloud-1">☁</span>
        <span className="cloud cloud-2">☁</span>
        <span className="spark spark-1">✦</span>
        <span className="spark spark-2">✧</span>
        <span className="spark spark-3">✦</span>
      </div>

      <header className="journey-header">
        <div>
          <div className="brand">معهد الإتقان <span>✦</span></div>
          <h2>رحلتنا نحو المستوى الثالث</h2>
          <p>إلى معلمتنا عفاف رياش، بكل المحبة 🤍</p>
        </div>
        <div className="progress">
          <div className="progress-text">
            <span>اكتشفتِ</span>
            <strong>{progress} / {TOTAL}</strong>
          </div>
          <div className="progress-bar">
            <span style={{ width: `${(progress / TOTAL) * 100}%` }} />
          </div>
          <div className="progress-stars">
            {Array.from({ length: TOTAL }, (_, i) => (
              <i key={i} className={i < progress ? "on" : ""}>✦</i>
            ))}
          </div>
        </div>
      </header>

      <div className="map-world">
        <div className="map-title">
          <div className="scroll-icon">❀</div>
          <div>
            <b>خريطة الذكريات</b>
            <span>هناك أشياء صغيرة مخبّأة في كل محطة</span>
          </div>
        </div>

        {/* <div className="traveler-note">
          <div className="traveler-avatar">👩🏻‍🦱</div>
          <div>
            <strong>رفيقتك في الرحلة</strong>
            <span>سأمشي معكِ حتى النهاية ✨</span>
          </div>
        </div> */}

        <svg className="island-path" viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <mask id="island-path-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="720">
              <rect width="1000" height="720" fill="white" />
              {[875,625,375,125,125,375,625,875,875,625,375].map((x, i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={[145,145,145,145,370,370,370,370,590,590,590][i]}
                  r="78"
                  fill="black"
                />
              ))}
            </mask>
          </defs>
          <path
            className="path-stroke"
            mask="url(#island-path-mask)"
            d="M875 145
               C800 112 700 178 625 145
               C550 112 450 178 375 145
               C300 112 205 178 125 145
               C78 207 82 309 125 370
               C205 405 300 330 375 370
               C455 410 545 330 625 370
               C705 410 800 330 875 370
               C920 432 918 525 875 590
               C800 628 700 555 625 590
               C545 625 455 555 375 590"
          />
        </svg>

        <div className="island-grid">
          {islands.map((island) => {
            const unlocked = island.id <= progress + 1;
            const discovered = island.id <= progress;
            return (
              <IslandCard
                key={island.id}
                island={island}
                unlocked={unlocked}
                discovered={discovered}
                collected={collection.includes(island.id)}
                onClick={() => onOpen(island.id)}
              />
            );
          })}
        </div>

        <JourneyTraveler
  stage={travelerStage}
  isWalking={isWalking}
/>

        <div className="collection-panel">
          <div className="collection-title">
            <span>🎒</span>
            <div>
              <strong>حقيبة الذكريات</strong>
              <small>كل محطة تمنحكِ شيئًا صغيرًا</small>
            </div>
            <b>{collection.length}/11</b>
          </div>
          <div className="collection-items">
            {islands.map((item) => (
              <span
                key={item.id}
                className={collection.includes(item.id) ? "collected" : ""}
                title={collection.includes(item.id) ? item.secret : "ستجدينها في رحلتكِ"}
              >
                {collection.includes(item.id) ? item.collectible : "？"}
              </span>
            ))}
          </div>
        </div>

        <div className="journey-end">
          <div className={`finish-orb ${progress === TOTAL ? "complete" : ""}`}>
            {progress === TOTAL ? "🌷" : "✦"}
          </div>
          <div>
            <strong>{statusMessage}</strong>
            <span>
              {progress === TOTAL
                ? "ولكل واحدة منّا كلمة أخيرة لكِ..."
                : "اضغطي على الجزيرة المضيئة، واستكشفي ما تخبّئه"}
            </span>
          </div>
        </div>
      </div>

      <footer className="journey-footer">
        <span>صُنعت بحب من طالبات المستوى الثاني ♡</span>
        <button className="restart-button" onClick={onReset}>↺ ابدئي الرحلة من جديد</button>
      </footer>
    </section>
  );
}


function JourneyTraveler({ stage, isWalking }) {
  return (
    <div
      className={`journey-traveler traveler-stage-${stage} ${
        isWalking ? "walking" : ""
      }`}
      aria-hidden="true"
    >
      <img
        className="journey-traveler-image"
        src="./images/traveler.png"
        alt=""
      />

      {isWalking && (
        <div className="journey-walking-hearts">
          ♡ ✦
        </div>
      )}
    </div>
  );
}

function IslandCard({ island, unlocked, discovered, collected, onClick }) {
  return (
    <button
      className={`island-card ${island.kind} ${unlocked ? "unlocked" : "locked"} ${discovered ? "discovered" : ""} ${collected ? "collected" : ""}`}
      onClick={onClick}
      disabled={!unlocked}
    >
      <div className="island-illustration">
        <span className="little-star star-a">✦</span>
        <span className="little-star star-b">✧</span>
        <div className="water-ring" />
        <div className="island-ground">
          <div className="island-detail main">{island.emoji}</div>
          <div className="island-detail flower flower-a">✿</div>
          <div className="island-detail flower flower-b">✿</div>
          {/* <div className="island-detail leaf leaf-a">❧</div>
          <div className="island-detail leaf leaf-b">❧</div> */}
        </div>
        <div className="island-number">
          {collected ? "♡" : discovered ? "✓" : unlocked ? island.id : "🔒"}
        </div>
      </div>
      <span className="island-text">
        <b>{island.title}</b>
        <small>
  {discovered
    ? collected
      ? "تم اكتشافها وجمع تذكارها ♡"
      : "تم اكتشافها ♡"
    : ""}
</small>
      </span>
      {unlocked && !discovered && <span className="tap-hint">استكشفيها ✨</span>}
    </button>
  );
}

function IslandPlayground({ number, collected, onCollect, onClose, onOpenEnvelope }) {
  const island = islands[number - 1];
  const [found, setFound] = useState(collected);

  const handleFind = () => {
    setFound(true);
    onCollect();
  };

  return (
    <div className="playground-backdrop" onClick={onClose}>
      <div className={`playground-scene kind-${island.kind}`} onClick={(e) => e.stopPropagation()}>
        <button className="playground-close" onClick={onClose}>×</button>

        <div className="playground-top">
          <span>المحطة {number}</span>
          <b>{found ? "وجدتِ السر! ✨" : "هناك شيء مخبّأ هنا… 👀"}</b>
        </div>

        <div className="playground-world">
          <div className="playground-cloud pc-a">☁</div>
          <div className="playground-cloud pc-b">☁</div>
          <div className="playground-moon">☾</div>

          <div className="big-island-water" />
          <div className="big-island-ground">
            <div className="big-island-house">{island.emoji}</div>
            <div className="big-flower f1">✿</div>
            <div className="big-flower f2">✿</div>
            <div className="big-leaves">❧　❧</div>
          </div>

          <div className="island-traveler" aria-hidden="true">
  <img
    src="./images/traveler.png"
    alt=""
  />
</div>

          <button
            className={`hidden-secret ${found ? "found" : ""}`}
            onClick={handleFind}
            aria-label={island.action}
          >
            {found ? island.collectible : island.collectible}
          </button>

          {!found && (
            <div className="secret-bubble">{island.action}</div>
          )}

          {found && (
            <div className="found-message">
              <div className="found-emoji">{island.collectible}</div>
              <strong>{island.secret}</strong>
              <span>تذكار أضفناه إلى حقيبتكِ 🎒</span>
            </div>
          )}

          {found && (
            <button className="hidden-envelope" onClick={onOpenEnvelope}>
              <span>💌</span>
              <small>وجدتِ رسالة!</small>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function DiscoveryScene({ number, onClose, onOpenLetter }) {
  const island = islands[number - 1];

  return (
    <div className="discovery-backdrop" onClick={onClose}>
      <div className="discovery-scene" onClick={(e) => e.stopPropagation()}>
        <div className="discovery-sparkles" aria-hidden="true">
          <span>✦</span><span>♡</span><span>✧</span><span>✿</span><span>♡</span>
        </div>

        <div className="discovery-sky">
          <span className="discovery-cloud dc-a">☁</span>
          <span className="discovery-cloud dc-b">☁</span>
          <span className="discovery-moon">☾</span>
        </div>

        <p className="discovery-kicker">سرّ المحطة {number}</p>
        <h2>{island.title}</h2>
        <p className="discovery-caption">لقد عثرتِ على شيء مهم…</p>

        <div className="mini-island-scene">
          <div className="mini-water" />
          <div className="mini-island">
            <div className="mini-flowers">✿　✿　✿</div>
            <div className="mini-house">{island.emoji}</div>
            <div className="mini-grass">❧　❧</div>
          </div>

          <div className="floating-letter">
  <img
    src="./images/letter-envelope.png"
    alt=""
  />
</div>

          <div className="glow-orb" />
        </div>

        <p className="discovery-message">
          يبدو أن هذه الجزيرة كانت تخبّئ رسالة لكِ… 💌
        </p>

        <div className="discovery-actions">
          <button className="stay-button" onClick={onClose}>أعود للخريطة</button>
          <button className="open-envelope-button" onClick={onOpenLetter}>
            افتحي الرسالة
            <span>✦</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function LetterModal({ number, progress, onClose, onDiscover }) {
  const isNew = number === progress + 1;
  const final = number === TOTAL;

  return (
    <div className={`modal-backdrop ${final ? "final-letter-backdrop" : ""}`} onClick={onClose}>
      {final && <div className="final-petals">🌸　✦　🌷　♡　✧　🌸</div>}
      <div className={`letter-modal ${final ? "final-letter-modal" : ""}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>

        <div className="opened-envelope">
          <span className="envelope-back">✉</span>
          <span className="envelope-heart">♥</span>
        </div>

        <p className="modal-kicker">
          {final ? "النهاية الجميلة · ١١ من ١١" : `الجزيرة ${number} · رسالة ${number} من ١١`}
        </p>

        <h2>
          {final
            ? "رسالتنا الأخيرة إلى عفاف 🤍"
            : `رسالة من ${students[number - 1]} 🤍`}
        </h2>

        {final && (
          <p className="final-intro">
            بعد أن جمعتِ كل الذكريات، بقيت كلمة واحدة أردنا أن نقولها جميعًا…
          </p>
        )}

        <div className="letter-frame">
          <img
            src={`/letters/letter-${String(number).padStart(2, "0")}.svg`}
            alt={`رسالة ${students[number - 1]}`}
          />
        </div>

        <div className="modal-actions">
          <button className="back-button" onClick={onClose}>العودة إلى الخريطة</button>
          {isNew ? (
            <button className="discover-button" onClick={onDiscover}>
              {final ? "أنهي الرحلة واحتفلي معنا ✨" : "أضفتُها إلى ذكرياتي ✨"}
            </button>
          ) : (
            <button className="discover-button" onClick={onClose}>جميلة جدًا 🤍</button>
          )}
        </div>
      </div>
    </div>
  );
}

function FinalCelebration({ onClose }) {
  return (
    <div className="celebration-overlay" onClick={onClose}>
      <div className="celebration-card" onClick={(e) => e.stopPropagation()}>
        <div className="celebration-stars">✦ ✧ ✦ ✧ ✦</div>
        <div className="celebration-bloom">🌷</div>
        <p>اكتملت الرحلة!</p>
        <h2>جمعنا لكِ ١١ ذكرى…<br />و١١ قلبًا مليئًا بالامتنان 🤍</h2>
        <div className="celebration-line">❀　♡　❀　♡　❀</div>
        <p className="celebration-small">
          شكرًا لكِ على صبركِ، لطفكِ، وعطائكِ.<br />
          وعلى كل حرفٍ علّمتِنا إيّاه.
        </p>
        <button onClick={onClose}>لنعد إلى الذكريات 🌸</button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
