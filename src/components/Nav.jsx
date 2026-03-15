import React from "react";
import { BL, MU, WH, ME } from "../shared/data";
import { Av, Mono } from "../shared/ui";

function Nav({ page, nav, unreadCount }){
  return(
    <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(7,9,15,.96)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255,255,255,.06)",padding:"0 2rem"}}>
      <div style={{maxWidth:1280,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:60}}>
        <button onClick={()=>nav("home")} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"}}>
          <Mono c="PILOTS ✈️" s={13} col={BL} style={{letterSpacing:"0.2em",fontWeight:500}}/>
          
          <Mono c="PASSPORT" s={13} style={{letterSpacing:"0.15em"}}/>
        </button>
        <div style={{display:"flex",gap:"0.1rem"}}>
          {[["home","Home"],["cities","Cities"],["community","Community"],["jobs","Jobs"],/*["network","Network"],["membership","Membership"]*/].map(([p,l])=>(
            <button key={p} onClick={()=>nav(p)} style={{background:page===p?"rgba(18,119,189,.12)":"none",border:"none",cursor:"pointer",color:page===p?WH:MU,padding:"0.5rem 0.9rem",borderRadius:6,fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:"0.09em",transition:"all .15s"}}>{l.toUpperCase()}</button>
          ))}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
        <button onClick={() => nav("inbox")} style={{position:"relative",display:"flex",alignItems:"center",gap:"0.45rem",background:"rgba(18,119,189,.12)",border:"1px solid rgba(18,119,189,.25)",padding:"0.35rem 0.9rem",borderRadius:6,cursor:"pointer",color:WH,transition:"all .15s ease"}}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(18,119,189,.18)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(18,119,189,.12)"}>
          <span style={{fontSize:14}}>✉</span>
          <Mono c="INBOX" s={11} col={BL} />
          <span style={{position:"absolute",top:-4,right:-4,minWidth:16,height:16,borderRadius:"50%",background:BL,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:WH,fontWeight:700,padding:"0 4px"}}>2
          </span>
          </button>
          <button onClick={()=>nav("profile")} style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"none",border:"none",cursor:"pointer",padding:"0.25rem 0.5rem",borderRadius:8,transition:"background .15s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.05)"} onMouseLeave={e=>e.currentTarget.style.background="none"}>
            <Av init={ME.avatar} size={28}/><Mono c={ME.handle} s={11} col={page==="profile"?WH:MU}/>
          </button>
        </div>
      </div>
    </nav>
  );
}

// Memeber Label <div style={{background:"rgba(18,119,189,.12)",border:"1px solid rgba(18,119,189,.25)",padding:"0.35rem 0.9rem",borderRadius:6}}><Mono c="✦ MEMBER" s={11} col={BL}/></div>

export default Nav;
