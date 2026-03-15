import React, { useState } from "react";
import { BL, NV, DK, ST, MU, WH, ME, INIT_PROFILE, CERT_OPTIONS, RATING_OPTIONS, AVAIL_OPTIONS, REGION_OPTIONS, BG_OPTIONS, SCHED_OPTIONS, INIT_OPERATOR, JOB_AF_FILTERS, OPS_TYPE_OPTIONS, CERT_OPS_OPTIONS, SCHEDULE_OPTIONS_OP, POSITION_STATUS_OPTIONS, AC_CATS_OP } from "../shared/data";
import { Av, Mono, Pill } from "../shared/ui";

function FieldRow({label,children,hint}){
  return(
    <div style={{marginBottom:"1.35rem"}}>
      <label style={{display:"block",fontFamily:"'DM Mono',monospace",fontSize:9,color:MU,letterSpacing:"0.15em",marginBottom:"0.45rem",textTransform:"uppercase"}}>{label}{hint&&<span style={{marginLeft:8,color:"rgba(123,138,163,.5)",fontStyle:"italic",fontFamily:"'DM Sans',sans-serif",fontSize:10,letterSpacing:0,textTransform:"none"}}>{hint}</span>}</label>
      {children}
    </div>
  );
}
 
function TxtInput({value,onChange,placeholder,type="text",mono=false}){
  return(
    <input
      type={type} value={value||""} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
      style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:mono?"'DM Mono',monospace":"inherit",fontSize:13,fontWeight:300,padding:"0.62rem 0.9rem",outline:"none",display:"block"}}
    />
  );
}
 
function NumInput({value,onChange,placeholder}){
  return(
    <input
      type="number" value={value||""} onChange={e=>onChange(Number(e.target.value))} placeholder={placeholder}
      style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"'DM Mono',monospace",fontSize:13,fontWeight:300,padding:"0.62rem 0.9rem",outline:"none",display:"block"}}
    />
  );
}
 
function Toggle({value,onChange,label}){
  return(
    <button onClick={()=>onChange(!value)} style={{display:"inline-flex",alignItems:"center",gap:"0.6rem",background:"none",border:"none",cursor:"pointer",padding:0,color:value?WH:MU}}>
      <div style={{width:36,height:20,borderRadius:10,background:value?BL:"rgba(255,255,255,.1)",position:"relative",transition:"background .2s",flexShrink:0}}>
        <div style={{width:14,height:14,borderRadius:"50%",background:WH,position:"absolute",top:3,left:value?19:3,transition:"left .2s"}}/>
      </div>
      <span style={{fontSize:13}}>{label}</span>
    </button>
  );
}
 
function TagSelect({options,value=[],onChange}){
  return(
    <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>
      {options.map(o=>{
        const active=value.includes(o);
        return(
          <button key={o} onClick={()=>onChange(active?value.filter(v=>v!==o):[...value,o])}
            style={{cursor:"pointer",border:`1px solid ${active?BL:"rgba(255,255,255,.1)"}`,background:active?BL:"transparent",color:active?WH:MU,padding:"0.28rem 0.8rem",borderRadius:20,fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:"0.1em",whiteSpace:"nowrap",transition:"all .15s"}}>
            {o.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
 
function SectionCard({icon,title,children,accent=false}){
  return(
    <div style={{background:ST,border:`1px solid ${accent?"rgba(18,119,189,.25)":"rgba(255,255,255,.07)"}`,borderRadius:16,padding:"1.75rem",marginBottom:"1.5rem"}}>
      <div style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"1.4rem",borderBottom:"1px solid rgba(255,255,255,.06)",paddingBottom:"1rem"}}>
        <span style={{fontSize:18}}>{icon}</span>
        <Mono c={title} s={11} col={accent?BL:WH} style={{letterSpacing:"0.15em"}}/>
      </div>
      {children}
    </div>
  );
}
 
function ProfilePage({nav}){
  const [profile,setProfile]=useState(INIT_PROFILE);
  const [editing,setEditing]=useState(false);
  const [draft,setDraft]=useState(null);
  const [afSearch,setAfSearch]=useState("");
  const [afNew,setAfNew]=useState({type:"",hours:"",cat:"Business Jet"});
  const [refNew,setRefNew]=useState({name:"",title:"",contact:""});
  const [saveFlash,setSaveFlash]=useState(false);
  const [activeTab,setActiveTab]=useState("overview");
 
  const startEdit=()=>{setDraft(JSON.parse(JSON.stringify(profile)));setEditing(true);};
  const cancelEdit=()=>{setDraft(null);setEditing(false);};
  const saveEdit=()=>{setProfile(draft);setDraft(null);setEditing(false);setSaveFlash(true);setTimeout(()=>setSaveFlash(false),2200);};
  const P=editing?draft:profile;
  const set=(k,v)=>setDraft(d=>({...d,[k]:v}));
 
  const addAircraft=()=>{
    if(!afNew.type||!afNew.hours)return;
    set("aircraftExp",[...P.aircraftExp,{type:afNew.type,hours:Number(afNew.hours),cat:afNew.cat}]);
    setAfNew({type:"",hours:"",cat:"Business Jet"});
  };
  const removeAircraft=idx=>set("aircraftExp",P.aircraftExp.filter((_,i)=>i!==idx));
 
  const addRef=()=>{
    if(!refNew.name)return;
    set("refs",[...P.refs,{...refNew}]);
    setRefNew({name:"",title:"",contact:""});
  };
 
  const hoursFields=[
    ["Total Flight Time","totalTime"],["PIC Time","picTime"],["SIC Time","sicTime"],
    ["Turbine Time","turbineTime"],["Jet Time","jetTime"],["Multi-Engine Time","multiTime"],
    ["Instrument Time","instrumentTime"],["Night Time","nightTime"],["Cross Country","xcTime"],
  ];
 
  const filteredAC=P.aircraftExp.filter(a=>a.type.toLowerCase().includes(afSearch.toLowerCase()));
  const tabs=[["overview","OVERVIEW"],["credentials","CREDENTIALS"],["hours","HOURS"],["aircraft","AIRCRAFT"],["availability","AVAILABILITY"],["background","BACKGROUND"]];
 
  return(
    <div style={{maxWidth:1100,margin:"0 auto",padding:"3rem 2rem"}}>
 
      {/* Save flash */}
      {saveFlash&&(
        <div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",background:"rgba(74,222,128,.12)",border:"1px solid rgba(74,222,128,.35)",borderRadius:9,padding:"0.65rem 1.5rem",zIndex:999,display:"flex",alignItems:"center",gap:"0.6rem"}}>
          <span style={{color:"#4ade80",fontSize:14}}>✓</span>
          <Mono c="PROFILE SAVED" s={11} col="#4ade80"/>
        </div>
      )}
 
      {/* Profile Header Card */}
      <div style={{background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:20,overflow:"hidden",marginBottom:"2rem"}}>
        {/* Cover bar */}
        <div style={{height:8,background:`linear-gradient(90deg,${BL} 0%,rgba(18,119,189,.3) 100%)`}}/>
        <div style={{padding:"2rem",display:"flex",alignItems:"flex-start",gap:"1.75rem",flexWrap:"wrap"}}>
          {/* Avatar / headshot */}
          <div style={{position:"relative",flexShrink:0}}>
            <div style={{width:96,height:96,borderRadius:18,background:`rgba(18,119,189,.18)`,border:`2px solid rgba(18,119,189,.35)`,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",fontSize:32,fontFamily:"'DM Mono',monospace",fontWeight:500,color:BL}}>
              {P.headshot?<img src={P.headshot} alt="headshot" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:P.handle.split("_").map(w=>w[0]).join("")}
            </div>
            {editing&&(
              <label style={{position:"absolute",bottom:-6,right:-6,width:26,height:26,borderRadius:8,background:BL,border:"2px solid "+NV,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:12}}>
                📷<input type="file" accept="image/*" style={{display:"none"}} onChange={e=>{const f=e.target.files[0];if(f){const r=new FileReader();r.onload=ev=>set("headshot",ev.target.result);r.readAsDataURL(f);}}}/>
              </label>
            )}
          </div>
          {/* Identity */}
          <div style={{flex:1,minWidth:260}}>
            <div style={{display:"flex",alignItems:"baseline",gap:"0.75rem",flexWrap:"wrap",marginBottom:"0.35rem"}}>
              {editing
                ?<TxtInput value={P.fullName} onChange={v=>set("fullName",v)} placeholder="Full Name"/>
                :<span style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:700}}>{P.fullName}</span>
              }
              <Mono c={`@${P.handle}`} s={11} col={BL}/>
            </div>
            <div style={{display:"flex",gap:"0.6rem",flexWrap:"wrap",marginBottom:"0.75rem",alignItems:"center"}}>
              <span style={{background:"rgba(18,119,189,.12)",border:"1px solid rgba(18,119,189,.25)",borderRadius:20,padding:"0.22rem 0.75rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:BL}}>✦ MEMBER</span>
              <span style={{background:"rgba(74,222,128,.1)",border:"1px solid rgba(74,222,128,.22)",borderRadius:20,padding:"0.22rem 0.75rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:"#4ade80"}}>● AVAILABLE</span>
              {P.certs.map(c=><span key={c} style={{background:"rgba(255,255,255,.06)",borderRadius:20,padding:"0.2rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:MU}}>{c}</span>)}
            </div>
            {editing
              ?<textarea value={P.bio} onChange={e=>set("bio",e.target.value)} rows={3} placeholder="Short pilot bio..." style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:13,fontWeight:300,padding:"0.65rem 0.9rem",resize:"vertical",outline:"none"}}/>
              :<p style={{fontSize:13,color:MU,lineHeight:1.8,maxWidth:640,margin:0}}>{P.bio}</p>
            }
          </div>
          {/* Quick stats */}
          <div style={{display:"flex",flexDirection:"column",gap:"0.6rem",minWidth:160}}>
            {[
              ["🌍",P.baseCode+" · "+P.base],
              ["✈",P.employer],
              ["⏱",(P.totalTime||0).toLocaleString()+" TT"],
              ["📋",P.medicalClass+"st Class · Exp "+P.medicalExpiry],
            ].map(([ic,txt])=>(
              <div key={ic} style={{display:"flex",alignItems:"center",gap:"0.55rem"}}>
                <span style={{fontSize:13,opacity:.7}}>{ic}</span>
                <Mono c={txt} s={10}/>
              </div>
            ))}
            <div style={{display:"flex",gap:"0.4rem",marginTop:"0.4rem"}}>
              {P.availDomestic&&<span style={{background:"rgba(255,255,255,.06)",borderRadius:20,padding:"0.18rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:MU}}>DOMESTIC</span>}
              {P.availIntl&&<span style={{background:"rgba(18,119,189,.1)",borderRadius:20,padding:"0.18rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:BL}}>INTL</span>}
            </div>
          </div>
          {/* Edit / Save buttons */}
          <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",alignSelf:"flex-start"}}>
            {editing?(
              <>
                <button onClick={saveEdit} style={{background:BL,color:WH,border:"none",padding:"0.6rem 1.4rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer",fontWeight:500,letterSpacing:"0.08em"}}>SAVE →</button>
                <button onClick={cancelEdit} style={{background:"none",color:MU,border:"1px solid rgba(255,255,255,.1)",padding:"0.55rem 1.2rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer"}}>CANCEL</button>
              </>
            ):(
              <button onClick={startEdit} style={{background:"rgba(255,255,255,.06)",color:WH,border:"1px solid rgba(255,255,255,.12)",padding:"0.6rem 1.4rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer",letterSpacing:"0.08em"}}>✎ EDIT PROFILE</button>
            )}
          </div>
        </div>
 
        {/* Tab bar */}
        <div style={{borderTop:"1px solid rgba(255,255,255,.06)",padding:"0 1.75rem",display:"flex",gap:"0",overflowX:"auto"}}>
          {tabs.map(([id,label])=>(
            <button key={id} onClick={()=>setActiveTab(id)} style={{background:"none",border:"none",borderBottom:`2px solid ${activeTab===id?BL:"transparent"}`,color:activeTab===id?WH:MU,padding:"0.85rem 1.1rem",fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.12em",cursor:"pointer",whiteSpace:"nowrap",transition:"all .15s"}}>{label}</button>
          ))}
        </div>
      </div>
 
      {/* ── TAB: OVERVIEW ──────────────────────── */}
      {activeTab==="overview"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}}>
          {/* Contact */}
          <SectionCard icon="📬" title="CONTACT & IDENTITY">
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem 1.5rem"}}>
              <FieldRow label="Citizenship">{editing?<TxtInput value={P.citizenship} onChange={v=>set("citizenship",v)}/>:<span style={{fontSize:13}}>{P.citizenship}</span>}</FieldRow>
              <FieldRow label="Work Auth">{editing?<TxtInput value={P.workAuth} onChange={v=>set("workAuth",v)}/>:<span style={{fontSize:13}}>{P.workAuth}</span>}</FieldRow>
              <FieldRow label="Passport Status">{editing
                ?<select value={P.passportStatus} onChange={e=>set("passportStatus",e.target.value)} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:13,padding:"0.62rem 0.9rem",outline:"none",width:"100%"}}>
                  <option value="valid">Valid</option><option value="expired">Expired</option><option value="pending">Pending Renewal</option>
                </select>
                :<span style={{fontSize:13,color:P.passportStatus==="valid"?"#4ade80":"#f87171"}}>{P.passportStatus==="valid"?"✓ Valid":P.passportStatus}</span>
              }</FieldRow>
              <FieldRow label="Passport Expiry">{editing?<TxtInput value={P.passportExpiry} onChange={v=>set("passportExpiry",v)} placeholder="YYYY-MM"/>:<span style={{fontSize:13}}>{P.passportExpiry}</span>}</FieldRow>
            </div>
            <FieldRow label="Contact Email">{editing?<TxtInput value={P.email} onChange={v=>set("email",v)} type="email"/>:<span style={{fontSize:13}}>{P.email}</span>}</FieldRow>
            <FieldRow label="Phone" hint={P.phonePublic?"(public)":"(private)"}>
              <div style={{display:"flex",gap:"0.75rem",alignItems:"center"}}>
                {editing?<TxtInput value={P.phone} onChange={v=>set("phone",v)} placeholder="+1 (555) 000-0000"/>:<span style={{fontSize:13}}>{P.phone||"—"}</span>}
                {editing&&<Toggle value={P.phonePublic} onChange={v=>set("phonePublic",v)} label="Public"/>}
              </div>
            </FieldRow>
            <FieldRow label="Availability">
              <div style={{display:"flex",gap:"0.5rem"}}>
                <Toggle value={P.availDomestic} onChange={editing?v=>set("availDomestic",v):()=>{}} label="Domestic"/>
                <Toggle value={P.availIntl} onChange={editing?v=>set("availIntl",v):()=>{}} label="International"/>
              </div>
            </FieldRow>
          </SectionCard>
 
          {/* Quick-view aircraft */}
          <SectionCard icon="✈" title="AIRCRAFT EXPERIENCE" accent>
            <div style={{marginBottom:"0.75rem",display:"flex",alignItems:"center",background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:9,padding:"0 0.75rem",gap:"0.5rem",height:38}}>
              <span style={{color:BL,fontSize:11}}>🔍</span>
              <input value={afSearch} onChange={e=>setAfSearch(e.target.value)} placeholder="Filter aircraft..." style={{background:"none",border:"none",outline:"none",color:WH,fontFamily:"inherit",fontSize:12,width:"100%"}}/>
            </div>
            {filteredAC.map((a,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.65rem 0",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
                <div>
                  <div style={{fontSize:13,fontWeight:500,marginBottom:2}}>{a.type}</div>
                  <Mono c={a.cat.toUpperCase()} s={8}/>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"0.6rem"}}>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:15,fontWeight:500,color:BL}}>{a.hours.toLocaleString()}</div>
                    <Mono c="HRS" s={8}/>
                  </div>
                  {editing&&<button onClick={()=>removeAircraft(i)} style={{background:"none",border:"1px solid rgba(255,87,87,.3)",borderRadius:6,color:"#f87171",fontSize:10,cursor:"pointer",padding:"0.2rem 0.45rem",fontFamily:"'DM Mono',monospace"}}>✕</button>}
                </div>
              </div>
            ))}
            <button onClick={()=>setActiveTab("aircraft")} style={{marginTop:"0.9rem",background:"none",border:"1px solid rgba(18,119,189,.25)",borderRadius:9,color:BL,padding:"0.45rem",width:"100%",fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer",letterSpacing:"0.1em"}}>MANAGE AIRCRAFT →</button>
          </SectionCard>
 
          {/* Hours snapshot */}
          <SectionCard icon="⏱" title="HOURS SNAPSHOT">
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}}>
              {hoursFields.map(([label,key])=>(
                <div key={key} style={{textAlign:"center",padding:"0.75rem 0.5rem",background:"rgba(255,255,255,.03)",borderRadius:10,border:"1px solid rgba(255,255,255,.06)"}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:18,fontWeight:500,color:key==="totalTime"?BL:WH,marginBottom:3}}>{(P[key]||0).toLocaleString()}</div>
                  <Mono c={label.toUpperCase()} s={8}/>
                </div>
              ))}
            </div>
          </SectionCard>
 
          {/* Availability types */}
          <SectionCard icon="📅" title="WORK AVAILABILITY">
            <FieldRow label="Available For">
              {editing?<TagSelect options={AVAIL_OPTIONS} value={P.availTypes} onChange={v=>set("availTypes",v)}/>
                :<div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>{P.availTypes.map(a=><span key={a} style={{background:"rgba(18,119,189,.12)",border:"1px solid rgba(18,119,189,.25)",borderRadius:20,padding:"0.22rem 0.8rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:BL}}>{a.toUpperCase()}</span>)}</div>
              }
            </FieldRow>
            <FieldRow label="Schedule Status">
              {editing?<select value={P.scheduleType} onChange={e=>set("scheduleType",e.target.value)} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:13,padding:"0.62rem 0.9rem",outline:"none",width:"100%"}}>{SCHED_OPTIONS.map(o=><option key={o} value={o}>{o}</option>)}</select>
                :<span style={{fontSize:13,color:P.scheduleType==="Available Now"?"#4ade80":WH}}>{P.scheduleType==="Available Now"?"● "+P.scheduleType:P.scheduleType}</span>
              }
            </FieldRow>
            <FieldRow label="Days Available / Month">
              {editing?<NumInput value={P.daysPerMonth} onChange={v=>set("daysPerMonth",v)} placeholder="0"/>:<span style={{fontSize:13}}>{P.daysPerMonth} days</span>}
            </FieldRow>
            <FieldRow label="Preferred Regions">
              {editing?<TagSelect options={REGION_OPTIONS} value={P.preferredRegions} onChange={v=>set("preferredRegions",v)}/>
                :<div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>{P.preferredRegions.map(r=><span key={r} style={{background:"rgba(255,255,255,.05)",borderRadius:20,padding:"0.2rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:MU}}>{r.toUpperCase()}</span>)}</div>
              }
            </FieldRow>
            <div style={{display:"flex",gap:"1.5rem",flexWrap:"wrap"}}>
              <Toggle value={P.willingReposition} onChange={editing?v=>set("willingReposition",v):()=>{}} label="Willing to reposition"/>
              <Toggle value={P.intlCapable} onChange={editing?v=>set("intlCapable",v):()=>{}} label="International capable"/>
            </div>
          </SectionCard>
        </div>
      )}
 
      {/* ── TAB: CREDENTIALS ─────────────────── */}
      {activeTab==="credentials"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}}>
          <SectionCard icon="📋" title="CERTIFICATES & RATINGS">
            <FieldRow label="Certificates Held">
              {editing?<TagSelect options={CERT_OPTIONS} value={P.certs} onChange={v=>set("certs",v)}/>
                :<div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>{P.certs.map(c=><span key={c} style={{background:"rgba(18,119,189,.1)",border:"1px solid rgba(18,119,189,.25)",borderRadius:20,padding:"0.24rem 0.85rem",fontFamily:"'DM Mono',monospace",fontSize:10,color:BL}}>{c}</span>)}</div>
              }
            </FieldRow>
            <FieldRow label="Ratings">
              {editing?<TagSelect options={RATING_OPTIONS} value={P.ratings} onChange={v=>set("ratings",v)}/>
                :<div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>{P.ratings.map(r=><span key={r} style={{background:"rgba(255,255,255,.06)",borderRadius:20,padding:"0.2rem 0.75rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:MU}}>{r.toUpperCase()}</span>)}</div>
              }
            </FieldRow>
            <FieldRow label="Type Ratings" hint="space separated when editing">
              {editing
                ?<TxtInput value={(P.typeRatings||[]).join(" ")} onChange={v=>set("typeRatings",v.split(" ").filter(Boolean))} placeholder="B737 CE-560XL ..."/>
                :<div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>{(P.typeRatings||[]).map(t=><span key={t} style={{background:"rgba(255,200,0,.08)",border:"1px solid rgba(255,200,0,.2)",borderRadius:20,padding:"0.24rem 0.85rem",fontFamily:"'DM Mono',monospace",fontSize:10,color:"#fbbf24"}}>{t}</span>)}</div>
              }
            </FieldRow>
          </SectionCard>
 
          <SectionCard icon="🏥" title="MEDICAL & LICENSE">
            <FieldRow label="Medical Class">
              {editing?<select value={P.medicalClass} onChange={e=>set("medicalClass",e.target.value)} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:13,padding:"0.62rem 0.9rem",outline:"none",width:"100%"}}>
                <option>First</option><option>Second</option><option>Third</option>
              </select>:<span style={{fontSize:13}}>{P.medicalClass} Class</span>}
            </FieldRow>
            <FieldRow label="Medical Expiry">
              {editing?<TxtInput value={P.medicalExpiry} onChange={v=>set("medicalExpiry",v)} placeholder="YYYY-MM"/>:<span style={{fontSize:13}}>{P.medicalExpiry}</span>}
            </FieldRow>
            <FieldRow label="FCC License">
              <Toggle value={P.fccLicense} onChange={editing?v=>set("fccLicense",v):()=>{}} label={P.fccLicense?"Held":"Not Held"}/>
            </FieldRow>
            <div style={{marginTop:"1rem",padding:"1rem",background:"rgba(18,119,189,.05)",border:"1px solid rgba(18,119,189,.15)",borderRadius:10}}>
              <Mono c="INTERNATIONAL ELIGIBILITY" s={9} col={BL} style={{display:"block",marginBottom:"0.5rem"}}/>
              <div style={{display:"flex",gap:"1.5rem",flexWrap:"wrap"}}>
                <div style={{fontSize:12,color:P.passportStatus==="valid"?"#4ade80":MU}}>{P.passportStatus==="valid"?"✓":"✗"} Valid Passport</div>
                <div style={{fontSize:12,color:P.fccLicense?"#4ade80":MU}}>{P.fccLicense?"✓":"✗"} FCC License</div>
                <div style={{fontSize:12,color:P.availIntl?"#4ade80":MU}}>{P.availIntl?"✓":"✗"} Intl Available</div>
              </div>
            </div>
          </SectionCard>
        </div>
      )}
 
      {/* ── TAB: HOURS ─────────────────────────── */}
      {activeTab==="hours"&&(
        <SectionCard icon="⏱" title="FLIGHT HOURS LOG">
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"1.2rem"}}>
            {hoursFields.map(([label,key])=>(
              <div key={key} style={{background:"rgba(255,255,255,.03)",border:`1px solid ${key==="totalTime"?"rgba(18,119,189,.3)":"rgba(255,255,255,.07)"}`,borderRadius:12,padding:"1.1rem"}}>
                <Mono c={label.toUpperCase()} s={9} col={key==="totalTime"?BL:MU} style={{display:"block",marginBottom:"0.6rem"}}/>
                {editing
                  ?<NumInput value={P[key]} onChange={v=>set(key,v)} placeholder="0"/>
                  :<div style={{fontFamily:"'DM Mono',monospace",fontSize:28,fontWeight:500,color:key==="totalTime"?BL:WH}}>{(P[key]||0).toLocaleString()}</div>
                }
              </div>
            ))}
          </div>
        </SectionCard>
      )}
 
      {/* ── TAB: AIRCRAFT ─────────────────────── */}
      {activeTab==="aircraft"&&(
        <SectionCard icon="✈" title="AIRCRAFT EXPERIENCE" accent>
          <div style={{display:"flex",alignItems:"center",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:11,padding:"0 1.2rem",gap:"0.7rem",height:44,marginBottom:"1.25rem"}}>
            <span style={{color:BL}}>🔍</span>
            <input value={afSearch} onChange={e=>setAfSearch(e.target.value)} placeholder="Filter by aircraft type..." style={{background:"none",border:"none",outline:"none",color:WH,fontFamily:"inherit",fontSize:13,fontWeight:300,width:"100%"}}/>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:1,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:12,overflow:"hidden",marginBottom:"1.5rem"}}>
            {filteredAC.map((a,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",padding:"1rem 1.2rem",borderBottom:"1px solid rgba(255,255,255,.04)",background:DK}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:500,marginBottom:2}}>{a.type}</div>
                  <Mono c={a.cat.toUpperCase()} s={9}/>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"1.25rem"}}>
                  <div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:22,fontWeight:500,color:BL,textAlign:"right"}}>{a.hours.toLocaleString()}</div>
                    <Mono c="FLIGHT HOURS" s={8} style={{display:"block",textAlign:"right"}}/>
                  </div>
                  {editing&&<button onClick={()=>removeAircraft(i)} style={{background:"rgba(248,113,113,.08)",border:"1px solid rgba(248,113,113,.3)",borderRadius:8,color:"#f87171",fontSize:11,cursor:"pointer",padding:"0.35rem 0.7rem",fontFamily:"'DM Mono',monospace"}}>REMOVE</button>}
                </div>
              </div>
            ))}
          </div>
          {editing&&(
            <div style={{background:"rgba(18,119,189,.05)",border:"1px solid rgba(18,119,189,.2)",borderRadius:12,padding:"1.25rem"}}>
              <Mono c="ADD AIRCRAFT" s={10} col={BL} style={{display:"block",marginBottom:"1rem"}}/>
              <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr auto",gap:"0.75rem",alignItems:"end"}}>
                <div>
                  <Mono c="AIRCRAFT TYPE" s={8} style={{display:"block",marginBottom:"0.35rem"}}/>
                  <TxtInput value={afNew.type} onChange={v=>setAfNew(p=>({...p,type:v}))} placeholder="Cessna Citation CJ3"/>
                </div>
                <div>
                  <Mono c="HOURS" s={8} style={{display:"block",marginBottom:"0.35rem"}}/>
                  <NumInput value={afNew.hours} onChange={v=>setAfNew(p=>({...p,hours:v}))} placeholder="0"/>
                </div>
                <div>
                  <Mono c="CATEGORY" s={8} style={{display:"block",marginBottom:"0.35rem"}}/>
                  <select value={afNew.cat} onChange={e=>setAfNew(p=>({...p,cat:e.target.value}))} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:12,padding:"0.6rem 0.7rem",outline:"none",width:"100%"}}>
                    {["Business Jet","Airliner","Turboprop","Piston","Helicopter","Military"].map(c=><option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <button onClick={addAircraft} style={{background:BL,color:WH,border:"none",borderRadius:9,padding:"0.62rem 1.2rem",fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer",whiteSpace:"nowrap"}}>+ ADD</button>
              </div>
            </div>
          )}
        </SectionCard>
      )}
 
      {/* ── TAB: AVAILABILITY ───────────────────── */}
      {activeTab==="availability"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}}>
          <SectionCard icon="📅" title="SCHEDULE & AVAILABILITY">
            <FieldRow label="Available For">
              {editing?<TagSelect options={AVAIL_OPTIONS} value={P.availTypes} onChange={v=>set("availTypes",v)}/>
                :<div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>{P.availTypes.map(a=><span key={a} style={{background:"rgba(18,119,189,.12)",border:"1px solid rgba(18,119,189,.25)",borderRadius:20,padding:"0.22rem 0.8rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:BL}}>{a.toUpperCase()}</span>)}</div>
              }
            </FieldRow>
            <FieldRow label="Schedule Status">
              {editing?<select value={P.scheduleType} onChange={e=>set("scheduleType",e.target.value)} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:13,padding:"0.62rem 0.9rem",outline:"none",width:"100%"}}>{SCHED_OPTIONS.map(o=><option key={o} value={o}>{o}</option>)}</select>
                :<span style={{fontSize:14,color:P.scheduleType==="Available Now"?"#4ade80":WH,fontWeight:500}}>{P.scheduleType==="Available Now"?"● "+P.scheduleType:P.scheduleType}</span>
              }
            </FieldRow>
            <FieldRow label="Days Available / Month">
              {editing?<NumInput value={P.daysPerMonth} onChange={v=>set("daysPerMonth",v)}/>:<span style={{fontSize:14,fontWeight:500}}>{P.daysPerMonth} days/month</span>}
            </FieldRow>
          </SectionCard>
          <SectionCard icon="🌍" title="GEOGRAPHIC FLEXIBILITY">
            <FieldRow label="Preferred Regions">
              {editing?<TagSelect options={REGION_OPTIONS} value={P.preferredRegions} onChange={v=>set("preferredRegions",v)}/>
                :<div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>{P.preferredRegions.map(r=><span key={r} style={{background:"rgba(255,255,255,.05)",borderRadius:20,padding:"0.2rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:MU}}>{r.toUpperCase()}</span>)}</div>
              }
            </FieldRow>
            <div style={{display:"flex",flexDirection:"column",gap:"0.85rem",marginTop:"0.5rem"}}>
              <Toggle value={P.willingReposition} onChange={editing?v=>set("willingReposition",v):()=>{}} label="Willing to reposition"/>
              <Toggle value={P.availDomestic} onChange={editing?v=>set("availDomestic",v):()=>{}} label="Available for domestic"/>
              <Toggle value={P.availIntl} onChange={editing?v=>set("availIntl",v):()=>{}} label="International capable"/>
              <Toggle value={P.intlCapable} onChange={editing?v=>set("intlCapable",v):()=>{}} label="International documents current"/>
            </div>
          </SectionCard>
        </div>
      )}
 
      {/* ── TAB: BACKGROUND ─────────────────────── */}
      {activeTab==="background"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}}>
          <SectionCard icon="💼" title="PROFESSIONAL BACKGROUND">
            <FieldRow label="Current Employer">
              {editing?<TxtInput value={P.employer} onChange={v=>set("employer",v)} placeholder="Airline or operator"/>:<span style={{fontSize:14,fontWeight:500}}>{P.employer}</span>}
            </FieldRow>
            <FieldRow label="Previous Operators" hint="one per line">
              {editing
                ?<textarea value={(P.prevOperators||[]).join("\n")} onChange={e=>set("prevOperators",e.target.value.split("\n").filter(Boolean))} rows={4} placeholder="NetJets&#10;Delta Air Lines&#10;USAF" style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:13,fontWeight:300,padding:"0.65rem 0.9rem",resize:"vertical",outline:"none"}}/>
                :<div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>{(P.prevOperators||[]).map((o,i)=><div key={i} style={{fontSize:13,padding:"0.5rem 0.75rem",background:"rgba(255,255,255,.03)",borderRadius:8,borderLeft:"2px solid rgba(18,119,189,.3)"}}>{o}</div>)}</div>
              }
            </FieldRow>
            <FieldRow label="Flying Background">
              {editing?<TagSelect options={BG_OPTIONS} value={P.background} onChange={v=>set("background",v)}/>
                :<div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>{P.background.map(b=><span key={b} style={{background:"rgba(255,255,255,.06)",borderRadius:20,padding:"0.2rem 0.7rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:MU}}>{b.toUpperCase()}</span>)}</div>
              }
            </FieldRow>
          </SectionCard>
 
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            {/* Resume */}
            <SectionCard icon="📄" title="RESUME">
              {P.resumeFile
                ?<div style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.9rem",background:"rgba(74,222,128,.06)",border:"1px solid rgba(74,222,128,.2)",borderRadius:10}}>
                  <span style={{fontSize:22}}>📄</span>
                  <div style={{flex:1}}><div style={{fontSize:13,fontWeight:500,marginBottom:2}}>{P.resumeFile}</div><Mono c="PDF UPLOADED" s={9} col="#4ade80"/></div>
                  {editing&&<button onClick={()=>set("resumeFile",null)} style={{background:"none",border:"1px solid rgba(248,113,113,.3)",borderRadius:7,color:"#f87171",fontSize:10,cursor:"pointer",padding:"0.28rem 0.6rem",fontFamily:"'DM Mono',monospace"}}>REMOVE</button>}
                </div>
                :<label style={{display:"block",cursor:"pointer"}}>
                  <div style={{border:"1px dashed rgba(18,119,189,.35)",borderRadius:12,padding:"2rem",textAlign:"center",background:"rgba(18,119,189,.04)",transition:"background .2s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(18,119,189,.08)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(18,119,189,.04)"}>
                    <div style={{fontSize:32,marginBottom:"0.75rem"}}>📤</div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:BL,letterSpacing:"0.12em",marginBottom:"0.35rem"}}>UPLOAD RESUME PDF</div>
                    <div style={{fontSize:11,color:MU}}>PDF required · Max 5MB</div>
                  </div>
                  <input type="file" accept=".pdf" style={{display:"none"}} onChange={e=>{if(e.target.files[0])set("resumeFile",e.target.files[0].name);}}/>
                </label>
              }
            </SectionCard>
 
            {/* References */}
            <SectionCard icon="🤝" title="REFERENCES">
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
                <span style={{fontSize:12,color:MU}}>{P.refsVisible?"Visible to operators":"Hidden until requested"}</span>
                <Toggle value={P.refsVisible} onChange={editing?v=>set("refsVisible",v):()=>{}} label={P.refsVisible?"Public":"Private"}/>
              </div>
              {(P.refs||[]).map((ref,i)=>(
                <div key={i} style={{padding:"0.85rem",background:"rgba(255,255,255,.03)",borderRadius:10,border:"1px solid rgba(255,255,255,.06)",marginBottom:"0.6rem"}}>
                  <div style={{fontSize:13,fontWeight:500,marginBottom:2}}>{ref.name}</div>
                  <div style={{fontSize:12,color:MU,marginBottom:4}}>{ref.title}</div>
                  <Mono c={ref.contact} s={9}/>
                  {editing&&<button onClick={()=>set("refs",P.refs.filter((_,ri)=>ri!==i))} style={{marginTop:"0.5rem",background:"none",border:"none",color:"rgba(248,113,113,.7)",fontSize:11,cursor:"pointer",fontFamily:"'DM Mono',monospace",padding:0}}>✕ REMOVE</button>}
                </div>
              ))}
              {editing&&(
                <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.07)",borderRadius:10,padding:"1rem",marginTop:"0.5rem"}}>
                  <Mono c="ADD REFERENCE" s={9} style={{display:"block",marginBottom:"0.75rem"}}/>
                  <TxtInput value={refNew.name} onChange={v=>setRefNew(p=>({...p,name:v}))} placeholder="Full Name"/>
                  <div style={{height:"0.5rem"}}/>
                  <TxtInput value={refNew.title} onChange={v=>setRefNew(p=>({...p,title:v}))} placeholder="Title / Organization"/>
                  <div style={{height:"0.5rem"}}/>
                  <TxtInput value={refNew.contact} onChange={v=>setRefNew(p=>({...p,contact:v}))} placeholder="Contact info or 'available on request'"/>
                  <button onClick={addRef} style={{marginTop:"0.75rem",background:BL,color:WH,border:"none",borderRadius:9,padding:"0.5rem 1.2rem",fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer"}}>+ ADD REFERENCE</button>
                </div>
              )}
            </SectionCard>
          </div>
        </div>
      )}
    </div>
  );
}


function OperatorProfile({nav}){
  const [operator,setOperator]=useState(INIT_OPERATOR);
  const [editing,setEditing]=useState(false);
  const [draft,setDraft]=useState(null);
  const [fleetNew,setFleetNew]=useState({type:"",count:"",cat:"Business Jet",typeCode:""});
  const [posNew,setPosNew]=useState({title:"",typeCode:"",schedule:"Contract",minHours:"",minPIC:"",pay:"",status:"Open"});
  const [saveFlash,setSaveFlash]=useState(false);
  const O=editing?draft:operator;
  const set=(k,v)=>setDraft(d=>({...d,[k]:v}));
  const startEdit=()=>{setDraft(JSON.parse(JSON.stringify(operator)));setEditing(true);};
  const cancelEdit=()=>{setDraft(null);setEditing(false);};
  const saveEdit=()=>{setOperator(draft);setDraft(null);setEditing(false);setSaveFlash(true);setTimeout(()=>setSaveFlash(false),2200);};
  const addFleet=()=>{
    if(!fleetNew.type||!fleetNew.count) return;
    set('fleet',[...(O.fleet||[]),{type:fleetNew.type,count:Number(fleetNew.count),cat:fleetNew.cat,typeCode:fleetNew.typeCode||fleetNew.type}]);
    setFleetNew({type:"",count:"",cat:"Business Jet",typeCode:""});
  };
  const addPosition=()=>{
    if(!posNew.title||!posNew.typeCode) return;
    set('positions',[...(O.positions||[]),{...posNew,minHours:Number(posNew.minHours)||0,minPIC:Number(posNew.minPIC)||0}]);
    setPosNew({title:"",typeCode:"",schedule:"Contract",minHours:"",minPIC:"",pay:"",status:"Open"});
  };

  return (
    <div style={{maxWidth:1100,margin:"0 auto",padding:"3rem 2rem"}}>
      {saveFlash&&(
        <div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",background:"rgba(74,222,128,.12)",border:"1px solid rgba(74,222,128,.35)",borderRadius:9,padding:"0.65rem 1.5rem",zIndex:999,display:"flex",alignItems:"center",gap:"0.6rem"}}>
          <span style={{color:"#4ade80",fontSize:14}}>✓</span>
          <Mono c="OPERATOR PROFILE SAVED" s={11} col="#4ade80"/>
        </div>
      )}

      <div style={{background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:20,overflow:"hidden",marginBottom:"2rem"}}>
        <div style={{height:8,background:"linear-gradient(90deg,#f59e0b 0%, rgba(245,158,11,.2) 100%)"}}/>
        <div style={{padding:"2rem",display:"flex",alignItems:"flex-start",gap:"1.75rem",flexWrap:"wrap"}}>
          <div style={{position:"relative",flexShrink:0}}>
            <div style={{width:96,height:96,borderRadius:18,background:"rgba(245,158,11,.15)",border:"2px solid rgba(245,158,11,.3)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",fontSize:28,fontFamily:"'DM Mono',monospace",fontWeight:700,color:"#f59e0b"}}>
              {O.logo?<img src={O.logo} alt="logo" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:(O.companyName||'OP').split(/\s+/).slice(0,2).map(w=>w[0]).join('')}
            </div>
            {editing&&(
              <label style={{position:"absolute",bottom:-6,right:-6,width:26,height:26,borderRadius:8,background:"#f59e0b",border:"2px solid "+NV,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:12}}>
                📷<input type="file" accept="image/*" style={{display:"none"}} onChange={e=>{const f=e.target.files[0];if(f){const r=new FileReader();r.onload=ev=>set("logo",ev.target.result);r.readAsDataURL(f);}}}/>
              </label>
            )}
          </div>
          <div style={{flex:1,minWidth:260}}>
            <div style={{display:"flex",alignItems:"baseline",gap:"0.75rem",flexWrap:"wrap",marginBottom:"0.35rem"}}>
              {editing?<TxtInput value={O.companyName} onChange={v=>set('companyName',v)} placeholder="Company Name"/>:<span style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:700}}>{O.companyName}</span>}
              <Mono c={`@${O.handle}`} s={11} col="#f59e0b"/>
            </div>
            <div style={{display:"flex",gap:"0.6rem",flexWrap:"wrap",marginBottom:"0.75rem",alignItems:"center"}}>
              {O.verified&&<span style={{background:"rgba(245,158,11,.12)",border:"1px solid rgba(245,158,11,.28)",borderRadius:20,padding:"0.22rem 0.75rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:"#f59e0b"}}>✓ VERIFIED OPERATOR</span>}
              {(O.operatingCerts||[]).map(c=><span key={c} style={{background:"rgba(255,255,255,.06)",borderRadius:20,padding:"0.2rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:MU}}>{c}</span>)}
              {(O.opsType||[]).map(c=><span key={c} style={{background:"rgba(255,255,255,.04)",borderRadius:20,padding:"0.2rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:MU}}>{c}</span>)}
            </div>
            {editing?<textarea value={O.about} onChange={e=>set('about',e.target.value)} rows={3} placeholder="About your operation..." style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:13,fontWeight:300,padding:"0.65rem 0.9rem",resize:"vertical",outline:"none"}}/>:<p style={{fontSize:13,color:MU,lineHeight:1.8,maxWidth:640,margin:0}}>{O.about}</p>}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"0.6rem",minWidth:180}}>
            {[["🌍",(O.baseCode||'')+" · "+(O.base||'')],["🕒","Founded "+(O.founded||'—')],["✈",String((O.fleet||[]).reduce((a,b)=>a+(Number(b.count)||0),0))+" aircraft"],["📬",O.contactTitle||'Operations']].map(([ic,txt])=>(<div key={ic} style={{display:"flex",alignItems:"center",gap:"0.55rem"}}><span style={{fontSize:13,opacity:.7}}>{ic}</span><Mono c={txt} s={10}/></div>))}
            <div style={{display:"flex",gap:"0.4rem",marginTop:"0.4rem"}}>
              {O.intlOps&&<span style={{background:"rgba(18,119,189,.1)",borderRadius:20,padding:"0.18rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:BL}}>INTL OPS</span>}
              {O.drugTestReq&&<span style={{background:"rgba(255,255,255,.06)",borderRadius:20,padding:"0.18rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:MU}}>DRUG TEST</span>}
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",alignSelf:"flex-start"}}>
            {editing?(<><button onClick={saveEdit} style={{background:"#f59e0b",color:"#0b0f1a",border:"none",padding:"0.6rem 1.4rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer",fontWeight:700,letterSpacing:"0.08em"}}>SAVE →</button><button onClick={cancelEdit} style={{background:"none",color:MU,border:"1px solid rgba(255,255,255,.1)",padding:"0.55rem 1.2rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer"}}>CANCEL</button></>):(<button onClick={startEdit} style={{background:"rgba(255,255,255,.06)",color:WH,border:"1px solid rgba(255,255,255,.12)",padding:"0.6rem 1.4rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer",letterSpacing:"0.08em"}}>✎ EDIT OPERATOR</button>)}
          </div>
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}}>
        <SectionCard icon="🏢" title="COMPANY DETAILS" accent>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem 1.5rem"}}>
            <FieldRow label="Website">{editing?<TxtInput value={O.website} onChange={v=>set('website',v)} placeholder="Website"/>:<span style={{fontSize:13}}>{O.website}</span>}</FieldRow>
            <FieldRow label="Founded">{editing?<TxtInput value={O.founded} onChange={v=>set('founded',v)} placeholder="Year"/>:<span style={{fontSize:13}}>{O.founded}</span>}</FieldRow>
            <FieldRow label="Home Base">{editing?<TxtInput value={O.base} onChange={v=>set('base',v)} placeholder="City, State"/>:<span style={{fontSize:13}}>{O.base}</span>}</FieldRow>
            <FieldRow label="Base Code">{editing?<TxtInput value={O.baseCode} onChange={v=>set('baseCode',v)} placeholder="ICT" mono/>:<span style={{fontSize:13}}>{O.baseCode}</span>}</FieldRow>
          </div>
          <FieldRow label="Operation Types">{editing?<TagSelect options={OPS_TYPE_OPTIONS} value={O.opsType||[]} onChange={v=>set('opsType',v)}/>:<div style={{display:'flex',flexWrap:'wrap',gap:'0.45rem'}}>{(O.opsType||[]).map(v=><Pill key={v}>{v}</Pill>)}</div>}</FieldRow>
          <FieldRow label="Operating Certificates">{editing?<TagSelect options={CERT_OPS_OPTIONS} value={O.operatingCerts||[]} onChange={v=>set('operatingCerts',v)}/>:<div style={{display:'flex',flexWrap:'wrap',gap:'0.45rem'}}>{(O.operatingCerts||[]).map(v=><Pill key={v}>{v}</Pill>)}</div>}</FieldRow>
          <FieldRow label="Base Airports">{editing?<TxtInput value={(O.baseAirports||[]).join(', ')} onChange={v=>set('baseAirports',v.split(',').map(s=>s.trim()).filter(Boolean))} placeholder="ICT, MCI, TUL" mono/>:<span style={{fontSize:13}}>{(O.baseAirports||[]).join(', ')}</span>}</FieldRow>
        </SectionCard>

        <SectionCard icon="📬" title="CONTACT & REQUIREMENTS">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem 1.5rem"}}>
            <FieldRow label="Contact Name">{editing?<TxtInput value={O.contactName} onChange={v=>set('contactName',v)}/>:<span style={{fontSize:13}}>{O.contactName}</span>}</FieldRow>
            <FieldRow label="Contact Title">{editing?<TxtInput value={O.contactTitle} onChange={v=>set('contactTitle',v)}/>:<span style={{fontSize:13}}>{O.contactTitle}</span>}</FieldRow>
            <FieldRow label="Email">{editing?<TxtInput value={O.email} onChange={v=>set('email',v)} type="email"/>:<span style={{fontSize:13}}>{O.email}</span>}</FieldRow>
            <FieldRow label="Phone">{editing?<TxtInput value={O.phone} onChange={v=>set('phone',v)}/>:<span style={{fontSize:13}}>{O.phone}</span>}</FieldRow>
          </div>
          <FieldRow label="Preferred Backgrounds">{editing?<TagSelect options={BG_OPTIONS} value={O.preferredBg||[]} onChange={v=>set('preferredBg',v)}/>:<div style={{display:'flex',flexWrap:'wrap',gap:'0.45rem'}}>{(O.preferredBg||[]).map(v=><Pill key={v}>{v}</Pill>)}</div>}</FieldRow>
          <FieldRow label="Preferred Certificates">{editing?<TagSelect options={CERT_OPTIONS} value={O.preferredCerts||[]} onChange={v=>set('preferredCerts',v)}/>:<div style={{display:'flex',flexWrap:'wrap',gap:'0.45rem'}}>{(O.preferredCerts||[]).map(v=><Pill key={v}>{v}</Pill>)}</div>}</FieldRow>
          <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
            <Toggle value={!!O.intlOps} onChange={editing?v=>set('intlOps',v):()=>{}} label="International Ops"/>
            <Toggle value={!!O.drugTestReq} onChange={editing?v=>set('drugTestReq',v):()=>{}} label="Drug Test Required"/>
            <Toggle value={!!O.backgroundCheckReq} onChange={editing?v=>set('backgroundCheckReq',v):()=>{}} label="Background Check"/>
            <Toggle value={!!O.verified} onChange={editing?v=>set('verified',v):()=>{}} label="Verified"/>
          </div>
        </SectionCard>

        <SectionCard icon="🛩" title="FLEET">
          {(O.fleet||[]).map((f,i)=>(<div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.75rem 0',borderBottom:'1px solid rgba(255,255,255,.05)'}}><div><div style={{fontSize:13,fontWeight:500}}>{f.type}</div><Mono c={`${f.typeCode} · ${f.cat}`} s={9}/></div><div style={{display:'flex',alignItems:'center',gap:'0.6rem'}}><div style={{fontFamily:"'DM Mono',monospace",fontSize:16,color:'#f59e0b'}}>×{f.count}</div>{editing&&<button onClick={()=>set('fleet',O.fleet.filter((_,fi)=>fi!==i))} style={{background:'none',border:'1px solid rgba(255,87,87,.3)',borderRadius:6,color:'#f87171',fontSize:10,cursor:'pointer',padding:'0.2rem 0.45rem',fontFamily:"'DM Mono',monospace"}}>✕</button>}</div></div>))}
          {editing&&<div style={{background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.07)',borderRadius:10,padding:'1rem',marginTop:'0.75rem'}}><Mono c="ADD AIRCRAFT" s={9} style={{display:'block',marginBottom:'0.75rem'}}/><TxtInput value={fleetNew.type} onChange={v=>setFleetNew(p=>({...p,type:v}))} placeholder="Aircraft name"/><div style={{height:'0.5rem'}}/><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5rem'}}><TxtInput value={fleetNew.typeCode} onChange={v=>setFleetNew(p=>({...p,typeCode:v}))} placeholder="Type code" mono/><NumInput value={fleetNew.count} onChange={v=>setFleetNew(p=>({...p,count:v}))} placeholder="Count"/></div><div style={{height:'0.5rem'}}/><TagSelect options={AC_CATS_OP} value={[fleetNew.cat]} onChange={v=>setFleetNew(p=>({...p,cat:v[v.length-1]||p.cat}))}/><button onClick={addFleet} style={{marginTop:'0.75rem',background:'#f59e0b',color:'#0b0f1a',border:'none',borderRadius:9,padding:'0.5rem 1.2rem',fontFamily:"'DM Mono',monospace",fontSize:10,cursor:'pointer',fontWeight:700}}>+ ADD AIRCRAFT</button></div>}
        </SectionCard>

        <SectionCard icon="📌" title="OPEN POSITIONS">
          {(O.positions||[]).map((p,i)=>(<div key={i} style={{padding:'0.9rem',background:'rgba(255,255,255,.03)',borderRadius:10,border:'1px solid rgba(255,255,255,.06)',marginBottom:'0.6rem'}}><div style={{display:'flex',justifyContent:'space-between',gap:'1rem',alignItems:'flex-start'}}><div><div style={{fontSize:13,fontWeight:600,marginBottom:4}}>{p.title}</div><Mono c={`${p.typeCode} · ${p.schedule}`} s={9}/><div style={{fontSize:12,color:MU,marginTop:6}}>Min TT {Number(p.minHours||0).toLocaleString()} · Min PIC {Number(p.minPIC||0).toLocaleString()} · {p.pay}</div></div><div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}><span style={{background:p.status==='Open'?'rgba(74,222,128,.12)':'rgba(255,255,255,.06)',border:'1px solid '+(p.status==='Open'?'rgba(74,222,128,.28)':'rgba(255,255,255,.1)'),borderRadius:20,padding:'0.18rem 0.65rem',fontFamily:"'DM Mono',monospace",fontSize:8,color:p.status==='Open'?'#4ade80':MU}}>{p.status.toUpperCase()}</span>{editing&&<button onClick={()=>set('positions',O.positions.filter((_,pi)=>pi!==i))} style={{background:'none',border:'1px solid rgba(255,87,87,.3)',borderRadius:6,color:'#f87171',fontSize:10,cursor:'pointer',padding:'0.2rem 0.45rem',fontFamily:"'DM Mono',monospace"}}>✕</button>}</div></div></div>))}
          {editing&&<div style={{background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.07)',borderRadius:10,padding:'1rem',marginTop:'0.75rem'}}><Mono c="ADD POSITION" s={9} style={{display:'block',marginBottom:'0.75rem'}}/><TxtInput value={posNew.title} onChange={v=>setPosNew(p=>({...p,title:v}))} placeholder="Position title"/><div style={{height:'0.5rem'}}/><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5rem'}}><TxtInput value={posNew.typeCode} onChange={v=>setPosNew(p=>({...p,typeCode:v}))} placeholder="Type code" mono/><TagSelect options={SCHEDULE_OPTIONS_OP} value={[posNew.schedule]} onChange={v=>setPosNew(p=>({...p,schedule:v[v.length-1]||p.schedule}))}/></div><div style={{height:'0.5rem'}}/><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5rem'}}><NumInput value={posNew.minHours} onChange={v=>setPosNew(p=>({...p,minHours:v}))} placeholder="Min TT"/><NumInput value={posNew.minPIC} onChange={v=>setPosNew(p=>({...p,minPIC:v}))} placeholder="Min PIC"/></div><div style={{height:'0.5rem'}}/><TxtInput value={posNew.pay} onChange={v=>setPosNew(p=>({...p,pay:v}))} placeholder="Pay range / day rate"/><div style={{height:'0.5rem'}}/><TagSelect options={POSITION_STATUS_OPTIONS} value={[posNew.status]} onChange={v=>setPosNew(p=>({...p,status:v[v.length-1]||p.status}))}/><button onClick={addPosition} style={{marginTop:'0.75rem',background:'#f59e0b',color:'#0b0f1a',border:'none',borderRadius:9,padding:'0.5rem 1.2rem',fontFamily:"'DM Mono',monospace",fontSize:10,cursor:'pointer',fontWeight:700}}>+ ADD POSITION</button></div>}
        </SectionCard>
      </div>
    </div>
  );
}

export default function ProfilePageContainer({ nav }) {
  const [profileMode, setProfileMode] = useState("pilot");
  return (
    <div>
      <div style={{background:ST,borderBottom:"1px solid rgba(255,255,255,.06)",padding:"0.85rem 2rem"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",gap:"1rem"}}>
          <Mono c="PROFILE VIEW:" s={9}/>
          <div style={{display:"inline-flex",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:3,gap:3}}>
            {[["pilot","✈ PILOT PROFILE"],["operator","🏢 OPERATOR PROFILE"]].map(([id,label])=>(
              <button key={id} onClick={()=>setProfileMode(id)} style={{background:profileMode===id?(id==="operator"?"#f59e0b":BL):"transparent",color:profileMode===id?(id==="operator"?"#0b0f1a":WH):MU,border:"none",borderRadius:5,padding:"0.38rem 1rem",fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:"0.1em",cursor:"pointer",transition:"all .15s",fontWeight:profileMode===id?700:400}}>{label}</button>
            ))}
          </div>
          <Mono c={profileMode==="pilot"?"Visible to operators searching the network":"Visible to pilots applying for your positions"} s={9}/>
        </div>
      </div>
      {profileMode==="pilot" ? <ProfilePage nav={nav}/> : <OperatorProfile nav={nav}/>}
    </div>
  );
}
