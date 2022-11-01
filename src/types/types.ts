export default interface CryptoTypes {
  Asset: Asset;
  market_data: Market_Data;
}
interface Asset {
  id: string;
  name: string;
  symbol: string; 
}
interface Market_Data {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
}