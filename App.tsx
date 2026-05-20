import React, { useState, useEffect } from 'react';
import { ArrowUpCircle, Download, Send, X, Phone, MapPin, FileText } from 'lucide-react';
import { HERO_IMAGE_URL } from './constants';

const CARDS: any[] = [
  {
    id: 1,
    title: "01. Нейрофотосессия",
    short: "Профессиональные фотографии, сгенерированные с помощью ИИ.",
    full: ({ openImage }: any) => (
      <div className="space-y-6">
        <p className="text-neutral-400">Примеры нейрофотосессий. Кликните на изображение для увеличения.</p>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <div 
              key={num}
              onClick={() => openImage(`/neurophoto/${num}.png`)}
              className="aspect-square bg-neutral-800 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-lime-400 transition-colors group relative"
            >
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500 group-hover:text-lime-400 text-xs z-0">
                Фото {num}
              </div>
              <img 
                src={`/neurophoto/${num}.png`} 
                alt={`Нейрофото ${num}`}
                className="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLElement).style.opacity = '0';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    ),
    posClass: "md:top-4 md:left-0 lg:left-4"
  },
  {
    id: 2,
    title: "02. Видео",
    short: "Генерация и обработка видео с использованием нейросетей.",
    full: ({ openImage }: any) => (
      <div className="space-y-6">
        <p className="text-neutral-400">Примеры сгенерированного видео. Нажмите для просмотра.</p>

        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5].map(num => (
            <div 
              key={num}
              onClick={() => openImage(`/video/${num}.mp4`)}
              className="aspect-video bg-neutral-900 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-lime-400 transition-all duration-300 group relative flex items-center justify-center"
            >
              {/* Play button icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-1">
                <div className="w-10 h-10 rounded-full bg-lime-400/20 border border-lime-400/40 flex items-center justify-center group-hover:bg-lime-400 group-hover:border-lime-400 transition-all duration-300">
                  <svg className="w-4 h-4 text-lime-400 group-hover:text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="text-xs text-neutral-500 group-hover:text-lime-400 transition-colors">Видео {num}</span>
              </div>
              {/* Lazy thumbnail — preload=none не грузит видео в фоне */}
              <video 
                src={`/video/${num}.mp4`}
                preload="none"
                className="absolute inset-0 w-full h-full object-cover opacity-0"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
          ))}
        </div>

        {/* Yandex Disk fallback */}
        <div className="mt-2 p-4 rounded-xl border border-white/10 bg-neutral-800/40">
          <p className="text-xs text-neutral-400 mb-3">
            🐌 Если видео долго загружается — смотрите сразу на Яндекс.Диске:
          </p>
          <a
            href="https://disk.yandex.ru/d/1BfFHeyLg5yeug"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#FC3F1D] text-white font-bold rounded-xl hover:bg-[#e8361a] transition-colors uppercase tracking-wider text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.1 6H12V2h1.1C16.2 2 18 3.8 18 6.4c0 1.8-.9 3.1-2.2 3.8L18 14h-2.3l-2.6-3.6h-.1V14H11V6h2.1zm0 3c1 0 1.9-.6 1.9-1.6 0-1-.9-1.6-1.9-1.6h-.1v3.2h.1zM7 2h2v12H7V8.5L4.5 14H2.3l2.8-5.8C3.8 7.5 3 6.5 3 5.2 3 3.2 4.8 2 7 2zm0 2c-.9 0-2 .5-2 1.5S6.1 7 7 7h0V4z"/>
            </svg>
            Открыть на Яндекс.Диске
          </a>
        </div>
      </div>
    ),
    posClass: "md:top-4 md:right-0 lg:right-4"
  },
  {
    id: 3,
    title: "03. Обложки Youtube",
    short: "Кликабельные превью для YouTube-каналов.",
    full: ({ openImage }: any) => (
      <div className="space-y-6">
        <p className="text-neutral-400">Примеры обложек для видео.</p>
        <div className="space-y-4">
          {['IMG_2104', 'IMG_4528', 'IMG_4530'].map(name => (
            <div 
              key={name}
              onClick={() => openImage(`/covers/${name}.png`)}
              className="w-full aspect-video bg-neutral-800 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-lime-400 transition-colors group relative"
            >
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500 group-hover:text-lime-400 text-sm z-0">
                Открыть обложку
              </div>
              <img 
                src={`/covers/${name}.png`} 
                alt={`Обложка ${name}`}
                className="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLElement).style.opacity = '0';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    ),
    posClass: "md:top-1/2 md:left-0 lg:left-4 md:-translate-y-1/2"
  },
  {
    id: 4,
    title: "04. AI Проекты",
    short: "Реализованные проекты с внедрением ИИ.",
    full: () => (
      <div className="space-y-6">
        <p className="text-neutral-400">Список реализованных проектов с использованием AI-технологий:</p>
        
        <div className="space-y-4">
          <a href="https://synapse-full.vercel.app/" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl border border-white/10 hover:border-lime-400 bg-neutral-800/50 hover:bg-neutral-800 transition-all group">
            <h4 className="text-lime-400 font-bold mb-1 group-hover:text-lime-300">Корпоративный сайт для веб-студии</h4>
            <p className="text-sm text-neutral-300">Архитектура + полная AI-генерация контента.</p>
            <p className="text-xs text-neutral-500 mt-2 truncate">synapse-full.vercel.app</p>
          </a>
          
          <a href="https://cntb.vercel.app/" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl border border-white/10 hover:border-lime-400 bg-neutral-800/50 hover:bg-neutral-800 transition-all group">
            <h4 className="text-lime-400 font-bold mb-1 group-hover:text-lime-300">Система корпоративного обучения</h4>
            <p className="text-sm text-neutral-300">Платформа онбординга, внедрена в гос. структуре.</p>
            <p className="text-xs text-neutral-500 mt-2 truncate">cntb.vercel.app</p>
          </a>
          
          <a href="https://flashfirstbrif.vercel.app/" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl border border-white/10 hover:border-lime-400 bg-neutral-800/50 hover:bg-neutral-800 transition-all group">
            <h4 className="text-lime-400 font-bold mb-1 group-hover:text-lime-300">Пошаговый тренажер для сейлзов</h4>
            <p className="text-sm text-neutral-300">Внутренний инструмент. Ускорил адаптацию сейлзов с 2 месяцев до 1.</p>
            <p className="text-xs text-neutral-500 mt-2 truncate">flashfirstbrif.vercel.app</p>
          </a>
          
          <a href="https://v0-website-brief-generator.vercel.app/" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl border border-white/10 hover:border-lime-400 bg-neutral-800/50 hover:bg-neutral-800 transition-all group">
            <h4 className="text-lime-400 font-bold mb-1 group-hover:text-lime-300">Web-бриф для B2B</h4>
            <p className="text-sm text-neutral-300">Первичная квалификация клиентов. Рост конверсии в сделку на 10-15%.</p>
            <p className="text-xs text-neutral-500 mt-2 truncate">v0-website-brief-generator.vercel.app</p>
          </a>
        </div>
      </div>
    ),
    posClass: "md:top-1/2 md:right-0 lg:right-4 md:-translate-y-1/2"
  },
  {
    id: 5,
    title: "05. Нейропрезентации",
    short: "Пример презентации, созданной ИИ.",
    full: () => (
      <div className="space-y-6 h-full flex flex-col">
        <p className="text-neutral-400">PDF презентация, сгенерированная и оформленная с помощью AI.</p>
        
        <a 
          href="/presentation/1.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-4 w-full py-12 bg-neutral-800/50 text-white font-bold rounded-xl border border-white/10 hover:border-lime-400 hover:text-lime-400 transition-all uppercase tracking-wider text-lg shadow-lg group mt-4"
        >
          <span className="text-4xl group-hover:scale-110 transition-transform">📄</span>
          Смотреть презентацию
        </a>
        
        <a 
          href="/presentation/1.pdf" 
          download="Neuro_Presentation.pdf"
          className="flex items-center justify-center gap-2 w-full py-4 bg-lime-400 text-black font-bold rounded-xl hover:bg-lime-300 transition-colors uppercase tracking-wider text-sm mt-4"
        >
          Скачать PDF
        </a>
      </div>
    ),
    posClass: "md:bottom-4 md:right-0 lg:right-4"
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
         <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-white text-center mb-8 uppercase px-4 max-w-5xl leading-tight tracking-wide">
           Нейропортфолио <br className="hidden md:block" /> Для «Вата фотостудия» <br className="hidden md:block" /> От Гржимайло Роберта
         </h1>
         <div 
           className="flex flex-col items-center animate-bounce text-lime-400 mt-16 cursor-pointer"
           onClick={() => setStarted(true)}
         >
           <span className="text-sm uppercase tracking-widest mb-3 font-bold opacity-80">Свайпни наверх</span>
           <ArrowUpCircle size={40} className="opacity-80" />
         </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className={`w-full min-h-screen flex flex-col items-center justify-center pt-4 pb-6 px-4 md:p-8 lg:p-12 transition-all duration-1000 delay-300 ease-out
        ${started ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
        
        {/* DESKTOP LAYOUT CONTAINER */}
        <div className="relative w-full max-w-[1400px] h-full min-h-[85vh] flex flex-col items-center justify-center pt-2 md:pt-0">
          
          {/* BACKGROUND NAME WATERMARK */}
          <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none select-none z-0 pt-4 md:pt-6">
            <span
              className="font-display font-black uppercase tracking-widest whitespace-nowrap w-full text-center"
              style={{ color: 'rgba(255,255,255,0.045)', fontSize: 'clamp(2rem, 12vw, 7rem)' }}
            >
              ГРЖИМАЙЛО РОБЕРТ
            </span>
          </div>

          {/* CENTER PHOTO & CTA */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-md">
            <div className="relative w-[88vw] max-w-[340px] md:w-[350px] lg:w-[400px] aspect-[3/4] flex justify-center items-end">
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

            {/* CTA Buttons & Contact Info - Desktop only */}
            <div className="hidden md:flex flex-col items-center mt-8 z-30 relative w-full pb-8 md:pb-0 gap-6">
              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg px-4">
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

              {/* Contact Info (like image) - Desktop only */}
              <div className="hidden md:flex w-full max-w-[320px] bg-neutral-900/60 border border-white/5 rounded-2xl p-5 flex-col gap-4 shadow-xl backdrop-blur-sm">
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

            {/* CTA Buttons & Contact Info - Mobile only (placed at the very bottom after all cards) */}
            <div className="flex md:hidden flex-col items-center mt-12 pb-12 w-full gap-6 pointer-events-auto">
              {/* Buttons */}
              <div className="grid grid-cols-1 gap-4 w-full max-w-xs px-4">
                <a 
                  href="https://hh.ru/resume/11b439efff107ee6cf0039ed1f627671716265?hhtmFrom=resume_list" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-neutral-800 text-white border border-white/20 rounded-[35px] font-bold hover:bg-white hover:text-black hover:border-white transition-all h-[72px] w-full group shadow-lg"
                >
                  <FileText size={20} className="shrink-0 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="uppercase tracking-wider text-xs leading-tight flex flex-col items-center text-center">
                    <span>Резюме</span>
                    <span>HH</span>
                  </div>
                </a>
                <a 
                  href="https://t.me/rob_serg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-lime-400 text-neutral-900 border border-lime-400 rounded-[35px] font-bold hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all h-[72px] w-full group shadow-lg"
                >
                  <Send size={20} className="shrink-0 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="uppercase tracking-wider text-xs leading-tight flex flex-col items-center text-center">
                    <span>Telegram</span>
                    <span>Связь</span>
                  </div>
                </a>
              </div>

              {/* Contact Info */}
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
          {previewImage.endsWith('.mp4') ? (
            <video 
              src={previewImage} 
              controls 
              autoPlay
              className="max-w-[95vw] max-h-[90vh] rounded-xl shadow-[0_0_50px_rgba(163,230,53,0.1)] outline-none"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img 
               src={previewImage} 
               alt="Preview" 
               className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(163,230,53,0.1)]"
               onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}

    </div>
  );
};

export default App;
