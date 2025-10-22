import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.Be8AcK8B.js";const s=()=>{const[t,o]=r.useState(!0);return r.useEffect(()=>{const i=()=>{window.scrollY===0?o(!0):o(!1)};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),e.jsxs("div",{style:{position:"fixed",left:"50%",top:"87%",transform:"translateX(-50%)",opacity:t?1:0,visibility:t?"visible":"hidden",transition:"all 0.5s ease",zIndex:10,pointerEvents:"none"},className:"flex flex-col justify-center items-center ",children:[e.jsxs("div",{className:"relative flex flex-col items-center",children:[e.jsx("div",{style:{width:12,position:"relative",height:12,borderLeft:"3px solid #f1ca13",borderBottom:"3px solid #f1ca13",transform:"rotate(-45deg)",animation:t?"bounceDown 1s ease-in-out infinite":"none",animationDelay:"0s",filter:"drop-shadow(0 0 3px rgba(241, 202, 19, 0.4))"}}),e.jsx("div",{style:{position:"relative",width:18,height:18,borderLeft:"3px solid #f1ca13",borderBottom:"3px solid #f1ca13",transform:"rotate(-45deg)",animation:t?"bounceDown 1s ease-in-out infinite":"none",animationDelay:"0.3s",filter:"drop-shadow(0 0 5px rgba(241, 202, 19, 0.5))",marginTop:"-2px"}}),e.jsx("div",{style:{position:"relative",width:24,height:24,borderLeft:"4px solid #f1ca13",borderBottom:"4px solid #f1ca13",transform:"rotate(-45deg)",animation:t?"bounceDown 1s ease-in-out infinite":"none",animationDelay:"0.6s",filter:"drop-shadow(0 0 8px rgba(241, 202, 19, 0.6))",marginTop:"-3px"}})]}),e.jsx("div",{style:{width:"2px",height:"40px",background:"linear-gradient(to bottom, transparent, #f1ca13, transparent)",animation:t?"slideDown 2s ease-in-out infinite":"none",marginTop:"8px",borderRadius:"1px"}}),e.jsx("style",{children:`
                @keyframes bounceDown {
                    0%, 100% { 
                        top:0px;
                        opacity: 0.7;
                    }
                    50% { 
                        top:8px;
                        opacity: 1;
                    }
                }

                @keyframes slideDown {
                    0% {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                }

                /* Animation au survol pour plus d'interactivité */
                @media (hover: hover) {
                    .scroll-arrow-container:hover .arrow {
                        animation-duration: 1s !important;
                        transform: rotate(-45deg) scale(1.1);
                    }
                }
            `})]})};export{s as default};
