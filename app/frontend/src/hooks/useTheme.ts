import { useEffect, useState } from 'react';
export function useTheme(){ const [theme,setTheme]=useState<'light'|'dark'>('light'); useEffect(()=>{document.documentElement.dataset.theme=theme;},[theme]); return {theme,toggleTheme:()=>setTheme(t=>t==='light'?'dark':'light')}; }
