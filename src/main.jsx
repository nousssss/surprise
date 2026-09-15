
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import travelerImage from "./assets/traveler.png";
import letterEnvelopeImage from "./assets/letter-envelope.png";

const studentLetters = [
  { id: 1,  name: "سهيلة عمراوي",      type: "text",  text: `إلى معلمتي الغالية 🌷عفاف رياش🌷

إلى تلك التي لطالما كانت سندا في رحلة تعلم أحڪام ڪتاب اللّٰه 

كنتِ المعلّمة والأخت والصّديقة في الوقت ذاته أعجبتني روحك الطيبة والمرحة 
وأعجبتني طريقتڪ في تقديم الدّروس وشرحها وعدم تهاونڪ في تبسيط كل ما أشڪل علينا 
أعجبني اهتمامك بطالباتك وتشجيعك لهن في كل الأوقات.. 

لا أخفيك أنك ڪنت جزءا من محاولاتي المتواصلة و جهادي في تحصيل الدرجات و اجتياز الامتحانات
كوني وجدت فيك المعلمة التي أريدها وأخاف أن أخسرها 

جزاك اللّٰه عنّا خير الجزاء في الدّنيا والآخرة  وكتب اللّٰه أجرك ورزقك من واسع فضله العظيم 
أحبّك في اللّٰه 🌷` },
  { id: 2,  name: "كوثر إبراهيم",      type: "image", file: "letter-02.png" },
  { id: 3,  name: "فاطمة عياد",        type: "image", file: "letter-03.png" },
  { id: 4,  name: "إيناس بشيري",       type: "text",  text: `...` },
  { id: 5,  name: "الحاسي جهيدة",      type: "audio", file: "letter-05.m4a" },
  { id: 6,  name: "سمراء بن فليس",     type: "audio", file: "letter-06.m4a" },
  { id: 7,  name: "حفصة حمدان",        type: "text",  text: `رسالة إلى معلمتي الغالية عفاف رياش من تلميذتيك حفصة حمدان 🥰🥰
        كانت بدايتي مع القرآن تتذبذب بين الشغف والرهبة. كنتُ أفتح المصحف وأشعر بجمال الآيات، لكن عند التلاوة، كانت  أخشى الخطأ، وأخجل من ألا تُسلس لي مخارج الحروف. وفي أول يوم دخلتُ فيه الحلقة، كان قلبي ينبض بوجل وأتساءل في سرّي: هل سأنجح يوماً في الترتيل كما أتمنى؟😰

وعند سماعي صوتك الحنون يا أستاذتي الغالية.  نعم في تلك اللحظة بالذات، تغير كل شيء. لم أجد أستاذة تصوب الأخطاء بجفاف، بل وجدتُ روحاً حانية تستقبل تعثري بالابتسامة، وتستبدل خوفي بالسكينة.
كنتِ تصبرين على خطئي  دون عجل وتأخذين بيدي في أحكام التجويد خطوة بخطوة. إن أخطأتُ أخذتِني بالرفق، وإن أتقنتُ غمرتِني بالثناء والدعاء. بفضل صبركِ وحسن توجيهكِ، لم تعد الحلقة مجرد درس، بل أصبحت واحتي الدافئة التي أفرّ إليها من زحام الحياة.

          مع مرور الأيام، تلاشت الرائبة واختفت اللعثمة، وأشرقت الحروف على لساني بنغم يملؤه الحب والخشوع. لم تكتفي بتعليمني كيف أضبط الغنة أو أمد الحروف، بل علمتني  أشياء كثيرة أزهر غرسكِ في قلبي، وأصبح القرآن رفيقي وسكني. ومازلت أتطلع ان أتقدم وأتحسن حتي اصبح فردا تفتخرين به أنك كنتي معلمتي وسأبذل بإذن الله قصارى جهدي فساعدوني فيما تبقى  ولن أنسى ذلك ماحييت فمكانتك عندي عظيمة

أستاذتي الفاضلة 😘عفاف 😘
لكِ مني كل الامتنان والتقدير. شكراً لأنكِ كنتِ النور الذي أضاء لي طريق كتاب الله، والشمعة التي احترقت لتستنير أرواحنا. إن كل آية أرتلها اليوم بصوت مطمئن هي ثمرة من ثمار صبركِ وعطائكِ.
أسأل الله العظيم أن يرفع قدركِ في عليين، وأن يجعل كل حرف تعلمته منكِ نوراً لكِ يوم القيامة، وتاج وقار يكلل رأسكِ ورأس والديكِ في الجنة. جزاكِ الله عني وعن كتاب الله خير الجزاء.
 فقصتي معك معلمتي ليست مجرد حصص دراسية بل هي غرس ممتد وأثر لا يزول زال  سأسعى جاهدة لتحقيق الأفضل شكرا لأنك كنت النور الذي أخذ  بيدي نحو كلا م الله  احبكككك معلنتيييي 🥰😘🥰` },
  { id: 8,  name: "كوثر بن حمزة",      type: "image", file: "letter-08.png" },
  { id: 9,  name: "سارة البعدوي",      type: "text",  text: `إلى من ضحت بوقتها وجهدها ونالت ثمار تعبها..لك استاذتنا عفاف♥️
، شكراً لكِ بلا حدود. لقد كنتِ لنا نعمة المعلمة والموجهة، تصححين الخطأ برفق، وتزيدين العزم بالكلمة الطيبة.

شكرًا لكِ لأنكِ لم تعلّمينا القرآن فقط، بل فتحتِ لنا بابًا إلى نورٍ يحيي القلب ويهدي الروح.
كل حرف أخذناه منكِ كان بركة، وكل توجيهٍ منكِ كان خطوة تقرّبنا من الله.
نسأل الله أن يجعل أثركِ في أعمارنا صدقة جارية لا تنقطع، وأن يمنحكِ من الخير ما يفوق عطائكِ.

لكِ الامتنان كله، والدعاء الصادق دائمًا.` },
  { id: 10, name: "مريم السيدي",       type: "image", file: "letter-10.png" },
  { id: 11, name: "نعيمة شوافي",       type: "text",  text: `بسم الله الرحمان الرحيم 
إلى معلمتي الغالية على قلبي عفاف 
تتسابق الكلمات فتتزاحم العبارات لتنظم عقد الشكر الذي تستحقينه.
هنيئا لي لأنني طالبة لمعلمة مختلفة عن الجميع. جميلة الخلق و الروح و عذبة النصح و الكلمات، تميزت بطيبة قلبها و ابتسامتها و اسلوبها و نصحها و ارشادها.
العبارات لا تكفي لوصف امتناني و محبتي و احترامي و شكري لك معلمتي الغالية.
كم مرة فترت عزيمتنا فشددتي فيها هممنا و بذلت وقتك للجميع تكرما و صبرتي رغم المصاعب بثبات.
كنتي العون و كنت السند بعد الله سبحانه و تعالى في تجاوز الصعوبات كنت كسحابةمعطأة سقت الأرض فاخضرت.جازاك ربي عنا خير الجزاء و البسك و والديك تاج الوقار.
يا معلمة القران 
أنت على ثغر من ثغورالامة
فسدي الثغور.❤️
و اقيمي حصون الحق في قلبك
فانت على اعظم منبر للدعوة💚
طالبتك المحبة نعيمة.` },
  { id: 12, name: "سندس رفرافي",       type: "text",  text: `إلى معلمتي الغالية عفاف 🤍🌿

معلمتي عفاف،
لا أدري كيف يمكن للكلمات أن تفيكِ حقكِ، وكيف يمكن لرسالة صغيرة أن تحمل كل الامتنان الذي في قلبي لكِ.

شكرًا لأنكِ لم تكوني معلمةً للقرآن فحسب، بل كنتِ أثرًا جميلًا يذكّرنا دائمًا بأن كلام الله ليس صفحاتٍ تُحفظ، وإنما نورٌ يسكن القلب، وحياةٌ تُعاش.

شكرًا على كل حرفٍ علّمتِنيه، وكل تصحيحٍ صححتِه، وكل مرةٍ شجعتِني فيها، وكل صبرٍ بذلتِه معنا دون أن نشعر بثقله. قد تمرّ بعض المواقف عابرةً في يومكِ، لكنها قد تبقى في قلب طالبتكِ عمرًا كاملًا.

أسأل الله أن يجعل كل حرفٍ تعلمناه على يديكِ حسنةً تجري إليكِ ما دام القرآن يُتلى، وأن يكتب لكِ أجر كل آيةٍ رددناها، وكل قلبٍ أحب القرآن بسببكِ، وكل خطوةٍ خطوناها في طريقه.

اللهم اجزِ معلمتي عفاف عنّا خير الجزاء، وبارك لها في عمرها وعملها، وأنر قلبها بالقرآن كما كانت سببًا في إنارة قلوبنا به، وارفعها به في الدنيا والآخرة، واجعلها من أهل القرآن وخاصته.

معلمتي الغالية، سيبقى لكِ في القلب مكانٌ لا يشبهه مكان، وسيبقى أثركِ أجمل من أن يُنسى.
جزاكِ الله عنّا خيرًا كثيرًا، وكتب لكِ من السعادة والطمأنينة والبركة بقدر ما منحتِنا من علمٍ ونور. 🤍🌿

محبتكِ وامتنانكِ دائمًا،
طالبتكِ التي تفخر أن للقرآن معلمةً مثل عفاف. 🤍` },
  { id: 13, name: "آية مذكور",         type: "image", file: "letter-13.png" },
  { id: 14, name: "مباركة الغالي",     type: "text",  text: `🌻شكر وتقدير للمعلمة عفاف رياش 👑

كل الشكر والامتنان لك معلمتي  الفاضلة  🤍📖
على عطائك الصادق، وصبرك الجميل، وحرصك الدائم على غرس حبّ القرآن في القلوب قبل الألسنة 🌿

جزاكِ الله خير الجزاء على كل حرف علّمتِه،
وعلى كل وقت بذلتِه، وعلى كل أثر طيب تركتِه في نفوس طالباتك 🤲💫
نسأل الله أن يجعل ذلك في ميزان حسناتك،
وأن يبارك في علمك وعملك، ويجعل القرآن شفيعًا لك يوم القيامة 🌸📖

شكرًا لكِ من القلب 🌙🤍
فالمعلّم أثر… وأنتِ أثرٌ جميل لا يُنسى 🕊️ طالبتك🥰 مباركة الغالي🥰                            ستبقين في القلب رغم الفراق  🥲` },
  { id: 15, name: "إيمان رمضان",       type: "image", file: "letter-15.png" },
];

const TOTAL = studentLetters.length;
const students = studentLetters.map((item) => item.name);

const islands = [
  { id: 1, emoji: "🌸", title: "المحطة ١", caption: "بداية الحكاية", collectible: "🌸", secret: "وجدتِ زهرة صغيرة! ✿", action: "اضغطي على الزهرة", kind: "garden" },
  { id: 2, emoji: "🏡", title: "المحطة ٢", caption: "ذكرى جميلة", collectible: "🦋", secret: "فراشة صغيرة كانت تنتظركِ! 🦋", action: "هل رأيتِ الفراشة؟", kind: "home" },
  { id: 3, emoji: "🌳", title: "المحطة ٣", caption: "لحظة لا تُنسى", collectible: "🐦", secret: "حتى العصفور جاء ليستمع! 🐦", action: "اضغطي على العصفور", kind: "tree" },
  { id: 4, emoji: "🪻", title: "المحطة ٤", caption: "من القلب", collectible: "🏮", secret: "أنرتِ الفانوس! ✨", action: "أضيئي الفانوس", kind: "gazebo" },
  { id: 5, emoji: "🌷", title: "المحطة ٥", caption: "كلمات امتنان", collectible: "🎀", secret: "وجدتِ شريطة جميلة! 🎀", action: "خذي الشريطة", kind: "garden2" },
  { id: 6, emoji: "⛺", title: "المحطة ٦", caption: "محطة دافئة", collectible: "📖", secret: "هناك كتاب صغير هنا… 📖", action: "افتحي الكتاب", kind: "tent" },
  { id: 7, emoji: "🌴", title: "المحطة ٧", caption: "معًا في الطريق", collectible: "🩷", secret: "قلب صغير لكِ! 🩷", action: "التقطي القلب", kind: "home2" },
  { id: 8, emoji: "💜", title: "المحطة ٨", caption: "أثر طيب", collectible: "🪻", secret: "زهرة اللافندر تهديكِ رائحتها 🌿", action: "المسي الزهرة", kind: "pergola" },
  { id: 9, emoji: "🏮", title: "المحطة ٩", caption: "من ذكرياتنا", collectible: "🌙", secret: "القمر ظهر لكِ! 🌙", action: "المسي القمر", kind: "lantern" },
  { id: 10, emoji: "🕌", title: "المحطة ١٠", caption: "اقتربنا...", collectible: "⭐", secret: "وجدتِ نجمة جميلة! ⭐", action: "التقطي النجمة", kind: "dome" },
  { id: 11, emoji: "🌿", title: "المحطة ١١", caption: "كلمة أخرى من القلب", collectible: "🤍", secret: "وجدتِ قلبًا أبيض صغيرًا 🤍", action: "المسي القلب", kind: "garden3" },
  { id: 12, emoji: "🕊️", title: "المحطة ١٢", caption: "دعاء جميل", collectible: "🕊️", secret: "حمامة سلام انضمّت إلى الرحلة 🕊️", action: "اقتربي من الحمامة", kind: "dove" },
  { id: 13, emoji: "🪷", title: "المحطة ١٣", caption: "كلمة دافئة", collectible: "🪷", secret: "وجدتِ زهرة لوتس صغيرة 🪷", action: "المسي الزهرة", kind: "lotus" },
  { id: 14, emoji: "🌼", title: "المحطة ١٤", caption: "قرب النهاية", collectible: "🌼", secret: "زهرة أخيرة قبل المحطة الأخيرة 🌼", action: "التقطي الزهرة", kind: "meadow" },
  { id: 15, emoji: "🌺", title: "المحطة ١٥", caption: "المحطة الأخيرة", collectible: "💗", secret: "وصلتِ إلى قلب الرحلة كله 💗", action: "افتحي المحطة الأخيرة", kind: "final" },
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
    if (progress < 5) return "بدأت الذكريات تتجمع 🤍";
    if (progress < 9) return "كم رسالة جميلة اكتشفنا! ✨";
    if (progress < 13) return "قطعنا طريقًا طويلًا معًا 🌷";
    if (progress < TOTAL) return "بقيت محطات قليلة… والمفاجأة تقترب 💗";
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
      setTravelerStage(Math.min(nextStage, TOTAL - 1));

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
          ١٥ رسالة صغيرة، من ١٥ قلبًا…<br />
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
          <p>إلى معلمتنا عفاف رياش، بكل حب 🤍</p>
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

        <svg className="island-path" viewBox="0 0 1000 940" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <mask id="island-path-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="940">
              <rect width="1000" height="940" fill="white" />
              {[875,625,375,125,125,375,625,875,875,625,375,125,125,375,625].map((x, i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={[120,120,120,120,350,350,350,350,580,580,580,580,810,810,810][i]}
                  r="78"
                  fill="black"
                />
              ))}
            </mask>
          </defs>
          <path
            className="path-stroke"
            mask="url(#island-path-mask)"
            d="M875 120
               C800 88 700 152 625 120
               C550 88 450 152 375 120
               C300 88 205 152 125 120
               C78 185 82 288 125 350
               C205 392 300 308 375 350
               C455 392 545 308 625 350
               C705 392 800 308 875 350
               C922 415 918 518 875 580
               C800 622 700 538 625 580
               C545 622 455 538 375 580
               C295 622 205 538 125 580
               C78 645 82 748 125 810
               C205 852 300 768 375 810
               C455 852 545 768 625 810"
          />
        </svg>

        <div className="island-grid">
          <svg
            className="mobile-island-path"
            viewBox="0 0 100 1500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="mobilePathGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d787a0" />
                <stop offset="48%" stopColor="#b993b7" />
                <stop offset="100%" stopColor="#8eaeb1" />
              </linearGradient>

              <mask id="mobile-path-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="1500">
                <rect width="100" height="1500" fill="white" />
                {Array.from({ length: TOTAL }, (_, i) => (
                  <circle
                    key={i}
                    cx={i % 2 === 0 ? 75 : 25}
                    cy={50 + i * 100}
                    r="15"
                    fill="black"
                  />
                ))}
              </mask>
            </defs>

            <path
              className="mobile-path-shadow"
              d="M75 50
                 C75 88 25 112 25 150
                 C25 188 75 212 75 250
                 C75 288 25 312 25 350
                 C25 388 75 412 75 450
                 C75 488 25 512 25 550
                 C25 588 75 612 75 650
                 C75 688 25 712 25 750
                 C25 788 75 812 75 850
                 C75 888 25 912 25 950
                 C25 988 75 1012 75 1050
                 C75 1088 25 1112 25 1150
                 C25 1188 75 1212 75 1250
                 C75 1288 25 1312 25 1350
                 C25 1388 75 1412 75 1450"
            />
            <path
              className="mobile-path-stroke"
              mask="url(#mobile-path-mask)"
              d="M75 50
                 C75 88 25 112 25 150
                 C25 188 75 212 75 250
                 C75 288 25 312 25 350
                 C25 388 75 412 75 450
                 C75 488 25 512 25 550
                 C25 588 75 612 75 650
                 C75 688 25 712 25 750
                 C25 788 75 812 75 850
                 C75 888 25 912 25 950
                 C25 988 75 1012 75 1050
                 C75 1088 25 1112 25 1150
                 C25 1188 75 1212 75 1250
                 C75 1288 25 1312 25 1350
                 C25 1388 75 1412 75 1450"
            />

            <g className="mobile-path-sparkles">
              <circle cx="50" cy="100" r="1.4" />
              <circle cx="50" cy="300" r="1.4" />
              <circle cx="50" cy="500" r="1.4" />
              <circle cx="50" cy="700" r="1.4" />
              <circle cx="50" cy="900" r="1.4" />
              <circle cx="50" cy="1100" r="1.4" />
              <circle cx="50" cy="1300" r="1.4" />
            </g>
          </svg>

          {islands.map((island) => {
            const discovered = island.id <= progress;
            const current = island.id === progress + 1;
            const unlocked = discovered || current;

            return (
              <IslandCard
                key={island.id}
                island={island}
                unlocked={unlocked}
                discovered={discovered}
                collected={collection.includes(island.id)}
                current={current}
                onClick={() => onOpen(island.id)}
              />
            );
          })}
          <JourneyTraveler
            stage={travelerStage}
            isWalking={isWalking}
          />
        </div>

        <div className="collection-panel">
          <div className="collection-title">
            <span>🎒</span>
            <div>
              <strong>حقيبة الذكريات</strong>
            </div>
            <b>{collection.length}/{TOTAL}</b>
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
                : "اضغطي على الجزيرة المضيئة، واكتشفي ما تخبّئه"}
            </span>
          </div>
        </div>
      </div>

      <footer className="journey-footer">
        <span>صُنعت بحب من طالباتك ♡</span>
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
        src={travelerImage}
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

function IslandCard({
  island,
  unlocked,
  discovered,
  collected,
  current,
  onClick,
}) {
  return (
    <button
      className={`island-card ${island.kind} ${
        unlocked ? "unlocked" : "locked"
      } ${discovered ? "discovered" : ""} ${
        collected ? "collected" : ""
      } ${current ? "current" : ""}`}
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
      {current && !discovered && <span className="tap-hint">اكتشفيها ✨</span>}
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
    src={travelerImage}
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
    src={letterEnvelopeImage}
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

function LetterContent({ letterData }) {
  const [assetError, setAssetError] = useState(false);

  if (letterData.type === "text") {
    return (
      <div className="text-letter-card">
        <div className="text-letter-decoration">❀　♡　✦</div>
        {letterData.text?.trim() ? (
          <p>{letterData.text}</p>
        ) : (
          <div className="letter-placeholder">
            <span>📝</span>
            <strong>الرسالة النصية جاهزة للإضافة</strong>
            <small>
              ضعي نص رسالة {letterData.name} في خانة <code>text</code> داخل
              <br />
              <code>studentLetters</code> في ملف <code>main.jsx</code>.
            </small>
          </div>
        )}
      </div>
    );
  }

  const assetUrl = `${import.meta.env.BASE_URL}letters/${letterData.file}`;

  if (letterData.type === "image") {
    return (
      <div className="image-letter-card">
        {!assetError ? (
          <img
            className="student-letter-image"
            src={assetUrl}
            alt={`رسالة ${letterData.name}`}
            onError={() => setAssetError(true)}
          />
        ) : (
          <AssetPlaceholder
            icon="🖼️"
            title={`أضيفي صورة رسالة ${letterData.name}`}
            filename={letterData.file}
          />
        )}
      </div>
    );
  }

  if (letterData.type === "audio") {
    return (
      <div className="audio-letter-card">
        <div className="audio-letter-icon">🎧</div>
        <strong>رسالة صوتية من {letterData.name}</strong>
        <span>اضغطي على التشغيل واستمعي إليها 🤍</span>

        {!assetError ? (
          <audio
            className="voice-player"
            controls
            preload="metadata"
            src={assetUrl}
            onError={() => setAssetError(true)}
          >
            متصفحكِ لا يدعم تشغيل الصوت.
          </audio>
        ) : (
          <AssetPlaceholder
            icon="🎙️"
            title={`أضيفي التسجيل الصوتي لـ ${letterData.name}`}
            filename={letterData.file}
          />
        )}
      </div>
    );
  }

  return null;
}

function AssetPlaceholder({ icon, title, filename }) {
  return (
    <div className="asset-placeholder">
      <span>{icon}</span>
      <strong>{title}</strong>
      <small>
        ضعي الملف داخل
        <br />
        <code>public/letters/{filename}</code>
      </small>
    </div>
  );
}

function LetterModal({ number, progress, onClose, onDiscover }) {
  const isNew = number === progress + 1;
  const final = number === TOTAL;
  const letterData = studentLetters[number - 1];

  return (
    <div className={`modal-backdrop ${final ? "final-letter-backdrop" : ""}`} onClick={onClose}>
      {final && <div className="final-petals">🌸　✦　🌷　♡　✧　🌸</div>}

      <div
        className={`letter-modal ${final ? "final-letter-modal" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>×</button>

        <div className="opened-envelope">
          <span className="envelope-back">✉</span>
          <span className="envelope-heart">♥</span>
        </div>

        <p className="modal-kicker">
          {final
            ? "المحطة الأخيرة · ١٥ من ١٥"
            : `الجزيرة ${number} · رسالة ${number} من ${TOTAL}`}
        </p>

        <h2>{`رسالة من ${letterData.name} 🤍`}</h2>

        {final && (
          <p className="final-intro">
            وصلتِ إلى آخر محطة في رحلتنا… بقيت هذه الرسالة، ثم مفاجأتنا الأخيرة لكِ ✨
          </p>
        )}

        <div className={`letter-content letter-type-${letterData.type}`}>
          <LetterContent letterData={letterData} />
        </div>

        <div className="modal-actions">
          <button className="back-button" onClick={onClose}>
            العودة إلى الخريطة
          </button>

          {isNew ? (
            <button className="discover-button" onClick={onDiscover}>
              {final ? "أنهي الرحلة واحتفلي معنا ✨" : "أضفتُها إلى ذكرياتي ✨"}
            </button>
          ) : (
            <button className="discover-button" onClick={onClose}>
              جميلة جدًا 🤍
            </button>
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
        <h2>جمعنا لكِ ١٥ ذكرى…<br />و١٥ قلبًا مليئًا بالامتنان 🤍</h2>
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
