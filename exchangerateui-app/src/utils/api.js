export const API_BASE_URL = "https://v6.exchangerate-api.com/v6";
export const API_KEY = "ebe53b04a87d97d6a7818a2a";

export async function fetchLatestRatesAsync(base = "BRL") {
    const url = `${API_BASE_URL}/${API_KEY}/latest/${base}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Resposta de rede não foi ok: ${response.status}`);

    }
    const data = await response.json();
    return data;
}