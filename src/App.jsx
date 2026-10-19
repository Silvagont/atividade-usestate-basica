import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  const [visivel, setVisivel] = useState(true);
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);
  const [contadorMeta, setContadorMeta] = useState(0);

  function aumentar() {
    setContador((anterior) => anterior + 1);
  }

  function diminuir() {
    setContador((anterior) => Math.max(0, anterior - 1));
  }

  function aumentarMeta() {
    setContadorMeta((anterior) => Math.min(10, anterior + 1));
  }

  function diminuirMeta() {
    setContadorMeta((anterior) => Math.max(0, anterior - 1));
  }

  function zerarMeta() {
    setContadorMeta(0);
  }

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Início da atividade">
          <span className="brand-mark">R</span>
          <span>
            <strong>ReactLab</strong>
            <small>Atividade guiada</small>
          </span>
        </a>
        <span className="status-pill">
          <span className="status-dot" />
          Sistema online
        </span>
      </header>

      <section className="hero" id="inicio">
        <p className="eyebrow"><span /> MISSÃO DE APRENDIZADO</p>
        <h1>Seu primeiro passo com <span>React.</span></h1>
        <p className="hero-copy">
          Explore o estado dos componentes com pequenas interações. Experimente,
          clique e veja a interface responder em tempo real.
        </p>
      </section>

      <section className="dashboard-grid" aria-label="Atividades React">
        <article className="panel counter-panel">
          <div className="panel-heading">
            <span className="icon-tile">＋</span>
            <div>
              <p className="panel-kicker">MISSÃO 01</p>
              <h2>Contador interativo</h2>
            </div>
          </div>
          <p className="panel-description">Altere o valor usando os controles abaixo.</p>
          <div className="counter-display" aria-live="polite">{contador}</div>
          <div className="button-row">
            <button className="button button-secondary" onClick={diminuir}>− Voltar um</button>
            <button className="button button-primary" onClick={aumentar}>+ Aumentar</button>
          </div>
          <p className="helper-text">O contador não fica abaixo de zero.</p>
        </article>

        <article className="panel notice-panel">
          <div className="panel-heading">
            <span className="icon-tile cyan">◉</span>
            <div>
              <p className="panel-kicker">MISSÃO 02</p>
              <h2>Mostrar / ocultar</h2>
            </div>
          </div>
          <p className="panel-description">Controle a exibição de uma mensagem.</p>
          <div className={`notice-box ${visivel ? "notice-visible" : "notice-hidden"}`} aria-live="polite">
            {visivel ? (
              <>
                <span className="notice-symbol">✦</span>
                <div>
                  <strong>Boa! Você está evoluindo.</strong>
                  <p>O estado controla o que aparece na tela.</p>
                </div>
              </>
            ) : (
              <span className="muted-message">A mensagem está oculta.</span>
            )}
          </div>
          <button className="button button-secondary full-button" onClick={() => setVisivel((atual) => !atual)}>
            {visivel ? "Ocultar mensagem" : "Mostrar mensagem"}
          </button>
        </article>

        <article className="panel input-panel">
          <div className="panel-heading">
            <span className="icon-tile violet">⌘</span>
            <div>
              <p className="panel-kicker">MISSÃO 03</p>
              <h2>Entrada de texto</h2>
            </div>
          </div>
          <p className="panel-description">Digite seu nome e veja a saudação mudar.</p>
          <label className="field-label" htmlFor="nome">Seu nome</label>
          <input
            id="nome"
            className="text-field"
            type="text"
            placeholder="Ex.: Alex"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />
          <div className="greeting-preview" aria-live="polite">
            <span className="preview-label">PRÉVIA DA SAUDAÇÃO</span>
            <p>Olá, <strong>{nome.trim() || "visitante"}</strong>! 👋</p>
          </div>
        </article>

        <article className="panel greeting-panel">
          <div className="panel-heading">
            <span className="icon-tile pink">✧</span>
            <div>
              <p className="panel-kicker">BÔNUS VISUAL</p>
              <h2>Cartão de boas-vindas</h2>
            </div>
          </div>
          <p className="panel-description">Você também pode esconder ou exibir o cartão.</p>
          <div className={`welcome-card ${mostrarSaudacao ? "welcome-visible" : "welcome-hidden"}`}>
            {mostrarSaudacao ? (
              <>
                <div className="welcome-orb">✦</div>
                <div>
                  <span className="preview-label">QUE BOM TER VOCÊ AQUI</span>
                  <h3>{nome.trim() ? `Bem-vindo(a), ${nome.trim()}!` : "Bem-vindo(a)!"}</h3>
                  <p>Continue praticando. Cada clique é um novo aprendizado.</p>
                </div>
              </>
            ) : (
              <p className="muted-message">Cartão de boas-vindas oculto.</p>
            )}
          </div>
          <button className="button button-secondary full-button" onClick={() => setMostrarSaudacao((atual) => !atual)}>
            {mostrarSaudacao ? "Ocultar cartão" : "Mostrar cartão"}
          </button>
        </article>

        <article className="panel goal-panel">
          <div className="panel-heading">
            <span className="icon-tile green">↗</span>
            <div>
              <p className="panel-kicker">DESAFIO EXTRA</p>
              <h2>Alcance a meta de 10</h2>
            </div>
            <span className="goal-tag">{contadorMeta}/10</span>
          </div>
          <p className="panel-description">O progresso para ao chegar a 10. Você pode reiniciar quando quiser.</p>
          <div className="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="10" aria-valuenow={contadorMeta} aria-label="Progresso até a meta de 10">
            <div className="progress-fill" style={{ width: `${contadorMeta * 10}%` }} />
          </div>
          <div className="goal-value" aria-live="polite">{contadorMeta}<span> / 10</span></div>
          {contadorMeta === 10 ? (
            <p className="success-message">✓ Meta atingida! Mandou bem.</p>
          ) : (
            <p className="helper-text">Faltam {10 - contadorMeta} para alcançar a meta.</p>
          )}
          <div className="button-row goal-buttons">
            <button className="button button-secondary" onClick={diminuirMeta}>− Voltar um</button>
            <button className="button button-primary" onClick={aumentarMeta} disabled={contadorMeta === 10}>+ Somar</button>
            <button className="button button-quiet" onClick={zerarMeta}>Zerar</button>
          </div>
        </article>
      </section>

      <footer className="footer">
        <span><span className="footer-dot" /> Construído com React e useState</span>
        <span>Pratique. Teste. Evolua.</span>
      </footer>
    </main>
  );
}
