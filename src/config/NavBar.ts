export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}


export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Cart', path: '/checkout' },

];