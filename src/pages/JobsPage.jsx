import React, { useState } from "react";
import { BL, NV, DK, ST, MU, WH, JOBS, JOB_AF_FILTERS, BLANK_JOB, ME } from "../shared/data";
import { Mono, Pill, ImgCard } from "../shared/ui";

/* ─── JOB EXPIRATION ─────────────────────────────────── */

function isJobActive(job){
  if(!job.date) return true;
  const jobDate=new Date(job.date);
  if(isNaN(jobDate)) return true;
  const expire=new Date(jobDate);
  expire.setDate(expire.getDate()-1);
  const today=new Date();
  today.setHours(0,0,0,0);
  return today<expire;
}

/* ─── EMAIL APPLICATION ──────────────────────────────── */

function applyToJob(job){
  const subject=`Application – ${job.title} (${job.operator||job.company||"Operator"})`;
  const body=`Hello,

I am interested in the ${job.title} position posted on PilotsPassport.com.

PILOT INFORMATION
─────────────────
Name: ${ME.name||ME.handle}
Airline: ${ME.airline}
Base: ${ME.base}
Rank: ${ME.rank}
Aircraft: ${ME.airframe||"N/A"}
Flight Hours: ${ME.hours||"N/A"}

CONTACT
─────────────────
Phone: ${ME.phone||"N/A"}
Email: ${ME.email||"N/A"}

Pilots Passport Profile
https://pilotspassport.app/p/${ME.handle}

Please let me know if any additional information is needed.

Best regards,
${ME.name||ME.handle}`

"Pilots Passport is the largest online gathering of pro pilots. Join today: PilotsPassport.com";

  const email=job.contact||job.email||"";
  if(email){
    window.location.href=`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

/* ─── POST JOB MODAL ─────────────────────────────────── */

function PostJobModal({onClose,onPost}){
  const [form,setForm]=useState({...BLANK_JOB});
  const [step,setStep]=useState(1);
  const [posted,setPosted]=useState(false);
  const f=(k,v)=>setForm(p=>({...p,[k]:v}));
  const AM="#f59e0b";

  const handlePost=()=>{
    if(!form.title||!form.aircraft||!form.dep)return;
    onPost({...form,id:"u"+Date.now(),ttHours:Number(form.ttHours)||0,typeHours:Number(form.typeHours)||0,posted:"just now",status:"open",img:"https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80"});
    setPosted(true);
  };

  const inputStyle={width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:13,fontWeight:300,padding:"0.62rem 0.9rem",outline:"none",boxSizing:"border-box"};
  const LabelRow=({label,children})=>(
    <div>
      <Mono c={label} s={8} style={{display:"block",marginBottom:"0.35rem"}}/>
      {children}
    </div>
  );

  const steps=[["1","DETAILS"],["2","REQUIREMENTS"],["3","PREVIEW"]];

  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.88)",backdropFilter:"blur(16px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",overflowY:"auto"}}>
      <div style={{background:ST,border:"1px solid rgba(255,255,255,.1)",borderRadius:16,width:"100%",maxWidth:600,position:"relative",overflow:"hidden"}}>
        <div style={{height:4,background:`linear-gradient(90deg,${AM} 0%,${BL} 100%)`}}/>

        {posted?(
          <div style={{padding:"3rem 2rem",textAlign:"center"}}>
            <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(74,222,128,.1)",border:"2px solid #4ade80",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,margin:"0 auto 1.5rem"}}>✓</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:700,marginBottom:"0.5rem"}}>Job Posted.</div>
            <Mono c="NOW LIVE ON THE JOB BOARD" s={10} col="#4ade80" style={{display:"block",marginBottom:"1.25rem"}}/>
            <p style={{color:MU,fontSize:13,lineHeight:1.8,marginBottom:"2rem",maxWidth:380,margin:"0 auto 2rem"}}>Your posting is live. Pilots can now view and apply. You'll receive applications in your Inbox.</p>
            <button onClick={onClose} style={{background:BL,color:WH,border:"none",padding:"0.8rem 2.5rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",letterSpacing:"0.1em",fontWeight:500}}>VIEW JOB BOARD →</button>
          </div>
        ):(
          <>
            <div style={{padding:"1.5rem 1.75rem 1.25rem",borderBottom:"1px solid rgba(255,255,255,.07)"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"0.25rem"}}>
                    <span style={{fontSize:18}}>📋</span>
                    <span style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700}}>Post a Job</span>
                  </div>
                  <Mono c="PILOTS PASSPORT JOB BOARD · FREE FOR VERIFIED OPERATORS" s={9}/>
                </div>
                <button onClick={onClose} style={{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,color:MU,fontSize:18,cursor:"pointer",width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}>×</button>
              </div>
              <div style={{display:"flex",gap:"0.35rem",alignItems:"center"}}>
                {steps.map(([n,label],i)=>(
                  <div key={n} style={{display:"flex",alignItems:"center",gap:"0.35rem"}}>
                    <div style={{width:24,height:24,borderRadius:"50%",background:step>i?BL:step===i+1?"rgba(18,119,189,.2)":"rgba(255,255,255,.06)",border:`1px solid ${step>=i+1?"rgba(18,119,189,.5)":"rgba(255,255,255,.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Mono',monospace",fontSize:9,color:step>i?WH:step===i+1?BL:MU,fontWeight:600}}>{step>i+1?"✓":n}</div>
                    <Mono c={label} s={8} col={step===i+1?WH:MU}/>
                    {i<steps.length-1&&<div style={{width:24,height:1,background:"rgba(255,255,255,.1)",margin:"0 0.2rem"}}/>}
                  </div>
                ))}
              </div>
            </div>

            {step===1&&(
              <div style={{padding:"1.5rem 1.75rem"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"}}>
                  <div style={{gridColumn:"1/-1"}}>
                    <LabelRow label="JOB TITLE *">
                      <input value={form.title} onChange={e=>f("title",e.target.value)} placeholder="e.g. Contract Citation XLS Captain" style={inputStyle}/>
                    </LabelRow>
                  </div>
                  <LabelRow label="AIRCRAFT TYPE *">
                    <input value={form.aircraft} onChange={e=>f("aircraft",e.target.value)} placeholder="e.g. Cessna Citation XLS" style={inputStyle}/>
                  </LabelRow>
                  <LabelRow label="AIRFRAME CATEGORY">
                    <select value={form.airframe} onChange={e=>f("airframe",e.target.value)} style={{...inputStyle,cursor:"pointer"}}>
                      {JOB_AF_FILTERS.filter(x=>x.id!=="All").map(x=><option key={x.id} value={x.id}>{x.label}</option>)}
                    </select>
                  </LabelRow>
                  <LabelRow label="DEPARTURE BASE *">
                    <input value={form.dep} onChange={e=>f("dep",e.target.value.toUpperCase())} placeholder="KSNA" maxLength={6} style={inputStyle}/>
                  </LabelRow>
                  <LabelRow label="DATE / PERIOD">
                    <input value={form.date} onChange={e=>f("date",e.target.value)} placeholder="e.g. March 18–20" style={inputStyle}/>
                  </LabelRow>
                  <LabelRow label="PAY">
                    <input value={form.pay} onChange={e=>f("pay",e.target.value)} placeholder="e.g. $1,200/day" style={inputStyle}/>
                  </LabelRow>
                  <LabelRow label="YOUR CONTACT / EMAIL">
                    <input value={form.contact} onChange={e=>f("contact",e.target.value)} placeholder="ops@yourcompany.com" style={inputStyle}/>
                  </LabelRow>
                  <div style={{gridColumn:"1/-1"}}>
                    <LabelRow label="DESCRIPTION">
                      <textarea value={form.desc} onChange={e=>f("desc",e.target.value)} rows={4} placeholder="Describe the trip, operation, expectations, and what makes this a great gig..." style={{...inputStyle,resize:"vertical"}}/>
                    </LabelRow>
                  </div>
                </div>
                <div style={{display:"flex",gap:"0.65rem",alignItems:"center",padding:"0.9rem 1.1rem",background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:10}}>
                  <button onClick={()=>f("hotel",!form.hotel)} style={{display:"inline-flex",alignItems:"center",gap:"0.55rem",background:"none",border:"none",cursor:"pointer",padding:0}}>
                    <div style={{width:36,height:20,borderRadius:10,background:form.hotel?BL:"rgba(255,255,255,.1)",position:"relative",transition:"background .2s",flexShrink:0}}>
                      <div style={{width:14,height:14,borderRadius:"50%",background:WH,position:"absolute",top:3,left:form.hotel?19:3,transition:"left .2s"}}/>
                    </div>
                    <span style={{fontSize:13,color:form.hotel?WH:MU}}>🏨 Hotel Included</span>
                  </button>
                </div>
              </div>
            )}

            {step===2&&(
              <div style={{padding:"1.5rem 1.75rem"}}>
                <div style={{background:"rgba(18,119,189,.05)",border:"1px solid rgba(18,119,189,.15)",borderRadius:10,padding:"0.9rem 1.1rem",marginBottom:"1.25rem",fontSize:12,color:MU,lineHeight:1.7}}>
                  These requirements help pilots self-qualify before applying — saving you time reviewing unqualified candidates.
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1.25rem"}}>
                  <div>
                    <Mono c="MIN TOTAL TIME (HRS)" s={8} style={{display:"block",marginBottom:"0.35rem"}}/>
                    <input type="number" value={form.ttHours} onChange={e=>f("ttHours",e.target.value)} placeholder="e.g. 1500" style={inputStyle}/>
                  </div>
                  <div>
                    <Mono c="MIN TIME IN TYPE (HRS)" s={8} style={{display:"block",marginBottom:"0.35rem"}}/>
                    <input type="number" value={form.typeHours} onChange={e=>f("typeHours",e.target.value)} placeholder="e.g. 250" style={inputStyle}/>
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
                  {[["typeRating","Type Rating Required","Applicant must hold a current type rating for this aircraft"],["hotel","Hotel / Per Diem Included","Accommodation and expenses are covered for this trip"]].map(([key,label,sub])=>(
                    <button key={key} onClick={()=>f(key,!form[key])} style={{display:"flex",alignItems:"center",gap:"0.85rem",padding:"1rem 1.1rem",background:form[key]?"rgba(18,119,189,.07)":"rgba(255,255,255,.03)",border:`1px solid ${form[key]?"rgba(18,119,189,.3)":"rgba(255,255,255,.08)"}`,borderRadius:10,cursor:"pointer",textAlign:"left",transition:"all .15s"}}>
                      <div style={{width:22,height:22,borderRadius:6,background:form[key]?BL:"rgba(255,255,255,.06)",border:`1px solid ${form[key]?"transparent":"rgba(255,255,255,.15)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:11,color:WH}}>{form[key]?"✓":""}</div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:13,fontWeight:500,color:form[key]?WH:MU,marginBottom:2}}>{label}</div>
                        <div style={{fontSize:11,color:MU}}>{sub}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step===3&&(
              <div style={{padding:"1.5rem 1.75rem"}}>
                <Mono c="PREVIEW — THIS IS HOW PILOTS WILL SEE YOUR POSTING" s={9} col={AM} style={{display:"block",marginBottom:"1.1rem"}}/>
                <div style={{background:DK,border:"1px solid rgba(18,119,189,.3)",borderRadius:14,overflow:"hidden",marginBottom:"1.25rem"}}>
                  <div style={{height:90,background:"linear-gradient(135deg,rgba(18,119,189,.2) 0%,rgba(7,9,15,1) 100%)",display:"flex",alignItems:"flex-end",padding:"0.85rem 1.1rem"}}>
                    <div>
                      <Mono c={form.aircraft.toUpperCase()||"AIRCRAFT"} s={9} col={BL} style={{display:"block",marginBottom:4}}/>
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700}}>{form.title||"Position Title"}</div>
                    </div>
                  </div>
                  <div style={{padding:"1rem 1.1rem"}}>
                    {form.desc&&<p style={{fontSize:12,color:MU,lineHeight:1.7,marginBottom:"0.9rem"}}>{form.desc}</p>}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem 1rem",marginBottom:"0.9rem"}}>
                      {[["DEPARTURE",form.dep||"—"],["DATE",form.date||"—"],["PAY",form.pay||"—"],["TYPE RATING",form.typeRating?"Required":"Not Required"],["TT / IN TYPE",`${Number(form.ttHours||0).toLocaleString()} / ${form.typeHours||"—"}`],["HOTEL",form.hotel?"Included":"Not Included"]].map(([l,v])=>(
                        <div key={l}><Mono c={l} s={8} style={{display:"block",marginBottom:2}}/><span style={{fontSize:12,fontWeight:500,color:l==="PAY"?BL:WH}}>{v}</span></div>
                      ))}
                    </div>
                    {form.contact&&<div style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.65rem 0.85rem",background:"rgba(255,255,255,.03)",borderRadius:8,borderLeft:`2px solid ${BL}`}}><Mono c="CONTACT:" s={8} col={BL}/><Mono c={form.contact} s={10} col={WH}/></div>}
                  </div>
                </div>
                <div style={{background:"rgba(74,222,128,.06)",border:"1px solid rgba(74,222,128,.2)",borderRadius:10,padding:"0.85rem 1.1rem",fontSize:12,color:MU,lineHeight:1.7}}>
                  ✓ Your posting will go live immediately and be visible to all Pilots Passport members. Applications will be sent directly to your Inbox.
                </div>
              </div>
            )}

            <div style={{padding:"1.1rem 1.75rem",borderTop:"1px solid rgba(255,255,255,.07)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <button onClick={()=>step>1?setStep(s=>s-1):onClose()} style={{background:"rgba(255,255,255,.04)",color:MU,border:"1px solid rgba(255,255,255,.1)",padding:"0.6rem 1.25rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer"}}>
                {step===1?"CANCEL":"← BACK"}
              </button>
              <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
                <Mono c={`STEP ${step} OF 3`} s={9}/>
                {step<3?(
                  <button onClick={()=>setStep(s=>s+1)} disabled={step===1&&(!form.title||!form.aircraft||!form.dep)} style={{background:BL,color:WH,border:"none",padding:"0.65rem 1.5rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer",fontWeight:500,opacity:(step===1&&(!form.title||!form.aircraft||!form.dep))?0.4:1}}>
                    NEXT →
                  </button>
                ):(
                  <button onClick={handlePost} style={{background:"#4ade80",color:"#0b0f1a",border:"none",padding:"0.65rem 1.75rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer",fontWeight:700,letterSpacing:"0.08em"}}>
                    POST JOB ✓
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── FILTER COMPONENTS ──────────────────────────────── */

const filterCard={background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:14,padding:"1rem",width:280,flexShrink:0,position:"sticky",top:88};
const fieldStyle={width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,color:WH,fontFamily:"inherit",fontSize:12,fontWeight:300,padding:"0.65rem 0.8rem",outline:"none",boxSizing:"border-box"};

function FilterPanel({accentColor,activeCount,onClear,children}){
  return(
    <aside style={filterCard}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.9rem",gap:"0.75rem"}}>
        <div>
          <Mono c="FILTERS" s={10} col={accentColor} style={{display:"block",marginBottom:4}}/>
          <Mono c={activeCount?`${activeCount} ACTIVE`:"ALL JOBS"} s={9}/>
        </div>
        <button onClick={onClear} style={{background:"none",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,color:MU,padding:"0.35rem 0.55rem",fontFamily:"DM Mono, monospace",fontSize:10,cursor:"pointer"}}>CLEAR</button>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.95rem"}}>{children}</div>
    </aside>
  );
}

function FSection({label,children}){
  return(
    <div>
      <Mono c={label} s={8} style={{display:"block",marginBottom:"0.45rem"}}/>
      {children}
    </div>
  );
}

function FInput({value,onChange,placeholder}){
  return <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={fieldStyle}/>;
}

function FToggle({options,value,onChange}){
  return(
    <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem"}}>
      {options.map(opt=>{
        const active=value===opt;
        return(
          <button key={opt} onClick={()=>onChange(active?null:opt)} style={{background:active?BL:"rgba(255,255,255,.03)",border:`1px solid ${active?BL:"rgba(255,255,255,.08)"}`,borderRadius:20,color:active?WH:MU,padding:"0.35rem 0.75rem",fontFamily:"DM Mono, monospace",fontSize:10,cursor:"pointer"}}>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function FBoolToggle({label,value,onChange}){
  return(
    <button onClick={()=>onChange(!value)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.75rem",width:"100%",background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.08)",borderRadius:10,padding:"0.65rem 0.75rem",cursor:"pointer"}}>
      <span style={{fontSize:11,color:value?WH:MU,textAlign:"left"}}>{label}</span>
      <div style={{width:34,height:18,borderRadius:999,background:value?BL:"rgba(255,255,255,.12)",position:"relative",flexShrink:0}}>
        <div style={{position:"absolute",top:2,left:value?18:2,width:14,height:14,borderRadius:"50%",background:WH,transition:"left .2s"}}/>
      </div>
    </button>
  );
}

function FRange({value,onChange,min,max,step}){
  return(
    <input type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(Number(e.target.value))} style={{width:"100%",accentColor:BL,cursor:"pointer"}}/>
  );
}

/* ─── JOBS PAGE ──────────────────────────────────────── */

function JobsPage(){
  const [search,setSearch]=useState("");
  const [activeJob,setActiveJob]=useState(null);
  const [showPostModal,setShowPostModal]=useState(false);
  const [userJobs,setUserJobs]=useState([]);
  const [postSuccess,setPostSuccess]=useState(false);

  // Sidebar filters
  const [jfDep,setJfDep]=useState("");
  const [jfAcType,setJfAcType]=useState([]);
  const [jfMinPay,setJfMinPay]=useState(0);
  const [jfDateKw,setJfDateKw]=useState("");
  const [jfRole,setJfRole]=useState(null);
  const [jfHotel,setJfHotel]=useState(false);
  const [jfIntl,setJfIntl]=useState(null);
  const [jfVerified,setJfVerified]=useState(false);

  // Active jobs only, sorted soonest first
  const allJobs=[...userJobs,...JOBS]
    .filter(isJobActive)
    .sort((a,b)=>{
      if(!a.date) return 1;
      if(!b.date) return -1;
      return new Date(a.date)-new Date(b.date);
    });

  const allAcTypes=[...new Set(allJobs.map(j=>j.aircraft))].sort();
  const activeFilterCount=[jfDep,jfAcType.length>0,jfMinPay>0,jfDateKw,jfRole,jfHotel,jfIntl!==null,jfVerified].filter(Boolean).length;
  const clearFilters=()=>{setJfDep("");setJfAcType([]);setJfMinPay(0);setJfDateKw("");setJfRole(null);setJfHotel(false);setJfIntl(null);setJfVerified(false);};

  const filtered=allJobs.filter(j=>{
    if(search&&!j.title.toLowerCase().includes(search.toLowerCase())&&!j.aircraft.toLowerCase().includes(search.toLowerCase())&&!j.dep.toLowerCase().includes(search.toLowerCase()))return false;
    if(jfDep&&!j.dep.toLowerCase().includes(jfDep.toLowerCase()))return false;
    if(jfAcType.length>0&&!jfAcType.includes(j.aircraft))return false;
    if(jfMinPay>0&&(j.payNum||0)<jfMinPay)return false;
    if(jfDateKw&&!(j.date||"").toLowerCase().includes(jfDateKw.toLowerCase()))return false;
    if(jfRole&&j.role!==jfRole)return false;
    if(jfHotel&&!j.hotel)return false;
    if(jfIntl===true&&!j.intl)return false;
    if(jfIntl===false&&j.intl)return false;
    if(jfVerified&&j.operator!=="verified")return false;
    return true;
  });

  const handlePost=(job)=>{
    setUserJobs(prev=>[{...job,payNum:parseInt((job.pay||"0").replace(/\D/g,""))||0,intl:false,role:"Captain"},...prev]);
    setPostSuccess(true);
    setTimeout(()=>setPostSuccess(false),3500);
  };

  return(
    <div style={{maxWidth:1400,margin:"0 auto",padding:"3rem 2rem"}}>
      {showPostModal&&<PostJobModal onClose={()=>setShowPostModal(false)} onPost={handlePost}/>}

      {postSuccess&&(
        <div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",background:"rgba(74,222,128,.12)",border:"1px solid rgba(74,222,128,.35)",borderRadius:9,padding:"0.7rem 1.5rem",zIndex:999,display:"flex",alignItems:"center",gap:"0.65rem",whiteSpace:"nowrap"}}>
          <span style={{color:"#4ade80",fontSize:15}}>✓</span>
          <Mono c="JOB POSTED — NOW LIVE ON THE BOARD" s={11} col="#4ade80"/>
        </div>
      )}

      {/* Header */}
      <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"1.5rem",marginBottom:"1.75rem"}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}}>
            <span style={{width:20,height:1,background:BL,display:"inline-block"}}/>
            <Mono c="PILOTS PASSPORT JOB BOARD" s={10} col={BL}/>
          </div>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,2.75rem)",fontWeight:900,lineHeight:1.1,marginBottom:"0.5rem",textAlign:"left"}}>
            Contract. Relief.<br/>Your next trip.
          </div>
          <div style={{fontSize:13,color:MU,maxWidth:480,textAlign:"left"}}>No recruiters, no spam — just real flying.</div>
        </div>
        <button onClick={()=>setShowPostModal(true)} style={{display:"flex",alignItems:"center",gap:"0.65rem",background:BL,color:WH,border:"none",padding:"0.85rem 1.65rem",borderRadius:11,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",fontWeight:500,letterSpacing:"0.09em",whiteSpace:"nowrap",boxShadow:"0 4px 20px rgba(18,119,189,.3)"}}>
          <span style={{fontSize:16}}>+</span> POST A JOB
        </button>
      </div>

      {/* Stats bar */}
      <div style={{display:"flex",gap:"1.5rem",flexWrap:"wrap",marginBottom:"1.75rem",padding:"0.85rem 1.5rem",background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:13}}>
        {[["OPEN POSITIONS",allJobs.length],["VERIFIED OPERATORS",allJobs.filter(j=>j.operator==="verified").length],["HOTEL INCLUDED",allJobs.filter(j=>j.hotel).length],["YOUR POSTINGS",userJobs.length]].map(([l,v])=>(
          <div key={l}>
            <Mono c={l} s={9} style={{display:"block",marginBottom:3}}/>
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700,color:l==="YOUR POSTINGS"&&v>0?"#f59e0b":WH}}>{v}</span>
          </div>
        ))}
      </div>

      {/* Body: sidebar + grid */}
      <div style={{display:"flex",gap:"1.5rem",alignItems:"flex-start"}}>

        {/* LEFT SIDEBAR */}
        <FilterPanel accentColor={BL} activeCount={activeFilterCount} onClear={clearFilters}>
          <FSection label="DEPARTURE AIRPORT">
            <FInput value={jfDep} onChange={setJfDep} placeholder="e.g. KTEB, KLAX"/>
          </FSection>
          <FSection label="AIRCRAFT TYPE">
            <div style={{display:"flex",flexDirection:"column",gap:"0.28rem"}}>
              {allAcTypes.map(t=>{
                const active=jfAcType.includes(t);
                return(
                  <button key={t} onClick={()=>setJfAcType(prev=>active?prev.filter(x=>x!==t):[...prev,t])} style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.38rem 0.6rem",borderRadius:7,border:`1px solid ${active?"rgba(18,119,189,.45)":"rgba(255,255,255,.07)"}`,background:active?"rgba(18,119,189,.12)":"transparent",cursor:"pointer",transition:"all .12s",textAlign:"left"}}>
                    <div style={{width:13,height:13,borderRadius:3,border:`1px solid ${active?BL:"rgba(255,255,255,.2)"}`,background:active?BL:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:8,color:WH}}>{active?"✓":""}</div>
                    <span style={{fontSize:11,color:active?WH:MU,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{t}</span>
                  </button>
                );
              })}
            </div>
          </FSection>
          <FSection label="DAY RATE (MIN)">
            <FRange value={jfMinPay} onChange={setJfMinPay} label="RATE" min={0} max={3000} step={100}/>
            {jfMinPay>0&&<div style={{marginTop:"0.4rem",textAlign:"center"}}><Mono c={`$${jfMinPay.toLocaleString()}+/day`} s={9} col={BL}/></div>}
          </FSection>
          <FSection label="DATES">
            <FInput value={jfDateKw} onChange={setJfDateKw} placeholder="e.g. April, March"/>
          </FSection>
          <FSection label="CAPTAIN / SIC">
            <FToggle options={["Captain","SIC"]} value={jfRole} onChange={setJfRole}/>
          </FSection>
          <FSection label="HOTEL INCLUDED">
            <FBoolToggle label="Must include hotel" value={jfHotel} onChange={setJfHotel}/>
          </FSection>
          <FSection label="DOMESTIC / INTERNATIONAL">
            <FToggle options={["International","Domestic Only"]} value={jfIntl===true?"International":jfIntl===false?"Domestic Only":null} onChange={v=>{if(v==="International")setJfIntl(true);else if(v==="Domestic Only")setJfIntl(false);else setJfIntl(null);}}/>
          </FSection>
          <FSection label="VERIFIED OPERATOR">
            <FBoolToggle label="Verified operators only" value={jfVerified} onChange={setJfVerified}/>
          </FSection>
        </FilterPanel>

        {/* MAIN CONTENT */}
        <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
            <div style={{flex:1,minWidth:200,display:"flex",alignItems:"center",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:10,padding:"0 1rem",gap:"0.6rem",height:40}}>
              <span style={{color:BL,fontSize:13}}>✈</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search aircraft, airport, or title..." style={{background:"none",border:"none",outline:"none",color:WH,fontFamily:"inherit",fontSize:12,fontWeight:300,width:"100%"}}/>
              {search&&<button onClick={()=>setSearch("")} style={{background:"none",border:"none",color:MU,cursor:"pointer",fontSize:14}}>×</button>}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"0.65rem"}}>
              <Mono c={`${filtered.length} POSITION${filtered.length!==1?"S":""}`} s={10} col={WH}/>
              {activeFilterCount>0&&<Mono c={`· ${activeFilterCount} FILTER${activeFilterCount!==1?"S":""} ACTIVE`} s={9} col={BL}/>}
            </div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))",gap:"1.1rem"}}>
            {filtered.map(job=>{
              const isActive=activeJob===job.id;
              const isUserJob=userJobs.some(u=>u.id===job.id);
              const hasContact=!!(job.contact||job.email);
              return(
                <div key={job.id} style={{background:ST,border:`1px solid ${isActive?"rgba(18,119,189,.45)":isUserJob?"rgba(245,158,11,.35)":"rgba(255,255,255,.07)"}`,borderRadius:16,overflow:"hidden",display:"flex",flexDirection:"column",transition:"border-color .2s"}}>

                  {/* Image banner */}
                  <div style={{position:"relative",height:170,overflow:"hidden",background:DK}}>
                    <img src={job.img} alt={job.aircraft} style={{width:"100%",height:"100%",objectFit:"cover",opacity:.45}}/>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(7,9,15,.95) 0%,transparent 55%)"}}/>
                    {isUserJob&&<div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,#f59e0b,#ef4444)"}}/>}
                    <div style={{position:"absolute",top:12,left:12,display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
                      {job.operator==="verified"&&(
                        <span style={{display:"flex",alignItems:"center",gap:"0.3rem",background:"rgba(74,222,128,.12)",border:"1px solid rgba(74,222,128,.28)",borderRadius:20,padding:"0.18rem 0.6rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:"#4ade80"}}>
                          <span style={{width:4,height:4,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/>VERIFIED OP
                        </span>
                      )}
                      {job.hotel&&(
                        <span style={{background:"rgba(18,119,189,.15)",border:"1px solid rgba(18,119,189,.3)",borderRadius:20,padding:"0.18rem 0.6rem",fontFamily:"'DM Mono',monospace",fontSize:8,color:BL}}>🏨 HOTEL INCL.</span>
                      )}
                    </div>
                    <div style={{position:"absolute",top:12,right:12}}>
                      <span style={{background:"rgba(0,0,0,.55)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,.12)",borderRadius:20,padding:"0.18rem 0.65rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:MU}}>{job.posted}</span>
                    </div>
                    <div style={{position:"absolute",bottom:12,left:14,right:14}}>
                      <Mono c={job.aircraft.toUpperCase()} s={9} col={BL} style={{display:"block",marginBottom:4}}/>
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700,lineHeight:1.25}}>{job.title}</div>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{padding:"1.1rem 1.2rem",flex:1,display:"flex",flexDirection:"column"}}>
                    <p style={{fontSize:12,color:MU,lineHeight:1.7,marginBottom:"1rem"}}>{job.desc}</p>

                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem 1rem",marginBottom:"1.1rem"}}>
                      {[
                        ["AIRCRAFT",job.aircraft],
                        ["DEPARTURE",job.dep],
                        ["DATE",job.date],
                        ["PAY",job.pay],
                        ["TT / IN TYPE",`${job.ttHours.toLocaleString()} / ${job.typeHours}`],
                        ["OPERATOR",job.operator==="verified"?"Verified":"Not Verified"],
                      ].map(([l,v])=>(
                        <div key={l}>
                          <Mono c={l} s={8} style={{display:"block",marginBottom:2}}/>
                          <span style={{fontSize:12,fontWeight:500,color:l==="PAY"?BL:WH}}>{v}</span>
                        </div>
                      ))}
                    </div>

                    <button onClick={()=>setActiveJob(isActive?null:job.id)} style={{background:"none",border:"1px solid rgba(255,255,255,.08)",borderRadius:8,color:MU,padding:"0.38rem",fontFamily:"'DM Mono',monospace",fontSize:9,cursor:"pointer",marginBottom:"0.65rem",letterSpacing:"0.1em"}}>{isActive?"▲ HIDE DETAILS":"▼ FULL DETAILS"}</button>

                    {isActive&&(
                      <div style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:9,padding:"0.9rem",marginBottom:"0.7rem",fontSize:12,color:MU,lineHeight:1.8}}>
                        <div style={{marginBottom:"0.5rem"}}><Mono c="JOB ID" s={9} style={{marginRight:8}}/><Mono c={job.id} s={9} col={BL}/></div>
                        <div><strong style={{color:WH,fontWeight:500}}>Aircraft:</strong> {job.aircraft}</div>
                        <div><strong style={{color:WH,fontWeight:500}}>Departure:</strong> {job.dep}</div>
                        <div><strong style={{color:WH,fontWeight:500}}>Dates:</strong> {job.date||"—"}</div>
                        <div><strong style={{color:WH,fontWeight:500}}>Type Rating:</strong> {job.typeRating?"Required":"Not required"}</div>
                        <div><strong style={{color:WH,fontWeight:500}}>Hours:</strong> {job.ttHours.toLocaleString()} TT / {job.typeHours||"—"} in type</div>
                        <div><strong style={{color:WH,fontWeight:500}}>Pay:</strong> {job.pay||"—"}</div>
                        <div><strong style={{color:WH,fontWeight:500}}>Hotel:</strong> {job.hotel?"Included":"Not included"}</div>
                        {(job.contact||job.email)&&(
                          <div style={{marginTop:"0.5rem",padding:"0.55rem 0.75rem",background:"rgba(18,119,189,.07)",borderRadius:7,border:"1px solid rgba(18,119,189,.2)"}}>
                            <Mono c="CONTACT: " s={9} col={BL}/><Mono c={job.contact||job.email} s={10} col={WH}/>
                          </div>
                        )}
                        {isUserJob&&(
                          <div style={{marginTop:"0.5rem",padding:"0.45rem 0.75rem",background:"rgba(245,158,11,.08)",borderRadius:7,border:"1px solid rgba(245,158,11,.2)"}}>
                            <Mono c="✦ YOUR POSTING — REMOVE" s={9} col="#f59e0b" style={{cursor:"pointer"}} onClick={()=>setUserJobs(prev=>prev.filter(u=>u.id!==job.id))}/>
                          </div>
                        )}
                      </div>
                    )}

                    <div style={{marginTop:"auto"}}>
                      {isUserJob?(
                        <div style={{width:"100%",padding:"0.7rem",borderRadius:9,background:"rgba(245,158,11,.1)",border:"1px solid rgba(245,158,11,.25)",fontFamily:"'DM Mono',monospace",fontSize:11,color:"#f59e0b",textAlign:"center",letterSpacing:"0.1em"}}>
                          ✦ YOUR ACTIVE POSTING
                        </div>
                      ):(
                        <button
                          onClick={()=>applyToJob(job)}
                          style={{width:"100%",padding:"0.7rem",borderRadius:9,border:"none",background:BL,color:WH,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:hasContact?"pointer":"default",fontWeight:500,letterSpacing:"0.1em",opacity:hasContact?1:0.5,transition:"all .2s"}}
                          title={hasContact?"":"No contact email provided for this posting"}
                        >
                          {hasContact?"APPLY NOW →":"NO CONTACT ON FILE"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length===0&&(
            <div style={{textAlign:"center",padding:"5rem",background:ST,borderRadius:16,border:"1px solid rgba(255,255,255,.06)"}}>
              <div style={{fontSize:42,marginBottom:"1rem"}}>✈</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,marginBottom:"0.6rem"}}>No matching positions</div>
              <div style={{fontSize:13,color:MU}}>Try adjusting your filters or clearing them all.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobsPage;