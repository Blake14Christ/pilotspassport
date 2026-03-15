import React, { useState } from "react";
import { BL, NV, ST, MU, WH, ALL_CITIES } from "../shared/data";
import { Mono, Pill, ImgCard } from "../shared/ui";

function CitiesPage({nav}){
  const [search,setSearch]=useState("");
  const [filter,setFilter]=useState("All");
  const filtered=ALL_CITIES.filter(c=>{
    const ms=search===""||c.name.toLowerCase().includes(search.toLowerCase())||c.code.toLowerCase().includes(search.toLowerCase());
    const mf=filter==="All"||(filter==="US"&&c.region!=="International")||(filter==="International"&&c.region==="International")||(filter==="Active"&&c.status==="active")||(filter==="Soon"&&c.status==="soon");
    return ms&&mf;
  });
  return(
    <div style={{maxWidth:1280,padding:"3rem 2rem 5rem"}}>
      <div style={{marginBottom:"2rem"}}>
      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}}>
            <span style={{width:20,height:1,background:BL,display:"inline-block"}}/>
            <Mono c="GLOBAL COVERAGE" s={10} col={BL}/>
          </div>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,marginBottom:"0.4rem",textAlign:"left"}}>All Cities</h1>
        <p style={{color:MU,fontSize:13,textAlign:"left"}}>{ALL_CITIES.filter(c=>c.status==="active").length} Active Cities · More coming.</p>
      </div>
      <div style={{display:"flex",alignItems:"center",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:12,padding:"0 1.25rem",gap:"0.75rem",height:50,marginBottom:"1rem"}}>
        <span style={{color:BL}}>✈</span>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search city or code..." style={{background:"none",border:"none",outline:"none",color:WH,fontFamily:"inherit",fontSize:14,fontWeight:300,width:"100%"}}/>
        <Mono c={`${filtered.length}`} s={10}/>
      </div>
      <div style={{display:"flex",gap:"0.4rem",marginBottom:"2rem",flexWrap:"wrap"}}>
        {["All","US","International","Active","Soon"].map(f=><Pill key={f} label={f.toUpperCase()} active={filter===f} onClick={()=>setFilter(f)}/>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:"1.25rem"}}>
        {filtered.map(city=>{
          const soon=city.status==="soon";
          return(
            <div key={city.code} onClick={()=>!soon&&nav("city",{city})} style={{cursor:soon?"default":"pointer",borderRadius:14,overflow:"hidden",border:"1px solid rgba(255,255,255,.07)",background:ST}}>
              <div style={{height:145,overflow:"hidden",position:"relative"}}>
                <img src={city.img} alt={city.name} style={{width:"100%",height:"100%",objectFit:"cover",opacity:soon?.3:.6,filter:soon?"grayscale(60%)":"none"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(7,9,15,.85) 0%,transparent 55%)"}}/>
                <div style={{position:"absolute",top:9,left:9,display:"flex",gap:"0.3rem",flexWrap:"wrap"}}>
                  {soon?<span style={{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",color:MU,fontFamily:"'DM Mono',monospace",fontSize:8,padding:"0.18rem 0.48rem",borderRadius:20}}>COMING SOON</span>
                    :<span style={{background:"rgba(18,119,189,.2)",border:"1px solid rgba(18,119,189,.3)",color:BL,fontFamily:"'DM Mono',monospace",fontSize:8,padding:"0.18rem 0.48rem",borderRadius:20}}>● ACTIVE</span>}
                </div>
              </div>
              <div style={{padding:"1rem 1.1rem 1.2rem"}}>
                <div style={{display:"flex",alignItems:"baseline",gap:"0.4rem",marginBottom:"0.2rem"}}>
                  <span style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700}}>{city.name}</span>
                  <Mono c={city.code} s={10} col={soon?MU:BL}/>
                </div>
                <div style={{fontSize:11,color:MU,marginBottom:"0.6rem",textAlign:"left",lineHeight:1.5}}>{city.highlight}</div>
                <div style={{display:"flex",justifyContent:"space-between",borderTop:"1px solid rgba(255,255,255,.05)",paddingTop:"0.6rem"}}>
                  {soon?<Mono c={city.region} s={9}/>:<><Mono c={`${city.venues} venues`} s={9}/><Mono c={`${city.pilots} pilots`} s={9}/></>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CitiesPage;
