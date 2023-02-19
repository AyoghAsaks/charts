import axios from "axios";

export class ChartService {
    static serverURL = `https://api.coingecko.com/api/v3`;

                              //For Trending.js
     //GET: https://api.coingecko.com/api/v3/search/trending - get all trending coins
     static getAllCoins() {
        let dataURL = `${this.serverURL}/search/trending`;
        return axios.get(dataURL); 
    }

                             //For Markets.js
    //coins/market API
    //GET: Request URL:  https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
    //Or, you could use: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
    static getAllMarkets() {
        let dataURL = `${this.serverURL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
        return axios.get(dataURL); 
    }


    //market_chart API: Request URL: https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7
    //coins/{id}/market_chart
    //GET by id: https://api.coingecko.com/api/v3/coins/{id}/market_chart?vs_currency=usd&days=7 - get single coin by id
    static getPastPrices(id) {
        let dataURL = `${this.serverURL}/coins/${id}/market_chart?vs_currency=usd&days=5&interval=daily`;
        return axios.get(dataURL);
    }

    //GET: Request URL BELOW:
    //https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false&price_change_percentage=24h
    static getRankingTable() {
        let dataURL = `${this.serverURL}/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false&price_change_percentage=24h`;
        return axios.get(dataURL);
    }
}