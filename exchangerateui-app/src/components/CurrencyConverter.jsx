import React, { useEffect, useState } from "react";
import { fetchLatestRatesAsync } from "../utils/api";
import "../styles/main.css";

const currencies = [
  "BRL", "USD", "EUR", "GBP", "JPY",
  "AED","AFN","ALL","AMD","ANG","AOA","ARS",
  "AUD","AWG","AZN","BAM","BBD","BDT","BGN",
  "BHD","BIF","BMD","BND","BOB"
];

function formatBR(value) {
  return Number(value).toFixed(2).replace(".", ",");
}

export default function CurrencyConverter() {
  const [base, setBase] = useState("BRL");
  const [rates, setRates] = useState(null);
  const [amount, setAmount] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [calculated, setCalculated] = useState(null); 

  useEffect(() => {
    async function loadRates() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchLatestRatesAsync(base);

        if (data.result === "success") {
          setRates(data.conversion_rates);
        } else {
          setError("Erro na API");
        }
      } catch (err) {
        setError("Erro ao carregar taxas");
      }

      setLoading(false);
    }

    loadRates();
  }, [base]);

  function handleCalculate() {
    if (!rates) return;

    const num = parseFloat(amount.replace(",", "."));

    if (isNaN(num)) {
      setCalculated("Valor inválido");
      return;
    }

    const rate = rates[targetCurrency];
    if (!rate) {
      setCalculated("Moeda inválida");
      return;
    }

    const result = num * rate;
    setCalculated(result.toFixed(2));
  }

  function invert() {
    const oldBase = base;
    const oldTarget = targetCurrency;
    setBase(oldTarget);
    setTargetCurrency(oldBase);
    setCalculated(null);
  }

  function getDisplayRates() {
    if (!rates) return [];

    const always = [];

    if (rates["USD"]) always.push(["USD", rates["USD"]]);
    if (rates["EUR"]) always.push(["EUR", rates["EUR"]]);
    if (rates["BRL"]) always.push(["BRL", rates["BRL"]]);

    const other = Object.entries(rates)
      .filter(([code]) => code !== "USD" && code !== "EUR" && code !== "BRL")
      .slice(0, 12);

    return [...always, ...other];
  }

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="row">
        <label>
          Base:
          <select value={base} onChange={(e) => { 
            setBase(e.target.value);
            setCalculated(null);
          }}>
            {currencies.map(code => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>
        </label>

        <label>
          Valor:
          <input
            type="text"
            value={amount}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[0-9.,]*$/.test(value)) {
                setAmount(value);
              }
            }}
            placeholder="Digite um valor"
          />
        </label>

        <label>
          Para:
          <select
            value={targetCurrency}
            onChange={(e) => { 
              setTargetCurrency(e.target.value);
              setCalculated(null);
            }}
          >
            {currencies.map(code => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>
        </label>
      </div>

      <button className="invert-btn" onClick={invert}>
        Inverter moedas
      </button>

      <button className="calc-btn" onClick={handleCalculate}>
        Calcular
      </button>

      <div className="result-row">
        {loading && <div className="muted">Carregando...</div>}
        {error && <div className="error">{error}</div>}
        {calculated && !loading && !error && (
          <div className="big">
            {amount} {base} = {formatBR(calculated)} {targetCurrency}
          </div>
        )}
      </div>

      <hr />

      <h3>Conversões — 1 {base} para outras moedas</h3>

      <div className="rates-list">
        {rates ? (
          getDisplayRates().map(([code, value]) => (
            <div key={code} className="rate-item">
              <div className="code">{code}</div>
              <div className="value">{formatBR(value)}</div>
            </div>
          ))
        ) : (
          <div className="muted">Sem taxas disponíveis.</div>
        )}
      </div>
    </div>
  );
}
