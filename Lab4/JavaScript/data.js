let currentList = [];

const listOfCrypt = [
    {
        name: "Bitcoin",
        ticker: "BTC",
        year: 2012,
        capital: 1100.00,
        price: 410.00,
        trades: 19768731,
        volume: 31000,
        percent: -2.34
    },
    {
        name: "Litecoin",
        ticker: "LTC",
        year: 2012,
        capital: 1050.50,
        price: 380.25,
        trades: 1098765,
        volume: 28000,
        percent: 0.12
    },
    {
        name: "Namecoin",
        ticker: "NMC",
        year: 2012,
        capital: 200.75,
        price: 50.10,
        trades: 54321,
        volume: 5000,
        percent: -1.23
    },
    {
        name: "Feathercoin",
        ticker: "FTC",
        year: 2012,
        capital: 150.30,
        price: 12.34,
        trades: 4321,
        volume: 1500,
        percent: 0.45
    },
    {
        name: "Ethereum",
        ticker: "ETH",
        year: 2013,
        capital: 950.20,
        price: 350.80,
        trades: 15432987,
        volume: 29000,
        percent: 1.56
    },
    {
        name: "Dogecoin",
        ticker: "DOGE",
        year: 2013,
        capital: 600.45,
        price: 0.50,
        trades: 3210987,
        volume: 25000,
        percent: 7.89
    },
    {
        name: "Peercoin",
        ticker: "PPC",
        year: 2013,
        capital: 300.90,
        price: 25.75,
        trades: 87654,
        volume: 8000,
        percent: -0.78
    },
    {
        name: "Primecoin",
        ticker: "XPM",
        year: 2013,
        capital: 180.60,
        price: 10.20,
        trades: 7654,
        volume: 2000,
        percent: -4.56
    },
    {
        name: "Ripple",
        ticker: "XRP",
        year: 2014,
        capital: 800.25,
        price: 0.80,
        trades: 5432109,
        volume: 27000,
        percent: 0.45
    },
    {
        name: "Dash",
        ticker: "DASH",
        year: 2014,
        capital: 400.10,
        price: 120.30,
        trades: 8765,
        volume: 7000,
        percent: 0.23
    },
    {
        name: "Monero",
        ticker: "XMR",
        year: 2014,
        capital: 350.80,
        price: 150.75,
        trades: 87654,
        volume: 9000,
        percent: -0.78
    },
    {
        name: "Nxt",
        ticker: "NXT",
        year: 2014,
        capital: 100.00,
        price: 15.40,
        trades: 6543,
        volume: 1200,
        percent: 2.34
    },
    {
        name: "Stellar",
        ticker: "XLM",
        year: 2015,
        capital: 700.50,
        price: 0.25,
        trades: 765432,
        volume: 22000,
        percent: -1.45
    },
    {
        name: "Ethereum Classic",
        ticker: "ETC",
        year: 2015,
        capital: 450.30,
        price: 30.60,
        trades: 654321,
        volume: 10000,
        percent: 0.98
    },
    {
        name: "Waves",
        ticker: "WAVES",
        year: 2015,
        capital: 250.70,
        price: 45.20,
        trades: 21098,
        volume: 6000,
        percent: -2.89
    },
    {
        name: "Factom",
        ticker: "FCT",
        year: 2015,
        capital: 120.90,
        price: 5.80,
        trades: 4321,
        volume: 1800,
        percent: 1.45
    },
    {
        name: "Zcash",
        ticker: "ZEC",
        year: 2016,
        capital: 380.40,
        price: 90.10,
        trades: 9876,
        volume: 8500,
        percent: -1.12
    },
    {
        name: "Steem",
        ticker: "STEEM",
        year: 2016,
        capital: 220.60,
        price: 20.30,
        trades: 7654,
        volume: 3500,
        percent: -4.56
    },
    {
        name: "Augur",
        ticker: "REP",
        year: 2016,
        capital: 160.20,
        price: 12.50,
        trades: 5432,
        volume: 2500,
        percent: -0.89
    },
    {
        name: "DigixDAO",
        ticker: "DGD",
        year: 2016,
        capital: 110.80,
        price: 40.90,
        trades: 3210,
        volume: 1100,
        percent: -3.21
    },
    {
        name: "Cardano",
        ticker: "ADA",
        year: 2017,
        capital: 900.70,
        price: 1.20,
        trades: 6543210,
        volume: 26000,
        percent: -1.23
    },
    {
        name: "Neo",
        ticker: "NEO",
        year: 2017,
        capital: 500.30,
        price: 35.70,
        trades: 32109,
        volume: 9500,
        percent: 0.67
    },
    {
        name: "Qtum",
        ticker: "QTUM",
        year: 2017,
        capital: 320.10,
        price: 18.90,
        trades: 8765,
        volume: 5000,
        percent: 0.23
    },
    {
        name: "Bitcoin Cash",
        ticker: "BCH",
        year: 2017,
        capital: 850.90,
        price: 280.40,
        trades: 8765432,
        volume: 24000,
        percent: -0.89
    },
    {
        name: "Binance Coin",
        ticker: "BNB",
        year: 2018,
        capital: 950.20,
        price: 300.60,
        trades: 8765432,
        volume: 29500,
        percent: -0.89
    },
    {
        name: "Tron",
        ticker: "TRX",
        year: 2018,
        capital: 600.40,
        price: 0.05,
        trades: 765432,
        volume: 20000,
        percent: -1.45
    },
    {
        name: "VeChain",
        ticker: "VET",
        year: 2018,
        capital: 420.80,
        price: 0.03,
        trades: 654321,
        volume: 15000,
        percent: 0.98
    },
    {
        name: "Basic Attention Token",
        ticker: "BAT",
        year: 2018,
        capital: 180.50,
        price: 0.40,
        trades: 1098,
        volume: 3000,
        percent: -2.10
    },
    {
        name: "Chainlink",
        ticker: "LINK",
        year: 2019,
        capital: 750.30,
        price: 25.80,
        trades: 987654,
        volume: 21000,
        percent: -0.67
    },
    {
        name: "Tezos",
        ticker: "XTZ",
        year: 2019,
        capital: 480.70,
        price: 3.50,
        trades: 98765,
        volume: 12000,
        percent: 4.56
    },
    {
        name: "Cosmos",
        ticker: "ATOM",
        year: 2019,
        capital: 520.10,
        price: 12.60,
        trades: 109876,
        volume: 18000,
        percent: -0.45
    },
    {
        name: "Algorand",
        ticker: "ALGO",
        year: 2019,
        capital: 380.90,
        price: 0.70,
        trades: 321098,
        volume: 9000,
        percent: -2.10
    },
    {
        name: "Polkadot",
        ticker: "DOT",
        year: 2020,
        capital: 880.60,
        price: 28.40,
        trades: 4321098,
        volume: 25000,
        percent: -3.21
    },
    {
        name: "Uniswap",
        ticker: "UNI",
        year: 2020,
        capital: 650.20,
        price: 15.30,
        trades: 432109,
        volume: 20000,
        percent: 3.21
    },
    {
        name: "Solana",
        ticker: "SOL",
        year: 2020,
        capital: 920.80,
        price: 120.90,
        trades: 7654321,
        volume: 30000,
        percent: 5.12
    },
    {
        name: "Aave",
        ticker: "AAVE",
        year: 2020,
        capital: 450.40,
        price: 85.70,
        trades: 65432,
        volume: 14000,
        percent: -6.78
    },
    {
        name: "Avalanche",
        ticker: "AVAX",
        year: 2021,
        capital: 790.50,
        price: 65.30,
        trades: 2109876,
        volume: 23000,
        percent: -4.56
    },
    {
        name: "Terra Classic",
        ticker: "LUNC",
        year: 2021,
        capital: 320.90,
        price: 0.0001,
        trades: 543210,
        volume: 8000,
        percent: -5.67
    },
    {
        name: "Polygon",
        ticker: "MATIC",
        year: 2021,
        capital: 680.70,
        price: 1.20,
        trades: 876543,
        volume: 19000,
        percent: 2.34
    },
    {
        name: "Shiba Inu",
        ticker: "SHIB",
        year: 2021,
        capital: 150.20,
        price: 0.000087,
        trades: 321098,
        volume: 5000,
        percent: 420.69
    },
    {
        name: "Fantom",
        ticker: "FTM",
        year: 2022,
        capital: 530.80,
        price: 0.35,
        trades: 765432,
        volume: 16000,
        percent: -1.45
    },
    {
        name: "Aptos",
        ticker: "APT",
        year: 2022,
        capital: 410.60,
        price: 8.90,
        trades: 654321,
        volume: 11000,
        percent: 0.98
    },
    {
        name: "NEAR Protocol",
        ticker: "NEAR",
        year: 2022,
        capital: 620.30,
        price: 3.20,
        trades: 987654,
        volume: 17000,
        percent: -0.67
    },
    {
        name: "Optimism",
        ticker: "OP",
        year: 2022,
        capital: 290.70,
        price: 2.10,
        trades: 543210,
        volume: 7000,
        percent: -5.67
    }
];