import { useTheme } from '../../hooks/useTheme';
export function ThemeToggle(){ const {theme,toggleTheme}=useTheme(); return <button onClick={toggleTheme}>Thème {theme==='light'?'clair':'sombre'}</button>; }
