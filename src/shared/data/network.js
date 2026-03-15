const SAMPLE_PILOTS=[
  {id:1,name:"James R. Reynolds",handle:"Capt_Reynolds",base:"ICT",certs:["ATP"],typeRatings:["B737","CE-560XL"],totalTime:12400,picHours:9800,typeInTypeHours:1800,background:["Airline","Military"],status:"Available Now",available:true,intl:true,seeking:["PIC","Captain"]},
  {id:2,name:"Maria L. Torres",handle:"MLTorres",base:"MIA",certs:["ATP","CFI"],typeRatings:["A320","EMB-145"],totalTime:8900,picHours:6200,typeInTypeHours:2100,background:["Airline","Charter"],status:"Available Now",available:true,intl:true,seeking:["PIC","Captain"]},
  {id:3,name:"Samuel K. Park",handle:"SKPark_Pilot",base:"LAX",certs:["ATP","CFII"],typeRatings:["CL-65","CE-525"],totalTime:6200,picHours:3100,typeInTypeHours:950,background:["Charter","Corporate"],status:"Available Specific Dates",available:false,intl:false,seeking:["PIC","SIC"]},
  {id:4,name:"Christine Voss",handle:"CVoss_ATP",base:"ORD",certs:["ATP","MEI"],typeRatings:["B737","BE-350"],totalTime:14800,picHours:11200,typeInTypeHours:3400,background:["Airline","Military"],status:"Available Now",available:true,intl:true,seeking:["PIC","Captain"]},
  {id:5,name:"Derek Okafor",handle:"DerekO_Pilot",base:"DFW",certs:["Commercial","CFI"],typeRatings:["PC-12"],totalTime:3400,picHours:1800,typeInTypeHours:620,background:["Charter","Flight School"],status:"Not Currently Available",available:false,intl:false,seeking:["SIC","FO"]},
  {id:6,name:"Elena Marchetti",handle:"E_Marchetti",base:"JFK",certs:["ATP"],typeRatings:["A320","B737"],totalTime:11200,picHours:8400,typeInTypeHours:2600,background:["Airline","Corporate"],status:"Available Now",available:true,intl:true,seeking:["PIC","Captain"]},
  {id:7,name:"Marcus Webb",handle:"MWebb_Corp",base:"TEB",certs:["ATP","CFII"],typeRatings:["GLF","CL65"],totalTime:9600,picHours:7200,typeInTypeHours:1400,background:["Corporate","Military"],status:"Available Now",available:true,intl:true,seeking:["PIC","SIC","Captain"]},
  {id:8,name:"Keiko Tanaka",handle:"KTanaka_Pilot",base:"SEA",certs:["ATP"],typeRatings:["B787","B777"],totalTime:15200,picHours:10800,typeInTypeHours:4200,background:["Airline"],status:"Available Specific Dates",available:false,intl:true,seeking:["PIC","Captain"]},
];

const SAMPLE_OPERATORS=[
  {id:1,name:"Apex Charter Aviation",handle:"ApexCharter",base:"ICT",certs:["Part 135"],opsType:["Charter","Corporate"],fleet:9,openPos:3,verified:true,about:"FAA Part 135 charter op based at ICT — jets and turboprops, crew-friendly culture."},
  {id:2,name:"Summit Air Group",handle:"SummitAir",base:"DEN",certs:["Part 135","Part 91"],opsType:["Charter","Fractional"],fleet:14,openPos:5,verified:true,about:"Denver-based fractional and charter operator. Growing fleet, strong culture."},
  {id:3,name:"Gulf Coast Air",handle:"GulfCoastAir",base:"MSY",certs:["Part 135"],opsType:["Charter","Medical"],fleet:6,openPos:2,verified:false,about:"NOLA-based charter and med-evac operator. Southeast and Gulf routes."},
  {id:4,name:"Pinnacle Business Jets",handle:"PinnacleBJ",base:"TEB",certs:["Part 91","Part 135"],opsType:["Corporate","Charter"],fleet:22,openPos:4,verified:true,about:"TEB-based corporate flight department. Ultra-long range, top-tier equipment."},
  {id:5,name:"Desert Sky Aviation",handle:"DesertSkyAv",base:"PHX",certs:["Part 91"],opsType:["Corporate","Owner Flying"],fleet:8,openPos:1,verified:false,about:"Phoenix corporate op with a mixed turboprop and jet fleet."},
];

const INBOX_MESSAGES=[
  {id:1,from:"Apex Charter Aviation",handle:"ApexCharter",type:"operator",time:"2h ago",preview:"Hi James, we reviewed your profile and think you'd be a great fit for our Citation XLS Captain position. We'd love to schedule a call to discuss the role and your availability.",unread:true},
  {id:2,from:"Summit Air Group",handle:"SummitAir",type:"operator",time:"5h ago",preview:"We have an urgent need for a King Air 350 relief captain this weekend out of DEN. Your type rating and hours look excellent. Please reach out ASAP if interested.",unread:true},
  {id:3,from:"Gulf Coast Air",handle:"GulfCoastAir",type:"operator",time:"1d ago",preview:"Following up on our earlier inquiry — are you available for a 3-day PC-12 assignment starting Friday? Hotel and per diem covered. Please let us know.",unread:false},
  {id:4,from:"Pinnacle Business Jets",handle:"PinnacleBJ",type:"operator",time:"3d ago",preview:"Thank you for your interest in our corporate flight department opening. We'd like to schedule a technical interview at your convenience.",unread:false},
];

export { SAMPLE_PILOTS, SAMPLE_OPERATORS, INBOX_MESSAGES };