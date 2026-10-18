/* FORWARD site config. Edit CA / X / BUY / CHART on launch day; everything else is optional.
   Empty CA  -> the CA row and BUY / CHART buttons are hidden.
   Empty X   -> the X link is hidden. */
window.FORWARD_CFG = {
  NAME: "FORWARD",
  TICKER: "FORWARD",
  CA: "",
  CHAIN: "solana",
  PAD: "pump.fun",
  X: "",
  BUY: "",   // defaults to https://pump.fun/coin/<CA>
  CHART: "", // defaults to https://gmgn.ai/sol/token/<CA>

  /* pump.fun creator-fee rates, from pump.fun's fee page (last updated 17 Oct 2026).
     Market cap = token price x 1B supply, measured in the pool's quote asset (SOL here).
     creatorFee is a fraction of trade size (0.003 = 0.30%). to:null = no upper bound. */
  FEE_SOURCE: "https://pump.fun/docs/fees",
  FEE_TABLE_DATE: "17 Oct 2026",
  FEE_TIERS: [
    { pool: "bonding-curve", quote: "SOL", from: 0, to: null, creatorFee: 0.0030 },
    { pool: "pumpswap", quote: "SOL", from: 0,     to: 420,   creatorFee: 0.0030 },
    { pool: "pumpswap", quote: "SOL", from: 420,   to: 1470,  creatorFee: 0.0095 },
    { pool: "pumpswap", quote: "SOL", from: 1470,  to: 2460,  creatorFee: 0.0090 },
    { pool: "pumpswap", quote: "SOL", from: 2460,  to: 3440,  creatorFee: 0.0085 },
    { pool: "pumpswap", quote: "SOL", from: 3440,  to: 4420,  creatorFee: 0.0080 },
    { pool: "pumpswap", quote: "SOL", from: 4420,  to: 9820,  creatorFee: 0.0075 },
    { pool: "pumpswap", quote: "SOL", from: 9820,  to: 14740, creatorFee: 0.0070 },
    { pool: "pumpswap", quote: "SOL", from: 14740, to: 19650, creatorFee: 0.0065 },
    { pool: "pumpswap", quote: "SOL", from: 19650, to: 24560, creatorFee: 0.0060 },
    { pool: "pumpswap", quote: "SOL", from: 24560, to: 29470, creatorFee: 0.0055 },
    { pool: "pumpswap", quote: "SOL", from: 29470, to: 34380, creatorFee: 0.0050 },
    { pool: "pumpswap", quote: "SOL", from: 34380, to: 39300, creatorFee: 0.0045 },
    { pool: "pumpswap", quote: "SOL", from: 39300, to: 44210, creatorFee: 0.0040 },
    { pool: "pumpswap", quote: "SOL", from: 44210, to: 49120, creatorFee: 0.0035 },
    { pool: "pumpswap", quote: "SOL", from: 49120, to: 54030, creatorFee: 0.0030 },
    { pool: "pumpswap", quote: "SOL", from: 54030, to: 58940, creatorFee: 0.00275 },
    { pool: "pumpswap", quote: "SOL", from: 58940, to: 63860, creatorFee: 0.0025 },
    { pool: "pumpswap", quote: "SOL", from: 63860, to: 68770, creatorFee: 0.00225 },
    { pool: "pumpswap", quote: "SOL", from: 68770, to: 73681, creatorFee: 0.0020 },
    { pool: "pumpswap", quote: "SOL", from: 73681, to: 78590, creatorFee: 0.00175 },
    { pool: "pumpswap", quote: "SOL", from: 78590, to: 83500, creatorFee: 0.0015 },
    { pool: "pumpswap", quote: "SOL", from: 83500, to: 88400, creatorFee: 0.00125 },
    { pool: "pumpswap", quote: "SOL", from: 88400, to: 93330, creatorFee: 0.0010 },
    { pool: "pumpswap", quote: "SOL", from: 93330, to: 98240, creatorFee: 0.00075 },
    { pool: "pumpswap", quote: "SOL", from: 98240, to: null,  creatorFee: 0.0005 },
    /* USDC-paired coins use pump.fun's USDC table (market cap in USDC) */
    { pool: "pumpswap", quote: "USDC", from: 0,        to: 59000,    creatorFee: 0.0030 },
    { pool: "pumpswap", quote: "USDC", from: 59000,    to: 300000,   creatorFee: 0.0095 },
    { pool: "pumpswap", quote: "USDC", from: 300000,   to: 500000,   creatorFee: 0.0090 },
    { pool: "pumpswap", quote: "USDC", from: 500000,   to: 700000,   creatorFee: 0.0085 },
    { pool: "pumpswap", quote: "USDC", from: 700000,   to: 900000,   creatorFee: 0.0080 },
    { pool: "pumpswap", quote: "USDC", from: 900000,   to: 2000000,  creatorFee: 0.0075 },
    { pool: "pumpswap", quote: "USDC", from: 2000000,  to: 3000000,  creatorFee: 0.0070 },
    { pool: "pumpswap", quote: "USDC", from: 3000000,  to: 4000000,  creatorFee: 0.0065 },
    { pool: "pumpswap", quote: "USDC", from: 4000000,  to: 5000000,  creatorFee: 0.0060 },
    { pool: "pumpswap", quote: "USDC", from: 5000000,  to: 6000000,  creatorFee: 0.0055 },
    { pool: "pumpswap", quote: "USDC", from: 6000000,  to: 7000000,  creatorFee: 0.0050 },
    { pool: "pumpswap", quote: "USDC", from: 7000000,  to: 8000000,  creatorFee: 0.0045 },
    { pool: "pumpswap", quote: "USDC", from: 8000000,  to: 9000000,  creatorFee: 0.0040 },
    { pool: "pumpswap", quote: "USDC", from: 9000000,  to: 10000000, creatorFee: 0.0035 },
    { pool: "pumpswap", quote: "USDC", from: 10000000, to: 11000000, creatorFee: 0.0030 },
    { pool: "pumpswap", quote: "USDC", from: 11000000, to: 12000000, creatorFee: 0.0028 },
    { pool: "pumpswap", quote: "USDC", from: 12000000, to: 13000000, creatorFee: 0.0025 },
    { pool: "pumpswap", quote: "USDC", from: 13000000, to: 14000000, creatorFee: 0.0023 },
    { pool: "pumpswap", quote: "USDC", from: 14000000, to: 15000000, creatorFee: 0.0020 },
    { pool: "pumpswap", quote: "USDC", from: 15000000, to: 16000000, creatorFee: 0.0018 },
    { pool: "pumpswap", quote: "USDC", from: 16000000, to: 17000000, creatorFee: 0.0015 },
    { pool: "pumpswap", quote: "USDC", from: 17000000, to: 18000000, creatorFee: 0.0013 },
    { pool: "pumpswap", quote: "USDC", from: 18000000, to: 19000000, creatorFee: 0.0010 },
    { pool: "pumpswap", quote: "USDC", from: 19000000, to: 20000000, creatorFee: 0.0008 },
    { pool: "pumpswap", quote: "USDC", from: 20000000, to: null,     creatorFee: 0.0005 }
  ],

  /* Forward's published terms: buyer pays expected fees minus this discount */
  FORWARD_DISCOUNT: { d7: 0.20, d30: 0.35 }
};
