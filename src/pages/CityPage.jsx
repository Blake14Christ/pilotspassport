import React, { useState } from "react";
import { BL, NV, DK, ST, MU, WH, BC, PT, INIT_POSTS, VENUES, ME, EVENTS } from "../shared/data";
import { Av, Mono, Pill, ImgCard } from "../shared/ui";
import { CommunityFeed } from "./CommunityPage";

function CityPage({city,nav}){
  const [tab,setTab]=useState("venues");
  const [cat,setCat]=useState("All");
  const [saved,setSaved]=useState(new Set());
  const [expanded,setExpanded]=useState(null);
  const [search,setSearch]=useState("");
  const [posts,setPosts]=useState(()=>JSON.parse(JSON.stringify(INIT_POSTS[city.code]||[])));
  const [pf,setPf]=useState("Feed");
  const [ps,setPs]=useState("");
  const [composing,setComposing]=useState(false);
  const [np,setNp]=useState({title:"",body:"",tag:"Tip"});
  const [expPost,setExpPost]=useState(null);
  const [replyTo,setReplyTo]=useState(null);
  const [replyTxt,setReplyTxt]=useState("");
  const [goingEvts,setGoingEvts]=useState(new Set());

  const CATS=["All","Dining","Hotels","Golf","Bars","Fitness"];
  const allSec=VENUES[city.code]||[];
  const venueSec=allSec.filter(s=>!s.isOps&&!s.isNote).map(s=>({...s,items:s.items.filter(i=>{
    const mc=cat==="All"||i.cat===cat;
    const ms=search===""||i.name.toLowerCase().includes(search.toLowerCase());
    return mc&&ms;
  })})).filter(s=>s.items.length>0);

  const feedPosts=posts.filter(p=>{
    const mf=pf==="Feed"||p.tag===pf.replace(/s$/,"");
    const ms=ps===""||p.title.toLowerCase().includes(ps.toLowerCase());
    return mf&&ms;
  }).sort((a,b)=>b.pinned-a.pinned);

  const likePost=id=>setPosts(p=>p.map(x=>x.id===id?{...x,liked:!x.liked,upvotes:x.liked?x.upvotes-1:x.upvotes+1}:x));
  const likeComment=(pid,cid)=>setPosts(p=>p.map(x=>x.id===pid?{...x,comments:x.comments.map(c=>c.id===cid?{...c,liked:!c.liked,upvotes:c.liked?c.upvotes-1:c.upvotes+1}:c)}:x));
  const submitPost=()=>{
    if(!np.title.trim()||!np.body.trim())return;
    const post={id:Date.now(),author:ME.handle,airline:ME.airline,base:ME.base,rank:ME.rank,avatar:ME.avatar,tag:np.tag,time:"just now",title:np.title,body:np.body,upvotes:1,liked:true,pinned:false,comments:[]};
    setPosts(p=>[post,...p]);setNp({title:"",body:"",tag:"Tip"});setComposing(false);setExpPost(post.id);
  };
  const submitReply=pid=>{
    if(!replyTxt.trim())return;
    const c={id:Date.now(),author:ME.handle,airline:ME.airline,base:ME.base,avatar:ME.avatar,time:"just now",text:replyTxt,upvotes:1,liked:true};
    setPosts(p=>p.map(x=>x.id===pid?{...x,comments:[...x.comments,c]}:x));
    setReplyTxt("");setReplyTo(null);
  };
  const cityEvents=EVENTS.filter(e=>e.code===city.code||e.loc.includes(city.st));
  const toggleGoing=id=>setGoingEvts(prev=>{const n=new Set(prev);n.has(id)?n.delete(id):n.add(id);return n;});

  return(
    <div>
      <div style={{background:DK,borderBottom:"1px solid rgba(255,255,255,.05)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,opacity:.15}}><img src={city.img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(7,9,15,.98) 50%,rgba(7,9,15,.7) 100%)"}}/>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"2.5rem 2rem 0",position:"relative"}}>
          <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"2rem",marginBottom:"2rem"}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
                <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.2rem,5vw,3.5rem)",fontWeight:900,lineHeight:1,letterSpacing:"-0.02em"}}>{city.name}</h1>
                <div><Mono c={city.code} s={20} col={BL} style={{fontWeight:500,display:"block"}}/><Mono c="ACTIVE" s={9} style={{display:"block",marginTop:2}}/></div>
              </div>
              <p style={{color:MU,fontSize:13,marginBottom:"1rem"}}>{city.airport} · {city.st}</p>
              <div style={{display:"flex",gap:"0.5rem",flexWrap:"wrap"}}>
                <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:MU,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",padding:"0.22rem 0.65rem",borderRadius:20}}>{city.venues} VENUES</span>
                <span style={{display:"flex",alignItems:"center",gap:"0.4rem",fontFamily:"'DM Mono',monospace",fontSize:9,color:"#4ade80",background:"rgba(74,222,128,.08)",border:"1px solid rgba(74,222,128,.2)",padding:"0.22rem 0.65rem",borderRadius:20}}>
                  <span style={{width:5,height:5,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px rgba(74,222,128,.6)",display:"inline-block"}}/>{city.pilots} PILOTS ACTIVE
                </span>
              </div>
            </div>
          </div>
          <div style={{display:"flex",gap:0,borderTop:"1px solid rgba(255,255,255,.05)"}}>
            {[{id:"venues",l:"Venues & Guide"},{id:"community",l:"Crew Community",n:posts.length}].map(t=>(
              <button key={t.id} onClick={()=>setTab(t.id)} style={{cursor:"pointer",background:"none",border:"none",borderBottom:tab===t.id?`2px solid ${BL}`:"2px solid transparent",color:tab===t.id?WH:MU,padding:"1rem 1.5rem",fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.1em",display:"flex",alignItems:"center",gap:"0.5rem",transition:"all .15s"}}>
                {t.l.toUpperCase()}
                {t.n>0&&<span style={{background:tab===t.id?BL:"rgba(255,255,255,.08)",color:tab===t.id?WH:MU,fontFamily:"'DM Mono',monospace",fontSize:9,padding:"0.12rem 0.42rem",borderRadius:10}}>{t.n}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:1280,margin:"0 auto",padding:"2.5rem 2rem 5rem"}}>
        {tab==="venues"&&(
          !VENUES[city.code]?(
            <div style={{textAlign:"center",padding:"5rem 2rem",background:ST,borderRadius:16,border:"1px solid rgba(255,255,255,.06)"}}>
              <div style={{fontSize:48,marginBottom:"1.5rem"}}>✈</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:700,marginBottom:"0.75rem"}}>Full guide launching soon</div>
              <p style={{color:MU,fontSize:14,maxWidth:360,margin:"0 auto 2rem",lineHeight:1.7}}>We're on the ground in {city.name} verifying venues and negotiating pilot rates.</p>
              <button onClick={()=>setTab("community")} style={{background:BL,color:WH,border:"none",padding:"0.75rem 1.75rem",borderRadius:10,fontFamily:"'DM Mono',monospace",fontSize:11,cursor:"pointer"}}>JOIN CREW COMMUNITY →</button>
            </div>
          ):(
            <div>
              <div style={{display:"flex",alignItems:"center",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:12,padding:"0 1.25rem",gap:"0.75rem",height:48,marginBottom:"0.85rem"}}>
                <span style={{color:BL}}>✈</span>
                <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={`Search venues near ${city.code}...`} style={{background:"none",border:"none",outline:"none",color:WH,fontFamily:"inherit",fontSize:14,fontWeight:300,width:"100%"}}/>
              </div>
              <div style={{display:"flex",gap:"0.4rem",marginBottom:"2rem",flexWrap:"wrap",borderBottom:"1px solid rgba(255,255,255,.06)",paddingBottom:"0.85rem"}}>
                {CATS.map(c=><Pill key={c} label={c.toUpperCase()} active={cat===c} onClick={()=>setCat(c)}/>)}
              </div>
              {venueSec.map(sec=>(
                <section key={sec.title} style={{marginBottom:"2.5rem"}}>
                  <div style={{marginBottom:"1.1rem"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.25rem"}}><span style={{width:16,height:1,background:BL,display:"inline-block"}}/><Mono c={sec.label.toUpperCase()} s={10} col={BL}/></div>
                    <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.2rem,2.5vw,1.75rem)",fontWeight:700}}>{sec.title}</div>
                    {sec.sub&&<div style={{fontSize:12,color:MU,marginTop:"0.15rem"}}>{sec.sub}</div>}
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(265px,1fr))",gap:"1.1rem"}}>
                    {sec.items.map(item=>{
                      const b=BC[item.badge]||BC["Verified"];
                      const sv=saved.has(item.code);
                      const ex=expanded===item.code;
                      return(
                        <div key={item.code} style={{background:ST,border:ex?`1px solid ${BL}`:"1px solid rgba(255,255,255,.07)",borderRadius:14,overflow:"hidden",cursor:"pointer"}} onClick={()=>setExpanded(ex?null:item.code)}>
                          <ImgCard img={item.img} height={170} radius={14}>
                            <div style={{position:"absolute",top:10,left:10,background:b.bg,color:b.t,fontFamily:"'DM Mono',monospace",fontSize:9,padding:"0.2rem 0.55rem",borderRadius:20,backdropFilter:"blur(8px)",border:`1px solid ${b.t}30`}}>{item.badge.toUpperCase()}</div>
                            <button onClick={e=>{e.stopPropagation();setSaved(prev=>{const n=new Set(prev);n.has(item.code)?n.delete(item.code):n.add(item.code);return n;})}} style={{position:"absolute",top:8,right:10,background:"none",border:"none",cursor:"pointer",color:sv?"#ef4444":"rgba(255,255,255,.6)",fontSize:17,zIndex:2}}>{sv?"♥":"♡"}</button>
                          </ImgCard>
                          <div style={{padding:"0.85rem 1rem 1rem"}}>
                            <div style={{fontSize:14,fontWeight:500,marginBottom:"0.2rem"}}>{item.name}</div>
                            <div style={{fontSize:11,color:MU}}>{item.tag}</div>
                            {item.meta&&(
                              <div style={{marginTop:"0.6rem",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid rgba(255,255,255,.05)",paddingTop:"0.6rem"}}>
                                <div style={{display:"flex",alignItems:"center",gap:"0.4rem"}}><span style={{color:BL,fontSize:10}}>✈</span><Mono c={item.meta} s={10}/></div>
                                <button style={{background:"rgba(18,119,189,.1)",color:BL,border:"1px solid rgba(18,119,189,.2)",padding:"0.22rem 0.55rem",borderRadius:7,fontFamily:"'DM Mono',monospace",fontSize:9,cursor:"pointer"}}>{ex?"CLOSE":"VIEW →"}</button>
                              </div>
                            )}
                            {ex&&<div style={{marginTop:"0.7rem",padding:"0.7rem 0.85rem",background:"rgba(18,119,189,.06)",border:"1px solid rgba(18,119,189,.15)",borderRadius:9,fontSize:12,color:MU,lineHeight:1.7}}><span style={{color:WH,fontWeight:500}}>✦ Pilot Passport Perk — </span>Show member credentials to unlock your rate.</div>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )
        )}

        {tab==="community"&&(
          <CommunityFeed city={city} posts={posts} pf={pf} setPf={setPf} ps={ps} setPs={setPs}
            composing={composing} setComposing={setComposing} np={np} setNp={setNp}
            expPost={expPost} setExpPost={setExpPost} replyTo={replyTo} setReplyTo={setReplyTo}
            replyTxt={replyTxt} setReplyTxt={setReplyTxt}
            likePost={likePost} likeComment={likeComment} submitPost={submitPost} submitReply={submitReply}
            goingEvents={goingEvts} toggleGoing={toggleGoing} cityEvents={cityEvents} feedPosts={feedPosts}
          />
        )}
      </div>
    </div>
  );
}

export default CityPage;
