import { ALL_CITIES } from "./cities";

const TICKER=[
  "Flight Community   ",
  "Charter Jobs   ",
  "Pilot-Built   ",
  "Pilot-Tested   ",
  "Crew Discounts   ",
  "Golf Access   ",
  "Hotel Upgrades ",
  "Restaurants Worth Flying For   ",
  "Bars Worth Going To   ",
  "Fitness & Wellness   ",
  "Ops Guides   ",
  "Private Charter Intel   ",
  "22+ Cities   ",
  "Crew Network   ",
  "Aircraft Access   ",
  "Layover Intelligence   "
];

const US_HOME=ALL_CITIES.filter(c=>c.region!=="International"&&c.status==="active").map(c=>({n:c.name,code:c.code}));

const INTL_HOME=ALL_CITIES.filter(c=>c.region==="International").map(c=>({n:c.name,code:c.code}));

export { TICKER, US_HOME, INTL_HOME };