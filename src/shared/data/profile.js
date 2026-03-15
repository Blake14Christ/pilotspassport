import { JOB_AF_FILTERS } from "./jobs";

const INIT_PROFILE={
  fullName:"James R. Reynolds",
  handle:"Capt_Reynolds",
  base:"Wichita, KS",
  baseCode:"ICT",
  citizenship:"U.S. Citizen",
  workAuth:"FAA Authorized",
  passportStatus:"valid",
  passportExpiry:"2029-08",
  availDomestic:true,
  availIntl:true,
  email:"j.reynolds@crewmail.com",
  phone:"(316) 555-0194",
  phonePublic:false,
  bio:"ATP-rated captain based in Wichita with turbine, charter, and airline experience. Available for contract and relief assignments nationwide. Former military aviator, current Delta B737 captain with 12,000+ hours total time.",
  headshot:null,
  // Certificates
  certs:["ATP","Commercial","CFI","CFII"],
  ratings:["Instrument","Multi-Engine"],
  typeRatings:["B737","CE-560XL","CE-525"],
  medicalClass:"First",
  medicalExpiry:"2025-11",
  fccLicense:true,
  // Hours
  totalTime:12400,
  picTime:9800,
  sicTime:2600,
  turbineTime:10200,
  jetTime:8900,
  multiTime:11100,
  instrumentTime:3200,
  nightTime:2800,
  xcTime:9400,
  // Aircraft
  aircraftExp:[
    {type:"Boeing 737-800",hours:8900,cat:"Airliner"},
    {type:"Cessna Citation XLS",hours:1200,cat:"Business Jet"},
    {type:"Beechcraft King Air 350",hours:850,cat:"Turboprop"},
    {type:"Pilatus PC-12 NG",hours:620,cat:"Turboprop"},
    {type:"Cessna Citation CJ3",hours:310,cat:"Business Jet"},
  ],
  // Availability
  availTypes:["Contract","Relief","Ferry Flights"],
  scheduleType:"Available Now",
  daysPerMonth:10,
  willingReposition:true,
  preferredRegions:["Southeast","Midwest","Southwest"],
  intlCapable:true,
  // Background
  employer:"Delta Air Lines",
  prevOperators:["NetJets","USAF — C-17","Midwest Charter Air"],
  background:["Airline","Military","Corporate"],
  resumeFile:null,
  // References (hidden by default)
  refsVisible:false,
  refs:[
    {name:"Col. David H. Park (Ret.)",title:"USAF C-17 Sq Commander",contact:"available on request"},
    {name:"Capt. Maria Gonzalez",title:"Delta Air Lines, Chief Pilot ATL",contact:"available on request"},
    {name:"James Whitmore",title:"Director of Ops, Midwest Charter Air",contact:"available on request"},
  ],
};

const CERT_OPTIONS=["ATP","Commercial","Private","CFI","CFII","MEI","Sport"];

const RATING_OPTIONS=["Instrument","Multi-Engine","Seaplane","Helicopter","Glider"];

const AVAIL_OPTIONS=["Contract","Relief","Full-Time","Part-Time","Ferry Flights","Training / SIC Support"];

const REGION_OPTIONS=["Northeast","Southeast","Midwest","Southwest","West","Pacific Northwest","International"];

const BG_OPTIONS=["Airline","Military","Corporate","Charter","Owner Flying","Flight School"];

const SCHED_OPTIONS=["Available Now","Available Specific Dates","Not Currently Available"];

const INIT_OPERATOR={
  companyName:"Apex Charter Aviation",
  handle:"ApexCharter",
  base:"Wichita, KS",
  baseCode:"ICT",
  about:"FAA Part 135 charter operator based at ICT with a modern fleet of jets and turboprops. Serving corporate, medical, and leisure clients across the central US since 2008. We prioritize safety, professionalism, and pilot quality of life.",
  logo:null,
  website:"apexcharteraviation.com",
  founded:"2008",
  opsType:["Charter","Corporate"],
  operatingCerts:["Part 135","Part 91"],
  baseAirports:["ICT","MCI","TUL"],
  fleet:[
    {type:"Cessna Citation XLS+",count:4,cat:"Business Jet",typeCode:"CE-560XL"},
    {type:"Beechcraft King Air 350",count:3,cat:"Turboprop",typeCode:"BE-350"},
    {type:"Pilatus PC-12 NG",count:2,cat:"Turboprop",typeCode:"PC-12"},
  ],
  positions:[
    {title:"Citation XLS Captain",typeCode:"CE-560XL",schedule:"Contract",minHours:3000,minPIC:1500,pay:"$85k–$110k",status:"Open"},
    {title:"King Air 350 Captain",typeCode:"BE-350",schedule:"Full-Time",minHours:2500,minPIC:1000,pay:"$75k–$95k",status:"Open"},
    {title:"PC-12 First Officer",typeCode:"PC-12",schedule:"Part-Time",minHours:1200,minPIC:500,pay:"$55k–$70k",status:"Open"},
  ],
  contactName:"Sarah Mitchell",
  contactTitle:"Director of Operations",
  email:"ops@apexcharter.com",
  phone:"(316) 555-0221",
  phonePublic:true,
  verified:true,
  preferredBg:["Charter","Corporate","Military"],
  preferredCerts:["ATP","Commercial"],
  intlOps:true,
  drugTestReq:true,
  backgroundCheckReq:true,
};

const OPS_TYPE_OPTIONS=["Charter","Corporate","Fractional","Airline","Cargo","Medical","Agricultural","Training","Government"];

const CERT_OPS_OPTIONS=["Part 121","Part 135","Part 91","Part 91K","Part 137","FAA Air Carrier"];

const SCHEDULE_OPTIONS_OP=["Contract","Full-Time","Part-Time","Relief","On-Call"];

const POSITION_STATUS_OPTIONS=["Open","Urgently Hiring","Filled","On Hold"];

const AC_CATS_OP=["Business Jet","Airliner","Turboprop","Piston","Helicopter","Military"];

export { INIT_PROFILE, CERT_OPTIONS, RATING_OPTIONS, AVAIL_OPTIONS, REGION_OPTIONS, BG_OPTIONS, SCHED_OPTIONS, INIT_OPERATOR, OPS_TYPE_OPTIONS, CERT_OPS_OPTIONS, SCHEDULE_OPTIONS_OP, POSITION_STATUS_OPTIONS, AC_CATS_OP };