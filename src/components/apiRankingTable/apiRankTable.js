import axios from "axios";

//GET: Request URL BELOW:
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false&price_change_percentage=24h
export default axios.create({
    baseURL: 'https://api.coingecko.com/api/v3'
});