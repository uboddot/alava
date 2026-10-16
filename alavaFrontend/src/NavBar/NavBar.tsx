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
import InstagramIcon from '../Icons/InstagramIcon';
import { sections } from '../sections';
import { instagram } from '../socials';

export default NavBar;

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navBar">
      <a href="#intro" className="navBarBrand">Àlava</a>

      <div className="navBarActions">
        {/* Desktop: horizontal links */}
        <NavigationMenu className="navBarDesktop">
          <NavigationMenuList>
            {sections.filter(section => !section.navignore).map((section) => (
              <NavigationMenuItem key={section.id}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href={`#${section.id}`}>{section.label}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <span className="navBarDivider" aria-hidden="true" />

        <Button asChild variant="ghost" size="icon" className="navBarIconButton">
          <a href={instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Alava on Instagram">
            <InstagramIcon />
          </a>
        </Button>

        {/* Mobile: menu button opening a side sheet */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="navBarIconButton navBarMobileTrigger" aria-label="Open menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="navBarSheet">
            <SheetHeader>
              <SheetTitle className="navBarSheetTitle">
                <a href="#intro" onClick={() => setMenuOpen(false)}>Àlava</a>
              </SheetTitle>
            </SheetHeader>
            <nav className="navBarMobileLinks">
              {sections.filter(section => !section.navignore).map((section) => (
                <a key={section.id} href={`#${section.id}`} onClick={() => setMenuOpen(false)}>
                  {section.label}
                </a>
              ))}
              <div style={{display: 'flex', justifyContent: 'center' }}>
                <hr style={{ maxWidth: '10rem', width: '100%'}} />
              </div>
              <a
                className="navBarMobileInstagram"
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alava on Instagram"
              >
                <InstagramIcon />
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
