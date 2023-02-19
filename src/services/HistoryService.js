import axios from "axios";


//market_chart API: Request URL: https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7
//coins/{id}/market_chart
//GET by id: https://api.coingecko.com/api/v3/coins/{id}/market_chart?vs_currency=usd&days=7 - get single coin by id
export default axios.create({
    baseURL: "https://api.coingecko.com/api/v3/coins"
});
