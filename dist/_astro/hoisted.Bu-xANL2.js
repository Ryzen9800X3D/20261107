import"./hoisted.D7EsErFi.js";const x=document.getElementById("backToTop");window.addEventListener("scroll",()=>{window.scrollY>300?x?.classList.add("show"):x?.classList.remove("show")});x?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".article-content pre").forEach(e=>{if(e.querySelector(".line-copy-btn"))return;const g=e.querySelector("code")?.textContent||e.textContent,y=g.split(`
`),m=(Array.from(e.classList).find(o=>o.startsWith("language-"))||"bash").replace("language-","").toUpperCase();e.innerHTML="",e.style.position="relative",e.style.paddingTop="0",e.style.borderRadius="12px",e.style.overflow="hidden",e.style.border="1px solid rgba(255,255,255,0.08)",e.style.boxShadow="0 8px 32px rgba(0,0,0,0.4)";const i=document.createElement("div");i.className="code-title-bar",i.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    `;const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 12px;";const c=document.createElement("div");c.style.cssText="display: flex; gap: 8px;",["red","yellow","green"].forEach(o=>{const r=document.createElement("div");r.style.cssText=`
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${o==="red"?"#FF5F56":o==="yellow"?"#FFBD2E":"#27C93F"};
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.2);
      `,c.appendChild(r)});const p=document.createElement("span");p.style.cssText=`
      color: rgba(255, 255, 255, 0.5);
      font-family: 'SF Mono', 'Fira Code', monospace;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.5px;
    `,p.textContent=m,a.appendChild(c),a.appendChild(p);const s=document.createElement("button");s.className="all-copy-btn",s.title="複製全部",s.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(g),s.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#27C93F" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',setTimeout(()=>{s.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'},2e3)}catch(o){console.error("複製失敗:",o)}}),i.appendChild(a),i.appendChild(s);const l=document.createElement("div");l.className="code-lines",l.style.cssText="padding: 12px 16px; overflow-x: auto;",y.forEach((o,r)=>{const n=document.createElement("div");n.className="code-line",n.style.cssText=`
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 2px 8px;
        border-radius: 6px;
        transition: all 0.15s ease;
        min-height: 24px;
        position: relative;
      `;const h=document.createElement("span");h.style.cssText=`
        color: rgba(255, 255, 255, 0.2);
        font-family: 'SF Mono', 'Fira Code', monospace;
        font-size: 12px;
        min-width: 24px;
        text-align: right;
        user-select: none;
        flex-shrink: 0;
      `,h.textContent=r+1;const d=document.createElement("span");d.className="code-line-content",d.textContent=o,d.style.cssText=`
        flex: 1;
        font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
        font-size: 13px;
        line-height: 1.7;
        color: inherit;
        white-space: pre;
      `;const t=document.createElement("button");t.className="line-copy-btn",t.title="複製此行",t.style.cssText=`
        opacity: 0;
        background: transparent;
        border: none;
        padding: 4px;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.3);
        transition: all 0.15s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border-radius: 4px;
      `,t.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',t.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(o),t.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#27C93F" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',setTimeout(()=>{t.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'},2e3)}catch(u){console.error("複製失敗:",u)}}),n.addEventListener("mouseenter",()=>{n.style.background="rgba(255, 255, 255, 0.04)",t.style.opacity="1",t.style.color="rgba(255, 255, 255, 0.6)"}),n.addEventListener("mouseleave",()=>{n.style.background="transparent",t.style.opacity="0",t.style.color="rgba(255, 255, 255, 0.3)"}),n.appendChild(h),n.appendChild(d),n.appendChild(t),l.appendChild(n)}),e.appendChild(i),e.appendChild(l)})});
