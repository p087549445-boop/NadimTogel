import { Home, Gamepad2, User, Trophy, Wallet } from "lucide-react";
import { useState } from "react";

interface NavItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { 
    id: 'home', 
    name: 'Home', 
    icon: <Home className="h-5 w-5" />
  },
  { 
    id: 'games', 
    name: 'Games', 
    icon: <Gamepad2 className="h-5 w-5" />
  },
  { 
    id: 'promo', 
    name: 'Promo', 
    icon: <Trophy className="h-5 w-5" />
  },
  { 
    id: 'wallet', 
    name: 'Wallet', 
    icon: <Wallet className="h-5 w-5" />
  },
  { 
    id: 'profile', 
    name: 'Profile', 
    icon: <User className="h-5 w-5" />
  },
];

export default function BottomNav() {
  const [active, setActive] = useState('home');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              active === item.id ? 'text-primary' : 'text-muted-foreground'
            }`}
            data-testid={`button-nav-${item.id}`}
            onClick={() => {
              setActive(item.id);
              console.log(`Nav ${item.name} clicked`);
            }}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
