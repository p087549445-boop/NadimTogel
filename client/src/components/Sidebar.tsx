import { X, Home, Wallet, ArrowDownToLine, History, Receipt, Gift, Trophy, MessageCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { id: 'deposit', label: 'Deposit', icon: <Wallet className="h-5 w-5" /> },
  { id: 'withdraw', label: 'Withdraw', icon: <ArrowDownToLine className="h-5 w-5" /> },
  { id: 'history', label: 'History', icon: <History className="h-5 w-5" /> },
  { id: 'transaksi', label: 'Transaksi', icon: <Receipt className="h-5 w-5" /> },
  { id: 'invoice', label: 'Invoice', icon: <Receipt className="h-5 w-5" /> },
  { id: 'promosi', label: 'Promosi', icon: <Gift className="h-5 w-5" /> },
  { id: 'hadiah', label: 'Hadiah', icon: <Trophy className="h-5 w-5" /> },
  { id: 'hubungi', label: 'Hubungi Kami', icon: <MessageCircle className="h-5 w-5" /> },
  { id: 'logout', label: 'Logout', icon: <LogOut className="h-5 w-5" /> },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string;
  onMenuClick: (menuId: string) => void;
}

export default function Sidebar({ isOpen, onClose, activeMenu, onMenuClick }: SidebarProps) {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        data-testid="sidebar-overlay"
      />
      
      <div className={`fixed top-0 left-0 bottom-0 w-72 bg-background z-50 overflow-y-auto transition-transform duration-500 ease-in-out border-r-2 border-primary ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="sticky top-0 bg-background z-10 px-4 py-3 border-b border-border">
          <div className="flex items-center justify-between">
            <button className="h-11 px-6 rounded-md border-2 border-primary font-semibold text-sm transition-all bg-primary text-white shadow-[inset_0_0_0_2px_black] flex-1 mr-3 flex items-center justify-center gap-2" data-testid="button-live-chat">
              <MessageCircle className="h-5 w-5" />
              Live Chat
            </button>
            <button
              className="pr-1.5 py-1.5 rounded-lg hover-elevate active-elevate-2 transition-colors text-primary"
              onClick={onClose}
              data-testid="button-close-sidebar"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
        </div>

        <div className="p-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg hover-elevate active-elevate-2 transition-colors ${
                activeMenu === item.id ? 'text-primary' : 'text-muted-foreground'
              }`}
              data-testid={`button-menu-${item.id}`}
              onClick={() => {
                onMenuClick(item.id);
                console.log(`Menu ${item.label} clicked`);
              }}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </div>
              
              <div className="flex items-center gap-2">
                {item.badge && (
                  <Badge variant="destructive" className="h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {item.badge}
                  </Badge>
                )}
                {activeMenu === item.id && (
                  <div className="w-2 h-2 rounded-full bg-primary" data-testid={`indicator-${item.id}`} />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
