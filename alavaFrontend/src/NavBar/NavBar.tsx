import './NavBar.css';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { sections } from '../sections';

export default NavBar;

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navBar">
      <a href="#intro" className="navBarBrand">Alava</a>

      {/* Desktop: horizontal links */}
      <NavigationMenu className="navBarDesktop">
        <NavigationMenuList>
          {sections.map((section) => (
            <NavigationMenuItem key={section.id}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <a href={`#${section.id}`}>{section.label}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile: menu button opening a side sheet */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="navBarMobileTrigger" aria-label="Open menu">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Alava</SheetTitle>
          </SheetHeader>
          <nav className="navBarMobileLinks">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} onClick={() => setMenuOpen(false)}>
                {section.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
