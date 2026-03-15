import React, { useState } from "react";
import { BL, NV, DK, ST, MU, WH } from "../shared/data";
import { Mono } from "../shared/ui";

function MembershipPage({ nav }){
  const perks=[
    {icon:"🥩",title:"Crew Restaurants",sub:"Dining",desc:"Pilot-vetted spots within 15 min of crew hotels in every city.",points:["10–15% pilot rates at partner restaurants","Reservation priority for crew","Breakfast, lunch, and dinner covered","Late-night options labeled"]},
    {icon:"⚙️",title:"Private & Charter Ops Guides",sub:"Ops Intel",desc:"FBO intel, winter hangar guidance, terrain warnings, curfew notes, and crew transport tips.",points:["KBZN winter hangar reservation guidance","KTEX terrain and approach category notes","KSNA curfew and noise abatement intel","MMSD/MMSL fueling delay strategy"]},
    {icon:"⛳",title:"Golf Access",sub:"Golf",desc:"Preferred tee times, rental club arrangements, and pilot rates at courses near every covered city.",points:["Pilot rate at partner courses","Rental clubs pre-arranged","Weekday availability for crew schedules","Pilot/crew ski discounts (e.g. KTEX)"]},
    {icon:"🍺",title:"Bars Worth Visiting",sub:"Bars",desc:"Every bar is crew-tested. Sorted by distance, atmosphere, and crew-worthiness.",points:["Sorted by vibe and distance","Late-night options flagged","No tourist traps","Beach bars to craft taprooms covered"]},
    {icon:"🏨",title:"Hotel Upgrades",sub:"Hotels",desc:"Partner hotel relationships that go beyond the crew rate.",points:["Upgrade opportunities when available","FBO rate links where applicable","Downtown and airport options listed","Extended stay options for longer overnights"]},
    {icon:"🗺️",title:"City Layover Guides",sub:"Guides",desc:"Full guides written by pilots who've been there dozens of times.",points:["Neighborhood-by-neighborhood breakdown","Transport tips from airport","What to do with 6, 12, or 24 hours","Day trip options"]},
  ];
  
  const [openFaq,setOpenFaq]=useState(null);
  const [showModal,setShowModal]=useState(false);
  const [checkout,setCheckout]=useState("idle");
  const [billing,setBilling]=useState("annually"); // "monthly" | "annually"
 
  const price=billing==="monthly"?"$10":"$100";
  const priceNum=billing==="monthly"?10:100;
  const perLabel=billing==="monthly"?"per month · cancel anytime":"per year · best value · save $0 vs monthly";
  const savings=billing==="annually"?"Save $0 vs monthly":"$100 billed annually saves you 0%";
  const annualMonthlyEq=billing==="annually"?"($10/mo equivalent)":"";
 
  const pay=()=>{setCheckout("processing");setTimeout(()=>setCheckout("success"),2000);};
 
  const faqs=[
    ["What airlines and crew types are eligible?","Pilot Passport is open to all professional pilots — airline, corporate, charter, cargo, and military. Credentials are verified at signup."],
    ["Does my membership cover all cities?","Yes. Your membership covers all active cities from day one, including Portsmouth, Orange County, Telluride, San Juan, and Dallas Love Field."],
    ["How do I access partner discounts?","Show your Pilot Passport member credentials at any partner venue. No codes or apps required at the door."],
    ["Can I cancel my membership?","Yes, anytime. You maintain access through the end of your billing period."],
    ["Is the community private?","Yes. Only verified Pilot Passport members can read and post in community threads."],
    ["How often are new cities added?","We add cities on a rolling basis as we complete venue verification and negotiate pilot rates."],
  ];
 
  const features=["22+ active cities","Private & charter ops guides","Dining pilot rates","Golf access & rental clubs","Bar & nightlife guides","Hotel upgrade partnerships","Airframe community forums","Events & meetup threads","Member credentials — show at door","Portsmouth · Orange County · Telluride","San Juan · Dallas Love Field · Cabo","Cancel anytime"];
 
  return(
    <div>
      {/* Header */}
      <div style={{background:DK,padding:"4rem 2rem 3rem",borderBottom:"1px solid rgba(255,255,255,.05)",textAlign:"center"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <Mono c="MEMBERSHIP" s={10} col={BL} style={{display:"block",marginBottom:"0.75rem"}}/>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:900,marginBottom:"1rem"}}>Join Pilots Passport.</h1>
          <p style={{color:MU,fontSize:15,maxWidth:440,margin:"0 auto 1.5rem",lineHeight:1.7}}>Every city. Every perk. The full pilot network. Cancel anytime.</p>
          <div style={{textAlign:"center"}}>
          <button onClick={()=> nav ? nav("membership") : setShowModal(true)} style={{background:BL,color:WH,border:"none",padding:"1rem 2.5rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",fontWeight:500,letterSpacing:"0.1em"}}>JOIN FOR $100 / YEAR →</button>
        </div>
        </div>
      </div>
      
      <div style={{maxWidth:1280,margin:"0 auto",padding:"3rem 2rem 5rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:"1.4rem",marginBottom:"3rem"}}>
          {perks.map(p=>(
            <div key={p.title} style={{background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:13,padding:"1.85rem"}}>
              <div style={{display:"flex",alignItems:"center",gap:"0.7rem",marginBottom:"0.9rem"}}>
                <div style={{fontSize:25}}>{p.icon}</div>
                <div><div style={{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700}}>{p.title}</div><Mono c={p.sub.toUpperCase()} s={9} col={BL}/></div>
              </div>
              <p style={{fontSize:13,color:MU,lineHeight:1.7,marginBottom:"1.1rem"}}>{p.desc}</p>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.45rem"}}>
                {p.points.map(pt=>(<li key={pt} style={{display:"flex",alignItems:"flex-start",gap:"0.55rem",fontSize:12,color:MU}}><span style={{color:BL,flexShrink:0,marginTop:2}}>✦</span>{pt}</li>))}
              </ul>
            </div>
          ))}
        </div>
 
        {/* ── Billing toggle ── */}
        <div style={{display:"flex",justifyContent:"center",marginBottom:"2.75rem"}}>
          <div style={{display:"inline-flex",background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",borderRadius:100,padding:"4px",position:"relative"}}>
            {/* sliding pill */}
            <div style={{position:"absolute",top:4,left:billing==="monthly"?4:"calc(50% + 2px)",width:"calc(50% - 6px)",height:"calc(100% - 8px)",background:ST,border:"1px solid rgba(18,119,189,.35)",borderRadius:100,transition:"left .25s cubic-bezier(.4,0,.2,1)",boxShadow:"0 1px 4px rgba(0,0,0,.35)"}}/>
            {["monthly","annually"].map(opt=>(
              <button key={opt} onClick={()=>setBilling(opt)} style={{position:"relative",zIndex:1,border:"none",background:"none",cursor:"pointer",padding:"0.55rem 1.75rem",borderRadius:100,fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.12em",color:billing===opt?WH:MU,transition:"color .2s",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"0.5rem"}}>
                {opt.toUpperCase()}
                {opt==="annually"}
              </button>
            ))}
          </div>
        </div>
 
        {/* ── Pricing card ── */}
        <div style={{background:ST,border:`1px solid ${BL}`,borderRadius:18,padding:"2.75rem",marginBottom:"2.5rem",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 70% at 50% 0%,rgba(18,119,189,.12) 0%,transparent 60%)",pointerEvents:"none"}}/>
          <div style={{position:"relative"}}>
 
            {/* Plan label */}
            <Mono c={billing==="annually"?"ANNUAL MEMBERSHIP":"MONTHLY MEMBERSHIP"} s={10} col={BL} style={{display:"block",marginBottom:"1rem"}}/>
 
            {/* Big price */}
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"center",gap:"0.25rem",marginBottom:"0.35rem"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,color:BL,marginTop:"0.9rem"}}>$</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:88,fontWeight:900,color:BL,lineHeight:1}}>{priceNum}</div>
              <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingBottom:"0.75rem",gap:"0.1rem"}}>
                <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:MU,letterSpacing:"0.12em"}}>USD /</span>
                <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:MU,letterSpacing:"0.12em"}}>{billing==="monthly"?"month":"year"}</span>
              </div>
            </div>
 
            {/* Subtext */}
            {billing==="annually"&&(
              <div style={{display:"inline-flex",alignItems:"center",gap:"0.4rem",background:"rgba(74,222,128,.1)",border:"1px solid rgba(74,222,128,.25)",borderRadius:20,padding:"0.28rem 0.85rem",marginBottom:"1.5rem"}}>
                <span style={{width:6,height:6,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/>
                <Mono c="$10/MO EQUIVALENT · SAME AS MONTHLY" s={9} col="#4ade80"/>
              </div>
            )}
            {billing==="monthly"&&(
              <div style={{display:"inline-flex",alignItems:"center",gap:"0.4rem",background:"rgba(234,179,8,.08)",border:"1px solid rgba(234,179,8,.2)",borderRadius:20,padding:"0.28rem 0.85rem",marginBottom:"1.5rem"}}>
                <Mono c="SWITCH TO ANNUAL AND LOCK IN YOUR RATE" s={9} col="#facc15"/>
              </div>
            )}
 
            {/* Features grid */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.65rem",maxWidth:500,margin:"0 auto 2.5rem",textAlign:"left"}}>
              {features.map(f=>(
                <div key={f} style={{display:"flex",alignItems:"flex-start",gap:"0.45rem",fontSize:13,color:MU}}>
                  <span style={{color:"#4ade80",flexShrink:0,marginTop:1}}>✓</span>{f}
                </div>
              ))}
            </div>
 
            {/* CTA */}
            <button onClick={()=>{setShowModal(true);setCheckout("idle");}} style={{background:BL,color:WH,border:"none",padding:"1rem 3.5rem",borderRadius:11,fontFamily:"'DM Mono',monospace",fontSize:13,cursor:"pointer",fontWeight:500,letterSpacing:"0.1em",display:"flex",alignItems:"center",gap:"0.65rem",margin:"0 auto 1rem"}}>
              <span>🔒</span> JOIN NOW — {billing==="monthly"?"$10/MO":"$100/YR"}
            </button>
            <Mono c="Secure checkout · Cancel anytime · Instant access" s={10}/>
          </div>
        </div>
 
        {/* ── FAQ ── */}
        <div style={{display:"flex",flexDirection:"column",gap:1,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:13,overflow:"hidden"}}>
          {faqs.map(([q,a],i)=>(
            <div key={q} style={{background:DK,borderBottom:i<faqs.length-1?"1px solid rgba(255,255,255,.05)":"none"}}>
              <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"none",border:"none",cursor:"pointer",padding:"1.1rem 1.4rem",textAlign:"left",gap:"1rem"}}>
                <span style={{fontSize:14,color:WH}}>{q}</span>
                <span style={{color:BL,fontSize:15,flexShrink:0,transform:openFaq===i?"rotate(180deg)":"none",transition:"transform .2s",display:"inline-block"}}>▾</span>
              </button>
              {openFaq===i&&<div style={{padding:"0 1.4rem 1.1rem",fontSize:13,color:MU,lineHeight:1.7}}>{a}</div>}
            </div>
          ))}
        </div>
      </div>
 
      {/* ── Checkout modal ── */}
      {showModal&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",backdropFilter:"blur(12px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
          <div style={{background:ST,border:"1px solid rgba(255,255,255,.1)",borderRadius:8,width:"100%",maxWidth:440,padding:"2.25rem",position:"relative"}}>
            {checkout==="success"?(
              <div style={{textAlign:"center"}}>
                <div style={{width:60,height:60,borderRadius:"50%",background:"rgba(74,222,128,.1)",border:"2px solid #4ade80",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,margin:"0 auto 1.4rem"}}>✓</div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:700,marginBottom:"0.45rem"}}>Welcome aboard.</div>
                <Mono c="FOUNDING MEMBER · #0247" s={10} col={BL} style={{display:"block",marginBottom:"1.4rem"}}/>
                <p style={{color:MU,fontSize:13,lineHeight:1.75,marginBottom:"1.75rem"}}>Your Pilot Passport membership is active.</p>
                <button onClick={()=>setShowModal(false)} style={{background:BL,color:WH,border:"none",padding:"0.8rem 2.5rem",borderRadius:2,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",fontWeight:500,letterSpacing:"0.1em",width:"100%"}}>START EXPLORING →</button>
              </div>
            ):(
              <>
                <button onClick={()=>setShowModal(false)} style={{position:"absolute",top:14,right:14,background:"none",border:"none",color:MU,fontSize:20,cursor:"pointer"}}>×</button>
                <div style={{display:"flex",alignItems:"center",gap:"0.55rem",marginBottom:"1.5rem"}}>
                  <Mono c="PILOTS" s={12} col={BL} style={{fontWeight:500,letterSpacing:"0.2em"}}/>
                  <span style={{width:1,height:14,background:"rgba(18,119,189,.4)"}}/>
                  <Mono c="PASSPORT" s={12} style={{letterSpacing:"0.15em"}}/>
                </div>
                {/* Order summary */}
                <div style={{background:DK,border:"1px solid rgba(255,255,255,.07)",borderRadius:4,padding:"0.9rem 1.1rem",marginBottom:"1.4rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <div style={{fontSize:13,fontWeight:500,marginBottom:"0.15rem"}}>{billing==="annually"?"Annual Membership":"Monthly Membership"}</div>
                    <Mono c="ALL CITIES · ALL PERKS · CANCEL ANYTIME" s={9}/>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700,color:BL}}>{price}</div>
                    <Mono c={billing==="annually"?"/year":"/month"} s={9}/>
                  </div>
                </div>
                {/* Billing toggle inside modal */}
                <div style={{marginBottom:"1.25rem",display:"flex",justifyContent:"center"}}>
                  <div style={{display:"inline-flex",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.09)",borderRadius:100,padding:"3px",position:"relative"}}>
                    <div style={{position:"absolute",top:3,left:billing==="monthly"?3:"calc(50% + 1px)",width:"calc(50% - 5px)",height:"calc(100% - 6px)",background:"rgba(18,119,189,.2)",border:"1px solid rgba(18,119,189,.3)",borderRadius:100,transition:"left .25s cubic-bezier(.4,0,.2,1)"}}/>
                    {["monthly","annually"].map(opt=>(
                      <button key={opt} onClick={()=>setBilling(opt)} style={{position:"relative",zIndex:1,border:"none",background:"none",cursor:"pointer",padding:"0.38rem 1.1rem",borderRadius:100,fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:"0.1em",color:billing===opt?WH:MU,transition:"color .2s"}}>
                        {opt==="monthly"?"MONTHLY — $10/MO":"ANNUALLY — $100/YR"}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"0.65rem",marginBottom:"1.4rem"}}>
                  <div><Mono c="EMAIL" s={9} style={{display:"block",marginBottom:"0.32rem"}}/><input placeholder="captain@airline.com" style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.12)",borderRadius:4,color:WH,fontFamily:"inherit",fontSize:13,padding:"0.6rem 0.9rem",outline:"none"}}/></div>
                  <div><Mono c="CARD NUMBER" s={9} style={{display:"block",marginBottom:"0.32rem"}}/><input placeholder="4242 4242 4242 4242" style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.12)",borderRadius:4,color:WH,fontFamily:"inherit",fontSize:13,padding:"0.6rem 0.9rem",outline:"none"}}/></div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
                    <div><Mono c="EXPIRY" s={9} style={{display:"block",marginBottom:"0.32rem"}}/><input placeholder="MM / YY" style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.12)",borderRadius:4,color:WH,fontFamily:"inherit",fontSize:13,padding:"0.6rem 0.9rem",outline:"none"}}/></div>
                    <div><Mono c="CVC" s={9} style={{display:"block",marginBottom:"0.32rem"}}/><input placeholder="···" style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.12)",borderRadius:4,color:WH,fontFamily:"inherit",fontSize:13,padding:"0.6rem 0.9rem",outline:"none"}}/></div>
                  </div>
                </div>
                <button onClick={pay} disabled={checkout==="processing"} style={{width:"100%",background:checkout==="processing"?"rgba(18,119,189,.5)":BL,color:WH,border:"none",padding:"0.95rem",borderRadius:4,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:checkout==="processing"?"default":"pointer",fontWeight:500,letterSpacing:"0.1em",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",marginBottom:"0.9rem"}}>
                  {checkout==="processing"?<><span style={{display:"inline-block",width:13,height:13,border:"2px solid rgba(255,255,255,.3)",borderTopColor:WH,borderRadius:"50%",animation:"spin .8s linear infinite"}}/>PROCESSING...</>:<><span>🔒</span>PAY {price} — JOIN PILOTS PASSPORT</>}
                </button>
                <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.4rem"}}><span style={{fontSize:10,color:MU}}>🔒</span><Mono c="Secured by Stripe · 256-bit SSL" s={10}/></div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── OPERATOR PROFILE PAGE ────────────────────────────

export default MembershipPage;
