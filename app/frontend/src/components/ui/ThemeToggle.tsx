import { useTheme } from '../../hooks/useTheme';
import { Button } from './Button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <Button onClick={toggleTheme}>{theme === 'light' ? 'Mode sombre' : 'Mode clair'}</Button>;
}
