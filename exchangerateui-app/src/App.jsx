import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import "./styles/main.css";

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <h1>Exchange Rate API - Currency Converter</h1>
        <p className="subtitle">Projeto de desenvolvimento de uma UI utilizando React para consumir a API pública chamada "ExchangeRate-API". Esse novo projeto front-end consiste num convertedor de moeda que recupera e exibe dados de taxas de troca em tempo real.  </p> <br /><br />
        <p className="englishSubtitle">An application built in React using a public API called "ExchangeRate-API". This new front-end project is a currency converter that retrieves and displays real-time exchange rate data. </p>
      </header>

      <main className="container">
        <CurrencyConverter />
      </main>

      <footer className="footer">
        <small>Desenvolvido pelo grupo composto por Iclei Arthur, Carlos Eduardo, Guilerme Batista e Anderson Sales.</small>
        <small>Developed by Iclei Arthur, Carlos Eduardo, Guilerme Batista and Anderson Sales</small>

      </footer>

    </div>
  );
}