import './NavBar.css';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Offers', href: '#' },
  { label: 'Impressions', href: '#' },
  { label: 'Contact', href: '#' },
];

export default NavBar;

function NavBar() {
  return (
    <header className="navBar">
      <div className="navBarBrand">Alava</div>
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <a href={item.href}>{item.label}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
