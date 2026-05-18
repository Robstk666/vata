import React, { useState, useEffect } from 'react';
import { ArrowDownCircle, Download, Send, X, Phone, MapPin, FileText } from 'lucide-react';
import { HERO_IMAGE_URL } from './constants';

const CARDS: any[] = [
  {
    id: 1,
    title: "01. AI + Скорость мышления",
    short: "3 Product-концепции для рынка США. Нажми, чтобы раскрыть.",
    full: ({ openImage }: any) => (
      <div className="space-y-6">
        <p className="text-neutral-400">Вводные: рынок США требует либо виральности, либо жесткой утилитарности. 3 концепции:</p>
        
        <div>
          <h4 className="text-lime-400 text-lg font-bold mb-2">1. DripCheck AI (AI Fashion Roast & Copilot)</h4>
          <p className="text-sm mb-2"><span className="text-white">В чем идея:</span> Пользователь загружает фото наряда. AI-агент с дерзким характером «прожаривает» лук и предлагает, чем его дополнить (ссылки на покупку).</p>
          <p className="text-sm mb-2"><span className="text-white">ЦА:</span> Gen Z, активные пользователи TikTok.</p>
          <p className="text-sm mb-4"><span className="text-white">Монетизация:</span> Freemium + Affiliate Marketing (комиссия от брендов).</p>
          <button 
            onClick={() => openImage('/dripcheck.png')}
            className="flex items-center gap-2 bg-[#252525] text-lime-400 text-xs uppercase tracking-wider font-bold py-2.5 px-6 rounded-full border border-lime-400/30 hover:bg-lime-400 hover:text-black transition-colors shadow-lg"
          >
            Визуал
          </button>
        </div>

        <div>
          <h4 className="text-lime-400 text-lg font-bold mb-2">2. PetPOV (Голос твоего питомца)</h4>
          <p className="text-sm mb-2"><span className="text-white">В чем идея:</span> На базе Vision и Voice AI. Видео питомца анализируется ИИ и накладывается смешная озвучка от первого лица с уникальным характером.</p>
          <p className="text-sm mb-2"><span className="text-white">ЦА:</span> Владельцы животных, контент-мейкеры.</p>
          <p className="text-sm mb-4"><span className="text-white">Виральность:</span> Контент с животными собирает миллионы просмотров в TikTok.</p>
          <button 
            onClick={() => openImage('/petpov.png')}
            className="flex items-center gap-2 bg-[#252525] text-lime-400 text-xs uppercase tracking-wider font-bold py-2.5 px-6 rounded-full border border-lime-400/30 hover:bg-lime-400 hover:text-black transition-colors shadow-lg"
          >
            Визуал
          </button>
        </div>

        <div>
          <h4 className="text-lime-400 text-lg font-bold mb-2">3. BrainDump / ClearMind AI</h4>
          <p className="text-sm mb-2"><span className="text-white">В чем идея:</span> Аудио-first приложение. Наговариваешь мысли в потоке 10 минут, LLM вытаскивает суть и раскладывает: задачи в Notion, встречи в Календарь, идеи в заметки.</p>
          <p className="text-sm mb-2"><span className="text-white">ЦА:</span> Предприниматели, люди с ADHD.</p>
          <p className="text-sm mb-4"><span className="text-white">Монетизация:</span> SaaS-подписка.</p>
          <button 
            onClick={() => openImage('/braindump.png')}
            className="flex items-center gap-2 bg-[#252525] text-lime-400 text-xs uppercase tracking-wider font-bold py-2.5 px-6 rounded-full border border-lime-400/30 hover:bg-lime-400 hover:text-black transition-colors shadow-lg"
          >
            Визуал
          </button>
        </div>
      </div>
    ),
    posClass: "md:top-8 md:left-0 lg:left-4"
  },
  {
    id: 2,
    title: "02. Работа с нейросетями",
    short: "Продающий текст и мой рабочий стек промптов.",
    full: (
      <div className="space-y-6">
        <div>
          <h4 className="text-white font-bold text-lg mb-2">Продающий текст для поста:</h4>
          <p className="text-sm text-neutral-300 italic border-l-2 border-lime-400 pl-4 py-1">
            🤯 Вы сливаете 30% лидов, пока ваши менеджеры спят или пьют кофе. Засекали, сколько времени уходит на ответ клиенту в Telegram? В 2026 году клиент не ждет. Знакомьтесь: ваш новый Senior Sales. Он не ходит в отпуск и закрывает возражения за 3 секунды. Внедрили RAG-агента: квалифицирует, отвечает строго по регламенту (без галлюцинаций), заносит в AmoCRM. Пишите «ДЕМО» в комментарии, скину доступ.
          </p>
        </div>
        
        <div>
          <h4 className="text-lime-400 font-bold text-lg mb-4">Мой рабочий стек промптов (5 штук):</h4>
          <ul className="space-y-4">
            <li className="text-sm">
              <span className="text-white font-bold block mb-1">1. System Prompt для RAG:</span>
              <code className="bg-neutral-800 text-lime-300 px-2 py-1 rounded block mt-1 break-words">"Ты senior-специалист техподдержки. Отвечай строго на основе контекста. Нет ответа = перевожу на оператора."</code>
            </li>
            <li className="text-sm">
              <span className="text-white font-bold block mb-1">2. JSON экстрактор:</span>
              <code className="bg-neutral-800 text-lime-300 px-2 py-1 rounded block mt-1 break-words">"Извлеки Имя, Телефон, Бюджет. Верни СТРОГО валидный JSON, ключи на английском. Больше ничего не пиши."</code>
            </li>
            <li className="text-sm">
              <span className="text-white font-bold block mb-1">3. Vibe-coding (Antigravity):</span>
              <code className="bg-neutral-800 text-lime-300 px-2 py-1 rounded block mt-1 break-words">"Создай React-компонент дашборда (Tailwind). Темная тема, 3 метрики сверху, линейный график Recharts по центру."</code>
            </li>
            <li className="text-sm">
              <span className="text-white font-bold block mb-1">4. Executive Summary:</span>
              <code className="bg-neutral-800 text-lime-300 px-2 py-1 rounded block mt-1 break-words">"Сделай выжимку транскрипции зума. 3 блока: Боли клиента, Action Items (кто что делает), Скрытые риски."</code>
            </li>
            <li className="text-sm">
              <span className="text-white font-bold block mb-1">5. Multi-shot маршрутизация:</span>
              <code className="bg-neutral-800 text-lime-300 px-2 py-1 rounded block mt-1 break-words">"Классифицируй сообщение по категориям: [ЖАЛОБА, ПОКУПКА, ВОПРОС]. Пример: 'Сломался сайт' -{'>'} ЖАЛОБА. Верни только одно слово."</code>
            </li>
          </ul>
        </div>
      </div>
    ),
    posClass: "md:top-8 md:right-0 lg:right-4"
  },
  {
    id: 3,
    title: "03. Vibe Coding / Технологии",
    short: "Стек, инструменты и готовые продукты.",
    full: (
      <ul className="space-y-4 text-sm">
        <li className="flex items-start">
          <span className="text-lime-400 mr-2 mt-1">•</span>
          <div>
            <span className="text-white font-bold">Инструменты:</span> Мой основной стек — <span className="text-lime-300">Antigravity, Google AI Studio и Julius AI</span>. Для баз знаний: <span className="text-lime-300">NotebookLM</span>. Для визуала: <span className="text-lime-300">Midjourney, Nano Banana 2</span>.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-lime-400 mr-2 mt-1">•</span>
          <div>
            <span className="text-white font-bold">Cursor/Lovable/Bolt:</span> С Cursor знаком (они работают схоже), но мой главный инструмент для сборки фронтенда и логики — <span className="text-lime-300 font-bold">Antigravity</span>.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-lime-400 mr-2 mt-1">•</span>
          <div>
            <span className="text-white font-bold">Опыт создания продуктов:</span> Да, полностью собрал и задеплоил MVP для B2B-студии Synapse (<a href="https://synapse-full.vercel.app" target="_blank" className="text-lime-300 hover:underline">synapse-full.vercel.app</a>), который принес 2 реальные продажи. Также собрал систему онбординга (<a href="https://cntb.vercel.app" target="_blank" className="text-lime-300 hover:underline">cntb.vercel.app</a>).
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-lime-400 mr-2 mt-1">•</span>
          <div>
            <span className="text-white font-bold">Что впечатлило:</span> <span className="text-lime-300">NotebookLM</span> (гениально для документов), <span className="text-lime-300">Jules</span> (супер фиксит баги), <span className="text-lime-300">Seedance 2</span> (генерирует фильмовые видосы), <span className="text-lime-300">Nvidia NIM</span> (бесплатные токены для open-source).
          </div>
        </li>
      </ul>
    ),
    posClass: "md:bottom-8 md:left-0 lg:left-4"
  },
  {
    id: 4,
    title: <>04. Личное <br />(Честный срез)</>,
    short: "Почему мне интересна эта позиция и в чем моя сила.",
    full: (
      <ul className="space-y-4 text-sm">
        <li className="flex items-start">
          <span className="text-lime-400 mr-2 mt-1">•</span>
          <div>
            <span className="text-white font-bold">Почему интересна вакансия:</span> Буду честен. На текущей основной работе у меня много свободного времени, которое я пустил в дело — освоил vibe-coding до уровня самостоятельного создания веб-приложений (как тот же Synapse, сделавший 2 продажи). Уходить с основной работы я не планирую (есть бронь от предприятия). Мне интересно развиваться в AI part-time. Вам это супер-выгодно: вы получаете осознанного, взрослого «джуна» с крутым управленческим бэкграундом, чьи решения по эффективности и пониманию бизнеса перебьют любого зумера.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-lime-400 mr-2 mt-1">•</span>
          <div>
            <span className="text-white font-bold">Сильная сторона:</span> Объединение бизнес-логики и технологий (Tech-COO). Я понимаю, откуда берутся деньги, поэтому собираю инструменты, которые могут решать проблемы.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-lime-400 mr-2 mt-1">•</span>
          <div>
            <span className="text-white font-bold">Стресс:</span> Я бывший операционный директор (штат 30+). Хаос — моя среда обитания. Декомпозирую пожар на задачи и закрываю спринтами.
          </div>
        </li>
      </ul>
    ),
    posClass: "md:bottom-8 md:right-0 lg:right-4"
  }
];

// Optional: Type definition
type CardType = typeof CARDS[0];

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Lock scroll when splash screen is active and handle start
  useEffect(() => {
    if (!started) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      window.scrollTo(0, 0);
    }

    const handleStart = () => {
      if (!started) setStarted(true);
    };
    
    // Add both wheel and touch events for better coverage
    window.addEventListener('wheel', handleStart, { passive: true });
    window.addEventListener('touchstart', handleStart, { passive: true });
    window.addEventListener('click', handleStart, { passive: true });
    window.addEventListener('keydown', handleStart, { passive: true });
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleStart);
      window.removeEventListener('touchstart', handleStart);
      window.removeEventListener('click', handleStart);
      window.removeEventListener('keydown', handleStart);
    };
  }, [started]);

  const handleCardClick = (card: CardType) => {
    setActiveCard(card);
    // Allow DOM to update before triggering transition
    setTimeout(() => setModalOpen(true), 10);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setActiveCard(null), 300); // Wait for transition
  };

  return (
    <div className="relative w-full min-h-screen bg-[#171717] font-inter overflow-x-hidden selection:bg-lime-400 selection:text-black">
      
      {/* START SCREEN */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#171717] transition-all duration-1000 ease-in-out
          ${started ? 'opacity-0 pointer-events-none -translate-y-full blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}
      >
         <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-white text-center mb-8 uppercase px-4 max-w-5xl leading-tight tracking-wide">
           Тестовое задание <br className="hidden md:block" /> от Роберта Гржимайло
         </h1>
         <div 
           className="flex flex-col items-center animate-bounce text-lime-400 mt-16 cursor-pointer"
           onClick={() => setStarted(true)}
         >
           <span className="text-sm uppercase tracking-widest mb-3 font-bold opacity-80">Свайпни / Прокрути вниз</span>
           <ArrowDownCircle size={40} className="opacity-80" />
         </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className={`w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 transition-all duration-1000 delay-300 ease-out
        ${started ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
        
        {/* DESKTOP LAYOUT CONTAINER */}
        <div className="relative w-full max-w-[1400px] h-full min-h-[85vh] flex flex-col items-center justify-center pt-10 md:pt-0">
          
          {/* CENTER PHOTO & CTA */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-md">
            <div className="relative w-[280px] md:w-[350px] lg:w-[400px] aspect-[3/4] flex justify-center items-end">
               <img 
                 src={HERO_IMAGE_URL} 
                 alt="Роберт Гржимайло"
                 className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_25px_rgba(163,230,53,0.15)] transition-all duration-700 hover:drop-shadow-[0_0_40px_rgba(163,230,53,0.3)] grayscale hover:grayscale-0"
                 style={{ 
                   maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', 
                   WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' 
                 }}
               />
            </div>
            
            {/* Neon Plaque */}
            <div className="z-20 mt-[-30px] bg-neutral-900 border border-lime-400 px-8 py-3 rounded-full shadow-[0_0_25px_rgba(163,230,53,0.4)] backdrop-blur-md">
              <p className="text-lime-400 font-bold tracking-[0.4em] text-sm md:text-base drop-shadow-lg uppercase ml-1">
                AI - BUILDER
              </p>
            </div>

            {/* CTA Buttons & Contact Info */}
            <div className="flex flex-col items-center mt-8 z-30 relative w-full pb-8 md:pb-0 gap-6">
              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl px-4">
                <a 
                  href="https://hh.ru/resume/11b439efff107ee6cf0039ed1f627671716265?hhtmFrom=resume_list" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-neutral-800 text-white border border-white/20 rounded-[35px] font-bold hover:bg-white hover:text-black hover:border-white transition-all h-[72px] md:h-[84px] w-full group shadow-lg"
                >
                  <FileText size={20} className="shrink-0 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="uppercase tracking-wider text-xs leading-tight flex flex-col items-center text-center">
                    <span>Резюме</span>
                    <span>HH</span>
                  </div>
                </a>
                <a 
                  href="/cv.pdf" 
                  download="Robert_Grzhimaylo_CV.pdf"
                  className="flex items-center justify-center gap-2.5 bg-neutral-800 text-white border border-white/20 rounded-[35px] font-bold hover:bg-white hover:text-black hover:border-white transition-all h-[72px] md:h-[84px] w-full group shadow-lg"
                >
                  <Download size={20} className="shrink-0 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="uppercase tracking-wider text-[10px] leading-[1.3] flex flex-col items-center text-center">
                    <span className="text-xs mb-0.5">PDF</span>
                    <span>(как просили</span>
                    <span>в задании)</span>
                  </div>
                </a>
                <a 
                  href="https://t.me/rob_serg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-lime-400 text-neutral-900 border border-lime-400 rounded-[35px] font-bold hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all h-[72px] md:h-[84px] w-full group shadow-lg"
                >
                  <Send size={20} className="shrink-0 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="uppercase tracking-wider text-xs leading-tight flex flex-col items-center text-center">
                    <span>Telegram</span>
                    <span>Связь</span>
                  </div>
                </a>
              </div>

              {/* Contact Info (like image) */}
              <div className="w-full max-w-[320px] bg-neutral-900/60 border border-white/5 rounded-2xl p-5 flex flex-col gap-4 shadow-xl backdrop-blur-sm">
                 <div className="flex items-center gap-4 text-neutral-300">
                    <Phone size={18} className="text-lime-400" />
                    <span className="text-[15px] font-medium tracking-wide">+7 (985) 402-09-86</span>
                 </div>
                 <div className="flex items-center gap-4 text-neutral-300">
                    <MapPin size={18} className="text-lime-400" />
                    <span className="text-[15px] font-medium tracking-wide">Москва, Россия</span>
                 </div>
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className="w-full mt-12 md:mt-0 md:absolute md:inset-0 pointer-events-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:block h-full relative">
              {CARDS.map(card => (
                <div 
                  key={card.id} 
                  className={`md:absolute ${card.posClass} md:w-[320px] lg:w-[360px] xl:w-[400px] pointer-events-auto`}
                >
                  <div 
                    onClick={() => handleCardClick(card)}
                    className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 p-6 lg:p-8 rounded-3xl cursor-pointer group transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:border-lime-400/60 hover:shadow-[0_10px_40px_rgba(163,230,53,0.15)] flex flex-col h-full relative overflow-hidden"
                  >
                    {/* Neon Top Edge Accent */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <h3 className="font-display text-xl lg:text-2xl text-white uppercase group-hover:text-lime-400 transition-colors mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm lg:text-base text-neutral-400 leading-relaxed font-medium">
                      {card.short}
                    </p>
                    
                    <div className="mt-6 flex items-center gap-3 text-xs text-lime-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 font-bold uppercase tracking-widest transform translate-x-0 md:-translate-x-4 md:group-hover:translate-x-0">
                      <span className="w-6 h-[2px] bg-lime-400 inline-block" />
                      Открыть
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {activeCard && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg transition-all duration-300
            ${modalOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleCloseModal}
        >
          <div 
            className={`bg-neutral-900 border border-lime-400/40 w-full max-w-2xl rounded-3xl p-6 md:p-10 relative shadow-[0_0_80px_rgba(163,230,53,0.15)] transition-all duration-500 transform
              ${modalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-2 bg-white/5 rounded-full text-white hover:bg-lime-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="font-display text-2xl md:text-3xl uppercase text-white mb-6 border-b border-white/10 pb-6 pr-12">
              {activeCard.title}
            </h2>
            
            <div className="text-neutral-300 leading-relaxed space-y-4 text-sm md:text-base font-medium max-h-[60vh] overflow-y-auto custom-scrollbar pr-4">
              {typeof activeCard.full === 'function' ? activeCard.full({ openImage: setPreviewImage }) : activeCard.full}
            </div>
          </div>
        </div>
      )}

      {/* IMAGE PREVIEW MODAL */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setPreviewImage(null)}
        >
          <button 
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-lime-400 hover:text-black transition-colors z-10"
          >
            <X size={24} />
          </button>
          <img 
             src={previewImage} 
             alt="Preview" 
             className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(163,230,53,0.1)]"
             onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
};

export default App;

