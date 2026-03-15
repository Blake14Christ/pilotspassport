import React from "react";
import { BL, NV, DK, ST, MU, WH, TICKER, US_HOME, INTL_HOME, ALL_CITIES } from "../shared/data";
import { Mono, Pill, ImgCard } from "../shared/ui";

function HomePage({nav}){
  return(
    <div>
      <section style={{minHeight:"80vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 2rem",position:"relative",overflow:"hidden",background:NV}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(1px 1px at 12% 18%,rgba(237,241,247,.35) 0%,transparent 100%),radial-gradient(1.5px 1.5px at 68% 12%,rgba(18,119,189,.7) 0%,transparent 100%),radial-gradient(1px 1px at 38% 72%,rgba(237,241,247,.22) 0%,transparent 100%),radial-gradient(1px 1px at 85% 58%,rgba(237,241,247,.28) 0%,transparent 100%)"}}/>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 65% 50%,rgba(18,119,189,.09) 0%,transparent 60%)"}}/>
        <div style={{position:"relative",maxWidth:1200,margin:"0 auto",width:"100%"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.5rem"}}><div style={{width:28,height:1,background:BL,opacity:.7}}/><Mono c="THE PROFESSIONAL PILOTS NETWORK" s={10} col={BL}/></div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(3.5rem,8vw,7.5rem)",fontWeight:900,lineHeight:.92,letterSpacing:"-0.02em",marginBottom:"1.75rem",textAlign:"left"}}>
  Built<br/>
  For The<br/>
  <em style={{color:BL,fontStyle:"italic"}}>Pilot Life.</em>
</h1>
          <p style={{color:MU,fontSize:"1.05rem",maxWidth:450,lineHeight:1.75,marginBottom:"2.5rem",textAlign:"left"}}><b>The premium aviation network built for pro pilots.</b> Vetted access to pilot community, jobs, bars & restaurants, golf, and curated experiences everywhere you fly.</p>
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <button onClick={()=>nav("membership")} style={{background:BL,color:WH,border:"none",padding:"1rem 2.2rem",borderRadius:2,fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:"0.1em",cursor:"pointer",fontWeight:500}}>JOIN FOR FREE</button>
            <button onClick={()=>nav("membership")} style={{background:"transparent",color:WH,border:"1px solid rgba(255,255,255,.2)",padding:"1rem 2.2rem",borderRadius:2,fontFamily:"'DM Mono',monospace",fontSize:12,letterSpacing:"0.1em",cursor:"pointer"}}>SEE WHAT'S INCLUDED →</button>
          </div>
        </div>
        <div style={{position:"absolute",right:"4rem",bottom:"4rem",textAlign:"right"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:"5.5rem",fontWeight:900,color:BL,lineHeight:1}}>✈️</div>
          <Mono c="JOIN NOW · CANCEL ANYTIME" s={10}/>
        </div>
      </section>

      <div style={{background:ST,borderTop:"1px solid rgba(255,255,255,.04)",borderBottom:"1px solid rgba(255,255,255,.04)",overflow:"hidden",padding:"0.85rem 0"}}>
        <style>{`@keyframes tkr{from{transform:translateX(0)}to{transform:translateX(-50%)}}.tkr{display:flex;animation:tkr 36s linear infinite;width:max-content;}`}</style>
        <div className="tkr">
          {[...TICKER,...TICKER].map((item,i)=>(
            <span key={i} style={{display:"flex",alignItems:"center",gap:"2.5rem",padding:"0 1.5rem"}}><Mono c={item.toUpperCase()} s={10}/><span style={{color:BL}}>✦</span></span>
          ))}
        </div>
      </div>

      <section style={{background:DK,padding:"6rem 2rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"1rem"}}><div style={{width:18,height:1,background:BL}}/><Mono c="FEATURED CITIES" s={10} col={BL}/></div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,marginBottom:"1.25rem",textAlign:"left"}}>Where pilots land well.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(195px,1fr))",gap:1,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.06)",borderRadius:4,overflow:"hidden",marginBottom:"1.5rem"}}>
            {US_HOME.map(({n,code})=>{
              const city=ALL_CITIES.find(x=>x.code===code);
              return(
                <button key={code} onClick={()=>city&&nav("city",{city})} style={{background:DK,border:"none",cursor:"pointer",padding:"1rem 1.2rem",display:"flex",alignItems:"center",gap:"0.65rem",textAlign:"left"}}>
                  <span style={{width:6,height:6,borderRadius:"50%",background:BL,boxShadow:`0 0 5px ${BL}`,flexShrink:0}}/>
                  <span style={{fontSize:13,color:WH,flex:1}}>{n}</span>
                  <Mono c={code} s={10} col={BL}/>
                </button>
              );
            })}
          </div>
          <div style={{background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:4,padding:"1.5rem"}}>
            <div style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"1.1rem"}}><span style={{fontSize:13}}>🌐</span><Mono c="INTERNATIONAL" s={10} col={MU}/></div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))",gap:1,background:"rgba(255,255,255,.03)",borderRadius:2,overflow:"hidden"}}>
              {INTL_HOME.map(({n,code})=>{
                const city=ALL_CITIES.find(x=>x.code===code);
                const active=city?.status==="active";
                return(
                  <div key={code} onClick={active?()=>nav("city",{city}):undefined} style={{background:ST,padding:"0.85rem 1rem",display:"flex",alignItems:"center",gap:"0.6rem",cursor:active?"pointer":"default"}}>
                    <span style={{width:5,height:5,borderRadius:"50%",background:active?"#4ade80":MU,flexShrink:0}}/>
                    <span style={{fontSize:12,color:active?WH:MU,flex:1}}>{n}</span>
                    {active?<Mono c="→" s={9} col={BL}/>:<Mono c="SOON" s={8}/>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section style={{background:NV,padding:"6rem 2rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Mono c="WHAT'S INCLUDED" s={10} col={BL} style={{display:"block",marginBottom:"1rem"}}/>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,3vw,2.8rem)",fontWeight:700,marginBottom:"2.5rem"}}>Everything you need for after the flight.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:1,background:"rgba(255,255,255,.03)"}}>
            {[["🥩","Crew Restaurants","Pilot-vetted spots within 15 min of crew hotels. Steakhouses, sushi, breakfast — actually worth going to."],["⚙️","Ops Guides","FBO intel, hangar booking tips, terrain warnings, and ground transport for private and charter crews."],["⛳","Golf Access","Preferred tee times, rental clubs, and pilot rates at courses near every covered city."],["🍺","Bars Worth Visiting","Sorted by atmosphere, distance, and crew-worthiness. No tourist traps."],["🏨","Hotel Upgrades","Partner relationships that go beyond the crew rate — upgrades, early check-in, amenities."],["🗺️","City Layover Guides","Full neighborhood guides for every city, built by pilots who've been there dozens of times."]].map(([ic,t,d])=>(
              <div key={t} style={{background:NV,padding:"2.5rem 2rem",borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                <div style={{fontSize:28,marginBottom:"1rem"}}>{ic}</div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700,marginBottom:"0.6rem"}}>{t}</div>
                <div style={{fontSize:13,color:MU,lineHeight:1.7}}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:"2.5rem"}}>
            <button onClick={()=>nav("membership")} style={{background:BL,color:WH,border:"none",padding:"0.85rem 2.2rem",borderRadius:2,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",letterSpacing:"0.1em",fontWeight:500}}>VIEW ALL PERKS →</button>
          </div>
        </div>
      </section>

      <section style={{background:DK,padding:"7rem 2rem",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 60% at 50% 50%,rgba(18,119,189,.08) 0%,transparent 70%)"}}/>
        <div style={{position:"relative",maxWidth:560,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,marginBottom:"1.1rem"}}>Ready to land well?</h2>
          <p style={{color:MU,fontSize:14,lineHeight:1.8,marginBottom:"2.5rem"}}>Free Signup . Cancel anytime. Instant access to every city, every perk, every guide.</p>
          <button onClick={()=>nav("membership")} style={{background:BL,color:WH,border:"none",padding:"1.1rem 3rem",borderRadius:2,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",fontWeight:500,letterSpacing:"0.1em",display:"block",margin:"0 auto 1rem"}}>JOIN PILOTS PASSPORT - FREE</button>
          <Mono c="Secure checkout · Cancel anytime · Instant access" s={11}/>
        </div>
      </section>
    </div>
  );
}

// ─── CITIES PAGE ──────────────────────

export default HomePage;
