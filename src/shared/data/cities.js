const ALL_CITIES=[
  {name:"Atlanta",code:"ATL",st:"GA",region:"Southeast",status:"active",venues:28,pilots:47,highlight:"Best steakhouses in the South",img:"https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=600&q=80",airport:"Hartsfield-Jackson Atlanta International"},
  {name:"Boise",code:"BOI",st:"ID",region:"West",status:"active",venues:16,pilots:17,highlight:"Pizza, steaks & Greenbelt runs",img:"https://images.unsplash.com/photo-1622748917434-46d05e8087c5?q=80&w=3131&auto=format&fit=crop",airport:"Boise Airport (KBOI)"},
  {name:"Boston",code:"BOS",st:"MA",region:"Northeast",status:"active",venues:20,pilots:31,highlight:"Seafood & historic bars",img:"https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=2070&auto=format&fit=crop",airport:"Logan International"},
  {name:"Bozeman",code:"BZN",st:"MT",region:"West",status:"active",venues:18,pilots:19,highlight:"Ski, Yellowstone & Montana grill",img:"https://images.unsplash.com/photo-1609366314330-e359fed1cd55?q=80&w=2070&auto=format&fit=crop",airport:"Bozeman Yellowstone International (KBZN)"},
  {name:"Chicago",code:"ORD",st:"IL",region:"Midwest",status:"active",venues:26,pilots:41,highlight:"Deep dish, jazz & craft beer",img:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",airport:"O'Hare International"},
  {name:"Dallas / Fort Worth",code:"DFW",st:"TX",region:"South",status:"active",venues:31,pilots:53,highlight:"World-class BBQ & golf",img:"https://images.unsplash.com/photo-1692417880021-429a69d8d96a?q=80&w=2070&auto=format&fit=crop",airport:"Dallas/Fort Worth International"},
  {name:"Dallas Love Field",code:"DAL",st:"TX",region:"South",status:"active",venues:16,pilots:21,highlight:"BBQ, steaks & the Katy Trail",img:"https://images.unsplash.com/photo-1631662760570-8f7b52d09fdc?q=80&w=2071&auto=format&fit=crop",airport:"Dallas Love Field (KDAL)"},
  {name:"Denver",code:"DEN",st:"CO",region:"West",status:"active",venues:22,pilots:35,highlight:"Mountain runs & craft beer",img:"https://images.unsplash.com/photo-1709689702529-6fa1f343e108?q=80&w=2509&auto=format&fit=crop",airport:"Denver International"},
  {name:"Dubai",code:"DXB",st:"UAE",region:"International",status:"soon",venues:0,pilots:0,highlight:"World-class hospitality & golf",img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",airport:"Dubai International"},
  {name:"Grand Junction",code:"GJT",st:"CO",region:"West",status:"active",venues:14,pilots:11,highlight:"Breweries, Colorado Monument & Hanging Lake",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",airport:"Grand Junction Regional (KGJT)"},
  {name:"Houston",code:"IAH",st:"TX",region:"South",status:"active",venues:19,pilots:28,highlight:"Best Tex-Mex in the country",img:"https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=600&q=80",airport:"George Bush Intercontinental"},
  {name:"London",code:"LHR",st:"UK",region:"International",status:"soon",venues:0,pilots:0,highlight:"Pubs, clubs & Heathrow crew life",img:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",airport:"London Heathrow"},
  {name:"Los Angeles",code:"LAX",st:"CA",region:"West",status:"active",venues:34,pilots:61,highlight:"Year-round golf & dining",img:"https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?q=80&w=3000&auto=format&fit=crop",airport:"Los Angeles International"},
  {name:"Los Cabos",code:"SJD",st:"MEX",region:"International",status:"active",venues:32,pilots:22,highlight:"Private aviation paradise · MMSD & MMSL",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",airport:"Los Cabos Intl (MMSD) · Cabo San Lucas (MMSL)"},
  {name:"Meridian",code:"MEI",st:"MS",region:"Southeast",status:"active",venues:11,pilots:9,highlight:"Deep South charm, BBQ & Naval Air Station history",img:"https://plus.unsplash.com/premium_photo-1733266821825-b5a3724e081d?q=80&w=2070&auto=format&fit=crop",airport:"Meridian Regional Airport (KMEI)"},
  {name:"Miami",code:"MIA",st:"FL",region:"Southeast",status:"active",venues:24,pilots:39,highlight:"Beach runs & rooftop bars",img:"https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=600&q=80",airport:"Miami International"},
  {name:"New Orleans",code:"MSY",st:"LA",region:"Southeast",status:"active",venues:26,pilots:34,highlight:"Best food city in America. Full stop.",img:"https://images.unsplash.com/photo-1635352934507-cd4ad73275c6?q=80&w=2070&auto=format&fit=crop",airport:"Louis Armstrong New Orleans International (KMSY)"},
  {name:"New York",code:"JFK",st:"NY",region:"Northeast",status:"active",venues:38,pilots:72,highlight:"The city that never sleeps",img:"https://images.unsplash.com/photo-1570304816841-906a17d7b067?q=80&w=3132&auto=format&fit=crop",airport:"John F. Kennedy International"},
  {name:"Orange County",code:"SNA",st:"CA",region:"West",status:"active",venues:18,pilots:24,highlight:"Newport Beach, Balboa Island & craft sushi",img:"https://plus.unsplash.com/premium_photo-1733317349944-aac879e5ea86?q=80&w=2070&auto=format&fit=crop",airport:"John Wayne Airport (KSNA)"},
  {name:"Page",code:"PGA",st:"AZ",region:"Southwest",status:"active",venues:14,pilots:18,highlight:"Horseshoe Bend, Lake Powell & canyon country",img:"https://plus.unsplash.com/premium_photo-1726610747246-d21b9f0bc811?q=80&w=2070&auto=format&fit=crop",airport:"Page Municipal Airport (KPGA)"},
  {name:"Paris",code:"CDG",st:"FRA",region:"International",status:"soon",venues:0,pilots:0,highlight:"Michelin stars, wine & the greatest city on earth",img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",airport:"Charles de Gaulle International (LFPG)"},
  {name:"Phoenix",code:"PHX",st:"AZ",region:"Southwest",status:"active",venues:18,pilots:26,highlight:"Golf capital of America",img:"https://images.unsplash.com/photo-1706403222567-06fe8d8dc93e?q=80&w=2071&auto=format&fit=crop",airport:"Phoenix Sky Harbor International"},
  {name:"Portsmouth",code:"PSM",st:"NH",region:"Northeast",status:"active",venues:14,pilots:12,highlight:"Seacoast charm, great food & historic downtown",img:"https://images.unsplash.com/photo-1621432059131-56fcc354245b?q=80&w=2073&auto=format&fit=crop",airport:"Portsmouth International at Pease (KPSM)"},
  {name:"San Juan",code:"SJU",st:"PR",region:"Southeast",status:"active",venues:22,pilots:28,highlight:"Beaches, Old San Juan & incredible food",img:"https://images.unsplash.com/photo-1579687196544-08ae57ab5c11?q=80&w=3131&auto=format&fit=crop",airport:"Luis Muñoz Marín International (TJSJ)"},
  {name:"Seattle",code:"SEA",st:"WA",region:"West",status:"active",venues:21,pilots:33,highlight:"Coffee, seafood & Pacific runs",img:"https://images.unsplash.com/photo-1438401171849-74ac270044ee?w=600&q=80",airport:"Seattle-Tacoma International"},
  {name:"Sedona",code:"SEZ",st:"AZ",region:"Southwest",status:"active",venues:16,pilots:21,highlight:"Red rocks, spa retreats & world-class hiking",img:"https://images.unsplash.com/photo-1583729476095-82e61108a043?q=80&w=3207&auto=format&fit=crop",airport:"Sedona Airport · Meridian Regional (KSEZ)"},
  {name:"Singapore",code:"SIN",st:"SGP",region:"International",status:"soon",venues:0,pilots:0,highlight:"Best food city in the world",img:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80",airport:"Singapore Changi"},
  {name:"Sydney",code:"SYD",st:"AUS",region:"International",status:"soon",venues:0,pilots:0,highlight:"Harbour views & surf culture",img:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80",airport:"Sydney Kingsford Smith"},
  {name:"Telluride",code:"TEX",st:"CO",region:"West",status:"active",venues:12,pilots:16,highlight:"World-class skiing, epic hikes & mountain dining",img:"https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",airport:"Telluride Regional (KTEX)"},
  {name:"Tokyo",code:"NRT",st:"JPN",region:"International",status:"soon",venues:0,pilots:0,highlight:"Ramen, sake & neon city runs",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",airport:"Narita International"},
  {name:"Wichita",code:"ICT",st:"KS",region:"Midwest",status:"active",venues:12,pilots:14,highlight:"Hidden gem. Pilot-tested.",img:"https://images.unsplash.com/photo-1592348665283-ab41f858f1b7?q=80&w=2070&auto=format&fit=crop",airport:"Dwight D. Eisenhower National"},
];

const VENUES={
  ATL:[
    {label:"Crew Favorites",title:"Near ATL · Atlanta",sub:"Pilot-verified within 20 min",items:[
      {name:"STK Atlanta",tag:"Upscale Steakhouse",meta:"15 min · 10% pilot perk",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"ATL-01"},
      {name:"The Optimist",tag:"Fresh Seafood",meta:"18 min · Crew discount",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"ATL-02"},
      {name:"Fox Bros BBQ",tag:"Texas-Style BBQ",meta:"20 min · No reservations",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"ATL-03"},
    ]},
    {label:"On the Green",title:"Golf · Atlanta",items:[
      {name:"Bobby Jones GC",tag:"Historic · 18 Holes",meta:"14 min · Rental clubs",badge:"Pilot Rate",cat:"Golf",img:"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",code:"ATL-G1"},
    ]},
  ],
  BOI:[
    {label:"Where to Stay",title:"Crew Hotels · Boise",sub:"Downtown and near the Greenbelt",items:[
      {name:"The Riverside Hotel",tag:"Boutique · Greenbelt Access",meta:"Right on the river — great base",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"BOI-H1"},
      {name:"Hyatt Place Boise Downtown",tag:"Hyatt · Modern · Downtown",meta:"Walkable to everything",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"BOI-H2"},
      {name:"Hampton Inn Boise Downtown",tag:"Hilton · Reliable · Central",meta:"Good value, solid crew option",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"BOI-H3"},
    ]},
    {label:"Best Bites",title:"Dining · Boise",sub:"Pizza, steaks, and a surprisingly deep food scene",items:[
      {name:"Fork",tag:"American · Farm-to-Table",meta:"Best overall restaurant in Boise",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"BOI-D1"},
      {name:"Barbacoa",tag:"Steakhouse · Upscale",meta:"Best steak in the city — book ahead",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"BOI-D2"},
      {name:"Flatbread Neapolitan Pizzeria",tag:"Wood-Fired Pizza",meta:"Outstanding Neapolitan pies",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"BOI-D3"},
      {name:"Goldy's Breakfast Bistro",tag:"Breakfast · Local Favorite",meta:"Best breakfast in Boise — go early",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"BOI-D4"},
    ]},
    {label:"After Dark",title:"Bars · Boise",sub:"Craft beer and cocktails in a walkable downtown",items:[
      {name:"Bittercreek Alehouse",tag:"Craft Beer · Great Menu",meta:"Best tap selection in the city",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"BOI-B1"},
      {name:"The Reef",tag:"Tiki Bar · Fun Vibe",meta:"Tropical drinks and great patio",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"BOI-B2"},
    ]},
    {label:"Stay Sharp",title:"Activities · Boise",sub:"Greenbelt, foothills, and the outdoors",items:[
      {name:"Boise River Greenbelt",tag:"Run or Bike · 25 Miles",meta:"Best urban trail in the Northwest",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"BOI-A1"},
      {name:"Hulls Gulch Reserve",tag:"Hiking · Foothills",meta:"Right above the city — great views",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",code:"BOI-A2"},
    ]},
  ],
  BOS:[
    {label:"Where to Stay",title:"Crew Hotels · Boston",sub:"Back Bay, Seaport, and airport-adjacent options",items:[
      {name:"Marriott Copley Place",tag:"4-Star · Back Bay",meta:"Prime location — great M Club",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"BOS-H1"},
      {name:"Westin Seaport District",tag:"4-Star · Seaport",meta:"Modern, great gym, easy access",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"BOS-H2"},
      {name:"Hilton Boston Logan Airport",tag:"On-Site · Logan",meta:"Can't beat the convenience",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"BOS-H3"},
      {name:"The Verb Hotel",tag:"Boutique · Fenway",meta:"Rock & roll theme — fun stay",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"BOS-H4"},
    ]},
    {label:"Best Bites",title:"Dining · Boston",sub:"Seafood, chowder, and Italian the right way",items:[
      {name:"Legal Sea Foods",tag:"Seafood · Boston Institution",meta:"Clam chowder is mandatory",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"BOS-D1"},
      {name:"Neptune Oyster",tag:"Raw Bar · North End",meta:"Best oysters in the city — always a wait",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"BOS-D2"},
      {name:"Giacomo's",tag:"Italian · North End · Cash Only",meta:"Cash only — worth the wait outside",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"BOS-D3"},
      {name:"Row 34",tag:"Oysters & Craft Beer · Seaport",meta:"Excellent seafood and beer pairing",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"BOS-D4"},
      {name:"Mike's Pastry",tag:"Cannoli · North End · Iconic",meta:"Get the cannoli. Non-negotiable.",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80",code:"BOS-D5"},
    ]},
    {label:"After Dark",title:"Bars · Boston",sub:"Historic taverns and craft beer in equal measure",items:[
      {name:"Bell In Hand Tavern",tag:"America's Oldest Bar · Downtown",meta:"Oldest bar in the US — do it once",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"BOS-B1"},
      {name:"Trillium Brewing Fort Point",tag:"World-Class Craft Brewery",meta:"Best brewery in New England",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"BOS-B2"},
    ]},
    {label:"Explore the City",title:"Activities · Boston",sub:"History, waterfront, and iconic runs",items:[
      {name:"Freedom Trail",tag:"Historic Walk · 2.5 Miles",meta:"16 historic sites — best self-guided tour in America",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"BOS-A1"},
      {name:"Charles River Esplanade Run",tag:"Run · Scenic · Flat",meta:"Best urban run in Boston",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"BOS-A2"},
    ]},
  ],
  BZN:[
    {label:"Ops Guide",isOps:true,title:"KBZN · Bozeman Ops",sub:"Bozeman Yellowstone International — private & charter",items:[
      {name:"Hangar — Book Well Ahead in Winter",tag:"Hangar space fills fast Dec–Mar during ski season. Call well ahead — walk-in hangar availability in peak winter is not guaranteed at any of the three FBOs.",badge:"Ops Warning",cat:"Ops",code:"BZN-OP1"},
      {name:"Three FBOs — All Side by Side, All Good",tag:"Bozeman has three FBOs, all located next to each other on the field. Check Flightbridge for current rates and fuel pricing before arrival.",badge:"Verified",cat:"Ops",code:"BZN-OP2"},
      {name:"Hotel Rates — Check Flightbridge / FBO",tag:"Element and AC Hotel both offer crew rates through Flightbridge and directly through the FBOs. Check before booking direct — the FBO rate is often better.",badge:"Ops Note",cat:"Ops",code:"BZN-OP3"},
    ]},
    {label:"Where to Stay",title:"Crew Hotels · Bozeman",sub:"All downtown — walkable to restaurants and bars",items:[
      {name:"Kimpton Armory Hotel",tag:"Stylish · Centrally Located",meta:"Rooftop bar (Sky Shed) · Crew favorite",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"BZN-H1"},
      {name:"AC Hotel Bozeman Downtown",tag:"4-Star · Sleek European Style",meta:"Check Flightbridge / FBO for rate",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"BZN-H2"},
      {name:"Element Bozeman",tag:"3-Star · Modern",meta:"Check Flightbridge / FBO for rate",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"BZN-H3"},
    ]},
    {label:"Best Bites",title:"Dining · Bozeman",sub:"Pilot-tested from the crew community",items:[
      {name:"Montana Ale Works",tag:"American · Large Menu",meta:"Classic stop — pilot favorite",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"BZN-D1"},
      {name:"Blackbird Kitchen",tag:"Pizza & Italian",meta:"Outstanding — must do",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"BZN-D2"},
      {name:"Revelry",tag:"Pizza & Modern American",meta:"Excellent — crew pick",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"BZN-D3"},
      {name:"Ted's Montana Grill",tag:"American · Steakhouse",meta:"Try the meatloaf",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"BZN-D4"},
      {name:"Western Café",tag:"Classic American Breakfast",meta:"Opens early — old-school spot",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"BZN-D5"},
      {name:"Sidewinders American Grill",tag:"Aviation-Themed · Near BZN",meta:"Right near the airport",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"BZN-D6"},
    ]},
    {label:"After Dark",title:"Bars · Bozeman",sub:"Downtown — walkable from crew hotels",items:[
      {name:"Sky Shed",tag:"Rooftop Bar · Great Views",meta:"Kimpton Armory rooftop",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"BZN-B1"},
      {name:"Mountains Walking Brewery",tag:"Local Craft Brewery",meta:"Great local brewery",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"BZN-B2"},
    ]},
    {label:"Ski, Hike & Explore",title:"Activities · Bozeman",sub:"World-class outdoor terrain outside the door",items:[
      {name:"Bridger Bowl Ski Area",tag:"Ski · Budget-Friendly · Legit Terrain",meta:"16 mi from BZN — must do in winter",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",code:"BZN-A1"},
      {name:"Palisade Falls",tag:"Summer Hike · Outstanding",meta:"Outstanding trail in summer",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",code:"BZN-A2"},
      {name:"Gardiner → Yellowstone North Entrance",tag:"Scenic Drive · Wildlife",meta:"Don't miss the Old Yellowstone Trail side road",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",code:"BZN-A3"},
    ]},
  ],
  CDG:[
    {label:"Ops Guide",isOps:true,title:"LFPG · Paris Ops",sub:"Charles de Gaulle — private & charter",items:[
      {name:"Two Terminals — Confirm Your Terminal Before Arrival",tag:"CDG has multiple terminals spread across a large campus. Confirm your handling terminal well in advance — getting to the wrong one causes serious delays for crew and passengers.",badge:"Ops Warning",cat:"Ops",code:"CDG-OP1"},
      {name:"Slot Times — Required for CDG",tag:"CDG is a slot-controlled airport. Ensure your slot is confirmed and filed correctly before departure. Late or missed slots can result in significant ground delays.",badge:"Ops Warning",cat:"Ops",code:"CDG-OP2"},
      {name:"Customs & Handling — Use a Reputable Handler",tag:"Handling quality at CDG varies significantly. Stick to a well-reviewed handler — Signature, Jet Aviation, or TAG Aviation are the most reliable for private and charter ops.",badge:"Ops Note",cat:"Ops",code:"CDG-OP3"},
      {name:"Le Bourget (LFPB) — Often the Better Option",tag:"For private and charter ops, Le Bourget (LFPB) is frequently a better choice than CDG — less congestion, faster handling, and closer to Paris city center. Always evaluate both.",badge:"Ops Note",cat:"Ops",code:"CDG-OP4"},
    ]},
    {label:"Area Intel",isNote:true,title:"CDG vs. Le Bourget · Where to Operate",note:"For private aviation, Le Bourget (LFPB) is the preferred GA airport for Paris — it's faster, more crew-friendly, and about 30 minutes closer to central Paris than CDG. Most corporate crews prefer LFPB for any trip where slot availability allows. CDG is the fallback for heavier iron or when LFPB is full during events like the Paris Air Show."},
    {label:"Where to Stay",title:"Crew Hotels · Paris",sub:"8th arrondissement, Saint-Germain & airport options",items:[
      {name:"Hôtel Lutetia",tag:"5-Star · Saint-Germain-des-Prés",meta:"Legendary Left Bank hotel — stunning property",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&q=80",code:"CDG-H1"},
      {name:"Le Bristol Paris",tag:"Palace Hotel · 8th · Faubourg Saint-Honoré",meta:"Best hotel in Paris — use points if you have them",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"CDG-H2"},
      {name:"Marriott Champs-Élysées",tag:"4-Star · Central · Points Friendly",meta:"Best crew value in central Paris",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"CDG-H3"},
      {name:"Novotel Paris CDG Airport",tag:"On-Site · CDG · Reliable",meta:"Best option for tight overnights at CDG",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"CDG-H4"},
      {name:"Hôtel du Collectionneur",tag:"4-Star · 8th · Near Arc de Triomphe",meta:"Spacious rooms, great location, crew-friendly rates",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"CDG-H5"},
    ]},
    {label:"Best Bites",title:"Dining · Paris",sub:"Bistros, brasseries, and Michelin stars — pilot-tested",items:[
      {name:"Brasserie Lipp",tag:"Classic French Brasserie · Saint-Germain",meta:"The quintessential Paris brasserie — go for lunch",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"CDG-D1"},
      {name:"L'Ami Jean",tag:"Basque · Left Bank · Legendary",meta:"Best value Michelin-adjacent meal in Paris",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"CDG-D2"},
      {name:"Le Comptoir du Relais",tag:"Bistro · Saint-Germain · Yves Camdeborde",meta:"Book weeks ahead for dinner — worth every effort",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"CDG-D3"},
      {name:"Septime",tag:"Modern French · 11th · Michelin",meta:"Best modern French in Paris — book 3 weeks out",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"CDG-D4"},
      {name:"Au Pied de Cochon",tag:"Brasserie · Les Halles · 24 Hours",meta:"Open around the clock — legendary late-night stop",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"CDG-D5"},
      {name:"Breizh Café",tag:"Crêpes · Marais · Outstanding",meta:"Best crêpes in Paris — Marais location",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80",code:"CDG-D6"},
      {name:"Frenchie",tag:"Modern Bistro · Sentier",meta:"Small, excellent, always packed — book ahead",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"CDG-D7"},
    ]},
    {label:"After Dark",title:"Bars · Paris",sub:"Wine bars, cocktail dens, and late-night brasseries",items:[
      {name:"Prescription Cocktail Club",tag:"Craft Cocktails · Saint-Germain",meta:"Best cocktail bar in Paris — no sign on the door",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"CDG-B1"},
      {name:"Le Baron Rouge",tag:"Wine Bar · Aligre Market · Old School",meta:"Standing room, great wine, zero pretension",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"CDG-B2"},
      {name:"Harry's New York Bar",tag:"Historic Cocktail Bar · Opera",meta:"1911 · Birthplace of the Bloody Mary",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"CDG-B3"},
      {name:"Caveau de la Huchette",tag:"Live Jazz · Latin Quarter · Historic",meta:"Jazz in a medieval cellar — do it",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"CDG-B4"},
    ]},
    {label:"Explore the City",title:"Activities · Paris",sub:"The greatest city on earth — act accordingly",items:[
      {name:"Musée d'Orsay",tag:"Impressionism · World-Class · Must Do",meta:"Best art museum in Paris — go early or late",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",code:"CDG-A1"},
      {name:"Seine River Walk — Notre-Dame to Eiffel",tag:"Walk · Iconic · Flat",meta:"Best way to see Paris on foot",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80",code:"CDG-A2"},
      {name:"Tuileries Garden Morning Run",tag:"Run · Central · Flat",meta:"Best urban run in Paris — quiet before 8am",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"CDG-A3"},
      {name:"Le Marais Walk",tag:"Neighborhood · History · Food",meta:"Best neighborhood in Paris to just wander",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",code:"CDG-A4"},
      {name:"Musée de l'Air et de l'Espace",tag:"Aviation Museum · Le Bourget",meta:"Right at LFPB — world-class aviation history",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",code:"CDG-A5"},
    ]},
  ],
  ORD:[
    {label:"Where to Stay",title:"Crew Hotels · Chicago",sub:"River North, Magnificent Mile & O'Hare adjacent",items:[
      {name:"Marriott Magnificent Mile",tag:"4-Star · Prime Location",meta:"Best location for crew nights out",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"ORD-H1"},
      {name:"Hyatt Regency Chicago",tag:"4-Star · River North",meta:"Massive property — great gym and pool",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"ORD-H2"},
      {name:"Hilton Rosemont O'Hare",tag:"3-Star · Near Airport",meta:"Best option for tight overnights",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"ORD-H3"},
      {name:"Kimpton Gray Hotel",tag:"Boutique · Loop",meta:"Excellent design hotel — great bar",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"ORD-H4"},
    ]},
    {label:"Best Bites",title:"Dining · Chicago",sub:"Deep dish, steaks, and the best Italian beef in the world",items:[
      {name:"Lou Malnati's",tag:"Deep Dish Pizza · Chicago Original",meta:"The deep dish standard — no debate",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"ORD-D1"},
      {name:"Girl & the Goat",tag:"Modern American · Stephanie Izard",meta:"Book way ahead — worth every effort",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"ORD-D2"},
      {name:"Gibson's Bar & Steakhouse",tag:"Classic Steakhouse · Gold Coast",meta:"Chicago institution — massive cuts",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"ORD-D3"},
      {name:"Al's Beef",tag:"Italian Beef Sandwich · Iconic",meta:"Get it dipped. Non-negotiable.",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"ORD-D4"},
      {name:"Pequod's Pizza",tag:"Deep Dish · Caramelized Crust",meta:"Even better than the famous spots",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"ORD-D5"},
      {name:"Au Cheval",tag:"Burgers · Diner-Style",meta:"Best burger in Chicago — always a wait",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",code:"ORD-D6"},
    ]},
    {label:"After Dark",title:"Bars · Chicago",sub:"Jazz, craft beer, and rooftop bars",items:[
      {name:"Green Mill Jazz Club",tag:"Historic Jazz Bar · Uptown",meta:"Al Capone's old booth — still there",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"ORD-B1"},
      {name:"Revolution Brewing",tag:"World-Class Craft Brewery",meta:"Best craft brewery in the Midwest",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"ORD-B2"},
      {name:"Signature Lounge at the 96th",tag:"Rooftop Bar · John Hancock",meta:"Drinks with one of the best views on earth",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"ORD-B3"},
    ]},
    {label:"Explore the City",title:"Activities · Chicago",sub:"Architecture, lakefront, and the best skyline in America",items:[
      {name:"Chicago Architecture Boat Tour",tag:"Architecture · River Tour",meta:"Best way to see Chicago — do it",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",code:"ORD-A1"},
      {name:"Lakefront Trail",tag:"Run or Bike · 18 Miles",meta:"One of the great urban trails in America",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"ORD-A2"},
    ]},
  ],
  DFW:[
    {label:"Where to Stay",title:"Crew Hotels · Dallas / Fort Worth",sub:"Grapevine, Las Colinas & DFW adjacent",items:[
      {name:"Gaylord Texan Resort",tag:"Massive Resort · Grapevine",meta:"Best crew destination property in DFW",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"DFW-H1"},
      {name:"Marriott DFW Airport South",tag:"4-Star · On-Property",meta:"Can't beat the convenience",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"DFW-H2"},
      {name:"Hilton DFW Lakes Executive Conference Center",tag:"4-Star · Grapevine",meta:"Great gym and pool — solid crew rate",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"DFW-H3"},
    ]},
    {label:"BBQ & Steaks",title:"Dining · Dallas / Fort Worth",sub:"World-class BBQ, steakhouses, and Tex-Mex",items:[
      {name:"Cattlemen's Steakhouse",tag:"Fort Worth Stockyards · Legendary",meta:"The original Texas steakhouse experience",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"DFW-D1"},
      {name:"Smoke & Bones BBQ",tag:"Texas BBQ · Grapevine",meta:"Best BBQ near DFW — seriously",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"DFW-D2"},
      {name:"Joe T. Garcia's",tag:"Tex-Mex · Fort Worth · Iconic",meta:"Cash only · Margarita pitchers · Worth it",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",code:"DFW-D3"},
      {name:"Reata Restaurant",tag:"Upscale Texan · Fort Worth",meta:"Best upscale dining near the Stockyards",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"DFW-D4"},
    ]},
    {label:"After Dark",title:"Bars · Dallas / Fort Worth",sub:"Stockyards honky-tonks and Grapevine wine country",items:[
      {name:"Billy Bob's Texas",tag:"World's Largest Honky-Tonk",meta:"Fort Worth Stockyards — see it once",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"DFW-B1"},
      {name:"Grapevine Main Street Wine Bars",tag:"Wine Tasting · Walkable",meta:"15 tasting rooms in 3 walkable blocks",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"DFW-B2"},
    ]},
    {label:"Stay Sharp",title:"Activities · Dallas / Fort Worth",sub:"Fort Worth Stockyards and outdoor trails",items:[
      {name:"Fort Worth Stockyards",tag:"Historic District · Cattle Drive",meta:"Daily cattle drive at 11:30am & 4pm",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"DFW-A1"},
      {name:"Arbor Hills Nature Preserve",tag:"Hiking & Running · Plano",meta:"Best trails near DFW",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",code:"DFW-A2"},
    ]},
  ],
  DAL:[
    {label:"Where to Stay",title:"Crew Hotels · Dallas Love Field",sub:"Uptown, DFW area, and near KDAL",items:[
      {name:"Canopy by Hilton Dallas Uptown",tag:"3-Star · Uptown",meta:"Great location for dining and nightlife",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"DAL-H1"},
      {name:"Hilton Anatole",tag:"4-Star · Resort-Style",meta:"Impressive property — great gym",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"DAL-H2"},
      {name:"Hilton Garden Inn DFW North Grapevine",tag:"3-Star · Reliable",meta:"Good value crew option",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"DAL-H3"},
      {name:"Residence Inn by Marriott DFW",tag:"3-Star · Extended Stay",meta:"Full kitchen — great for longer overnights",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"DAL-H4"},
    ]},
    {label:"BBQ & Steaks",title:"Dining · Dallas Love Field",sub:"Some of the best BBQ and steakhouses in Texas",items:[
      {name:"Terry Black's Barbecue",tag:"Texas BBQ · Famous",meta:"One of the best in Dallas",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"DAL-D1"},
      {name:"Heim Barbecue on Mockingbird",tag:"BBQ · Mockingbird",meta:"Excellent — worth the stop",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"DAL-D2"},
      {name:"Pecan Lodge",tag:"Famous BBQ · Deep Ellum",meta:"Go at 11am or wait 45+ min",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"DAL-D3"},
      {name:"Town Hearth",tag:"High-End Steakhouse",meta:"Best splurge steakhouse near DAL",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"DAL-D4"},
      {name:"Bob's Steak & Chop House",tag:"Classic Steakhouse",meta:"Dallas institution for a proper cut",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"DAL-D5"},
      {name:"Ida Claire",tag:"Southern · Funky Vibe",meta:"Great atmosphere and food",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"DAL-D6"},
      {name:"The Standard Pour",tag:"American · Great Cocktails",meta:"Strong cocktail program",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"DAL-D7"},
      {name:"Mi Dia From Scratch",tag:"Mexican · Modern Twist",meta:"Best upscale Mexican near DAL",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",code:"DAL-D8"},
      {name:"Hard Eight BBQ",tag:"Texas BBQ Experience · Casual",meta:"Classic Texas pit BBQ",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"DAL-D9"},
      {name:"Weinberger's Deli",tag:"Deli · Quick Lunch",meta:"Good deli sandwich stop",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"DAL-D10"},
      {name:"Meat U Anywhere BBQ",tag:"BBQ · Casual",meta:"Reliable BBQ option",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"DAL-D11"},
    ]},
    {label:"After Dark",title:"Bars · Dallas Love Field",sub:"Patio bars and great cocktails",items:[
      {name:"Katy Trail Ice House",tag:"Patio Bar · Along the Trail",meta:"Best patio in Dallas — huge",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"DAL-B1"},
    ]},
    {label:"Stay Sharp",title:"Activities · Dallas Love Field",sub:"Running, biking, and the outdoors",items:[
      {name:"Katy Trail",tag:"Run or Bike · 3.5 Miles",meta:"Popular paved trail through Dallas",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"DAL-A1"},
    ]},
  ],
  DEN:[
    {label:"Where to Stay",title:"Crew Hotels · Denver",sub:"LoDo, RiNo, and airport-adjacent",items:[
      {name:"The Maven Hotel",tag:"Boutique · Dairy Block · LoDo",meta:"Coolest hotel in Denver — great bar",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"DEN-H1"},
      {name:"Kimpton Hotel Born",tag:"4-Star · Union Station",meta:"Walkable to everything in LoDo",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"DEN-H2"},
      {name:"Westin DEN Airport",tag:"On-Site · Denver International",meta:"Connected to terminal — best for tight overnights",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"DEN-H3"},
      {name:"The Art Hotel",tag:"Boutique · Golden Triangle",meta:"Art-filled property near museums",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"DEN-H4"},
    ]},
    {label:"Best Bites",title:"Dining · Denver",sub:"Mile-high steak, craft beer, and a deep restaurant scene",items:[
      {name:"Elway's Downtown",tag:"Steakhouse · John Elway's",meta:"Best steakhouse in Denver",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"DEN-D1"},
      {name:"Linger",tag:"Global Street Food · RiNo",meta:"Rooftop · Views · Creative menu",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"DEN-D2"},
      {name:"Rioja",tag:"Mediterranean · James Beard Nominee",meta:"Best fine dining in LoDo",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"DEN-D3"},
      {name:"Hop Alley",tag:"Chinese · Modern · RiNo",meta:"Outstanding and unexpected",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"DEN-D4"},
      {name:"Root Down",tag:"Farm-to-Table · Casual",meta:"Great healthy option near the airport",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80",code:"DEN-D5"},
    ]},
    {label:"After Dark",title:"Bars · Denver",sub:"Craft beer capital of America — take it seriously",items:[
      {name:"Great Divide Brewing",tag:"World-Class Craft Brewery · RiNo",meta:"One of the best in the country",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"DEN-B1"},
      {name:"Williams & Graham",tag:"Speakeasy Cocktail Bar",meta:"Best cocktail bar in Denver — book ahead",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"DEN-B2"},
      {name:"Dairy Block Alley Bars",tag:"Bar Crawl · LoDo",meta:"Multiple great bars in one block",badge:"Verified",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"DEN-B3"},
    ]},
    {label:"Stay Sharp",title:"Activities · Denver",sub:"Mountains 45 minutes away — no excuses",items:[
      {name:"Cherry Creek Trail",tag:"Run or Bike · Paved · Scenic",meta:"Best urban trail in Denver",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"DEN-A1"},
      {name:"Red Rocks Amphitheatre",tag:"Hike or Concert · 30 Min",meta:"Hike the trails or catch a show",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",code:"DEN-A2"},
      {name:"Evergreen Lake",tag:"Day Trip · Mountain Drive",meta:"45 min west — stunning mountain scenery",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=600&q=80",code:"DEN-A3"},
    ]},
  ],
  DXB:[
    {label:"Where to Stay",title:"Crew Hotels · Dubai",sub:"Downtown luxury, Marina views & airport convenience",items:[
      {name:"JW Marriott Marquis Dubai",tag:"5-Star · Downtown",meta:"Massive luxury tower — ideal for premium layovers",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",code:"DXB-H1"},
      {name:"Le Méridien Dubai Hotel & Conference Centre",tag:"5-Star · Near Airport",meta:"Classic crew hotel very close to DXB",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",code:"DXB-H2"},
      {name:"Address Dubai Marina",tag:"5-Star · Marina",meta:"Walkable luxury with skyline views",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",code:"DXB-H3"},
      {name:"Rove Downtown",tag:"Modern · Great Value",meta:"Excellent location near Burj Khalifa",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",code:"DXB-H4"},
    ]},
  
    {label:"Best Bites",title:"Dining · Dubai",sub:"World-class restaurants, rooftops, and late-night food",items:[
      {name:"Zuma Dubai",tag:"Japanese · DIFC",meta:"One of Dubai’s top business dinner spots",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80",code:"DXB-D1"},
      {name:"CÉ LA VI Dubai",tag:"Skyline Dining · Rooftop",meta:"Incredible Burj Khalifa views",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"DXB-D2"},
      {name:"Arabian Tea House",tag:"Traditional Emirati",meta:"Beautiful old Dubai atmosphere",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"DXB-D3"},
      {name:"Nusr-Et Dubai",tag:"Steakhouse · Famous Spot",meta:"Luxury steak experience near downtown",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"DXB-D4"},
      {name:"Din Tai Fung",tag:"Asian · Dubai Mall",meta:"Reliable favorite during quick layovers",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"DXB-D5"},
    ]},
  
    {label:"After Dark",title:"Bars · Dubai",sub:"Luxury rooftops, lounges & marina nightlife",items:[
      {name:"Level 43 Sky Lounge",tag:"Rooftop Bar · Sheikh Zayed Road",meta:"Best skyline lounge for pilots staying downtown",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"DXB-B1"},
      {name:"Soho Garden",tag:"Nightlife · Meydan",meta:"Dubai’s best nightlife venue",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"DXB-B2"},
      {name:"At.mosphere Lounge",tag:"Burj Khalifa · Ultra Premium",meta:"One of the highest lounges in the world",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",code:"DXB-B3"},
    ]},
  
    {label:"Explore the City",title:"Activities · Dubai",sub:"Skyline icons, desert views & world-famous landmarks",items:[
      {name:"Burj Khalifa Observation Deck",tag:"Iconic Landmark",meta:"Mandatory first-time Dubai experience",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",code:"DXB-A1"},
      {name:"Dubai Marina Walk",tag:"Walk · Waterfront",meta:"Perfect for evening layover walks",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80",code:"DXB-A2"},
      {name:"Desert Safari",tag:"Adventure · Outside City",meta:"Most memorable long layover activity",badge:"Crew Favorite",cat:"Fitness",img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",code:"DXB-A3"},
    ]},
  ],
  GJT:[
    {label:"Ops Guide",isOps:true,title:"KGJT · Grand Junction Ops",sub:"Grand Junction Regional — private & charter",items:[
      {name:"Single FBO — Grand Junction Aviation",tag:"One FBO on the field. Friendly and efficient. Call ahead for hangar availability, especially during summer and hunting season.",badge:"Ops Note",cat:"Ops",code:"GJT-OP1"},
      {name:"High Terrain All Quadrants — Brief Thoroughly",tag:"Grand Junction is surrounded by significant terrain including Grand Mesa to the east and the Book Cliffs to the north. Brief terrain awareness on every arrival and departure.",badge:"Ops Warning",cat:"Ops",code:"GJT-OP2"},
    ]},
    {label:"Where to Stay",title:"Crew Hotels · Grand Junction",sub:"Downtown and near the Colorado River",items:[
      {name:"Marriott Courtyard Grand Junction",tag:"Marriott · Reliable · Downtown",meta:"Best crew-friendly option in GJT",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"GJT-H1"},
      {name:"Fairfield Inn & Suites Grand Junction",tag:"Marriott · Near Airport",meta:"Good value, close to field",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"GJT-H2"},
    ]},
    {label:"Best Bites",title:"Dining · Grand Junction",sub:"Colorado wine country right outside the door",items:[
      {name:"626 on Rood",tag:"Fine Dining · Downtown",meta:"Best restaurant in Grand Junction",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"GJT-D1"},
      {name:"Bin 707 Foodbar",tag:"Local Farm-to-Table",meta:"Excellent seasonal menu",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"GJT-D2"},
      {name:"Rockslide Brewery",tag:"Brewpub · Great Burgers",meta:"Best brewery in GJT — solid food",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"GJT-D3"},
    ]},
    {label:"After Dark",title:"Bars · Grand Junction",sub:"Wine country and craft beer",items:[
      {name:"Indefinite Arts Brewing",tag:"Local Craft Brewery",meta:"Best craft beer stop in GJT",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"GJT-B1"},
    ]},
    {label:"Explore the Area",title:"Activities · Grand Junction",sub:"Colorado National Monument and wine country",items:[
      {name:"Colorado National Monument",tag:"Scenic Drive & Hiking",meta:"Stunning red rock canyon — 15 min from town",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",code:"GJT-A1"},
      {name:"Palisade Wine Country",tag:"Wine Tasting · 15 Min",meta:"Colorado's wine country — legit and walkable",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"GJT-A2"},
      {name:"Hanging Lake Day Trip",tag:"Hike · Glenwood Canyon",meta:"One of the most beautiful hikes in Colorado",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",code:"GJT-A3"},
    ]},
  ],
  HND:[
    {label:"Where to Stay",title:"Crew Hotels · Tokyo",sub:"Luxury towers, Shibuya access & premium crew overnights",items:[
      {name:"The Tokyo Edition Toranomon",tag:"5-Star · Central Tokyo",meta:"Top premium layover hotel with incredible skyline views",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",code:"HND-H1"},
      {name:"Park Hyatt Tokyo",tag:"5-Star · Shinjuku",meta:"Iconic Tokyo luxury and quiet atmosphere",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",code:"HND-H2"},
      {name:"Villa Fontaine Grand Haneda Airport",tag:"4-Star · Airport",meta:"Best short overnight option directly near Haneda",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",code:"HND-H3"},
      {name:"Cerulean Tower Tokyu Hotel",tag:"Luxury · Shibuya",meta:"Ideal for crews wanting city access",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",code:"HND-H4"},
    ]},
  
    {label:"Best Bites",title:"Dining · Tokyo",sub:"Sushi, wagyu, ramen & world-class Japanese dining",items:[
      {name:"Sushi Dai",tag:"Sushi · Legendary",meta:"Classic Tokyo sushi layover experience",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80",code:"HND-D1"},
      {name:"Gyukatsu Motomura",tag:"Wagyu Cutlet · Tokyo Favorite",meta:"One of the most loved pilot layover meals",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"HND-D2"},
      {name:"Ichiran Shibuya",tag:"Ramen · Essential",meta:"Fast, reliable, iconic Tokyo ramen",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&q=80",code:"HND-D3"},
      {name:"Narisawa",tag:"Fine Dining · Premium",meta:"For long layovers and top-tier dining",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"HND-D4"},
      {name:"Tsukiji Outer Market",tag:"Food Market · Essential",meta:"Best variety in one stop",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"HND-D5"},
    ]},
  
    {label:"After Dark",title:"Bars · Tokyo",sub:"High-rise cocktails, hidden bars & Shibuya energy",items:[
      {name:"New York Bar",tag:"Sky Bar · Park Hyatt",meta:"One of the most iconic bars in Tokyo",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"HND-B1"},
      {name:"Bar Benfiddich",tag:"Cocktail Bar · World-Class",meta:"One of Tokyo's most unique cocktail experiences",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",code:"HND-B2"},
      {name:"Golden Gai",tag:"Nightlife District · Shinjuku",meta:"Best late-night Tokyo pilot experience",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"HND-B3"},
    ]},
  
    {label:"Explore the City",title:"Activities · Tokyo",sub:"Urban energy, shrines & iconic city movement",items:[
      {name:"Shibuya Crossing",tag:"Landmark · Essential",meta:"Mandatory first Tokyo stop",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",code:"HND-A1"},
      {name:"Imperial Palace Run Loop",tag:"Run · Central Tokyo",meta:"Best layover run in Tokyo",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"HND-A2"},
      {name:"Meiji Shrine",tag:"Historic Walk · Shibuya",meta:"Quiet reset during long layovers",badge:"Crew Favorite",cat:"Fitness",img:"https://images.unsplash.com/photo-1526481280695-3c4691f8c31c?w=600&q=80",code:"HND-A3"},
    ]},
  ],
  IAH:[
    {label:"Where to Stay",title:"Crew Hotels · Houston",sub:"Galleria, Uptown, and near IAH",items:[
      {name:"Marriott Houston Westchase",tag:"4-Star · Galleria Area",meta:"Great gym and M Club — crew favorite",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"IAH-H1"},
      {name:"Hyatt Regency Houston Galleria",tag:"4-Star · Galleria",meta:"Attached to the Galleria mall",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"IAH-H2"},
      {name:"Marriott Houston Airport at George Bush",tag:"On-Site · IAH",meta:"Best for tight overnight turns",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"IAH-H3"},
    ]},
    {label:"Best Bites",title:"Dining · Houston",sub:"Tex-Mex, BBQ, and the best Vietnamese in America",items:[
      {name:"Ninfa's on Navigation",tag:"Tex-Mex · Original Location",meta:"The original fajita restaurant — do it",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",code:"IAH-D1"},
      {name:"Truth BBQ",tag:"Texas BBQ · James Beard Nominated",meta:"Best BBQ in Houston — get there early",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"IAH-D2"},
      {name:"Pappas Bros. Steakhouse",tag:"Upscale Steakhouse",meta:"Best steak in Houston — book ahead",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"IAH-D3"},
      {name:"Crawfish & Noodles",tag:"Vietnamese · Bellaire",meta:"Best pho and crawfish in the country",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"IAH-D4"},
      {name:"Guadalajara Hacienda",tag:"Tex-Mex · Casual",meta:"Great margaritas and enchiladas",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",code:"IAH-D5"},
    ]},
    {label:"After Dark",title:"Bars · Houston",sub:"Midtown and Montrose bar scene",items:[
      {name:"Eight Row Flint",tag:"Craft Cocktails · Heights",meta:"Best cocktail bar in Houston",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"IAH-B1"},
      {name:"Saint Arnold Brewing Company",tag:"Texas Craft Brewery",meta:"Best brewery in Houston — great taproom",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"IAH-B2"},
    ]},
    {label:"Stay Sharp",title:"Activities · Houston",sub:"Space Center and world-class museums",items:[
      {name:"Space Center Houston",tag:"NASA · JSC · Must Visit",meta:"Mission Control is worth every minute",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",code:"IAH-A1"},
      {name:"Buffalo Bayou Park",tag:"Run or Bike · Downtown",meta:"Best urban green space in Houston",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"IAH-A2"},
    ]},
  ],
  LAX:[
    {label:"Where to Stay",title:"Crew Hotels · Los Angeles",sub:"Manhattan Beach, Santa Monica & West LA",items:[
      {name:"Marriott Manhattan Beach",tag:"4-Star · Beach Access",meta:"Best crew hotel near LAX — walk to beach",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"LAX-H1"},
      {name:"Shade Hotel Manhattan Beach",tag:"Boutique · Upscale",meta:"Excellent boutique option near the beach",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"LAX-H2"},
      {name:"Westin LAX",tag:"4-Star · Near Airport",meta:"Efficient and comfortable for tight turns",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"LAX-H3"},
      {name:"Loews Santa Monica Beach Hotel",tag:"Beachfront · Santa Monica",meta:"Prime Santa Monica location",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"LAX-H4"},
    ]},
    {label:"Best Bites",title:"Dining · Los Angeles",sub:"Golf course brunch to world-class omakase",items:[
      {name:"Fishing with Dynamite",tag:"Oysters & Seafood · Manhattan Beach",meta:"Best seafood spot near LAX — always packed",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"LAX-D1"},
      {name:"Gjusta",tag:"Bakery/Deli · Venice",meta:"Best breakfast and lunch stop in LA",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"LAX-D2"},
      {name:"Nobu Malibu",tag:"Japanese · Oceanfront",meta:"The splurge — worth every dollar",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"LAX-D3"},
      {name:"In-N-Out Burger",tag:"California Burger · Iconic",meta:"Double-double animal style. That's it.",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",code:"LAX-D4"},
      {name:"Republique",tag:"French · Mid-Wilshire",meta:"Best brunch in Los Angeles",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"LAX-D5"},
    ]},
    {label:"After Dark",title:"Bars · Los Angeles",sub:"Rooftop bars and craft cocktail dens",items:[
      {name:"The Rooftop at The Wayfarer",tag:"Rooftop Bar · Downtown LA",meta:"Great views of the skyline",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"LAX-B1"},
      {name:"Ercoles 1101",tag:"Dive Bar · Manhattan Beach",meta:"Best dive bar near LAX — crew classic",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"LAX-B2"},
    ]},
    {label:"Stay Sharp",title:"Activities · Los Angeles",sub:"Year-round golf, beach runs, and canyon hikes",items:[
      {name:"Manhattan Beach Strand Run",tag:"Beach Run · Flat · Scenic",meta:"Best beach run near LAX",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"LAX-A1"},
      {name:"Griffith Observatory & Hike",tag:"Hike · Views · Iconic",meta:"Best free view of LA",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",code:"LAX-A2"},
      {name:"Rustic Canyon Golf Course",tag:"Golf · Santa Monica Canyon",meta:"Best public course near the beach",badge:"Top Pick",cat:"Golf",img:"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",code:"LAX-G1"},
    ]},
  ],
  LHR:[
    {label:"Where to Stay",title:"Crew Hotels · London",sub:"Mayfair luxury, Heathrow convenience & central city access",items:[
      {name:"Sofitel London Heathrow",tag:"5-Star · Terminal Access",meta:"Best direct airport hotel for short crew overnights",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",code:"LHR-H1"},
      {name:"The Langham London",tag:"5-Star · Marylebone",meta:"Classic London luxury with ideal central location",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",code:"LHR-H2"},
      {name:"Hilton Garden Inn Heathrow",tag:"4-Star · Airport",meta:"Strong value for short overnight stays",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",code:"LHR-H3"},
      {name:"The Ned London",tag:"Boutique Luxury · City",meta:"Excellent atmosphere for longer layovers",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",code:"LHR-H4"},
    ]},
  
    {label:"Best Bites",title:"Dining · London",sub:"Steakhouses, pubs, global dining & classic London icons",items:[
      {name:"Dishoom Covent Garden",tag:"Indian · London Favorite",meta:"One of London's most loved dining spots",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"LHR-D1"},
      {name:"Hawksmoor Air Street",tag:"Steakhouse · Premium",meta:"Best steakhouse for pilot layovers",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"LHR-D2"},
      {name:"Burger & Lobster",tag:"Casual Premium · Soho",meta:"Reliable layover favorite",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",code:"LHR-D3"},
      {name:"The Wolseley",tag:"Classic London Dining",meta:"Historic and elegant",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80",code:"LHR-D4"},
      {name:"Flat Iron Soho",tag:"Steak · Great Value",meta:"Excellent casual steak option",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"LHR-D5"},
    ]},
  
    {label:"After Dark",title:"Bars · London",sub:"Historic pubs, rooftops & world-class cocktail bars",items:[
      {name:"Sky Garden",tag:"Rooftop Bar · City Views",meta:"One of London's best skyline bars",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"LHR-B1"},
      {name:"The Churchill Arms",tag:"Historic Pub · Kensington",meta:"Classic London pub experience",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"LHR-B2"},
      {name:"The American Bar at Savoy",tag:"Luxury Cocktail Bar",meta:"One of the most iconic bars in London",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",code:"LHR-B3"},
    ]},
  
    {label:"Explore the City",title:"Activities · London",sub:"Royal landmarks, parks & iconic walks",items:[
      {name:"Hyde Park Run",tag:"Run · Central London",meta:"Best layover run in London",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"LHR-A1"},
      {name:"Tower Bridge Walk",tag:"Historic Walk · Thames",meta:"Classic first layover activity",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",code:"LHR-A2"},
      {name:"Buckingham Palace Area",tag:"Landmark · Central London",meta:"Mandatory first-time London stop",badge:"Crew Favorite",cat:"Fitness",img:"https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&q=80",code:"LHR-A3"},
    ]},
  ],
  SJD:[
    {label:"Ops Guide",isOps:true,title:"Los Cabos · Private & Charter Ops",sub:"MMSD (San José del Cabo) · MMSL (Cabo San Lucas)",items:[
      {name:"Parking — Reserve Immediately",tag:"High-season ramp space fills fast at both MMSD and MMSL. Contact your handler as soon as the trip is confirmed.",badge:"Ops Warning",cat:"Ops",code:"SJD-OP1"},
      {name:"Fueling — Plan for Significant Delays",tag:"Fueling can take a very long time. Strongly consider taking fuel on arrival rather than at departure. Build extra time into your schedule.",badge:"Ops Warning",cat:"Ops",code:"SJD-OP2"},
      {name:"Terrain — Night Ops Caution",tag:"Significant high terrain surrounds both airports. Night arrivals/departures not recommended unless thoroughly familiar with the area.",badge:"Ops Warning",cat:"Ops",code:"SJD-OP3"},
    ]},
    {label:"Area Intel",isNote:true,title:"Marina vs. San José del Cabo",note:"Two distinct areas: the Marina (near MMSL) is high-energy, touristy, classic Cabo. San José del Cabo (near MMSD) is more cultured, relaxed, and walkable. Most corporate crews prefer San José for overnight stays. Visit the Marina for one big night out if that's your vibe."},
    {label:"Best Bites",title:"Dining · Los Cabos",sub:"From tacos to farm-to-table — all crew-tested",items:[
      {name:"RosaNegra",tag:"Latin American · Dinner",meta:"Go-to splurge spot",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"SJD-D1"},
      {name:"Nicksan Cabo",tag:"Japanese · Best Sushi in Cabo",meta:"#1 sushi recommendation",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"SJD-D2"},
      {name:"Flora Farms",tag:"Farm-to-Table · Breakfast & Dinner",meta:"Book dinner well ahead",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80",code:"SJD-D3"},
      {name:"La Lupita Taco & Mezcal",tag:"Tacos · Mezcal Bar",meta:"Loved taco spot",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80",code:"SJD-D4"},
    ]},
    {label:"After Dark",title:"Bars · Los Cabos",items:[
      {name:"Cabo Wabo Cantina",tag:"Legendary Watering Hole",meta:"Sammy Hagar's iconic bar",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"SJD-B1"},
      {name:"Mango Deck",tag:"Beach Grill · Must Visit",meta:"Iconic beachfront",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"SJD-B2"},
    ]},
  ],
  MIA:[
    {label:"Where to Stay",title:"Crew Hotels · Miami",sub:"South Beach, Brickell, and Coconut Grove",items:[
      {name:"Marriott Biscayne Bay",tag:"4-Star · Brickell · Water Views",meta:"Best crew hotel in Miami — great gym",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"MIA-H1"},
      {name:"JW Marriott Miami",tag:"5-Star · Brickell",meta:"Top-tier — use points if you have them",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"MIA-H2"},
      {name:"Hampton Inn Miami-Airport",tag:"Near MIA · Reliable",meta:"Good value, easy access to field",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"MIA-H3"},
      {name:"Kimpton EPIC Hotel",tag:"Boutique · Brickell · Rooftop Pool",meta:"Rooftop pool overlooking Biscayne Bay",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"MIA-H4"},
    ]},
    {label:"Best Bites",title:"Dining · Miami",sub:"Cuban, ceviche, and some of the best food in Florida",items:[
      {name:"Versailles Restaurant",tag:"Cuban · Calle Ocho · Iconic",meta:"The Cuban institution — don't skip it",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",code:"MIA-D1"},
      {name:"CVI.CHE 105",tag:"Peruvian · Ceviche",meta:"Best ceviche in Miami",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"MIA-D2"},
      {name:"STK Miami",tag:"Steakhouse · South Beach",meta:"Great steaks and scene",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"MIA-D3"},
      {name:"Wynwood Kitchen & Bar",tag:"Modern American · Wynwood",meta:"Great food in the art district",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"MIA-D4"},
      {name:"La Mar by Gastón Acurio",tag:"Peruvian · Waterfront · Brickell",meta:"Outstanding — book well ahead",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"MIA-D5"},
    ]},
    {label:"After Dark",title:"Bars · Miami",sub:"Rooftop bars, beach clubs, and Brickell nightlife",items:[
      {name:"Sugar at EAST Miami",tag:"Rooftop Bar · Brickell · Views",meta:"Best rooftop bar in Miami",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"MIA-B1"},
      {name:"Wynwood Walls Bar Scene",tag:"Art District · Bar Crawl",meta:"Walk the murals, hit the bars",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"MIA-B2"},
    ]},
    {label:"Stay Sharp",title:"Activities · Miami",sub:"Beach runs, Art Deco, and Biscayne Bay",items:[
      {name:"South Beach Ocean Drive Run",tag:"Beach Run · Art Deco · Flat",meta:"Best morning run in Miami",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"MIA-A1"},
      {name:"Wynwood Walls",tag:"Street Art · Self-Guided",meta:"World-class outdoor art — free to walk",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=600&q=80",code:"MIA-A2"},
    ]},
  ],
  MSY:[
    {label:"Ops Guide",isOps:true,title:"KMSY · New Orleans Ops",sub:"Louis Armstrong International — private & charter",items:[
      {name:"FBO Options — Signature & Showalter",tag:"Both FBOs are on the field and well-run. Call ahead during Mardi Gras and Jazz Fest — ramp space is extremely limited during peak events.",badge:"Ops Note",cat:"Ops",code:"MSY-OP1"},
      {name:"Mardi Gras & Jazz Fest — Plan Everything Weeks Out",tag:"During Mardi Gras (Feb/Mar) and Jazz Fest (late Apr/early May), hotels book out months in advance and ramp parking is severely constrained. Reserve the moment the trip is confirmed.",badge:"Ops Warning",cat:"Ops",code:"MSY-OP2"},
    ]},
    {label:"Best Bites",title:"Dining · New Orleans",sub:"One of the greatest food cities on earth — pilot-tested picks",items:[
      {name:"Commander's Palace",tag:"Classic NOLA Fine Dining",meta:"Best restaurant in the city — book ahead",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"MSY-D1"},
      {name:"Café Du Monde",tag:"Beignets · 24 Hours",meta:"Non-negotiable stop. Always.",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80",code:"MSY-D2"},
      {name:"Galatoire's",tag:"French Creole · Classic Fine Dining",meta:"Friday lunch is a NOLA institution",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"MSY-D3"},
      {name:"Cochon",tag:"Southern · James Beard Award",meta:"Best pork dishes in the city",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"MSY-D4"},
      {name:"Acme Oyster House",tag:"Raw Bar · Po-boys",meta:"Best raw oysters in the city",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"MSY-D5"},
      {name:"Parkway Bakery & Tavern",tag:"Po-Boys · Mid-City",meta:"Best po-boy in the city — roast beef debris",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"MSY-D6"},
    ]},
    {label:"After Dark",title:"Bars · New Orleans",sub:"The city that invented going out",items:[
      {name:"Sazerac Bar at The Roosevelt",tag:"Classic NOLA Cocktail Bar",meta:"Order a Sazerac. Obviously.",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"MSY-B1"},
      {name:"Frenchmen Street",tag:"Live Music Strip · Jazz & Blues",meta:"Skip Bourbon. Come here instead.",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"MSY-B2"},
      {name:"Preservation Hall",tag:"Live Jazz · Historic Venue",meta:"See live jazz the way it was meant",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"MSY-B3"},
    ]},
  ],
  PGA:[
    {label:"Ops Guide",isOps:true,title:"KPGA · Page Ops",sub:"Page Municipal Airport — private & charter",items:[
      {name:"Single Runway — Wind Check Critical",tag:"KPGA has a single runway. Afternoon winds in the canyon country can be significant and variable. Check winds carefully — morning arrivals are strongly preferred.",badge:"Ops Warning",cat:"Ops",code:"PGA-OP1"},
      {name:"Fuel — Top Off When Available",tag:"Page is a remote field. Fuel availability can be limited and the next suitable airport is a significant distance away. Always top off on arrival.",badge:"Ops Warning",cat:"Ops",code:"PGA-OP2"},
      {name:"Terrain Awareness — Canyon Country",tag:"The area surrounding KPGA is characterized by deep canyons and dramatic terrain changes. Night VFR not recommended for unfamiliar crews. Brief terrain thoroughly.",badge:"Ops Note",cat:"Ops",code:"PGA-OP3"},
    ]},
    {label:"Where to Stay",title:"Crew Hotels · Page",sub:"Small town, big views — options are limited but solid",items:[
      {name:"Courtyard Page at Lake Powell",tag:"Marriott · Best in Town",meta:"Best property in Page — book early in peak season",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"PGA-H1"},
      {name:"Hyatt Place Page Lake Powell",tag:"Hyatt · Modern · Views",meta:"Clean, reliable, good gym",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"PGA-H2"},
      {name:"Lake Powell Resort",tag:"Resort · Marina · Lakeside",meta:"Right on the water — stunning setting",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"PGA-H3"},
    ]},
    {label:"Best Bites",title:"Dining · Page",sub:"Small town dining — a few solid stops",items:[
      {name:"Bonkers Restaurant",tag:"American · Local Favorite",meta:"Best all-around restaurant in Page",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"PGA-D1"},
      {name:"Ranch House Grille",tag:"Breakfast & Lunch · Classic",meta:"Best breakfast in town — go early",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"PGA-D2"},
      {name:"Big Lake Bar & Grill",tag:"Casual · Lakeside",meta:"Cold beer and burgers with lake views",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",code:"PGA-D3"},
    ]},
    {label:"After Dark",title:"Bars · Page",sub:"Low-key and local",items:[
      {name:"Lake Powell Lounge",tag:"Hotel Bar · Casual",meta:"Best evening drink option in Page",badge:"Verified",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"PGA-B1"},
    ]},
    {label:"Explore the Area",title:"Activities · Page & Lake Powell",sub:"Some of the most dramatic scenery on the planet",items:[
      {name:"Horseshoe Bend",tag:"Iconic Overlook · 1 Mile Walk",meta:"Non-negotiable. Go at sunrise.",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",code:"PGA-A1"},
      {name:"Antelope Canyon Tour",tag:"Slot Canyon · Guided Only",meta:"Upper Canyon for photos, Lower for fewer crowds",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600&q=80",code:"PGA-A2"},
      {name:"Lake Powell Boat Tour",tag:"Lake · Canyon Walls · Stunning",meta:"Full day on the lake — do it",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",code:"PGA-A3"},
      {name:"Glen Canyon Dam Tour",tag:"Engineering · Historic · Free",meta:"Right in town — surprisingly impressive",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"PGA-A4"},
      {name:"Drive to Monument Valley",tag:"Scenic Drive · 90 Min",meta:"One of the great American road trips — do it",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",code:"PGA-A5"},
    ]},
  ],
  JFK:[
    {label:"Where to Stay",title:"Crew Hotels · New York",sub:"Midtown, Downtown, and JFK-adjacent options",items:[
      {name:"Marriott Marquis Times Square",tag:"4-Star · Midtown · Views",meta:"Classic crew hotel — walkable to everything",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"JFK-H1"},
      {name:"1 Hotel Brooklyn Bridge",tag:"Boutique · DUMBO · Rooftop",meta:"Best views of Manhattan from Brooklyn",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"JFK-H2"},
      {name:"TWA Hotel at JFK",tag:"Aviation History · On-Field",meta:"Restored 1962 TWA terminal — remarkable",badge:"Must Do",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"JFK-H3"},
      {name:"The Standard High Line",tag:"Boutique · Meatpacking",meta:"Best location for the west side",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"JFK-H4"},
    ]},
    {label:"Best Bites",title:"Dining · New York",sub:"The deepest food city in America — scratch the surface",items:[
      {name:"Peter Luger Steak House",tag:"Classic Steakhouse · Brooklyn",meta:"Cash only — the standard all others chase",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"JFK-D1"},
      {name:"Di Fara Pizza",tag:"Old-School Brooklyn Pizza",meta:"Worth the wait — NYC legend",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"JFK-D2"},
      {name:"Carbone",tag:"Italian-American · Greenwich Village",meta:"Book 30 days out — worth it",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"JFK-D3"},
      {name:"Katz's Delicatessen",tag:"NYC Deli · Lower East Side",meta:"The pastrami sandwich. No debate.",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"JFK-D4"},
      {name:"Momofuku Noodle Bar",tag:"Ramen · East Village",meta:"David Chang's original — still excellent",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"JFK-D5"},
    ]},
    {label:"After Dark",title:"Bars · New York",sub:"Rooftop bars, jazz clubs, and dive bars — all great",items:[
      {name:"The Dead Rabbit",tag:"Craft Cocktail Bar · FiDi",meta:"One of the best bars in the world",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"JFK-B1"},
      {name:"230 Fifth Rooftop Bar",tag:"Rooftop · Midtown · Views",meta:"Empire State Building views — go at sunset",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"JFK-B2"},
      {name:"Blue Note Jazz Club",tag:"Jazz · Greenwich Village",meta:"World-class jazz in an intimate room",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"JFK-B3"},
    ]},
    {label:"Explore the City",title:"Activities · New York",sub:"The greatest city in the world — act accordingly",items:[
      {name:"High Line",tag:"Walk · Chelsea · Art · Views",meta:"Best urban walk in America",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"JFK-A1"},
      {name:"Brooklyn Bridge Walk",tag:"Walk · Views · Iconic",meta:"Cross it on foot — every time",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",code:"JFK-A2"},
      {name:"Central Park Run",tag:"Run · 843 Acres · Classic",meta:"Reservoir loop is 1.58 miles — perfect",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"JFK-A3"},
    ]},
  ],
  SNA:[
    {label:"Ops Guide",isOps:true,title:"KSNA · Orange County Ops",sub:"John Wayne Airport — private & charter",items:[
      {name:"Curfew & Noise Abatement — Familiarize Before Arrival",tag:"KSNA has strict curfews and published noise abatement procedures. Review these thoroughly before the flight. Noise violations carry significant fines and can affect future access.",badge:"Ops Warning",cat:"Ops",code:"SNA-OP1"},
      {name:"ACI — Two Facilities, North and South",tag:"ACI Jet operates two separate facilities at KSNA. Double-check which facility your trip is assigned to before arrival. Getting to the wrong terminal causes real delays.",badge:"Ops Warning",cat:"Ops",code:"SNA-OP2"},
      {name:"Clay Lacy — Escort Required Through Guard Gate",tag:"Clay Lacy Aviation at KSNA requires an escort through a guard gate to access the FBO. Call ahead so they can have someone ready — don't assume walk-in access.",badge:"Ops Note",cat:"Ops",code:"SNA-OP3"},
    ]},
    {label:"Where to Stay",title:"Crew Hotels · Orange County",sub:"Irvine, Newport Beach & surrounding area",items:[
      {name:"Irvine Marriott",tag:"4-Star · Large M Club Lounge",meta:"Good gym · M Club food and bar",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"SNA-H1"},
      {name:"Renaissance Newport Beach",tag:"4-Star · Close to Airport",meta:"Competitive rates · Great location",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"SNA-H2"},
      {name:"Marriott Irvine Spectrum",tag:"4-Star · Offsite · Nice Property",meta:"Lots to do nearby · Very nice",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"SNA-H3"},
    ]},
    {label:"Best Bites",title:"Dining · Orange County",sub:"Sushi, seafood, and burgers worth the drive",items:[
      {name:"ETCetera Sushi & Izakaya",tag:"Sushi · Near Airport",meta:"High quality, good price",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"SNA-D1"},
      {name:"Oo Toro Sushi",tag:"Authentic Sushi · Top Notch",meta:"Expensive but the real deal",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"SNA-D2"},
      {name:"Puesto Park Place Irvine",tag:"Upscale Mexican · Tacos",meta:"Excellent tacos and drinks",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80",code:"SNA-D3"},
      {name:"Hook & Anchor",tag:"Seafood · Newport Island",meta:"Best seafood without busting budget",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"SNA-D4"},
      {name:"Peter's Gourmade Grill",tag:"Burgers · Best in OC",meta:"Worth the drive — wallet-friendly",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",code:"SNA-D5"},
      {name:"Catalina Fish Kitchen",tag:"Seafood · Local Feel",meta:"Good brews · Extensive seafood menu",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"SNA-D6"},
      {name:"Spicy Noodle House",tag:"Chinese/Thai · Quick & Affordable",meta:"High quality, easy on the wallet",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"SNA-D7"},
    ]},
    {label:"After Dark",title:"Bars · Orange County",sub:"Local craft and Newport Beach vibes",items:[
      {name:"Salty Bear Brewing",tag:"Local Craft Brewery",meta:"Solid local beer scene",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"SNA-B1"},
    ]},
    {label:"Explore the Area",title:"Activities · Orange County",sub:"Newport Beach, Balboa Island & aviation",items:[
      {name:"Balboa Island Ferry & Beach Cruisers",tag:"Ferry · Newport Beach · Classic OC",meta:"Take the ferry, rent bikes — iconic",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",code:"SNA-A1"},
      {name:"Lyon Air Museum",tag:"Aviation Museum · KSNA",meta:"Right on the field — excellent collection",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",code:"SNA-A2"},
    ]},
  ],
  MEI:[
    {label:"Ops Guide",isOps:true,title:"KMEI · Meridian Ops",sub:"Meridian Regional Airport — private & charter",items:[
      {name:"NAS Meridian — Active Military Operations",tag:"NAS Meridian (KNMM) is adjacent to KMEI and hosts active T-45 Goshawk training operations. Expect military traffic in the pattern at all times. Monitor and coordinate carefully.",badge:"Ops Warning",cat:"Ops",code:"MEI-OP1"},
      {name:"Single FBO — Key Field Aviation",tag:"Key Field Aviation is the primary FBO at KMEI. Reliable service, friendly crew, and reasonable fuel prices. Call ahead for hangar availability.",badge:"Ops Note",cat:"Ops",code:"MEI-OP2"},
    ]},
    {label:"Where to Stay",title:"Crew Hotels · Meridian",sub:"Convenient, comfortable, and easy on the per diem",items:[
      {name:"Marriott Courtyard Meridian",tag:"Marriott · Reliable · Best in Town",meta:"Best crew hotel in Meridian — solid all around",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"MEI-H1"},
      {name:"Hilton Garden Inn Meridian",tag:"Hilton · Good Value",meta:"Clean, reliable, easy access",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"MEI-H2"},
      {name:"Hampton Inn Meridian",tag:"Hilton · Consistent",meta:"Good budget option for short overnights",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"MEI-H3"},
    ]},
    {label:"Best Bites",title:"Dining · Meridian",sub:"Deep South cooking done right",items:[
      {name:"Weidmann's Restaurant",tag:"Southern · Historic · Since 1870",meta:"Oldest restaurant in Mississippi — do it",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"MEI-D1"},
      {name:"Harvey's",tag:"Steakhouse · Local Favorite",meta:"Best steakhouse in Meridian — classic cuts",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"MEI-D2"},
      {name:"Carmichael's Restaurant",tag:"Southern · Home Cooking",meta:"Best fried chicken in the region",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"MEI-D3"},
      {name:"LaBella's Italian",tag:"Italian · Local Classic",meta:"Best Italian in town — solid every time",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",code:"MEI-D4"},
      {name:"Gayfer's Grill",tag:"Casual American · Quick Stop",meta:"Good lunch spot near the airport",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"MEI-D5"},
    ]},
    {label:"After Dark",title:"Bars · Meridian",sub:"Low-key Southern hospitality",items:[
      {name:"The Depot",tag:"Bar & Grill · Downtown",meta:"Best bar scene in Meridian",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"MEI-B1"},
      {name:"MSO Brewing Company",tag:"Local Craft Brewery",meta:"Only craft brewery in town — worth a stop",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"MEI-B2"},
    ]},
    {label:"Explore the Area",title:"Activities · Meridian",sub:"History, music, and Deep South culture",items:[
      {name:"Mississippi Arts + Entertainment Experience",tag:"Museum · THE MAX · Downtown",meta:"World-class museum — surprisingly excellent",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",code:"MEI-A1"},
      {name:"Jimmie Rodgers Museum",tag:"Music History · Father of Country Music",meta:"Meridian is the birthplace of country music",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"MEI-A2"},
      {name:"Merrehope Historic Home",tag:"Antebellum History · Tours",meta:"One of the best-preserved homes in the South",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"MEI-A3"},
      {name:"Bonita Lakes Park",tag:"Run · Bike · Trails",meta:"Best outdoor space in Meridian — 1,700 acres",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",code:"MEI-A4"},
      {name:"NAS Meridian Aviation History",tag:"Military Aviation · Drive-By",meta:"Home of the Blue Angels training — see the jets",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",code:"MEI-A5"},
    ]},
  ],
  SEZ:[
    {label:"Ops Guide",isOps:true,title:"KSEZ · Sedona Ops",sub:"Sedona Airport · Meridian Regional — private & charter",items:[
      {name:"One-Way Traffic Pattern — Mandatory",tag:"KSEZ sits on a mesa. The traffic pattern is one-directional due to terrain. There is no go-around to the south. Brief this thoroughly — it is not optional.",badge:"Ops Warning",cat:"Ops",code:"SEZ-OP1"},
      {name:"Runway 03 — Uphill. Runway 21 — Downhill.",tag:"The runway has a significant grade. Runway 03 is uphill, Runway 21 is downhill. Performance calculations must account for slope on every operation.",badge:"Ops Warning",cat:"Ops",code:"SEZ-OP2"},
      {name:"Density Altitude — Watch Year-Round",tag:"KSEZ field elevation is 4,827 ft MSL. Combined with Arizona heat, density altitude can be extreme in summer. Brief and calculate on every departure.",badge:"Ops Warning",cat:"Ops",code:"SEZ-OP3"},
      {name:"No Instrument Approaches",tag:"KSEZ has no published instrument approaches. VFR only. If weather is marginal, divert to Flagstaff (KFLG) or Phoenix (KPHX) and ground-transport.",badge:"Ops Note",cat:"Ops",code:"SEZ-OP4"},
      {name:"Meridian FBO — Call Ahead for Parking",tag:"Ramp space at KSEZ is limited. Call Meridian ahead of arrival, especially spring through fall when the field is busy with tourism traffic.",badge:"Ops Note",cat:"Ops",code:"SEZ-OP5"},
    ]},
    {label:"Where to Stay",title:"Crew Hotels · Sedona",sub:"Uptown Sedona, Village of Oak Creek & resort properties",items:[
      {name:"Enchantment Resort",tag:"Luxury · Boynton Canyon · Stunning",meta:"Best resort in Arizona — stunning red rock setting",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"SEZ-H1"},
      {name:"L'Auberge de Sedona",tag:"Boutique · Creek-Side · Romantic",meta:"Exceptional property on Oak Creek",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"SEZ-H2"},
      {name:"Amara Resort & Spa",tag:"Boutique · Uptown · Creek Views",meta:"Great pool, walkable to Uptown dining",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"SEZ-H3"},
      {name:"Hilton Sedona Resort at Bell Rock",tag:"Hilton · Village of Oak Creek · Golf",meta:"Reliable, great views, good gym",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"SEZ-H4"},
    ]},
    {label:"Best Bites",title:"Dining · Sedona",sub:"Southwest cuisine with views that make any meal better",items:[
      {name:"Elote Cafe",tag:"Upscale Mexican · No Reservations",meta:"Get there when they open — worth the wait",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",code:"SEZ-D1"},
      {name:"Dahl & DiLuca",tag:"Italian · Uptown · Romantic",meta:"Best Italian in Sedona — book ahead",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"SEZ-D2"},
      {name:"Mariposa Latin Inspired Grill",tag:"Latin · Hillside · Views",meta:"Best views from a table in Sedona",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"SEZ-D3"},
      {name:"Coffee Pot Restaurant",tag:"Breakfast · Local Classic · 101 Omelets",meta:"Iconic breakfast spot — 101 omelets on the menu",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"SEZ-D4"},
      {name:"Pump House Station",tag:"American · Casual · Creekside",meta:"Good food, great vibe, easy stop",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"SEZ-D5"},
    ]},
    {label:"After Dark",title:"Bars · Sedona",sub:"Sunset cocktails and rooftop views",items:[
      {name:"Sky Ranch Lodge Bar",tag:"Rooftop · Airport Mesa · Sunset Views",meta:"Best sunset views in Sedona — right near KSEZ",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"SEZ-B1"},
      {name:"Olde Sedona Bar & Grille",tag:"Local Bar · Casual",meta:"Best low-key bar in town",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"SEZ-B2"},
      {name:"Creekside Cocktails at L'Auberge",tag:"Upscale · Outdoor · Oak Creek",meta:"Drinks by the creek — peaceful and excellent",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"SEZ-B3"},
    ]},
    {label:"Hike, Jeep & Explore",title:"Activities · Sedona",sub:"World-class trails, vortexes, and red rock country",items:[
      {name:"Cathedral Rock Trail",tag:"Hike · Iconic · Moderate",meta:"The shot everyone knows — earn it on foot",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",code:"SEZ-A1"},
      {name:"Devil's Bridge Trail",tag:"Hike · Natural Arch · Best in Sedona",meta:"Best hike in Sedona — go early to beat crowds",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",code:"SEZ-A2"},
      {name:"Pink Jeep Tours",tag:"Off-Road · Guided · Classic Sedona",meta:"Best way to see the backcountry with no prep",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"SEZ-A3"},
      {name:"Oak Creek Canyon Drive",tag:"Scenic Drive · Slide Rock",meta:"Drive the canyon, stop at Slide Rock State Park",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",code:"SEZ-A4"},
      {name:"Airport Mesa Vortex Walk",tag:"Vortex · Easy Walk · Views",meta:"Right next to KSEZ — best quick walk in town",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"SEZ-A5"},
    ]},
  ],
  PHX:[
    {label:"Where to Stay",title:"Crew Hotels · Phoenix",sub:"Scottsdale, Old Town, and Sky Harbor adjacent",items:[
      {name:"Marriott Scottsdale at McDowell Mountains",tag:"4-Star · Resort · Golf",meta:"Best resort property near PHX",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"PHX-H1"},
      {name:"Hotel Valley Ho",tag:"Boutique · Old Town Scottsdale",meta:"Mid-century cool — great pool scene",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"PHX-H2"},
      {name:"Courtyard Phoenix Airport",tag:"Marriott · Near Field · Reliable",meta:"Best option for tight overnights at PHX",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"PHX-H3"},
      {name:"Sanctuary Camelback Mountain",tag:"Luxury · Camelback",meta:"Stunning desert resort — views are unreal",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"PHX-H4"},
    ]},
    {label:"Best Bites",title:"Dining · Phoenix",sub:"Steakhouses, upscale Mexican, and craft everything",items:[
      {name:"Steak 44",tag:"Upscale Steakhouse",meta:"Best steakhouse in Phoenix — full stop",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"PHX-D1"},
      {name:"Talavera at Four Seasons",tag:"Upscale Southwestern · Scottsdale",meta:"Best fine dining near Scottsdale",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"PHX-D2"},
      {name:"Lon's at The Hermosa",tag:"American · Historic Hacienda",meta:"Beautiful setting — go for dinner",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"PHX-D3"},
      {name:"Barrio Queen",tag:"Upscale Mexican · Old Town",meta:"Best margaritas in Scottsdale",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",code:"PHX-D4"},
      {name:"Dick's Hideaway",tag:"New Mexican · Hole-in-Wall",meta:"Best green chile in the city",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"PHX-D5"},
    ]},
    {label:"After Dark",title:"Bars · Phoenix",sub:"Old Town Scottsdale bar scene and rooftop lounges",items:[
      {name:"Old Town Scottsdale Bar Crawl",tag:"Bar Strip · Walkable",meta:"Dozens of bars within easy walking distance",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"PHX-B1"},
      {name:"SideBar",tag:"Craft Cocktails · Old Town",meta:"Best cocktail bar in Scottsdale",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"PHX-B2"},
    ]},
    {label:"On the Green",title:"Golf · Phoenix",sub:"Golf capital of America — no excuses",items:[
      {name:"TPC Scottsdale Champions Course",tag:"PGA Tour Venue · Stadium Course",meta:"Play where the Tour plays — book ahead",badge:"Must Do",cat:"Golf",img:"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",code:"PHX-G1"},
      {name:"Grayhawk Golf Club",tag:"36 Holes · Top Public Course",meta:"Best value top-tier golf in Scottsdale",badge:"Crew Favorite",cat:"Golf",img:"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",code:"PHX-G2"},
      {name:"Camelback Golf Club",tag:"Resort Golf · Marriott",meta:"Two courses, great service, crew rates",badge:"Top Pick",cat:"Golf",img:"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",code:"PHX-G3"},
    ]},
    {label:"Stay Sharp",title:"Activities · Phoenix",sub:"Desert hikes and sunrise runs",items:[
      {name:"Camelback Mountain — Echo Canyon Trail",tag:"Hike · Iconic · Challenging",meta:"Best hike in metro Phoenix — go early",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",code:"PHX-A1"},
      {name:"South Mountain Park",tag:"Hiking & Biking · Massive",meta:"Largest municipal park in the US",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",code:"PHX-A2"},
    ]},
  ],
  PSM:[
    {label:"Where to Stay",title:"Crew Hotels · Portsmouth",sub:"Downtown and near the seacoast",items:[
      {name:"AC Hotel Downtown Portsmouth",tag:"Marriott · Modern · Downtown",meta:"Best location for walkability",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"PSM-H1"},
      {name:"Sheraton Portsmouth",tag:"Full-Service · Well-Located",meta:"Reliable and crew-friendly",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"PSM-H2"},
      {name:"Hilton Garden Inn Downtown",tag:"Hilton · Downtown",meta:"Walkable to dining and bars",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"PSM-H3"},
      {name:"Wentworth by the Sea",tag:"Historic Resort · Waterfront",meta:"Stunning property on the water",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"PSM-H4"},
    ]},
    {label:"Best Bites",title:"Dining · Portsmouth",sub:"Seafood-forward and seriously good",items:[
      {name:"River House",tag:"Seafood · Waterfront",meta:"Must-do seafood spot",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"PSM-D1"},
      {name:"Surf",tag:"Sushi · Fresh",meta:"Top sushi in the area",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"PSM-D2"},
      {name:"Ore Nell's",tag:"BBQ · Craft Beer",meta:"Solid BBQ stop",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"PSM-D3"},
    ]},
    {label:"After Dark",title:"Bars · Portsmouth",sub:"Great craft beer scene in a walkable downtown",items:[
      {name:"Thirsty Moose Taphouse",tag:"Craft Beer Bar · Full Menu",meta:"Crew favorite taproom",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"PSM-B1"},
    ]},
    {label:"Explore the Area",title:"Activities · Portsmouth & Seacoast",sub:"History, water, and day trips",items:[
      {name:"Albacore Park & USS Albacore",tag:"Submarine Museum · Free",meta:"Unique and worth the visit",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",code:"PSM-A1"},
      {name:"Portsmouth Lighthouse",tag:"Scenic · Seacoast Walk",meta:"Open seasonally — check ahead",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"PSM-A2"},
      {name:"Seacoast Science Center",tag:"Science & Marine Life",meta:"Good 1-2 hour visit",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",code:"PSM-A3"},
      {name:"John Paul Jones House",tag:"Historic Site · Downtown",meta:"Great piece of American history",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",code:"PSM-A4"},
      {name:"Historical Walking Tour of Downtown",tag:"Self-Guided · Great Architecture",meta:"Best way to see the city",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"PSM-A5"},
      {name:"Granite State Railway",tag:"Scenic Train Ride",meta:"Unique day trip option",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",code:"PSM-A6"},
      {name:"Drive to Kennebunkport, ME",tag:"Day Trip · Maine Coast",meta:"45 min north — beautiful Maine town",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",code:"PSM-A7"},
    ]},
  ],
  ORY:[
    {label:"Where to Stay",title:"Crew Hotels · Paris",sub:"Saint-Germain elegance, Left Bank charm & fast Orly access",items:[
      {name:"SO/ Paris",tag:"5-Star · Modern Luxury",meta:"One of the best premium layover hotels in Paris",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",code:"ORY-H1"},
      {name:"Pullman Paris Montparnasse",tag:"4-Star · Left Bank",meta:"Strong location with easy access across the city",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",code:"ORY-H2"},
      {name:"Novotel Paris Coeur d'Orly Airport",tag:"4-Star · Airport",meta:"Best short overnight option near ORY",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",code:"ORY-H3"},
      {name:"Hotel Dame des Arts",tag:"Boutique · Latin Quarter",meta:"Stylish Paris stay with a strong rooftop feel",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",code:"ORY-H4"},
    ]},
  
    {label:"Best Bites",title:"Dining · Paris",sub:"Classic bistros, steak frites, pastries & iconic late dinners",items:[
      {name:"Le Relais de l'Entrecôte",tag:"Steak Frites · Paris Classic",meta:"Simple menu, always packed, always worth it",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"ORY-D1"},
      {name:"Café de Flore",tag:"Historic Café · Saint-Germain",meta:"Iconic Paris layover stop",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80",code:"ORY-D2"},
      {name:"L'Ami Jean",tag:"Basque Bistro · 7th Arr.",meta:"Outstanding dinner spot with classic Paris energy",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"ORY-D3"},
      {name:"Breizh Café",tag:"Crêpes · Casual Favorite",meta:"Perfect lighter meal on a shorter layover",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"ORY-D4"},
      {name:"Pierre Hermé",tag:"Pastries · Paris Icon",meta:"Best macaron stop in the city",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",code:"ORY-D5"},
    ]},
  
    {label:"After Dark",title:"Bars · Paris",sub:"Wine bars, jazz clubs & elegant rooftop cocktails",items:[
      {name:"Le Perchoir Marais",tag:"Rooftop Bar · Marais",meta:"Best rooftop feel for a Paris night out",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"ORY-B1"},
      {name:"Little Red Door",tag:"Cocktail Bar · World-Class",meta:"One of the best cocktail bars in Paris",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",code:"ORY-B2"},
      {name:"Caveau de la Huchette",tag:"Historic Jazz Club · Latin Quarter",meta:"Classic Paris jazz night",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"ORY-B3"},
    ]},
  
    {label:"Explore the City",title:"Activities · Paris",sub:"River walks, monuments & the best urban beauty in Europe",items:[
      {name:"Seine River Walk",tag:"Walk · Central Paris",meta:"Best simple layover activity in Paris",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",code:"ORY-A1"},
      {name:"Eiffel Tower Area",tag:"Iconic Landmark",meta:"Mandatory first-time Paris stop",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80",code:"ORY-A2"},
      {name:"Luxembourg Gardens",tag:"Run or Walk · Left Bank",meta:"Beautiful quiet option for a crew reset",badge:"Crew Favorite",cat:"Fitness",img:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&q=80",code:"ORY-A3"},
    ]},
  ],
  SIN:[
    {label:"Where to Stay",title:"Crew Hotels · Singapore",sub:"Marina luxury, city-center access & world-class airport convenience",items:[
      {name:"Marina Bay Sands",tag:"5-Star · Marina Bay",meta:"The most iconic layover hotel in Singapore",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",code:"SIN-H1"},
      {name:"JW Marriott South Beach",tag:"5-Star · Central",meta:"Excellent luxury option with strong nightlife access",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",code:"SIN-H2"},
      {name:"Crowne Plaza Changi Airport",tag:"5-Star · Airport",meta:"Best short overnight hotel directly connected to SIN",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",code:"SIN-H3"},
      {name:"The Fullerton Hotel",tag:"Historic Luxury · Riverfront",meta:"Classic Singapore elegance",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",code:"SIN-H4"},
    ]},
  
    {label:"Best Bites",title:"Dining · Singapore",sub:"Hawker legends, Michelin stalls & premium Asian dining",items:[
      {name:"Lau Pa Sat",tag:"Hawker Centre · Essential",meta:"The classic Singapore food experience",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"SIN-D1"},
      {name:"Jumbo Seafood",tag:"Chili Crab · Iconic",meta:"The signature Singapore layover meal",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80",code:"SIN-D2"},
      {name:"Burnt Ends",tag:"Modern Grill · Premium",meta:"Hard reservation, worth every effort",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"SIN-D3"},
      {name:"Din Tai Fung",tag:"Reliable Asian Favorite",meta:"Fast, clean, and always strong",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"SIN-D4"},
      {name:"Tiong Bahru Bakery",tag:"Coffee + Pastry",meta:"Best quick breakfast option",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",code:"SIN-D5"},
    ]},
  
    {label:"After Dark",title:"Bars · Singapore",sub:"Rooftop cocktails, marina views & hidden speakeasies",items:[
      {name:"Ce La Vi Singapore",tag:"Rooftop Bar · Marina Bay",meta:"One of the best skyline bars in Asia",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"SIN-B1"},
      {name:"Atlas Bar",tag:"Art Deco Cocktail Bar",meta:"One of the most beautiful bars in the world",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",code:"SIN-B2"},
      {name:"Boat Quay",tag:"Riverfront Nightlife",meta:"Best casual pilot night area",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"SIN-B3"},
    ]},
  
    {label:"Explore the City",title:"Activities · Singapore",sub:"Gardens, skyline walks & tropical city perfection",items:[
      {name:"Gardens by the Bay",tag:"Landmark · Evening Walk",meta:"Singapore’s signature layover activity",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80",code:"SIN-A1"},
      {name:"Marina Bay Walk",tag:"Run or Walk · Waterfront",meta:"Best city run in Singapore",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&q=80",code:"SIN-A2"},
      {name:"Jewel Changi",tag:"Airport Experience · Indoor Waterfall",meta:"Best airport feature in the world",badge:"Crew Favorite",cat:"Fitness",img:"https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&q=80",code:"SIN-A3"},
    ]},
  ],
  SJU:[
    {label:"Ops Guide",isOps:true,title:"TJSJ · San Juan Ops",sub:"Luis Muñoz Marín International — private & charter",items:[
      {name:"Runways 8 and 10 — Primary Operations",tag:"99% of departures and arrivals use Runways 8 and 10. Expect this configuration and plan accordingly on every flight in and out.",badge:"Ops Note",cat:"Ops",code:"SJU-OP1"},
      {name:"Runways 8 and 10 — Non-Intersecting, Use Caution on Final",tag:"RWY 8 and RWY 10 are non-intersecting parallel runways. Use extreme caution on final — traffic on the adjacent runway can be in your visual periphery. Brief this with your crew.",badge:"Ops Warning",cat:"Ops",code:"SJU-OP2"},
      {name:"TJIG — Can Be Confused with SJU on Final",tag:"Isla Grande Airport (TJIG) is approximately 10 miles west of TJSJ and directly on final for Runways 8 and 10. Do not confuse the two airports. TJIG can look very similar to SJU at night.",badge:"Ops Warning",cat:"Ops",code:"SJU-OP3"},
      {name:"Domestic Flights — No Passport Required (Except USVI)",tag:"From domestic airports, passports and customs are not required for Puerto Rico. Exception: USVI destinations do require a passport. Aircraft must be inspected by Agriculture when departing SJU for domestic airports.",badge:"Ops Note",cat:"Ops",code:"SJU-OP4"},
    ]},
    {label:"Area Intel",isNote:true,title:"Isla Verde vs. Condado",note:"Two distinct neighborhoods: Isla Verde is a beach strip right next to TJSJ — walkable, casual, with most hotels in easy reach of each other. Condado is a more upscale neighborhood between TJIG and TJSJ, closer to the city and by far the more interesting area for a layover. If you have the choice, stay in Condado. Visit Old San Juan for a full day trip."},
    {label:"Where to Stay",title:"Crew Hotels · San Juan",sub:"Isla Verde (beach, near TJSJ) · Condado (city, upscale)",items:[
      {name:"Embassy Suites Isla Verde",tag:"Isla Verde · Check for Free Happy Hour",meta:"Confirm happy hour still running",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"SJU-H1"},
      {name:"Verdanza Hotel",tag:"Isla Verde · Boutique",meta:"Good value, well-located",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"SJU-H2"},
      {name:"InterContinental San Juan",tag:"Isla Verde · Beachside",meta:"Beachfront — great amenities",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"SJU-H3"},
      {name:"El San Juan Hotel",tag:"Isla Verde · Iconic Property",meta:"Historic and excellent",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"SJU-H4"},
      {name:"AC by Marriott San Juan Condado",tag:"Condado · Modern",meta:"Best Condado option",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"SJU-H5"},
      {name:"San Juan Marriott Resort",tag:"Condado · Full-Service Resort",meta:"Beachside Condado",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"SJU-H6"},
      {name:"La Concha Renaissance Resort",tag:"Condado · Iconic Architecture",meta:"Great pool and location",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1540541338537-b2d3c42f5ee7?w=600&q=80",code:"SJU-H7"},
    ]},
    {label:"Best Bites",title:"Dining · San Juan",sub:"Some of the best food in the Caribbean — pilot-tested",items:[
      {name:"Alambique Beach Lounge",tag:"Seafood · Beachfront · Isla Verde",meta:"Ahi tuna tacos and seafood mofongo",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"SJU-D1"},
      {name:"El Nuevo Acuario",tag:"Seafood · Massive Red Snapper",meta:"Huge red snapper under $25 with tostones",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"SJU-D2"},
      {name:"Los Chamos Arepas",tag:"Arepas · Cash Only · Hidden Gem",meta:"Cash only — use Google Translate",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",code:"SJU-D3"},
      {name:"Metropol",tag:"Caribbean/Latin · Sit-Down",meta:"Next to the cock fight arena — go anyway",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"SJU-D4"},
      {name:"Ceviche House",tag:"Ceviche · Excellent",meta:"Outstanding ceviche",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"SJU-D5"},
      {name:"El Churry Food Truck",tag:"Sandwiches · BYOB",meta:"Wildly good sandwiches — BYOB",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"SJU-D6"},
      {name:"Yamiko Sushi",tag:"Sushi · Traditional",meta:"Good sushi — San Juan does it well",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"SJU-D7"},
      {name:"Panaderia Espana",tag:"Bakery/Restaurant · Local",meta:"Great local bakery and breakfast",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80",code:"SJU-D8"},
    ]},
    {label:"Beaches & Nights",title:"Bars · Nightlife · San Juan",sub:"Beach bars, street parties, and Old San Juan",items:[
      {name:"La Placita",tag:"Open-Air Bars · Street Party",meta:"Adventurous crews — absolutely worth it",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"SJU-B1"},
      {name:"La Factoria",tag:"Bar · Old San Juan",meta:"Best bar in the city",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"SJU-B2"},
      {name:"Isla Verde Beach Bars",tag:"Beach · Alambique & Pa Pical",meta:"Chairs, drinks, and great body surf",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",code:"SJU-B3"},
    ]},
    {label:"Explore San Juan",title:"Activities · San Juan",sub:"History, beaches, and Caribbean culture",items:[
      {name:"El Morro & San Cristóbal Forts",tag:"Old San Juan · UNESCO · Must Do",meta:"El Morro lit up at night is stunning",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",code:"SJU-A1"},
      {name:"Paseo del Morro",tag:"Walk · Old Fort Walls · Beach",meta:"Walkway around the old fort walls",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"SJU-A2"},
      {name:"Pine Grove Beach",tag:"Beach · Less Crowded",meta:"Better when winds are stronger",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",code:"SJU-A3"},
      {name:"Ocean Park Beach",tag:"Beach · Near Condado",meta:"Great beach, close to Condado hotels",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",code:"SJU-A4"},
      {name:"Drive East Toward Loíza",tag:"Food & Drinks · Local Spots",meta:"Tons of cheap local food and drinks",badge:"Verified",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"SJU-A5"},
      {name:"Old San Juan Walking Tour",tag:"Culture · Bars · Restaurants",meta:"Walk around any time of day",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",code:"SJU-A6"},
    ]},
  ],
  SEA:[
    {label:"Where to Stay",title:"Crew Hotels · Seattle",sub:"Downtown, Capitol Hill, and SeaTac adjacent",items:[
      {name:"Marriott Waterfront Seattle",tag:"4-Star · Elliott Bay Views",meta:"Best location in Seattle — views are outstanding",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"SEA-H1"},
      {name:"Kimpton Hotel Monaco",tag:"Boutique · Downtown",meta:"Fun property — great bar and location",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"SEA-H2"},
      {name:"Marriott Seattle Airport",tag:"Near SEA-TAC · Reliable",meta:"Best option for tight overnights",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"SEA-H3"},
      {name:"Edgewater Hotel",tag:"Iconic · Over Elliott Bay",meta:"Built on a pier over the water — unique",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"SEA-H4"},
    ]},
    {label:"Best Bites",title:"Dining · Seattle",sub:"Dungeness crab, ramen, and Pike Place right outside",items:[
      {name:"Pike Place Chowder",tag:"Clam Chowder · Sourdough Bowl",meta:"Best chowder on the West Coast",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"SEA-D1"},
      {name:"Canlis",tag:"Fine Dining · Lake Union Views",meta:"Best restaurant in Seattle — book way ahead",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"SEA-D2"},
      {name:"Shiro's Sushi",tag:"Omakase · Belltown",meta:"Best sushi in Seattle — Shiro is a legend",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"SEA-D3"},
      {name:"Matt's in the Market",tag:"Seafood · Pike Place · Views",meta:"Tiny, perfect, above the market",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"SEA-D4"},
      {name:"Ramen Danbo",tag:"Tonkotsu Ramen · Best in City",meta:"Best ramen in Seattle — always a line",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"SEA-D5"},
    ]},
    {label:"After Dark",title:"Bars · Seattle",sub:"Craft cocktails, Pike Place bars, and Capitol Hill",items:[
      {name:"Needle & Thread",tag:"Craft Cocktails · Belltown",meta:"Best cocktail bar in Seattle",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"SEA-B1"},
      {name:"Pike Brewing Company",tag:"Craft Beer · Pike Place · Iconic",meta:"Great beer right in the market",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",code:"SEA-B2"},
      {name:"Canon",tag:"Whiskey Bar · Capitol Hill",meta:"1,500+ spirits — best whiskey bar in the NW",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"SEA-B3"},
    ]},
    {label:"Stay Sharp",title:"Activities · Seattle",sub:"Waterfront runs, Pike Place, and Pacific views",items:[
      {name:"Pike Place Market",tag:"Explore · Historic · Food",meta:"Walk it before 9am — best experience",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1438401171849-74ac270044ee?w=600&q=80",code:"SEA-A1"},
      {name:"Myrtle Edwards Park Run",tag:"Waterfront Run · Elliott Bay",meta:"Best run in Seattle — flat and stunning",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"SEA-A2"},
      {name:"Museum of Flight",tag:"Aviation Museum · Boeing Field",meta:"World-class aviation museum — half day easy",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",code:"SEA-A3"},
    ]},
  ],
  TEX:[
    {label:"Ops Guide",isOps:true,title:"KTEX · Telluride Ops",sub:"Telluride Regional Airport — private & charter",items:[
      {name:"Runway — Land 9, Depart 27",tag:"95% of operations use RWY 9 for landing and RWY 27 for takeoff. Plan accordingly and brief the one-way runway environment with your crew.",badge:"Ops Note",cat:"Ops",code:"TEX-OP1"},
      {name:"Arrive Early — Calm Morning Winds",tag:"Winds deteriorate significantly throughout the day. Arrive early in the morning when surface winds are calm. Afternoon operations at KTEX can be challenging or impossible for some aircraft.",badge:"Ops Warning",cat:"Ops",code:"TEX-OP2"},
      {name:"Approach Categories — Most Are Cat A/B Only",tag:"Most published approaches at KTEX only serve Category A and B aircraft. Check approach plates carefully. This is a hard limitation, not a suggestion.",badge:"Ops Warning",cat:"Ops",code:"TEX-OP3"},
      {name:"Consider Holding at Cones VOR to Identify Airport",tag:"Visually identifying KTEX on first arrival can be challenging due to terrain. Holding at the Cones VOR to visually acquire the airport is a common technique. Brief it.",badge:"Ops Note",cat:"Ops",code:"TEX-OP4"},
      {name:"Diversion Airport — KMTJ Montrose",tag:"Montrose Regional (KMTJ) is the preferred diversion airport for KTEX. Brief the alternate thoroughly on every flight in, especially in IMC or high-wind conditions.",badge:"Ops Note",cat:"Ops",code:"TEX-OP5"},
    ]},
    {label:"Where to Stay",title:"Crew Hotels · Telluride",sub:"In-town and Mountain Village options",items:[
      {name:"Mountainside Inn",tag:"In-Town · Comfortable",meta:"Solid in-town base",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",code:"TEX-H1"},
      {name:"The Franz Klammer Lodge",tag:"Mountain Village · Ski-In/Ski-Out",meta:"Great ski access",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",code:"TEX-H2"},
      {name:"Madeline Hotel & Residences",tag:"Luxury · Mountain Village",meta:"Top-tier property",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",code:"TEX-H3"},
      {name:"The Peaks Resort & Spa",tag:"Full-Service Resort · Mountain Village",meta:"Excellent spa and views",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",code:"TEX-H4"},
      {name:"In-Town Condo or Airbnb",tag:"Best Value · Local Feel",meta:"Best budget option for longer stays",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1540541338537-b2d3c42f5ee7?w=600&q=80",code:"TEX-H5"},
    ]},
    {label:"Best Bites",title:"Dining · Telluride",sub:"In-town casual and Mountain Village fine dining",items:[
      {name:"Brown Dog Pizza",tag:"Pizza · In-Town Classic",meta:"The go-to local pizza spot",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"TEX-D1"},
      {name:"Siam Talay",tag:"Thai · In-Town",meta:"Excellent and unexpected",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",code:"TEX-D2"},
      {name:"There Bar",tag:"Bar & Grill · In-Town",meta:"Good casual option",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",code:"TEX-D3"},
      {name:"Allred's",tag:"Fine Dining · Mountain Village · Gondola",meta:"Gondola access · Special occasion dining",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"TEX-D4"},
      {name:"Alpino Vino",tag:"Alpine Fine Dining · Mountain Village",meta:"Highest restaurant in North America",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",code:"TEX-D5"},
    ]},
    {label:"Ski, Hike & Explore",title:"Activities · Telluride",sub:"World-class terrain and stunning scenery",items:[
      {name:"Telluride Ski Resort",tag:"Ski · Pilot & Crew Discount",meta:"Show badge/license at ticket office",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",code:"TEX-A1"},
      {name:"Bridal Veil Falls",tag:"Hike · Iconic Telluride",meta:"Stunning — do it",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"TEX-A2"},
      {name:"Telluride River Trail",tag:"Walk · Easy · Scenic",meta:"Perfect post-meal stroll",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",code:"TEX-A3"},
    ]},
  ],
  SYD:[
    {label:"Where to Stay",title:"Crew Hotels · Sydney",sub:"Harbour luxury, CBD access & easy airport transfers",items:[
      {name:"Four Seasons Hotel Sydney",tag:"5-Star · Circular Quay",meta:"Top premium layover hotel with iconic harbour views",badge:"Crew Favorite",cat:"Hotels",img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",code:"SYD-H1"},
      {name:"Shangri-La Sydney",tag:"5-Star · The Rocks",meta:"Excellent skyline and harbour access",badge:"Top Pick",cat:"Hotels",img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",code:"SYD-H2"},
      {name:"Rydges Sydney Airport",tag:"4-Star · Airport",meta:"Best short overnight option for quick crew turns",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",code:"SYD-H3"},
      {name:"QT Sydney",tag:"Boutique · CBD",meta:"Strong style and ideal central location",badge:"Verified",cat:"Hotels",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",code:"SYD-H4"},
    ]},
  
    {label:"Best Bites",title:"Dining · Sydney",sub:"Steaks, seafood, harbour dining & world-class coffee",items:[
      {name:"Rockpool Bar & Grill",tag:"Steakhouse · Premium",meta:"Best steak layover dinner in Sydney",badge:"Must Do",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"SYD-D1"},
      {name:"Mr. Wong",tag:"Modern Asian · CBD",meta:"Always high-energy and consistently excellent",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"SYD-D2"},
      {name:"Cafe Sydney",tag:"Harbour Dining · Iconic",meta:"Great for first Sydney layovers",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80",code:"SYD-D3"},
      {name:"Bills Darlinghurst",tag:"Breakfast · Famous",meta:"Best breakfast stop in Sydney",badge:"Verified",cat:"Dining",img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",code:"SYD-D4"},
      {name:"Fish Market Sydney",tag:"Seafood · Essential",meta:"Classic Sydney local experience",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",code:"SYD-D5"},
    ]},
  
    {label:"After Dark",title:"Bars · Sydney",sub:"Rooftops, harbour cocktails & strong nightlife",items:[
      {name:"Opera Bar",tag:"Harbour Bar · Iconic",meta:"Best casual pilot layover bar in Sydney",badge:"Must Do",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"SYD-B1"},
      {name:"Maybe Sammy",tag:"Cocktail Bar · World-Class",meta:"One of the best cocktail bars in Australia",badge:"Top Pick",cat:"Bars",img:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",code:"SYD-B2"},
      {name:"The Glenmore",tag:"Rooftop Pub · The Rocks",meta:"Relaxed rooftop with harbour views",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",code:"SYD-B3"},
    ]},
  
    {label:"Explore the City",title:"Activities · Sydney",sub:"Harbour runs, beaches & iconic views",items:[
      {name:"Sydney Harbour Walk",tag:"Run or Walk · Circular Quay",meta:"Best layover walk in Sydney",badge:"Top Pick",cat:"Fitness",img:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80",code:"SYD-A1"},
      {name:"Bondi to Coogee Walk",tag:"Coastal Walk · Essential",meta:"Best outdoor layover activity in Sydney",badge:"Must Do",cat:"Fitness",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",code:"SYD-A2"},
      {name:"Sydney Opera House Area",tag:"Landmark · Harbour",meta:"Mandatory first-time Sydney stop",badge:"Crew Favorite",cat:"Fitness",img:"https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=600&q=80",code:"SYD-A3"},
    ]},
  ],
  ICT:[
    {label:"Crew Favorites",title:"Near ICT · Wichita",sub:"Pilot-verified within 15 min",items:[
      {name:"Chester's Chophouse",tag:"Steakhouse",meta:"12 min · 10% pilot perk",badge:"Crew Favorite",cat:"Dining",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",code:"ICT-01"},
      {name:"Vagabond",tag:"Breakfast · Café",meta:"9 min · Crew discount",badge:"Top Pick",cat:"Dining",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",code:"ICT-02"},
    ]},
    {label:"On the Green",title:"Golf · Wichita",items:[
      {name:"Auburn Hills Golf",tag:"Public · 18 Holes",meta:"18 min · Rental clubs",badge:"Pilot Rate",cat:"Golf",img:"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",code:"ICT-G1"},
    ]},
    {label:"After Dark",title:"Bars · Wichita",items:[
      {name:"Monarch",tag:"Cocktail Bar",meta:"14 min · Craft cocktails",badge:"Crew Favorite",cat:"Bars",img:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",code:"ICT-B1"},
      {name:"Prost",tag:"German Beer Hall",meta:"10 min · Great atmosphere",badge:"Verified",cat:"Bars",img:"https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",code:"ICT-B2"},
    ]},
  ],
};

export { ALL_CITIES, VENUES };