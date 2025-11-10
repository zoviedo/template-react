import React, { useState } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState("");

  return (
    <>
      <header className="header">
        <div className="logo">HOSTING Template</div>
      </header>

      <main className="container">
        <section className="card">
          <h1>Template React Desplegado</h1>
          <p className="subtitle">
            Edita tu código en <code>src/</code> para comenzar.
          </p>

          <div className="guia-section">
            <h2>Guía Rápida para Modificación</h2>

            <div className="file-list-container">
              <div className="code-info">
                <span className="file-name">src/App.js</span>
                <span className="file-desc">Componente principal de la app.</span>
              </div>
              <div className="code-info">
                <span className="file-name">src/App.css</span>
                <span className="file-desc">Archivo de estilos de la aplicación.</span>
              </div>
              <div className="code-info">
                <span className="file-name">src/index.js</span>
                <span className="file-desc">Punto de montaje de React.</span>
              </div>
              <div className="code-info">
                <span className="file-name">public/index.html</span>
                <span className="file-desc">Plantilla HTML base de la app.</span>
              </div>
            </div>

            <button
              className="primary-btn"
              onClick={() =>
                setMensaje(
                  mensaje === ""
                    ? "✅ El código React está funcionando correctamente."
                    : ""
                )
              }
            >
              Probar React
            </button>

            <p id="mensaje" className="message-box">
              {mensaje}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

