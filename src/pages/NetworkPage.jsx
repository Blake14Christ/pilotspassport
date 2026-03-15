import React, { useState } from "react";
import { BL, NV, DK, ST, MU, WH, SAMPLE_PILOTS, SAMPLE_OPERATORS } from "../shared/data";
import { Av, Mono, Pill } from "../shared/ui";

function FilterPanel({title,accentColor=BL,activeCount,onClear,children}){
  return(
    <div style={{width:228,flexShrink:0,position:"sticky",top:76,maxHeight:"calc(100vh - 96px)",overflowY:"auto",display:"flex",flexDirection:"column",gap:"0"}}>
      <div style={{background:DK,border:"1px solid rgba(255,255,255,.08)",borderRadius:14,overflow:"hidden"}}>
        <div style={{padding:"0.9rem 1.1rem",borderBottom:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <span style={{fontSize:12}}>⚙</span>
            <Mono c="FILTERS" s={10} col={WH} style={{letterSpacing:"0.15em"}}/>
            {activeCount>0&&<span style={{background:accentColor,color:NV,borderRadius:20,padding:"0.08rem 0.52rem",fontFamily:"'DM Mono',monospace",fontSize:9,fontWeight:700,minWidth:18,textAlign:"center"}}>{activeCount}</span>}
          </div>
          {activeCount>0&&<button onClick={onClear} style={{background:"none",border:"none",color:MU,fontFamily:"'DM Mono',monospace",fontSize:9,cursor:"pointer",letterSpacing:"0.08em",padding:"0.2rem 0.4rem",borderRadius:5,transition:"color .15s"}} onMouseEnter={e=>e.currentTarget.style.color=WH} onMouseLeave={e=>e.currentTarget.style.color=MU}>CLEAR ALL</button>}
        </div>
        <div style={{padding:"0.25rem 0"}}>{children}</div>
      </div>
    </div>
  );
}

function FSection({label,children,defaultOpen=true}){
  const [open,setOpen]=useState(defaultOpen);
  return(
    <div style={{borderBottom:"1px solid rgba(255,255,255,.05)"}}>
      <button onClick={()=>setOpen(o=>!o)} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"none",border:"none",cursor:"pointer",padding:"0.7rem 1.1rem",color:WH}}>
        <Mono c={label} s={9} col={MU} style={{letterSpacing:"0.14em"}}/>
        <span style={{fontSize:9,color:MU,transform:open?"rotate(180deg)":"none",transition:"transform .18s",display:"inline-block"}}>▾</span>
      </button>
      {open&&<div style={{padding:"0 1.1rem 0.85rem"}}>{children}</div>}
    </div>
  );
}

function FInput({value,onChange,placeholder}){
  return(
    <div style={{position:"relative"}}>
      <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={{width:"100%",background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,color:WH,fontFamily:"inherit",fontSize:12,fontWeight:300,padding:"0.5rem 0.75rem",outline:"none",boxSizing:"border-box"}}/>
      {value&&<button onClick={()=>onChange("")} style={{position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:MU,cursor:"pointer",fontSize:13,lineHeight:1,padding:0}}>×</button>}
    </div>
  );
}

function FRange({value,onChange,label,min=0,max=20000,step=500}){
  return(
    <div>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.4rem"}}>
        <Mono c={`${label} MIN`} s={8}/>
        <Mono c={value>0?`${value.toLocaleString()}+`:"ANY"} s={8} col={value>0?BL:MU}/>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(Number(e.target.value))}
        style={{width:"100%",accentColor:BL,cursor:"pointer",height:3}}/>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"0.3rem"}}>
        <Mono c={min.toLocaleString()} s={7}/><Mono c={max.toLocaleString()+"+"} s={7}/>
      </div>
    </div>
  );
}

function FToggle({options,value,onChange,multi=false}){
  const toggle=(opt)=>{
    if(multi){
      const cur=value||[];
      onChange(cur.includes(opt)?cur.filter(v=>v!==opt):[...cur,opt]);
    } else {
      onChange(value===opt?null:opt);
    }
  };
  const isActive=(opt)=>multi?(value||[]).includes(opt):value===opt;
  return(
    <div style={{display:"flex",flexDirection:"column",gap:"0.3rem"}}>
      {options.map(opt=>(
        <button key={opt} onClick={()=>toggle(opt)} style={{display:"flex",alignItems:"center",gap:"0.55rem",padding:"0.42rem 0.65rem",borderRadius:7,border:`1px solid ${isActive(opt)?"rgba(18,119,189,.45)":"rgba(255,255,255,.07)"}`,background:isActive(opt)?"rgba(18,119,189,.12)":"transparent",cursor:"pointer",textAlign:"left",transition:"all .12s"}}>
          <div style={{width:14,height:14,borderRadius:4,border:`1px solid ${isActive(opt)?BL:"rgba(255,255,255,.2)"}`,background:isActive(opt)?BL:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:8,color:WH,transition:"all .12s"}}>{isActive(opt)?"✓":""}</div>
          <span style={{fontSize:12,color:isActive(opt)?WH:MU}}>{opt}</span>
        </button>
      ))}
    </div>
  );
}

function FBoolToggle({label,value,onChange,accentColor=BL}){
  return(
    <button onClick={()=>onChange(!value)} style={{display:"flex",alignItems:"center",gap:"0.55rem",background:"none",border:"none",cursor:"pointer",padding:"0.1rem 0",width:"100%"}}>
      <div style={{width:34,height:18,borderRadius:9,background:value?accentColor:"rgba(255,255,255,.1)",position:"relative",transition:"background .2s",flexShrink:0}}>
        <div style={{width:12,height:12,borderRadius:"50%",background:WH,position:"absolute",top:3,left:value?19:3,transition:"left .2s"}}/>
      </div>
      <span style={{fontSize:12,color:value?WH:MU}}>{label}</span>
    </button>
  );
}

// ─── NETWORK PAGE ─────────────────────────────────────

function NetworkPage({nav}){
  const [tab,setTab]=useState("pilots");
  const [search,setSearch]=useState("");
  const [savedPilots,setSavedPilots]=useState(new Set());
  const [savedOps,setSavedOps]=useState(new Set());

  // Pilot filters
  const [pfBase,setPfBase]=useState("");
  const [pfAcType,setPfAcType]=useState([]);
  const [pfMinTT,setPfMinTT]=useState(0);
  const [pfMinType,setPfMinType]=useState(0);
  const [pfIntl,setPfIntl]=useState(null);
  const [pfAvail,setPfAvail]=useState(null);
  const [pfRole,setPfRole]=useState([]);

  // Operator filters (for operator tab on network)
  const [ofBase,setOfBase]=useState("");
  const [ofOpsType,setOfOpsType]=useState([]);
  const [ofVerified,setOfVerified]=useState(false);
  const [ofCert,setOfCert]=useState([]);

  const allAcTypes=[...new Set(SAMPLE_PILOTS.flatMap(p=>p.typeRatings))].sort();
  const pilotActiveFilters=[pfBase,pfAcType.length>0,pfMinTT>0,pfMinType>0,pfIntl!==null,pfAvail,pfRole.length>0].filter(Boolean).length;
  const opActiveFilters=[ofBase,ofOpsType.length>0,ofVerified,ofCert.length>0].filter(Boolean).length;

  const clearPilotFilters=()=>{setPfBase("");setPfAcType([]);setPfMinTT(0);setPfMinType(0);setPfIntl(null);setPfAvail(null);setPfRole([]);};
  const clearOpFilters=()=>{setOfBase("");setOfOpsType([]);setOfVerified(false);setOfCert([]);};

  const filteredPilots=SAMPLE_PILOTS.filter(p=>{
    if(search&&!p.name.toLowerCase().includes(search.toLowerCase())&&!p.handle.toLowerCase().includes(search.toLowerCase())&&!p.base.toLowerCase().includes(search.toLowerCase())&&!p.typeRatings.some(t=>t.toLowerCase().includes(search.toLowerCase())))return false;
    if(pfBase&&!p.base.toLowerCase().includes(pfBase.toLowerCase()))return false;
    if(pfAcType.length>0&&!pfAcType.some(t=>p.typeRatings.includes(t)))return false;
    if(pfMinTT>0&&p.totalTime<pfMinTT)return false;
    if(pfMinType>0&&p.typeInTypeHours<pfMinType)return false;
    if(pfIntl===true&&!p.intl)return false;
    if(pfIntl===false&&p.intl)return false;
    if(pfAvail&&p.status!==pfAvail)return false;
    if(pfRole.length>0&&!pfRole.some(r=>p.seeking.includes(r)))return false;
    return true;
  });

  const filteredOps=SAMPLE_OPERATORS.filter(o=>{
    if(search&&!o.name.toLowerCase().includes(search.toLowerCase())&&!o.handle.toLowerCase().includes(search.toLowerCase())&&!o.base.toLowerCase().includes(search.toLowerCase()))return false;
    if(ofBase&&!o.base.toLowerCase().includes(ofBase.toLowerCase()))return false;
    if(ofOpsType.length>0&&!ofOpsType.some(t=>o.opsType.includes(t)))return false;
    if(ofVerified&&!o.verified)return false;
    if(ofCert.length>0&&!ofCert.some(c=>o.certs.includes(c)))return false;
    return true;
  });

  const PilotFilters=(
    <FilterPanel accentColor={BL} activeCount={pilotActiveFilters} onClear={clearPilotFilters}>
      <FSection label="HOME BASE">
        <FInput value={pfBase} onChange={setPfBase} placeholder="e.g. ATL, JFK, LAX"/>
      </FSection>
      <FSection label="AIRCRAFT TYPE">
        <div style={{display:"flex",flexWrap:"wrap",gap:"0.3rem"}}>
          {allAcTypes.map(t=>{
            const active=pfAcType.includes(t);
            return<button key={t} onClick={()=>setPfAcType(prev=>active?prev.filter(x=>x!==t):[...prev,t])} style={{padding:"0.25rem 0.6rem",borderRadius:20,border:`1px solid ${active?"rgba(18,119,189,.5)":"rgba(255,255,255,.08)"}`,background:active?"rgba(18,119,189,.15)":"transparent",color:active?BL:MU,fontFamily:"'DM Mono',monospace",fontSize:8,cursor:"pointer",transition:"all .12s"}}>{t}</button>;
          })}
        </div>
      </FSection>
      <FSection label="TOTAL TIME (HRS)">
        <FRange value={pfMinTT} onChange={setPfMinTT} label="TT" min={0} max={15000} step={500}/>
      </FSection>
      <FSection label="TIME IN TYPE (HRS)">
        <FRange value={pfMinType} onChange={setPfMinType} label="TYPE" min={0} max={5000} step={250}/>
      </FSection>
      <FSection label="DOMESTIC / INTL">
        <FToggle options={["International","Domestic Only"]} value={pfIntl===true?"International":pfIntl===false?"Domestic Only":null} onChange={v=>{if(v==="International")setPfIntl(true);else if(v==="Domestic Only")setPfIntl(false);else setPfIntl(null);}}/>
      </FSection>
      <FSection label="AVAILABILITY">
        <FToggle options={["Available Now","Available Specific Dates","Not Currently Available"]} value={pfAvail} onChange={setPfAvail}/>
      </FSection>
      <FSection label="PIC / SIC">
        <FToggle options={["PIC","Captain","SIC","FO"]} value={pfRole} onChange={setPfRole} multi/>
      </FSection>
    </FilterPanel>
  );

  const OpFilters=(
    <FilterPanel accentColor="#f59e0b" activeCount={opActiveFilters} onClear={clearOpFilters}>
      <FSection label="HOME BASE">
        <FInput value={ofBase} onChange={setOfBase} placeholder="e.g. TEB, LAX, DEN"/>
      </FSection>
      <FSection label="OPS TYPE">
        <FToggle options={["Charter","Corporate","Fractional","Medical"]} value={ofOpsType} onChange={setOfOpsType} multi/>
      </FSection>
      <FSection label="CERTIFICATION">
        <FToggle options={["Part 91","Part 135","Part 121"]} value={ofCert} onChange={setOfCert} multi/>
      </FSection>
      <FSection label="VERIFIED ONLY">
        <FBoolToggle label="Verified operators only" value={ofVerified} onChange={setOfVerified} accentColor="#f59e0b"/>
      </FSection>
    </FilterPanel>
  );

  return(
    <div style={{maxWidth:1400,margin:"0 auto",padding:"3rem 2rem 5rem"}}>
      {/* Header */}
      <div style={{marginBottom:"1.75rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}}><span style={{width:20,height:1,background:BL,display:"inline-block"}}/><Mono c="PILOTS PASSPORT NETWORK" s={10} col={BL}/></div>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem"}}>
          <div>
            <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,marginBottom:"0.35rem"}}>Find Pilots. Find Operators.</h1>
            <p style={{color:MU,fontSize:13}}>Browse the network. Connect, hire, or get hired.</p>
          </div>
          <div style={{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap"}}>
            <div style={{display:"flex",alignItems:"center",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:11,padding:"0 1rem",gap:"0.6rem",height:40,minWidth:240}}>
              <span style={{color:MU,fontSize:13}}>🔍</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={tab==="pilots"?"Search name, base, type rating...":"Search operator name or base..."} style={{background:"none",border:"none",outline:"none",color:WH,fontFamily:"inherit",fontSize:12,fontWeight:300,width:"100%"}}/>
              {search&&<button onClick={()=>setSearch("")} style={{background:"none",border:"none",color:MU,cursor:"pointer",fontSize:14}}>×</button>}
            </div>
            <div style={{display:"inline-flex",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,padding:3,gap:3}}>
              {[["pilots","✈ PILOTS"],["operators","🏢 OPERATORS"]].map(([id,label])=>(
                <button key={id} onClick={()=>setTab(id)} style={{background:tab===id?(id==="operators"?"#f59e0b":BL):"transparent",color:tab===id?(id==="operators"?"#0b0f1a":WH):MU,border:"none",borderRadius:6,padding:"0.45rem 1rem",fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.1em",cursor:"pointer",transition:"all .15s",fontWeight:tab===id?700:400}}>{label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body: sidebar + grid */}
      <div style={{display:"flex",gap:"1.5rem",alignItems:"flex-start"}}>
        {tab==="pilots"?PilotFilters:OpFilters}

        <div style={{flex:1,minWidth:0}}>
          {/* Result count */}
          <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.1rem"}}>
            <Mono c={tab==="pilots"?`${filteredPilots.length} PILOT${filteredPilots.length!==1?"S":""}`:`${filteredOps.length} OPERATOR${filteredOps.length!==1?"S":""}`} s={10} col={WH}/>
            {(tab==="pilots"?pilotActiveFilters:opActiveFilters)>0&&<Mono c={`· ${tab==="pilots"?pilotActiveFilters:opActiveFilters} FILTER${(tab==="pilots"?pilotActiveFilters:opActiveFilters)!==1?"S":""} ACTIVE`} s={9} col={BL}/>}
          </div>

          {tab==="pilots"&&(
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:"1rem"}}>
              {filteredPilots.map(p=>{
                const sv=savedPilots.has(p.id);
                return(
                  <div key={p.id} style={{background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:16,overflow:"hidden",transition:"border-color .2s",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(18,119,189,.4)"} onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,.07)"}>
                    <div style={{height:4,background:`linear-gradient(90deg,${BL} 0%,rgba(18,119,189,.2) 100%)`}}/>
                    <div style={{padding:"1.1rem"}}>
                      <div style={{display:"flex",alignItems:"flex-start",gap:"0.8rem",marginBottom:"0.8rem"}}>
                        <div style={{width:42,height:42,borderRadius:11,background:"rgba(18,119,189,.15)",border:"1px solid rgba(18,119,189,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Mono',monospace",fontSize:12,fontWeight:600,color:BL,flexShrink:0}}>{p.name.split(" ").slice(0,2).map(w=>w[0]).join("")}</div>
                        <div style={{flex:1}}>
                          <div style={{fontSize:13,fontWeight:600,marginBottom:2}}>{p.name}</div>
                          <div style={{display:"flex",gap:"0.35rem",alignItems:"center",flexWrap:"wrap"}}>
                            <Mono c={`@${p.handle}`} s={9} col={BL}/><Mono c="·" s={9}/><Mono c={p.base} s={9}/>
                          </div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.25rem"}}>
                          <span style={{fontSize:9,fontFamily:"'DM Mono',monospace",color:p.available?"#4ade80":MU}}>{p.available?"● AVAIL":"○ BUSY"}</span>
                          <button onClick={e=>{e.stopPropagation();setSavedPilots(prev=>{const n=new Set(prev);n.has(p.id)?n.delete(p.id):n.add(p.id);return n;});}} style={{background:"none",border:"none",cursor:"pointer",color:sv?"#ef4444":"rgba(255,255,255,.35)",fontSize:14}}>{sv?"♥":"♡"}</button>
                        </div>
                      </div>
                      <div style={{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginBottom:"0.75rem"}}>
                        {p.certs.map(c=><span key={c} style={{background:"rgba(18,119,189,.1)",border:"1px solid rgba(18,119,189,.2)",borderRadius:20,padding:"0.18rem 0.55rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:BL}}>{c}</span>)}
                        {p.typeRatings.map(t=><span key={t} style={{background:"rgba(245,158,11,.1)",border:"1px solid rgba(245,158,11,.2)",borderRadius:20,padding:"0.18rem 0.55rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:"#f59e0b"}}>{t}</span>)}
                        {p.intl&&<span style={{background:"rgba(74,222,128,.08)",border:"1px solid rgba(74,222,128,.2)",borderRadius:20,padding:"0.18rem 0.55rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:"#4ade80"}}>INTL</span>}
                      </div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem 0.75rem",marginBottom:"0.75rem",padding:"0.65rem 0.75rem",background:"rgba(255,255,255,.03)",borderRadius:8}}>
                        <div><Mono c="TOTAL TIME" s={7} style={{display:"block",marginBottom:2}}/><span style={{fontFamily:"'DM Mono',monospace",fontSize:14,fontWeight:600,color:WH}}>{p.totalTime.toLocaleString()}</span></div>
                        <div><Mono c="PIC HRS" s={7} style={{display:"block",marginBottom:2}}/><span style={{fontFamily:"'DM Mono',monospace",fontSize:14,fontWeight:600,color:BL}}>{p.picHours.toLocaleString()}</span></div>
                        <div style={{gridColumn:"1/-1"}}><Mono c="SEEKING" s={7} style={{display:"block",marginBottom:3}}/><div style={{display:"flex",gap:"0.3rem",flexWrap:"wrap"}}>{p.seeking.map(r=><span key={r} style={{background:"rgba(255,255,255,.06)",borderRadius:20,padding:"0.15rem 0.5rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:MU}}>{r}</span>)}</div></div>
                      </div>
                      <button onClick={()=>nav("inbox")} style={{width:"100%",background:"rgba(18,119,189,.08)",color:BL,border:"1px solid rgba(18,119,189,.2)",borderRadius:8,padding:"0.42rem",fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer"}}>✉ CONTACT PILOT</button>
                    </div>
                  </div>
                );
              })}
              {filteredPilots.length===0&&<div style={{color:MU,fontSize:13,gridColumn:"1/-1",textAlign:"center",padding:"4rem 2rem",background:ST,borderRadius:14,border:"1px solid rgba(255,255,255,.06)"}}><div style={{fontSize:36,marginBottom:"1rem"}}>✈</div><div style={{fontFamily:"'Playfair Display',serif",fontSize:18,marginBottom:"0.5rem"}}>No pilots match your filters</div><div style={{fontSize:12}}>Try adjusting your criteria or clearing all filters.</div></div>}
            </div>
          )}

          {tab==="operators"&&(
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:"1rem"}}>
              {filteredOps.map(o=>{
                const sv=savedOps.has(o.id);
                return(
                  <div key={o.id} style={{background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:16,overflow:"hidden",transition:"border-color .2s",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(245,158,11,.4)"} onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,.07)"}>
                    <div style={{height:4,background:"linear-gradient(90deg,#f59e0b 0%,rgba(245,158,11,.2) 100%)"}}/>
                    <div style={{padding:"1.1rem"}}>
                      <div style={{display:"flex",alignItems:"flex-start",gap:"0.8rem",marginBottom:"0.8rem"}}>
                        <div style={{width:42,height:42,borderRadius:11,background:"rgba(245,158,11,.12)",border:"1px solid rgba(245,158,11,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Mono',monospace",fontSize:12,fontWeight:700,color:"#f59e0b",flexShrink:0}}>{o.handle.slice(0,2).toUpperCase()}</div>
                        <div style={{flex:1}}>
                          <div style={{fontSize:13,fontWeight:600,marginBottom:2}}>{o.name}</div>
                          <div style={{display:"flex",gap:"0.35rem",alignItems:"center"}}>
                            <Mono c={`@${o.handle}`} s={9} col="#f59e0b"/><Mono c="·" s={9}/><Mono c={o.base} s={9}/>
                          </div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.25rem"}}>
                          {o.verified&&<span style={{background:"rgba(18,119,189,.1)",border:"1px solid rgba(18,119,189,.2)",borderRadius:20,padding:"0.15rem 0.5rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:BL}}>✓ VER</span>}
                          <button onClick={e=>{e.stopPropagation();setSavedOps(prev=>{const n=new Set(prev);n.has(o.id)?n.delete(o.id):n.add(o.id);return n;});}} style={{background:"none",border:"none",cursor:"pointer",color:sv?"#ef4444":"rgba(255,255,255,.35)",fontSize:14}}>{sv?"♥":"♡"}</button>
                        </div>
                      </div>
                      <div style={{fontSize:12,color:MU,lineHeight:1.6,marginBottom:"0.75rem"}}>{o.about}</div>
                      <div style={{display:"flex",flexWrap:"wrap",gap:"0.3rem",marginBottom:"0.75rem"}}>
                        {o.certs.map(c=><span key={c} style={{background:"rgba(18,119,189,.1)",border:"1px solid rgba(18,119,189,.2)",borderRadius:20,padding:"0.18rem 0.55rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:BL}}>{c}</span>)}
                        {o.opsType.map(t=><span key={t} style={{background:"rgba(245,158,11,.1)",border:"1px solid rgba(245,158,11,.2)",borderRadius:20,padding:"0.18rem 0.55rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:"#f59e0b"}}>{t.toUpperCase()}</span>)}
                      </div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem",padding:"0.65rem 0.75rem",background:"rgba(255,255,255,.03)",borderRadius:8,marginBottom:"0.75rem"}}>
                        <div style={{textAlign:"center"}}><div style={{fontFamily:"'DM Mono',monospace",fontSize:16,fontWeight:700,color:"#f59e0b"}}>{o.fleet}</div><Mono c="AIRCRAFT" s={8}/></div>
                        <div style={{textAlign:"center"}}><div style={{fontFamily:"'DM Mono',monospace",fontSize:16,fontWeight:700,color:"#4ade80"}}>{o.openPos}</div><Mono c="OPEN POS" s={8}/></div>
                      </div>
                      <button onClick={()=>nav("inbox")} style={{width:"100%",background:"rgba(245,158,11,.08)",color:"#f59e0b",border:"1px solid rgba(245,158,11,.2)",borderRadius:8,padding:"0.42rem",fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer"}}>CONTACT →</button>
                    </div>
                  </div>
                );
              })}
              {filteredOps.length===0&&<div style={{color:MU,fontSize:13,gridColumn:"1/-1",textAlign:"center",padding:"4rem 2rem",background:ST,borderRadius:14,border:"1px solid rgba(255,255,255,.06)"}}><div style={{fontSize:36,marginBottom:"1rem"}}>🏢</div><div style={{fontFamily:"'Playfair Display',serif",fontSize:18,marginBottom:"0.5rem"}}>No operators match your filters</div><div style={{fontSize:12}}>Try adjusting your criteria.</div></div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── INBOX PAGE ───────────────────────────────────────

export default NetworkPage;
