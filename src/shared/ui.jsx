import React from "react";
import { BL, ST, MU, WH } from "./data";

const Av=({init,size=36})=>(
  <div style={{width:size,height:size,borderRadius:"50%",background:"rgba(18,119,189,.18)",border:"1px solid rgba(18,119,189,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Mono',monospace",fontSize:size*.32,fontWeight:500,color:BL,flexShrink:0}}>{init}</div>
);
const Mono=({c,s=11,col=MU,style={}})=>(
  <span style={{fontFamily:"'DM Mono',monospace",fontSize:s,color:col,letterSpacing:"0.12em",...style}}>{c}</span>
);
const Pill=({label,active,onClick})=>(
  <button onClick={onClick} style={{cursor:"pointer",border:`1px solid ${active?BL:"rgba(255,255,255,.1)"}`,background:active?BL:"transparent",color:active?WH:MU,padding:"0.28rem 0.75rem",borderRadius:20,fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:"0.1em",whiteSpace:"nowrap",fontWeight:active?500:400,transition:"all .15s"}}>{label}</button>
);

function ImgCard({img,height=190,radius=14,children,overlay=true}){
  return(
    <div style={{position:"relative",height,borderRadius:`${radius}px ${radius}px 0 0`,overflow:"hidden",background:ST}}>
      {img?<img src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        :<div style={{width:"100%",height:"100%",background:`linear-gradient(135deg,${ST} 0%,#1a2540 100%)`}}/>}
      {overlay&&img&&<div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(7,9,15,.88) 0%,transparent 55%)"}}/>}
      {children}
    </div>
  );
}

// ─── NAV ──────────────────────────────

export { Av, Mono, Pill, ImgCard };
