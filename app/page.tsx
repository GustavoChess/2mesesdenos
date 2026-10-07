/* oxlint-disable next/no-img-element, jsx-a11y/media-has-caption -- The photograph is a local album object; the optional music is instrumental. */
'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { content } from './content';

const pageNames = ['capa', 'carta', 'minha gatinha comunista', 'fotografia', 'fragmentos', 'final'];
const publicBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/+$/, '');

function publicAsset(path: string) {
  return `${publicBasePath}${path}`;
}

function Butterfly({ className = '' }: { className?: string }) {
  return (
    <svg className={'butterfly ' + className} viewBox="0 0 88 66" fill="none" aria-hidden="true">
      <path d="M41 31C25 3 7 7 11 25c3 11 16 14 30 9-14 15-10 27 0 22 5-3 6-13 5-23m1-2C63 3 81 7 77 25c-3 11-16 14-30 9 14 15 10 27 0 22-5-3-6-13-5-23" fill="#a85448" stroke="#593c32" strokeWidth="1.4" />
      <path d="M44 30v22m0-22-7-10m7 10 7-10" stroke="#593c32" strokeWidth="1.3" />
      <path d="M20 21c6-4 12-2 17 5-7 3-13 2-17-5Zm48 0c-6-4-12-2-17 5 7 3 13 2 17-5Z" fill="#e6c8a0" />
    </svg>
  );
}

function PawStamp() {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <ellipse cx="11" cy="15" rx="3.1" ry="4.3" transform="rotate(-23 11 15)" fill="currentColor" />
      <ellipse cx="20" cy="10" rx="3.1" ry="4.3" transform="rotate(-8 20 10)" fill="currentColor" />
      <ellipse cx="29" cy="12" rx="3.1" ry="4.3" transform="rotate(13 29 12)" fill="currentColor" />
      <ellipse cx="35" cy="19" rx="3.1" ry="4.3" transform="rotate(27 35 19)" fill="currentColor" />
      <path d="M13.8 28.2c.6-5.2 4.3-9.4 8.8-9.4s8.2 4.2 8.8 9.4c.6 4.9-2.7 7.1-6.4 5.1-1.4-.8-3.3-.8-4.8 0-3.7 2-7-.2-6.4-5.1Z" fill="currentColor" />
    </svg>
  );
}

function ChessKnightStamp() {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M10 35h26M14 32h19l-2-4 3-4-2-6 3-4-7-7-5 2-5-2-6 6 3 3-2 4 4 3-3 4 1 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m18 34 2-3m5 3 1-4m-8-10 5 2 6-3m-9-8 2 4-4 4m11-2 3 2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="26" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function RedStar() {
  const wearId = `star-wear-${useId().replace(/:/g, '')}`;

  return (
    <svg className="red-star-print" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <mask id={wearId} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <rect width="64" height="64" fill="white" />
          <circle cx="13" cy="22" r="1.2" fill="black" />
          <circle cx="48" cy="24" r=".9" fill="black" />
          <circle cx="38" cy="52" r="1.1" fill="black" />
          <path d="m20 30 4 1m10 6 5 1m-19 12 4-1m17-26 3-2" stroke="black" strokeWidth="1.6" />
        </mask>
      </defs>
      <path d="M32 4 38.5 20 57 17 45.5 30 53 51 34 42.5 17 60 19.5 39 3.5 30 24.5 26Z" fill="#95483f" mask={`url(#${wearId})`} />
      <path d="M32 4 38.5 20 57 17 45.5 30 53 51 34 42.5 17 60 19.5 39 3.5 30 24.5 26Z" fill="none" stroke="#633b33" strokeWidth="1.1" strokeLinejoin="round" opacity=".52" />
    </svg>
  );
}

function HammerSickle() {
  const wearId = `sickle-wear-${useId().replace(/:/g, '')}`;

  return (
    <svg className="hammer-sickle-print" viewBox="0 0 72 64" aria-hidden="true">
      <defs>
        <mask id={wearId} maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="64">
          <rect width="72" height="64" fill="white" />
          <circle cx="17" cy="18" r="1.1" fill="black" />
          <circle cx="52" cy="43" r="1.2" fill="black" />
          <circle cx="33" cy="55" r=".9" fill="black" />
          <path d="m19 35 4-3m18-10 3-2m-4 25 5-1m-22 3 3 2" stroke="black" strokeWidth="1.7" />
        </mask>
      </defs>
      <g fill="#93483e" mask={`url(#${wearId})`}>
        <path d="M12 7c19 4 37 15 44 29 7 14-3 25-15 22-8-2-12-8-11-15 4 6 10 8 15 4 5-4 3-11-2-18C37 19 24 12 12 7Z" />
        <path d="m13 49 28-29 5 5-28 30Z" />
        <path d="m37 20 11-12 16 15-11 12-4-1-12-12Z" />
      </g>
      <path d="M12 7c19 4 37 15 44 29 7 14-3 25-15 22-8-2-12-8-11-15 4 6 10 8 15 4 5-4 3-11-2-18C37 19 24 12 12 7Z" fill="none" stroke="#603a32" strokeWidth="1" opacity=".45" />
    </svg>
  );
}

function Newspaper({ className = '' }: { className?: string }) {
  return (
    <aside className={'news-fragment ' + className} aria-hidden="true">
      <span className="news-name">Correio de Nós</span>
      <span className="news-rule" />
      <strong>dois meses<br />juntos</strong>
      <span className="news-columns"><i /><i /><i /><i /><i /><i /><i /><i /></span>
      <small>edição de aniversário · nº 02</small>
    </aside>
  );
}

function Postmark({ className = '' }: { className?: string }) {
  return (
    <div className={'postmark ' + className} aria-hidden="true">
      <span>de {content.myName}</span><Heart size={17} strokeWidth={1.4} /><i /><i /><small>pra {content.herName}</small>
    </div>
  );
}

export default function Home() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const name = content.herName.trim();

  const turnTo = useCallback((next: number) => {
    setDirection(next >= pageIndex ? 1 : -1);
    setPageIndex(Math.max(0, Math.min(pageNames.length - 1, next)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageIndex]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') turnTo(pageIndex + 1);
      if (event.key === 'ArrowLeft') turnTo(pageIndex - 1);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [pageIndex, turnTo]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = true;
    void audio.play().catch(() => {
      // Alguns navegadores só permitem iniciar a mídia depois de uma interação.
    });

    const enableSound = () => {
      audio.muted = false;
      void audio.play().then(() => {
        window.removeEventListener('pointerdown', enableSound);
        window.removeEventListener('click', enableSound);
        window.removeEventListener('keydown', enableSound);
      }).catch(() => {
        // A faixa continua pronta para a próxima interação, sem controles visíveis.
      });
    };

    window.addEventListener('pointerdown', enableSound);
    window.addEventListener('click', enableSound);
    window.addEventListener('keydown', enableSound);
    return () => {
      window.removeEventListener('pointerdown', enableSound);
      window.removeEventListener('click', enableSound);
      window.removeEventListener('keydown', enableSound);
    };
  }, []);

  return (
    <main className="album-stage" aria-label="Uma carta de dois meses">
      {content.audio.src && (
        <audio
          ref={audioRef}
          className="album-audio"
          src={publicAsset(content.audio.src)}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={content.audio.title}
        />
      )}
      <div className="desk-grain" aria-hidden="true" />
      <section key={pageIndex} className={`leaf leaf--${pageIndex + 1} ${direction > 0 ? 'leaf-arrives-forward' : 'leaf-arrives-back'}`} aria-label={`Página ${pageIndex + 1}: ${pageNames[pageIndex]}`}>
        <div className="page-number"><span>{String(pageIndex + 1).padStart(2, '0')}</span><i />{pageNames[pageIndex]}</div>

        {pageIndex === 0 && (
          <div className="cover-art">
            <div className="cover-postage"><span>com todo</span><b>amor</b><i>♡</i></div>
            <Newspaper className="cover-news" />
            <div className="cover-title">
              <span className="cover-kicker">um presente para {name || 'você'}</span>
              <h1><span>2 meses</span><em>de nós</em></h1>
              <p>com amor, {content.myName}</p>
            </div>
            <div className="cover-botanical" aria-hidden="true">
              <img src={publicAsset('/ephemera/bellis-annua.webp')} alt="" />
            </div>
            <Butterfly className="cover-butterfly" />
            <Postmark className="cover-postmark" />
            <span className="paper-tape cover-tape" aria-hidden="true" />
            <button className="open-letter" onClick={() => turnTo(1)}>
              <span>abrir minha carta</span><ArrowRight size={19} strokeWidth={1.5} />
            </button>
          </div>
        )}

        {pageIndex === 1 && (
          <div className="letter-art">
            <Newspaper className="letter-news" />
            <article className="letter-sheet">
              <h1>Para você{name ? `, ${name}` : ''}</h1>
              <p className="letter-salutation">Meu amor,</p>
              <div className="letter-copy">
                {content.letter.map((paragraph, index) => (
                  <div key={index} className={`letter-paragraph${paragraph.mark ? ` letter-paragraph--${paragraph.mark}` : ''}`}>
                    <p>{paragraph.text}</p>
                    {paragraph.mark && (
                      <span className={`letter-emblem letter-emblem--${paragraph.mark}`} aria-hidden="true">
                        {paragraph.mark === 'star' ? <RedStar /> : <HammerSickle />}
                        {paragraph.mark === 'companions' && <small>companheiros</small>}
                        {paragraph.mark === 'revolution' && <small>pequena revolução</small>}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p className="letter-signoff">{content.letterSignoff}<br /><em>{content.myName || '[SEU NOME]'}</em></p>
            </article>
            <Postmark className="letter-postmark" />
          </div>
        )}

        {pageIndex === 2 && (
          <div className="communis-art">
            <header className="communis-heading">
              <span className="communis-overline">um acordo particular de carinho</span>
              <h1><span>{content.communis.title}</span><em>{content.communis.titleAccent}</em></h1>
              <p>{content.communis.subtitle}</p>
              <span className="communis-seal" aria-hidden="true"><HammerSickle /><small>companheira</small></span>
            </header>
            <div className="communis-collage">
              <article className="manifesto-sheet">
                <span className="manifesto-label">manifesto brincalhão · art. 01–04</span>
                <ol className="manifesto-list">
                  {content.communis.articles.map((article) => (
                    <li key={article.number}>
                      <span>{article.number}</span>
                      <p>{article.text}</p>
                    </li>
                  ))}
                </ol>
              </article>
              <span className="quinquenal-star" aria-hidden="true"><RedStar /></span>
              <article className="quinquenal-sheet">
                <span className="quinquenal-label">planos para os próximos cinco anos</span>
                <h2>{content.communis.planTitle}</h2>
                <ul className="quinquenal-list">
                  {content.communis.planItems.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        )}

        {pageIndex === 3 && (
          <div className="photo-art">
            <span className="photo-heading">uma lembrança<br /><em>em papel</em></span>
            <figure className="single-photo">
              <span className="photo-tape" aria-hidden="true" />
              <img src={publicAsset(content.photo.src)} alt={content.photo.alt} />
              <figcaption>{content.photo.caption}</figcaption>
            </figure>
            <Butterfly className="photo-butterfly" />
          </div>
        )}

        {pageIndex === 4 && (
          <div className="fragments-art">
            <span className="fragments-heading">o que ainda quero<br /><em>viver com você</em></span>
            <div className="fragment-pile">
              {content.fragments.map((fragment, index) => (
                <article key={index} className={`fragment fragment--${index + 1}`}>
                  <span className="fragment-index">ideia nº 0{index + 1}</span>
                  <span className="fragment-mark">{fragment.mark === 'paw' ? <PawStamp /> : <ChessKnightStamp />}</span>
                  <span className="fragment-prompt">{fragment.prompt}</span>
                  <p>{fragment.text}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {pageIndex === 5 && (
          <div className="ending-art">
            <span className="ending-whisper">só mais uma coisa</span>
            <div className="ending-letter">
              <span className="ending-topline">um recado pra você</span>
              <h1>{content.closingTitle}</h1>
              <p>{content.closingPhrase}</p>
              <span className="ending-signature">um beijo,<br /><em>{content.myName || '[SEU NOME]'}</em></span>
            </div>
            <Postmark className="ending-postmark" />
            <span className="ending-scrap torn-strip">fim do bilhete</span>
          </div>
        )}

        <nav className="leaf-navigation" aria-label="Virar as páginas do álbum">
          {pageIndex > 0 ? (
            <button className="leaf-turn leaf-turn--back" onClick={() => turnTo(pageIndex - 1)} aria-label="Voltar uma página">
              <ArrowLeft size={16} strokeWidth={1.5} /><span>folha anterior</span>
            </button>
          ) : <span className="nav-blank" />}
          <span className="leaf-counter">{String(pageIndex + 1).padStart(2, '0')} <i>de</i> {String(pageNames.length).padStart(2, '0')}</span>
          {pageIndex < pageNames.length - 1 ? (
            <button className="leaf-turn leaf-turn--next" onClick={() => turnTo(pageIndex + 1)} aria-label="Virar para a próxima página">
              <span>virar a folha</span><ArrowRight size={16} strokeWidth={1.5} />
            </button>
          ) : (
            <button className="leaf-turn leaf-turn--next" onClick={() => turnTo(0)} aria-label="Voltar para a capa">
              <span>reler a carta</span><Heart size={16} strokeWidth={1.5} />
            </button>
          )}
        </nav>
      </section>
    </main>
  );
}
