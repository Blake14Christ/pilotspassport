import { NV } from "./data";

const CSS=`
  *{box-sizing:border-box;margin:0;padding:0;}
  html,body,#root{width:100%;min-height:100%;overflow-x:hidden;background:${NV};}
  ::-webkit-scrollbar{width:4px;height:4px;}
  ::-webkit-scrollbar-thumb{background:rgba(18,119,189,.3);border-radius:2px;}
  button:focus{outline:none;}
  button,input,textarea,select{font:inherit;}
  img{display:block;max-width:100%;}
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
  @media(max-width:900px){
    [style*="grid-template-columns: repeat(3,1fr)"]{grid-template-columns:1fr !important;}
    [style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr !important;}
  }
`;

// ─── JOBS PAGE ────────────────────────


export { CSS };
