import React, { useEffect, useState } from "react";
import { fetchLatestRatesAsync } from "../utils/api";
import "./currency-converter.css";

export default function CurrencyConverter() {
  const [base, setBase] = useState("BRL");
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState("USD");

  useEffect(() => {
    let cancelled = false;

    async function loadRatesAsync() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchLatestRatesAsync(base);

        if (data.result === "success") {
          if (!cancelled) setRates(data.conversion_rates);
        } else {
          throw new Error(data["error-type"] || "API error");
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadRatesAsync();
    return () => {
      cancelled = true;
    };
  }, [base]);

  function handleConvert() {
    if (!rates) return null;
    const rate = rates[targetCurrency];
    if (!rate) return "--";
    return (amount * rate).toFixed(4);
  }

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="row">
        <label>
          Base:
          <input
            value={base}
            onChange={(e) => setBase(e.target.value.toUpperCase())}
          />
        </label>

        <label>
          Value:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </label>

        <label>
          To:
          <input
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value.toUpperCase())}
          />
        </label>
      </div>

      <div className="result-row">
        {loading && <div className="muted">Loading rates...</div>}
        {error && <div className="error">Error: {error}</div>}
        {!loading && !error && rates && (
          <>
            <div className="big">
              {amount} {base} = {handleConvert()} {targetCurrency}
            </div>
            <div className="small">
              Rate {base} -&gt; {targetCurrency}: {rates[targetCurrency] ?? "--"}
            </div>
          </>
        )}
      </div>

      <hr />

      <h3>Some Rates (base {base})</h3>

      <div className="rates-list">
        {rates ? (
          Object.entries(rates)
            .slice(0, 20)
            .map(([code, value]) => (
              <div key={code} className="rate-item">
                <div className="code">{code}</div>
                <div className="value">{value}</div>
              </div>
            ))
        ) : (
          <div className="muted">No rates available.</div>
        )}
      </div>
    </div>
  );
}
