import React, { useState } from "react";
import { BL, NV, DK, ST, MU, WH, BC, PT, EVENTS, AIRFRAMES, ALL_CITIES, INIT_POSTS, INIT_AF_POSTS, INIT_EV_POSTS, ME } from "../shared/data";
import { Av, Mono, Pill, ImgCard } from "../shared/ui";

// ─── DERIVED LOOKUP DATA ──────────────────────────────

// Derive manufacturer from airframe name
function getMake(af){
  const n=af.name;
  if(n.startsWith("Airbus")) return "Airbus";
  if(n.startsWith("Boeing")) return "Boeing";
  if(n.startsWith("Bombardier")||n.startsWith("Global")||n.startsWith("CRJ")) return "Bombardier";
  if(n.startsWith("Gulfstream")) return "Gulfstream";
  if(n.startsWith("Cessna")||n.startsWith("Citation")) return "Cessna";
  if(n.startsWith("Cirrus")||n.startsWith("Cirrus")) return "Cirrus";
  if(n.startsWith("Beechcraft")) return "Beechcraft";
  if(n.startsWith("Embraer")) return "Embraer";
  if(n.startsWith("Pilatus")) return "Pilatus";
  if(n.startsWith("Dash")||n.startsWith("ATR")) return "ATR / de Havilland";
  return "Other";
}

// Airspace class lookup by ICAO/IATA code
const AIRSPACE_CLASS={
  ATL:"B", BOS:"B", ORD:"B", DFW:"B", LAX:"B", MIA:"B",
  JFK:"B", PHX:"B", SEA:"B", IAH:"B", DEN:"B", LAS:"B",
  SJU:"C", SNA:"C", BOI:"C", MSY:"B", DAL:"D",
  BZN:"D", GJT:"D", MEI:"D", PSM:"D", PGA:"D", SEZ:"D", TEX:"D",
  SJD:"Intl", LHR:"Intl", CDG:"Intl", DXB:"Intl",
  SIN:"Intl", SYD:"Intl", NRT:"Intl",
};

// ─── SHARED FILTER SIDEBAR ────────────────────────────

const sidebarStyle={
  width:228,flexShrink:0,position:"sticky",top:88,
  background:ST,border:"1px solid rgba(255,255,255,.07)",
  borderRadius:14,padding:"1rem",alignSelf:"flex-start",
};
const fieldStyle={
  width:"100%",background:"rgba(255,255,255,.04)",
  border:"1px solid rgba(255,255,255,.1)",borderRadius:8,
  color:WH,fontFamily:"inherit",fontSize:12,fontWeight:300,
  padding:"0.6rem 0.8rem",outline:"none",boxSizing:"border-box",
};

function SidebarPanel({title,activeCount,onClear,children}){
  return(
    <aside style={sidebarStyle}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.9rem"}}>
        <div>
          <Mono c={title} s={10} col={BL} style={{display:"block",marginBottom:3}}/>
          <Mono c={activeCount?`${activeCount} ACTIVE`:"ALL"} s={9}/>
        </div>
        {activeCount>0&&(
          <button onClick={onClear} style={{background:"none",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,color:MU,padding:"0.28rem 0.5rem",fontFamily:"DM Mono,monospace",fontSize:9,cursor:"pointer"}}>CLEAR</button>
        )}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>{children}</div>
    </aside>
  );
}

function FSec({label,children}){
  return(
    <div>
      <Mono c={label} s={8} style={{display:"block",marginBottom:"0.42rem"}}/>
      {children}
    </div>
  );
}

function FChips({options,value,onChange,multi=false}){
  return(
    <div style={{display:"flex",flexWrap:"wrap",gap:"0.35rem"}}>
      {options.map(opt=>{
        const active=multi?value.includes(opt):value===opt;
        return(
          <button key={opt} onClick={()=>{
            if(multi){onChange(active?value.filter(x=>x!==opt):[...value,opt]);}
            else{onChange(active?null:opt);}
          }} style={{background:active?BL:"rgba(255,255,255,.04)",border:`1px solid ${active?BL:"rgba(255,255,255,.09)"}`,borderRadius:20,color:active?WH:MU,padding:"0.28rem 0.65rem",fontFamily:"DM Mono,monospace",fontSize:9,cursor:"pointer",transition:"all .12s"}}>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function FSearch({value,onChange,placeholder}){
  return(
    <div style={{position:"relative"}}>
      <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={fieldStyle}/>
      {value&&<button onClick={()=>onChange("")} style={{position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:MU,cursor:"pointer",fontSize:13}}>×</button>}
    </div>
  );
}

// ─── COMMUNITY FEED ───────────────────────────────────

export function CommunityFeed({city,posts,pf,setPf,ps,setPs,composing,setComposing,np,setNp,expPost,setExpPost,replyTo,setReplyTo,replyTxt,setReplyTxt,likePost,likeComment,submitPost,submitReply,goingEvents,toggleGoing,cityEvents,feedPosts,contextLabel,contextSubtitle}){
  return(
    <div>
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.4rem"}}><span style={{width:16,height:1,background:BL,display:"inline-block"}}/><Mono c={contextLabel||`${city?.code||""} CREW COMMUNITY`} s={10} col={BL}/></div>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:700,marginBottom:"0.2rem"}}>{contextSubtitle||"Notes from the crew."}</div>
        </div>
        <button onClick={()=>setComposing(!composing)} style={{background:composing?"rgba(255,255,255,.06)":BL,color:WH,border:composing?"1px solid rgba(255,255,255,.1)":"none",padding:"0.7rem 1.4rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer",fontWeight:500}}>{composing?"CANCEL ×":"+ POST A NOTE"}</button>
      </div>
      {city&&<div style={{display:"flex",alignItems:"center",gap:"0.65rem",padding:"0.75rem 1rem",background:"rgba(74,222,128,.05)",border:"1px solid rgba(74,222,128,.12)",borderRadius:9,marginBottom:"1.4rem"}}>
        <span style={{width:7,height:7,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px rgba(74,222,128,.6)",display:"inline-block"}}/>
        <Mono c={`${city.pilots} PILOTS ACTIVE IN ${city.code}`} s={10} col="#4ade80"/>
      </div>}
      <div style={{display:"flex",gap:"0.35rem",marginBottom:"1.4rem",borderBottom:"1px solid rgba(255,255,255,.06)",paddingBottom:"0.85rem",flexWrap:"wrap",alignItems:"center"}}>
        {["Feed","Tips","Meetups","Warnings","Questions","Reviews","Events"].map(f=><Pill key={f} label={f.toUpperCase()} active={pf===f} onClick={()=>setPf(f)}/>)}
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,padding:"0.28rem 0.7rem",gap:"0.35rem"}}>
          <span style={{color:MU,fontSize:11}}>🔍</span>
          <input value={ps} onChange={e=>setPs(e.target.value)} placeholder="Search..." style={{background:"none",border:"none",outline:"none",color:WH,fontFamily:"inherit",fontSize:11,fontWeight:300,width:110}}/>
        </div>
      </div>

      {pf==="Events"&&(
        (!cityEvents||cityEvents.length===0)
          ?<div style={{textAlign:"center",padding:"3.5rem",background:ST,borderRadius:14,border:"1px solid rgba(255,255,255,.06)"}}><div style={{fontSize:38,marginBottom:"1rem"}}>📅</div><div style={{fontFamily:"'Playfair Display',serif",fontSize:18}}>No events in this community</div></div>
          :<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))",gap:"1.1rem"}}>
            {cityEvents.map(ev=>{
              const going=goingEvents&&goingEvents.has(ev.id);
              return(
                <div key={ev.id} style={{background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:14,overflow:"hidden"}}>
                  <ImgCard img={ev.img} height={155} radius={14}>
                    <div style={{position:"absolute",top:10,left:10,background:"rgba(0,0,0,.55)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,padding:"0.18rem 0.6rem"}}><Mono c={ev.cat.toUpperCase()} s={9} col={WH}/></div>
                    <div style={{position:"absolute",bottom:10,right:10,background:"rgba(0,0,0,.5)",backdropFilter:"blur(4px)",borderRadius:20,padding:"0.18rem 0.55rem"}}><Mono c={`${ev.going+(going?1:0)} GOING`} s={9} col="#4ade80"/></div>
                  </ImgCard>
                  <div style={{padding:"0.9rem 1.1rem 1.1rem"}}>
                    <div style={{fontSize:14,fontWeight:500,marginBottom:"0.2rem"}}>{ev.name}</div>
                    <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.55rem"}}><Mono c={ev.date} s={10} col={BL}/><Mono c="·" s={10}/><Mono c={ev.loc} s={10}/></div>
                    <p style={{fontSize:12,color:MU,lineHeight:1.65,marginBottom:"0.75rem"}}>{ev.desc}</p>
                    <button onClick={()=>toggleGoing&&toggleGoing(ev.id)} style={{width:"100%",padding:"0.52rem",borderRadius:8,border:`1px solid ${going?BL:"rgba(255,255,255,.1)"}`,background:going?"rgba(18,119,189,.15)":"transparent",color:going?BL:MU,fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer"}}>{going?"✓ YOU'RE GOING":"MARK AS GOING"}</button>
                  </div>
                </div>
              );
            })}
          </div>
      )}

      {composing&&pf!=="Events"&&(
        <div style={{background:ST,border:`1px solid rgba(18,119,189,.3)`,borderRadius:13,padding:"1.4rem",marginBottom:"1.4rem"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.7rem",marginBottom:"0.9rem"}}>
            <Av init={ME.avatar} size={30}/>
            <div><div style={{fontSize:13,fontWeight:500}}>{ME.handle}</div><Mono c={`${ME.rank} · ${ME.airline} · ${ME.base}`} s={10}/></div>
          </div>
          <div style={{display:"flex",gap:"0.35rem",marginBottom:"0.85rem",flexWrap:"wrap"}}>
            {Object.entries(PT).map(([tag,m])=>(
              <button key={tag} onClick={()=>setNp(p=>({...p,tag}))} style={{fontSize:9,fontFamily:"'DM Mono',monospace",color:np.tag===tag?m.t:MU,background:np.tag===tag?m.bg:"transparent",border:`1px solid ${np.tag===tag?m.t+"50":"rgba(255,255,255,.1)"}`,padding:"0.22rem 0.65rem",borderRadius:20,cursor:"pointer"}}>{m.i} {tag.toUpperCase()}</button>
            ))}
          </div>
          <input value={np.title} onChange={e=>setNp(p=>({...p,title:e.target.value}))} placeholder="Title" style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:14,fontWeight:300,padding:"0.6rem 0.9rem",width:"100%",outline:"none",marginBottom:"0.6rem",display:"block"}}/>
          <textarea value={np.body} onChange={e=>setNp(p=>({...p,body:e.target.value}))} rows={3} placeholder="Share what you know..." style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:13,fontWeight:300,padding:"0.65rem 0.9rem",width:"100%",resize:"vertical",outline:"none"}}/>
          <div style={{display:"flex",justifyContent:"flex-end",marginTop:"0.6rem"}}>
            <button onClick={submitPost} style={{background:BL,color:WH,border:"none",padding:"0.5rem 1.4rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer",fontWeight:500,opacity:np.title&&np.body?1:.4}}>POST →</button>
          </div>
        </div>
      )}

      {pf!=="Events"&&(
        feedPosts.length===0
          ?<div style={{textAlign:"center",padding:"3.5rem",background:ST,borderRadius:14,border:"1px solid rgba(255,255,255,.06)"}}>
            <div style={{fontSize:38,marginBottom:"1rem"}}>✈</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,marginBottom:"0.75rem"}}>Be the first to post</div>
            <button onClick={()=>setComposing(true)} style={{background:BL,color:WH,border:"none",padding:"0.6rem 1.4rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer"}}>POST FIRST NOTE →</button>
          </div>
          :<div style={{display:"flex",flexDirection:"column",gap:1,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:13,overflow:"hidden"}}>
            {feedPosts.map(post=>{
              const tm=PT[post.tag]||PT.Tip;
              const isExp=expPost===post.id;
              return(
                <div key={post.id} style={{background:DK}}>
                  <div style={{display:"flex"}}>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem 0.7rem",minWidth:48}}>
                      <button onClick={()=>likePost(post.id)} style={{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:"0.35rem"}}>
                        <span style={{fontSize:11,color:post.liked?BL:MU}}>▲</span>
                        <Mono c={post.upvotes} s={11} col={post.liked?BL:MU}/>
                      </button>
                    </div>
                    <div style={{flex:1,padding:"0.9rem 1.1rem 0.9rem 0"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"0.55rem",marginBottom:"0.5rem",flexWrap:"wrap"}}>
                        <Av init={post.avatar} size={22}/>
                        <span style={{fontSize:13,fontWeight:500}}>{post.author}</span>
                        <Mono c={`${post.rank||"Pilot"} · ${post.airline} · ${post.base}`} s={10}/>
                        <Mono c={post.time} s={10} style={{marginLeft:"auto"}}/>
                        {post.pinned&&<Mono c="📌" s={10} col={BL} style={{background:"rgba(18,119,189,.1)",border:"1px solid rgba(18,119,189,.2)",padding:"0.12rem 0.45rem",borderRadius:20}}/>}
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.4rem",flexWrap:"wrap"}}>
                        <span style={{background:tm.bg,color:tm.t,fontFamily:"'DM Mono',monospace",fontSize:9,padding:"0.18rem 0.48rem",borderRadius:20,border:`1px solid ${tm.t}30`}}>{tm.i} {post.tag.toUpperCase()}</span>
                        <span style={{fontSize:14,fontWeight:500}}>{post.title}</span>
                      </div>
                      <p style={{fontSize:13,color:MU,lineHeight:1.7,marginBottom:"0.75rem"}}>{post.body}</p>
                      <div style={{display:"flex",gap:"0.45rem",flexWrap:"wrap"}}>
                        <button onClick={()=>setExpPost(isExp?null:post.id)} style={{fontSize:10,fontFamily:"'DM Mono',monospace",color:isExp?BL:MU,background:isExp?"rgba(18,119,189,.08)":"transparent",border:`1px solid ${isExp?"rgba(18,119,189,.25)":"rgba(255,255,255,.08)"}`,padding:"0.22rem 0.7rem",borderRadius:20,cursor:"pointer"}}>💬 {post.comments.length} REPL{post.comments.length===1?"Y":"IES"}</button>
                        <button onClick={()=>{setExpPost(post.id);setReplyTo(post.id);}} style={{fontSize:10,fontFamily:"'DM Mono',monospace",color:MU,background:"transparent",border:"1px solid rgba(255,255,255,.08)",padding:"0.22rem 0.7rem",borderRadius:20,cursor:"pointer"}}>↩ REPLY</button>
                      </div>
                    </div>
                  </div>
                  {isExp&&(
                    <div style={{borderTop:"1px solid rgba(255,255,255,.05)",background:"rgba(255,255,255,.01)"}}>
                      {post.comments.map(c=>(
                        <div key={c.id} style={{display:"flex",padding:"0.75rem 1.1rem 0.75rem 3rem",borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                          <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginRight:"0.6rem",minWidth:30}}>
                            <button onClick={()=>likeComment(post.id,c.id)} style={{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:"0.2rem"}}>
                              <span style={{fontSize:9,color:c.liked?BL:MU}}>▲</span>
                              <Mono c={c.upvotes} s={9} col={c.liked?BL:MU}/>
                            </button>
                          </div>
                          <div style={{flex:1}}>
                            <div style={{display:"flex",alignItems:"center",gap:"0.45rem",marginBottom:"0.25rem",flexWrap:"wrap"}}>
                              <Av init={c.avatar} size={18}/><span style={{fontSize:12,fontWeight:500}}>{c.author}</span><Mono c={`${c.airline} · ${c.base}`} s={10}/><Mono c={c.time} s={10} style={{marginLeft:"auto"}}/>
                            </div>
                            <p style={{fontSize:12,color:MU,lineHeight:1.65}}>{c.text}</p>
                          </div>
                        </div>
                      ))}
                      <div style={{padding:"0.75rem 1.1rem 0.85rem 3rem",display:"flex",gap:"0.6rem"}}>
                        <Av init={ME.avatar} size={24}/>
                        <div style={{flex:1}}>
                          <textarea rows={2} placeholder={`Reply as ${ME.handle}...`} value={replyTo===post.id?replyTxt:""} onFocus={()=>setReplyTo(post.id)} onChange={e=>setReplyTxt(e.target.value)} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:9,color:WH,fontFamily:"inherit",fontSize:12,fontWeight:300,padding:"0.5rem 0.8rem",width:"100%",resize:"vertical",outline:"none"}}/>
                          {replyTo===post.id&&<div style={{display:"flex",justifyContent:"flex-end",marginTop:"0.4rem",gap:"0.4rem"}}>
                            <button onClick={()=>setReplyTo(null)} style={{fontSize:9,fontFamily:"'DM Mono',monospace",color:MU,background:"transparent",border:"1px solid rgba(255,255,255,.1)",padding:"0.25rem 0.6rem",borderRadius:7,cursor:"pointer"}}>CANCEL</button>
                            <button onClick={()=>submitReply(post.id)} style={{fontSize:9,fontFamily:"'DM Mono',monospace",color:WH,background:BL,border:"none",padding:"0.25rem 0.6rem",borderRadius:7,cursor:"pointer",opacity:replyTxt.trim()?1:.4}}>POST →</button>
                          </div>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
      )}
    </div>
  );
}

// ─── COMMUNITY PAGE ───────────────────────────────────

function CommunityPage({nav}){
  const [tab,setTab]=useState("airports");
  const [selectedAF,setSelectedAF]=useState(null);
  const [selectedEV,setSelectedEV]=useState(null);

  // ── Airframe filters ──
  const [afCatFilter,setAfCatFilter]=useState([]);
  const [afMakeFilter,setAfMakeFilter]=useState([]);
  const [afModelSearch,setAfModelSearch]=useState("");

  // ── Airport filters ──
  const [apRegion,setApRegion]=useState([]);
  const [apState,setApState]=useState([]);
  const [apAirspace,setApAirspace]=useState([]);
  const [apSearch,setApSearch]=useState("");
  const [selectedAP,setSelectedAP]=useState(null);

  // ── Event filters ──
  const [evCat,setEvCat]=useState("All");
  const [evSearch,setEvSearch]=useState("");

  // ── Airport posts state ──
  const [apPostsMap,setApPostsMap]=useState(()=>{
    const m={};
    ALL_CITIES.filter(c=>c.status==="active").forEach(c=>{m[c.code]=JSON.parse(JSON.stringify(INIT_POSTS[c.code]||[]));});
    return m;
  });
  const [apPf,setApPf]=useState("Feed");
  const [apPs,setApPs]=useState("");
  const [apComposing,setApComposing]=useState(false);
  const [apNp,setApNp]=useState({title:"",body:"",tag:"Tip"});
  const [apExpPost,setApExpPost]=useState(null);
  const [apReplyTo,setApReplyTo]=useState(null);
  const [apReplyTxt,setApReplyTxt]=useState("");
  const [apGoingEvts,setApGoingEvts]=useState(new Set());

  const apFeedPosts=selectedAP?(apPostsMap[selectedAP.code]||[]).filter(p=>{
    const mf=apPf==="Feed"||p.tag===apPf.replace(/s$/,"");
    const ms=apPs===""||p.title.toLowerCase().includes(apPs.toLowerCase());
    return mf&&ms;
  }).sort((a,b)=>b.pinned-a.pinned):[];

  const apLikePost=id=>setApPostsMap(prev=>({...prev,[selectedAP.code]:prev[selectedAP.code].map(p=>p.id===id?{...p,liked:!p.liked,upvotes:p.liked?p.upvotes-1:p.upvotes+1}:p)}));
  const apLikeComment=(pid,cid)=>setApPostsMap(prev=>({...prev,[selectedAP.code]:prev[selectedAP.code].map(p=>p.id===pid?{...p,comments:p.comments.map(c=>c.id===cid?{...c,liked:!c.liked,upvotes:c.liked?c.upvotes-1:c.upvotes+1}:c)}:p)}));
  const apSubmitPost=()=>{
    if(!apNp.title.trim()||!apNp.body.trim())return;
    const post={id:Date.now(),author:ME.handle,airline:ME.airline,base:ME.base,rank:ME.rank,avatar:ME.avatar,tag:apNp.tag,time:"just now",title:apNp.title,body:apNp.body,upvotes:1,liked:true,pinned:false,comments:[]};
    setApPostsMap(prev=>({...prev,[selectedAP.code]:[post,...(prev[selectedAP.code]||[])]}));
    setApNp({title:"",body:"",tag:"Tip"});setApComposing(false);setApExpPost(post.id);
  };
  const apSubmitReply=pid=>{
    if(!apReplyTxt.trim())return;
    const c={id:Date.now(),author:ME.handle,airline:ME.airline,base:ME.base,avatar:ME.avatar,time:"just now",text:apReplyTxt,upvotes:1,liked:true};
    setApPostsMap(prev=>({...prev,[selectedAP.code]:prev[selectedAP.code].map(p=>p.id===pid?{...p,comments:[...p.comments,c]}:p)}));
    setApReplyTxt("");setApReplyTo(null);
  };
  const apToggleGoing=id=>setApGoingEvts(prev=>{const n=new Set(prev);n.has(id)?n.delete(id):n.add(id);return n;});

  // ── Airframe posts state ──
  const [afPostsMap,setAfPostsMap]=useState(()=>JSON.parse(JSON.stringify(INIT_AF_POSTS)));
  const [afPf,setAfPf]=useState("Feed");
  const [afPs,setAfPs]=useState("");
  const [afComposing,setAfComposing]=useState(false);
  const [afNp,setAfNp]=useState({title:"",body:"",tag:"Tip"});
  const [afExpPost,setAfExpPost]=useState(null);
  const [afReplyTo,setAfReplyTo]=useState(null);
  const [afReplyTxt,setAfReplyTxt]=useState("");

  const afFeedPosts=selectedAF?(afPostsMap[selectedAF.id]||[]).filter(p=>{
    const mf=afPf==="Feed"||p.tag===afPf.replace(/s$/,"");
    const ms=afPs===""||p.title.toLowerCase().includes(afPs.toLowerCase());
    return mf&&ms;
  }).sort((a,b)=>b.pinned-a.pinned):[];

  const afLikePost=id=>setAfPostsMap(prev=>({...prev,[selectedAF.id]:(prev[selectedAF.id]||[]).map(p=>p.id===id?{...p,liked:!p.liked,upvotes:p.liked?p.upvotes-1:p.upvotes+1}:p)}));
  const afLikeComment=(pid,cid)=>setAfPostsMap(prev=>({...prev,[selectedAF.id]:(prev[selectedAF.id]||[]).map(p=>p.id===pid?{...p,comments:p.comments.map(c=>c.id===cid?{...c,liked:!c.liked,upvotes:c.liked?c.upvotes-1:c.upvotes+1}:c)}:p)}));
  const afSubmitPost=()=>{
    if(!afNp.title.trim()||!afNp.body.trim())return;
    const post={id:Date.now(),author:ME.handle,airline:ME.airline,base:ME.base,rank:ME.rank,avatar:ME.avatar,tag:afNp.tag,time:"just now",title:afNp.title,body:afNp.body,upvotes:1,liked:true,pinned:false,comments:[]};
    setAfPostsMap(prev=>({...prev,[selectedAF.id]:[post,...(prev[selectedAF.id]||[])]}));
    setAfNp({title:"",body:"",tag:"Tip"});setAfComposing(false);setAfExpPost(post.id);
  };
  const afSubmitReply=pid=>{
    if(!afReplyTxt.trim())return;
    const c={id:Date.now(),author:ME.handle,airline:ME.airline,base:ME.base,avatar:ME.avatar,time:"just now",text:afReplyTxt,upvotes:1,liked:true};
    setAfPostsMap(prev=>({...prev,[selectedAF.id]:(prev[selectedAF.id]||[]).map(p=>p.id===pid?{...p,comments:[...p.comments,c]}:p)}));
    setAfReplyTxt("");setAfReplyTo(null);
  };

  // ── Event posts state ──
  const [evPostsMap,setEvPostsMap]=useState(()=>JSON.parse(JSON.stringify(INIT_EV_POSTS)));
  const [evPf,setEvPf]=useState("Feed");
  const [evPs,setEvPs]=useState("");
  const [evComposing,setEvComposing]=useState(false);
  const [evNp,setEvNp]=useState({title:"",body:"",tag:"Tip"});
  const [evExpPost,setEvExpPost]=useState(null);
  const [evReplyTo,setEvReplyTo]=useState(null);
  const [evReplyTxt,setEvReplyTxt]=useState("");
  const [goingEvts,setGoingEvts]=useState(new Set(["e11","e2"]));

  const evFeedPosts=selectedEV?(evPostsMap[selectedEV.id]||[]).filter(p=>{
    const mf=evPf==="Feed"||p.tag===evPf.replace(/s$/,"");
    const ms=evPs===""||p.title.toLowerCase().includes(evPs.toLowerCase());
    return mf&&ms;
  }).sort((a,b)=>b.pinned-a.pinned):[];

  const evLikePost=id=>setEvPostsMap(prev=>({...prev,[selectedEV.id]:(prev[selectedEV.id]||[]).map(p=>p.id===id?{...p,liked:!p.liked,upvotes:p.liked?p.upvotes-1:p.upvotes+1}:p)}));
  const evLikeComment=(pid,cid)=>setEvPostsMap(prev=>({...prev,[selectedEV.id]:(prev[selectedEV.id]||[]).map(p=>p.id===pid?{...p,comments:p.comments.map(c=>c.id===cid?{...c,liked:!c.liked,upvotes:c.liked?c.upvotes-1:c.upvotes+1}:c)}:p)}));
  const evSubmitPost=()=>{
    if(!evNp.title.trim()||!evNp.body.trim())return;
    const post={id:Date.now(),author:ME.handle,airline:ME.airline,base:ME.base,rank:ME.rank,avatar:ME.avatar,tag:evNp.tag,time:"just now",title:evNp.title,body:evNp.body,upvotes:1,liked:true,pinned:false,comments:[]};
    setEvPostsMap(prev=>({...prev,[selectedEV.id]:[post,...(prev[selectedEV.id]||[])]}));
    setEvNp({title:"",body:"",tag:"Tip"});setEvComposing(false);setEvExpPost(post.id);
  };
  const evSubmitReply=pid=>{
    if(!evReplyTxt.trim())return;
    const c={id:Date.now(),author:ME.handle,airline:ME.airline,base:ME.base,avatar:ME.avatar,time:"just now",text:evReplyTxt,upvotes:1,liked:true};
    setEvPostsMap(prev=>({...prev,[selectedEV.id]:(prev[selectedEV.id]||[]).map(p=>p.id===pid?{...p,comments:[...p.comments,c]}:p)}));
    setEvReplyTxt("");setEvReplyTo(null);
  };
  const toggleGoing=id=>setGoingEvts(prev=>{const n=new Set(prev);n.has(id)?n.delete(id):n.add(id);return n;});

  // ── Derived filter options ──
  const AF_CATS=["Business Jet","Narrowbody","Widebody","Regional","Turboprop","Piston","Helicopter"];
  const AF_MAKES=[...new Set(AIRFRAMES.map(getMake))].sort();
  const EV_CATS=["All","Aviation","Sports","Music","Arts","Business"];
  const REGIONS=["Northeast","Southeast","Midwest","South","West","Southwest","International"];
  const activeCities=ALL_CITIES.filter(c=>c.status==="active");
  const AP_STATES=[...new Set(activeCities.map(c=>c.st))].sort();
  const AP_AIRSPACE=["B","C","D","Intl"];

  // ── Filtered lists ──
  const filteredAf=AIRFRAMES.filter(af=>{
    const mc=afCatFilter.length===0||afCatFilter.includes(af.cat);
    const mm=afMakeFilter.length===0||afMakeFilter.includes(getMake(af));
    const ms=afModelSearch===""||af.name.toLowerCase().includes(afModelSearch.toLowerCase())||af.short.toLowerCase().includes(afModelSearch.toLowerCase());
    return mc&&mm&&ms;
  });

  const filteredAPs=activeCities.filter(c=>{
    const mr=apRegion.length===0||apRegion.includes(c.region);
    const mst=apState.length===0||apState.includes(c.st);
    const mac=apAirspace.length===0||apAirspace.includes(AIRSPACE_CLASS[c.code]||"D");
    const ms=apSearch===""||c.name.toLowerCase().includes(apSearch.toLowerCase())||c.code.toLowerCase().includes(apSearch.toLowerCase());
    return mr&&mst&&mac&&ms;
  });

  const filteredEv=EVENTS.filter(e=>{
    const mc=evCat==="All"||e.cat===evCat;
    const ms=evSearch===""||e.name.toLowerCase().includes(evSearch.toLowerCase())||e.loc.toLowerCase().includes(evSearch.toLowerCase());
    return mc&&ms;
  });

  const afActiveFilters=afCatFilter.length+afMakeFilter.length+(afModelSearch?1:0);
  const apActiveFilters=apRegion.length+apState.length+apAirspace.length+(apSearch?1:0);
  const clearAfFilters=()=>{setAfCatFilter([]);setAfMakeFilter([]);setAfModelSearch("");};
  const clearApFilters=()=>{setApRegion([]);setApState([]);setApAirspace([]);setApSearch("");};

  const handleTabChange=(t)=>{setTab(t);setSelectedAP(null);setSelectedAF(null);setSelectedEV(null);};

  return(
    <div>
      {/* ── PAGE HEADER ── */}
      <div style={{background:DK,padding:"3.5rem 2rem 0",borderBottom:"1px solid rgba(255,255,255,.05)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 60% at 60% 50%,rgba(18,119,189,.09) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:1400,margin:"0 auto",position:"relative"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}}>
            <span style={{width:20,height:1,background:BL,display:"inline-block"}}/>
            <Mono c="THE PILOTS NETWORK" s={10} col={BL}/>
          </div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,marginBottom:"0.75rem",textAlign:"left"}}>Community</h1>
          <p style={{color:MU,fontSize:14,maxWidth:520,lineHeight:1.7,marginBottom:"2rem",textAlign:"left"}}>Connect with pilots by airframe, airport, and event. Share ground intel, organize meetups, and build your network across the fleet.</p>
          <div style={{display:"flex",gap:0,borderTop:"1px solid rgba(255,255,255,.05)"}}>
            {[{id:"airports",l:"By Airport"},{id:"airframes",l:"By Airframe"},{id:"events",l:"Events & Meetups"}].map(t=>(
              <button key={t.id} onClick={()=>handleTabChange(t.id)} style={{cursor:"pointer",background:"none",border:"none",borderBottom:tab===t.id?`2px solid ${BL}`:"2px solid transparent",color:tab===t.id?WH:MU,padding:"1rem 1.5rem",fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.1em",transition:"all .15s"}}>{t.l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:1400,margin:"0 auto",padding:"2.5rem 2rem 5rem"}}>

        {/* ══ AIRPORTS TAB ══ */}
        {tab==="airports"&&!selectedAP&&(
          <div style={{display:"flex",gap:"1.5rem",alignItems:"flex-start"}}>

            {/* Airport sidebar */}
            <SidebarPanel title="FILTER AIRPORTS" activeCount={apActiveFilters} onClear={clearApFilters}>
              <FSec label="SEARCH">
                <FSearch value={apSearch} onChange={setApSearch} placeholder="City or code..."/>
              </FSec>
              <FSec label="REGION">
                <FChips options={REGIONS} value={apRegion} onChange={setApRegion} multi/>
              </FSec>
              <FSec label="STATE / TERRITORY">
                <FChips options={AP_STATES} value={apState} onChange={setApState} multi/>
              </FSec>
              <FSec label="AIRSPACE CLASS">
                <FChips options={AP_AIRSPACE} value={apAirspace} onChange={setApAirspace} multi/>
                <div style={{marginTop:"0.45rem",display:"flex",flexDirection:"column",gap:"0.18rem"}}>
                  {[["B","Major hubs — ATL, ORD, LAX"],["C","Moderate — SJU, SNA, BOI"],["D","Smaller fields — KTEX, KSEZ"],["Intl","International airports"]].map(([cls,desc])=>(
                    <div key={cls} style={{display:"flex",gap:"0.45rem",alignItems:"center"}}>
                      <span style={{fontFamily:"DM Mono,monospace",fontSize:8,color:BL,background:"rgba(18,119,189,.1)",border:"1px solid rgba(18,119,189,.2)",borderRadius:4,padding:"0.1rem 0.32rem",flexShrink:0}}>{cls}</span>
                      <span style={{fontSize:9,color:MU}}>{desc}</span>
                    </div>
                  ))}
                </div>
              </FSec>
            </SidebarPanel>

            {/* Airport grid */}
            <div style={{flex:1,minWidth:0}}>
              {/* Your base shortcut */}
              <div style={{background:"rgba(18,119,189,.06)",border:"1px solid rgba(18,119,189,.2)",borderRadius:13,padding:"0.85rem 1.1rem",marginBottom:"1.5rem",display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"}}>
                <div style={{width:36,height:36,borderRadius:9,background:"rgba(18,119,189,.18)",border:"1px solid rgba(18,119,189,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>🏠</div>
                <div><Mono c="YOUR BASE" s={9} col={BL} style={{display:"block",marginBottom:2}}/><span style={{fontSize:13,fontWeight:500}}>Atlanta · ATL</span></div>
                <div style={{marginLeft:"auto"}}>
                  <button onClick={()=>setSelectedAP(ALL_CITIES.find(c=>c.code==="ATL"))} style={{background:BL,color:WH,border:"none",padding:"0.38rem 0.85rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer"}}>OPEN ATL →</button>
                </div>
              </div>

              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.1rem",flexWrap:"wrap",gap:"0.5rem"}}>
                <Mono c={`${filteredAPs.length} AIRPORT${filteredAPs.length!==1?"S":""}`} s={10} col={WH}/>
                {apActiveFilters>0&&<Mono c={`${apActiveFilters} FILTER${apActiveFilters!==1?"S":""} ACTIVE`} s={9} col={BL}/>}
              </div>

              {filteredAPs.length===0?(
                <div style={{textAlign:"center",padding:"4rem",background:ST,borderRadius:14,border:"1px solid rgba(255,255,255,.06)"}}>
                  <div style={{fontSize:36,marginBottom:"1rem"}}>✈</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,marginBottom:"0.5rem"}}>No airports match</div>
                  <div style={{fontSize:12,color:MU}}>Try adjusting your filters.</div>
                </div>
              ):(
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(245px,1fr))",gap:"1.1rem"}}>
                  {filteredAPs.map(city=>{
                    const postCount=(INIT_POSTS[city.code]||[]).length;
                    const aClass=AIRSPACE_CLASS[city.code]||"D";
                    return(
                      <div key={city.code} onClick={()=>setSelectedAP(city)} style={{cursor:"pointer",background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:13,overflow:"hidden"}}>
                        <div style={{height:120,overflow:"hidden",position:"relative"}}>
                          <img src={city.img} alt={city.name} style={{width:"100%",height:"100%",objectFit:"cover",opacity:.55}}/>
                          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(7,9,15,.9) 0%,transparent 55%)"}}/>
                          <div style={{position:"absolute",top:8,right:8,display:"flex",gap:"0.3rem"}}>
                            <span style={{background:"rgba(18,119,189,.15)",border:"1px solid rgba(18,119,189,.3)",borderRadius:20,padding:"0.14rem 0.45rem",fontFamily:"DM Mono,monospace",fontSize:8,color:BL}}>CLS {aClass}</span>
                            <span style={{display:"flex",alignItems:"center",gap:"0.25rem",background:"rgba(74,222,128,.12)",border:"1px solid rgba(74,222,128,.25)",borderRadius:20,padding:"0.14rem 0.45rem",fontFamily:"DM Mono,monospace",fontSize:8,color:"#4ade80"}}>
                              <span style={{width:4,height:4,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/>{city.pilots}P
                            </span>
                          </div>
                          <div style={{position:"absolute",bottom:8,left:11,right:11,display:"flex",alignItems:"baseline",gap:"0.4rem"}}>
                            <span style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700}}>{city.name}</span>
                            <Mono c={city.code} s={9} col={BL}/>
                          </div>
                        </div>
                        <div style={{padding:"0.75rem 0.95rem 0.9rem"}}>
                          <div style={{fontSize:11,color:MU,marginBottom:"0.55rem",lineHeight:1.5}}>{city.highlight}</div>
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(255,255,255,.05)",paddingTop:"0.5rem"}}>
                            <div style={{display:"flex",gap:"0.6rem"}}><Mono c={`${postCount} POSTS`} s={9}/><Mono c={`${city.venues}V`} s={9}/></div>
                            <span style={{fontFamily:"DM Mono,monospace",fontSize:9,color:BL}}>OPEN →</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Selected airport feed */}
        {tab==="airports"&&selectedAP&&(
          <div>
            <button onClick={()=>setSelectedAP(null)} style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"none",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,color:MU,padding:"0.38rem 0.9rem",fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer",marginBottom:"1.5rem"}}>← ALL AIRPORTS</button>
            <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
              <div style={{width:48,height:48,borderRadius:11,overflow:"hidden",flexShrink:0}}><img src={selectedAP.img} alt={selectedAP.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
              <div>
                <div style={{display:"flex",alignItems:"baseline",gap:"0.55rem"}}>
                  <span style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700}}>{selectedAP.name}</span>
                  <Mono c={selectedAP.code} s={14} col={BL} style={{fontWeight:500}}/>
                </div>
                <div style={{display:"flex",gap:"0.65rem",marginTop:"0.25rem",flexWrap:"wrap"}}>
                  <Mono c={selectedAP.airport} s={10}/>
                  <span style={{display:"flex",alignItems:"center",gap:"0.28rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:"#4ade80"}}>
                    <span style={{width:5,height:5,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/>{selectedAP.pilots} ACTIVE
                  </span>
                  <span style={{fontFamily:"DM Mono,monospace",fontSize:9,color:BL,background:"rgba(18,119,189,.1)",border:"1px solid rgba(18,119,189,.25)",padding:"0.18rem 0.5rem",borderRadius:20}}>CLASS {AIRSPACE_CLASS[selectedAP.code]||"D"}</span>
                </div>
              </div>
              <div style={{marginLeft:"auto"}}>
                <button onClick={()=>nav("city",{city:selectedAP})} style={{background:"rgba(18,119,189,.1)",color:BL,border:"1px solid rgba(18,119,189,.25)",padding:"0.45rem 1rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer"}}>CITY GUIDE →</button>
              </div>
            </div>
            <CommunityFeed
              city={selectedAP}
              posts={apPostsMap[selectedAP.code]||[]}
              pf={apPf} setPf={setApPf}
              ps={apPs} setPs={setApPs}
              composing={apComposing} setComposing={setApComposing}
              np={apNp} setNp={setApNp}
              expPost={apExpPost} setExpPost={setApExpPost}
              replyTo={apReplyTo} setReplyTo={setApReplyTo}
              replyTxt={apReplyTxt} setReplyTxt={setApReplyTxt}
              likePost={apLikePost} likeComment={apLikeComment}
              submitPost={apSubmitPost} submitReply={apSubmitReply}
              goingEvents={apGoingEvts} toggleGoing={apToggleGoing}
              cityEvents={EVENTS.filter(e=>e.code===selectedAP.code||e.loc.includes(selectedAP.st))}
              feedPosts={apFeedPosts}
            />
          </div>
        )}

        {/* ══ AIRFRAMES TAB ══ */}
        {tab==="airframes"&&!selectedAF&&(
          <div style={{display:"flex",gap:"1.5rem",alignItems:"flex-start"}}>

            {/* Airframe sidebar */}
            <SidebarPanel title="FILTER AIRFRAMES" activeCount={afActiveFilters} onClear={clearAfFilters}>
              <FSec label="SEARCH MODEL">
                <FSearch value={afModelSearch} onChange={setAfModelSearch} placeholder="e.g. 737, G650..."/>
              </FSec>
              <FSec label="CATEGORY">
                <FChips options={AF_CATS} value={afCatFilter} onChange={setAfCatFilter} multi/>
              </FSec>
              <FSec label="MANUFACTURER">
                <FChips options={AF_MAKES} value={afMakeFilter} onChange={setAfMakeFilter} multi/>
              </FSec>
              <div style={{borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:"0.85rem"}}>
                <Mono c={`${filteredAf.length} COMMUNITIES`} s={9} col={afActiveFilters>0?BL:MU}/>
              </div>
            </SidebarPanel>

            {/* Airframe grid */}
            <div style={{flex:1,minWidth:0}}>
              {/* Your airframe shortcut */}
              <div style={{background:"rgba(18,119,189,.06)",border:"1px solid rgba(18,119,189,.2)",borderRadius:13,padding:"0.85rem 1.1rem",marginBottom:"1.5rem",display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"}}>
                <div style={{width:36,height:36,borderRadius:9,background:"rgba(18,119,189,.18)",border:"1px solid rgba(18,119,189,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>✈</div>
                <div><Mono c="YOUR AIRFRAME" s={9} col={BL} style={{display:"block",marginBottom:2}}/><span style={{fontSize:13,fontWeight:500}}>Boeing 737 (B737)</span></div>
                <div style={{marginLeft:"auto"}}>
                  <button onClick={()=>setSelectedAF(AIRFRAMES.find(a=>a.id==="B737"))} style={{background:BL,color:WH,border:"none",padding:"0.38rem 0.85rem",borderRadius:9,fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer"}}>OPEN COMMUNITY →</button>
                </div>
              </div>

              {filteredAf.length===0?(
                <div style={{textAlign:"center",padding:"4rem",background:ST,borderRadius:14,border:"1px solid rgba(255,255,255,.06)"}}>
                  <div style={{fontSize:36,marginBottom:"1rem"}}>✈</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,marginBottom:"0.5rem"}}>No airframes match</div>
                  <div style={{fontSize:12,color:MU}}>Try adjusting your filters.</div>
                </div>
              ):(
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(265px,1fr))",gap:"1.1rem"}}>
                  {filteredAf.map(af=>{
                    const postCount=(INIT_AF_POSTS[af.id]||[]).length;
                    const make=getMake(af);
                    return(
                      <div key={af.id} style={{background:ST,border:"1px solid rgba(255,255,255,.07)",borderRadius:14,overflow:"hidden",cursor:"pointer"}} onClick={()=>setSelectedAF(af)}>
                        <ImgCard img={af.img} height={120} radius={14} overlay>
                          <div style={{position:"absolute",top:9,left:9,display:"flex",gap:"0.3rem",flexWrap:"wrap"}}>
                            <div style={{background:"rgba(0,0,0,.55)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,padding:"0.15rem 0.55rem"}}><Mono c={af.cat.toUpperCase()} s={9} col={WH}/></div>
                            <div style={{background:"rgba(18,119,189,.2)",border:"1px solid rgba(18,119,189,.35)",borderRadius:20,padding:"0.15rem 0.55rem"}}><Mono c={make.toUpperCase()} s={8} col={BL}/></div>
                          </div>
                          <div style={{position:"absolute",bottom:9,right:9,display:"flex",alignItems:"center",gap:"0.3rem",background:"rgba(0,0,0,.5)",backdropFilter:"blur(4px)",borderRadius:20,padding:"0.15rem 0.5rem"}}>
                            <span style={{width:5,height:5,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/><Mono c={`${af.active} ACTIVE`} s={9} col="#4ade80"/>
                          </div>
                        </ImgCard>
                        <div style={{padding:"0.9rem 1rem 1rem"}}>
                          <div style={{fontSize:14,fontWeight:500,marginBottom:"0.15rem"}}>{af.name}</div>
                          <div style={{fontSize:11,color:MU,marginBottom:"0.55rem"}}>{af.desc}</div>
                          <div style={{background:"rgba(255,255,255,.03)",borderRadius:8,padding:"0.5rem 0.75rem",marginBottom:"0.7rem",borderLeft:"2px solid rgba(18,119,189,.3)"}}>
                            <Mono c="RECENT" s={8} col={BL} style={{display:"block",marginBottom:2}}/>
                            <div style={{fontSize:11,color:MU,lineHeight:1.5,fontStyle:"italic"}}>"{af.recent}"</div>
                          </div>
                          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <div style={{display:"flex",gap:"0.55rem",alignItems:"center"}}>
                              <Mono c={`${af.members.toLocaleString()} MEMBERS`} s={9}/>
                              {postCount>0&&<Mono c={`${postCount} POSTS`} s={9} col={BL}/>}
                            </div>
                            <span style={{fontFamily:"DM Mono,monospace",fontSize:9,color:BL}}>OPEN →</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Selected airframe feed */}
        {tab==="airframes"&&selectedAF&&(
          <div>
            <button onClick={()=>{setSelectedAF(null);setAfPf("Feed");setAfPs("");}} style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"none",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,color:MU,padding:"0.38rem 0.9rem",fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer",marginBottom:"1.5rem"}}>← ALL AIRFRAMES</button>
            <div style={{background:DK,border:"1px solid rgba(255,255,255,.07)",borderRadius:14,overflow:"hidden",marginBottom:"2rem"}}>
              <div style={{height:200,position:"relative",overflow:"hidden"}}>
                <img src={selectedAF.img} alt={selectedAF.name} style={{width:"100%",height:"100%",objectFit:"cover",opacity:.45}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(7,9,15,.98) 40%,rgba(7,9,15,.5) 100%)"}}/>
                <div style={{position:"absolute",inset:0,padding:"1.75rem 2rem",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
                  <div style={{display:"flex",alignItems:"flex-end",gap:"1.25rem",flexWrap:"wrap"}}>
                    <div>
                      <div style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"0.35rem"}}>
                        <span style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:900}}>{selectedAF.name}</span>
                        <span style={{background:"rgba(18,119,189,.15)",border:"1px solid rgba(18,119,189,.3)",color:BL,fontFamily:"'DM Mono',monospace",fontSize:10,padding:"0.2rem 0.6rem",borderRadius:20}}>{selectedAF.cat.toUpperCase()}</span>
                        <span style={{background:"rgba(18,119,189,.1)",border:"1px solid rgba(18,119,189,.2)",color:BL,fontFamily:"'DM Mono',monospace",fontSize:9,padding:"0.18rem 0.55rem",borderRadius:20}}>{getMake(selectedAF).toUpperCase()}</span>
                      </div>
                      <div style={{fontSize:12,color:MU,marginBottom:"0.75rem"}}>{selectedAF.desc}</div>
                      <div style={{display:"flex",gap:"0.75rem",flexWrap:"wrap"}}>
                        <span style={{display:"flex",alignItems:"center",gap:"0.35rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:"#4ade80",background:"rgba(74,222,128,.08)",border:"1px solid rgba(74,222,128,.2)",padding:"0.22rem 0.65rem",borderRadius:20}}>
                          <span style={{width:5,height:5,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/>{selectedAF.active} ONLINE NOW
                        </span>
                        <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:MU,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",padding:"0.22rem 0.65rem",borderRadius:20}}>{selectedAF.members.toLocaleString()} MEMBERS</span>
                        {selectedAF.id===ME.airframe&&<span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:BL,background:"rgba(18,119,189,.12)",border:"1px solid rgba(18,119,189,.25)",padding:"0.22rem 0.65rem",borderRadius:20}}>✦ YOUR AIRFRAME</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CommunityFeed
              city={null}
              posts={afPostsMap[selectedAF.id]||[]}
              pf={afPf} setPf={setAfPf}
              ps={afPs} setPs={setAfPs}
              composing={afComposing} setComposing={setAfComposing}
              np={afNp} setNp={setAfNp}
              expPost={afExpPost} setExpPost={setAfExpPost}
              replyTo={afReplyTo} setReplyTo={setAfReplyTo}
              replyTxt={afReplyTxt} setReplyTxt={setAfReplyTxt}
              likePost={afLikePost} likeComment={afLikeComment}
              submitPost={afSubmitPost} submitReply={afSubmitReply}
              goingEvents={new Set()} toggleGoing={null} cityEvents={[]}
              feedPosts={afFeedPosts}
              contextLabel={`${selectedAF.short.toUpperCase()} COMMUNITY`}
              contextSubtitle={`${selectedAF.name} crew notes.`}
            />
          </div>
        )}

        {/* ══ EVENTS TAB ══ */}
        {tab==="events"&&!selectedEV&&(
          <div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
              <div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.4rem,3vw,2rem)",fontWeight:700,marginBottom:"0.2rem"}}>Events & Pilot Meetups</div>
                <div style={{fontSize:12,color:MU}}>Tap any event to join the crew discussion thread.</div>
              </div>
              <div style={{display:"flex",alignItems:"center",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,padding:"0.28rem 0.85rem",gap:"0.35rem"}}>
                <span style={{color:MU,fontSize:11}}>🔍</span>
                <input value={evSearch} onChange={e=>setEvSearch(e.target.value)} placeholder="Search..." style={{background:"none",border:"none",outline:"none",color:WH,fontFamily:"inherit",fontSize:12,fontWeight:300,width:150}}/>
              </div>
            </div>
            <div style={{display:"flex",gap:"0.35rem",marginBottom:"1.75rem",flexWrap:"wrap"}}>
              {EV_CATS.map(c=><Pill key={c} label={c.toUpperCase()} active={evCat===c} onClick={()=>setEvCat(c)}/>)}
            </div>
            {goingEvts.size>0&&(
              <div style={{background:"rgba(74,222,128,.06)",border:"1px solid rgba(74,222,128,.15)",borderRadius:9,padding:"0.75rem 1.05rem",marginBottom:"1.4rem",display:"flex",alignItems:"center",gap:"0.65rem",flexWrap:"wrap"}}>
                <span style={{width:7,height:7,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/>
                <Mono c={`GOING TO ${goingEvts.size} EVENT${goingEvts.size>1?"S":""}`} s={10} col="#4ade80"/>
                <div style={{display:"flex",gap:"0.35rem",flexWrap:"wrap"}}>
                  {[...goingEvts].map(id=>{const ev=EVENTS.find(e=>e.id===id);return ev?<span key={id} style={{background:"rgba(74,222,128,.1)",border:"1px solid rgba(74,222,128,.2)",borderRadius:20,padding:"0.14rem 0.55rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:"#4ade80"}}>{ev.name}</span>:null;})}
                </div>
              </div>
            )}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(305px,1fr))",gap:"1.4rem"}}>
              {filteredEv.map(ev=>{
                const going=goingEvts.has(ev.id);
                const postCount=(INIT_EV_POSTS[ev.id]||[]).length;
                return(
                  <div key={ev.id} style={{background:ST,border:going?`1px solid rgba(74,222,128,.25)`:"1px solid rgba(255,255,255,.07)",borderRadius:14,overflow:"hidden",cursor:"pointer"}} onClick={()=>setSelectedEV(ev)}>
                    <ImgCard img={ev.img} height={175} radius={14} overlay>
                      <div style={{position:"absolute",top:10,left:10,background:"rgba(0,0,0,.6)",backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,.12)",borderRadius:20,padding:"0.18rem 0.65rem"}}><Mono c={ev.cat.toUpperCase()} s={9} col={WH}/></div>
                      <div style={{position:"absolute",top:10,right:10,background:"rgba(0,0,0,.6)",backdropFilter:"blur(6px)",borderRadius:20,padding:"0.18rem 0.65rem"}}><Mono c={`${ev.going+(going?1:0)} GOING`} s={9} col={going?"#4ade80":MU}/></div>
                      <div style={{position:"absolute",bottom:10,left:12,right:12}}>
                        <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,textShadow:"0 1px 8px rgba(0,0,0,.8)"}}>{ev.name}</div>
                        <div style={{display:"flex",alignItems:"center",gap:"0.45rem",marginTop:"0.2rem"}}><Mono c={ev.date} s={10} col={BL}/><Mono c="·" s={10}/><Mono c={ev.loc} s={10}/></div>
                      </div>
                    </ImgCard>
                    <div style={{padding:"0.9rem 1.05rem 1.05rem"}}>
                      <p style={{fontSize:12,color:MU,lineHeight:1.65,marginBottom:"0.75rem"}}>{ev.desc}</p>
                      <div style={{display:"flex",gap:"0.3rem",flexWrap:"wrap",marginBottom:"0.85rem"}}>
                        {ev.tags.map(t=><span key={t} style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:MU,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",padding:"0.14rem 0.48rem",borderRadius:20}}>{t}</span>)}
                      </div>
                      <div style={{display:"flex",gap:"0.5rem",alignItems:"center",borderTop:"1px solid rgba(255,255,255,.05)",paddingTop:"0.75rem"}}>
                        <button onClick={e=>{e.stopPropagation();toggleGoing(ev.id);}} style={{flex:1,padding:"0.5rem",borderRadius:8,border:`1px solid ${going?"rgba(74,222,128,.3)":"rgba(255,255,255,.1)"}`,background:going?"rgba(74,222,128,.1)":"transparent",color:going?"#4ade80":MU,fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer"}}>{going?"✓ GOING":"I'M GOING"}</button>
                        <button onClick={e=>{e.stopPropagation();setSelectedEV(ev);}} style={{display:"flex",alignItems:"center",gap:"0.35rem",padding:"0.5rem 0.85rem",borderRadius:8,border:"1px solid rgba(18,119,189,.3)",background:"rgba(18,119,189,.08)",color:BL,fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer",whiteSpace:"nowrap"}}>
                          💬 {postCount} DISCUSSION
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected event feed */}
        {tab==="events"&&selectedEV&&(
          <div>
            <button onClick={()=>{setSelectedEV(null);setEvPf("Feed");setEvPs("");}} style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"none",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,color:MU,padding:"0.38rem 0.9rem",fontFamily:"'DM Mono',monospace",fontSize:10,cursor:"pointer",marginBottom:"1.5rem"}}>← ALL EVENTS</button>
            <div style={{background:DK,border:"1px solid rgba(255,255,255,.07)",borderRadius:14,overflow:"hidden",marginBottom:"2rem"}}>
              <div style={{height:220,position:"relative",overflow:"hidden"}}>
                <img src={selectedEV.img} alt={selectedEV.name} style={{width:"100%",height:"100%",objectFit:"cover",opacity:.4}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(7,9,15,.97) 40%,rgba(7,9,15,.5) 100%)"}}/>
                <div style={{position:"absolute",inset:0,padding:"1.75rem 2rem",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
                  <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem"}}>
                    <div>
                      <div style={{display:"flex",alignItems:"center",gap:"0.55rem",marginBottom:"0.4rem",flexWrap:"wrap"}}>
                        <span style={{background:"rgba(0,0,0,.5)",border:"1px solid rgba(255,255,255,.15)",color:WH,fontFamily:"'DM Mono',monospace",fontSize:9,padding:"0.2rem 0.6rem",borderRadius:20}}>{selectedEV.cat.toUpperCase()}</span>
                        <Mono c={selectedEV.date} s={10} col={BL}/><Mono c="·" s={10}/><Mono c={selectedEV.loc} s={10}/>
                      </div>
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.4rem,3vw,2.2rem)",fontWeight:900,marginBottom:"0.5rem"}}>{selectedEV.name}</div>
                      <div style={{display:"flex",gap:"0.6rem",flexWrap:"wrap"}}>
                        <span style={{display:"flex",alignItems:"center",gap:"0.35rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:"#4ade80",background:"rgba(74,222,128,.08)",border:"1px solid rgba(74,222,128,.2)",padding:"0.22rem 0.65rem",borderRadius:20}}>
                          <span style={{width:5,height:5,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/>{selectedEV.going+(goingEvts.has(selectedEV.id)?1:0)} GOING
                        </span>
                        {selectedEV.tags&&selectedEV.tags.map(t=><span key={t} style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:MU,background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.12)",padding:"0.2rem 0.55rem",borderRadius:20}}>{t}</span>)}
                      </div>
                    </div>
                    <button onClick={()=>toggleGoing(selectedEV.id)} style={{flexShrink:0,padding:"0.6rem 1.25rem",borderRadius:9,border:`1px solid ${goingEvts.has(selectedEV.id)?"rgba(74,222,128,.3)":"rgba(255,255,255,.2)"}`,background:goingEvts.has(selectedEV.id)?"rgba(74,222,128,.15)":"rgba(255,255,255,.05)",color:goingEvts.has(selectedEV.id)?"#4ade80":WH,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer"}}>{goingEvts.has(selectedEV.id)?"✓ YOU'RE GOING":"MARK AS GOING"}</button>
                  </div>
                </div>
              </div>
            </div>
            <CommunityFeed
              city={null}
              posts={evPostsMap[selectedEV.id]||[]}
              pf={evPf} setPf={setEvPf}
              ps={evPs} setPs={setEvPs}
              composing={evComposing} setComposing={setEvComposing}
              np={evNp} setNp={setEvNp}
              expPost={evExpPost} setExpPost={setEvExpPost}
              replyTo={evReplyTo} setReplyTo={setEvReplyTo}
              replyTxt={evReplyTxt} setReplyTxt={setEvReplyTxt}
              likePost={evLikePost} likeComment={evLikeComment}
              submitPost={evSubmitPost} submitReply={evSubmitReply}
              goingEvents={new Set()} toggleGoing={null} cityEvents={[]}
              feedPosts={evFeedPosts}
              contextLabel={`${selectedEV.name.toUpperCase()} · CREW THREAD`}
              contextSubtitle="Crew intel, meetups & access tips."
            />
          </div>
        )}

      </div>
    </div>
  );
}

export default CommunityPage;