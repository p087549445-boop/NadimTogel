import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/20251018_185233_1760788553616.jpg";

interface HeaderProps {
  onMenuClick: () => void;
  onDepositClick: () => void;
}

export default function Header({ onMenuClick, onDepositClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border py-3 flex items-center justify-between">
      <div className="flex items-center gap-3 pl-4">
        <button 
          className="pr-1.5 py-1.5 rounded-lg hover-elevate active-elevate-2 transition-colors text-primary"
          data-testid="button-menu"
          onClick={onMenuClick}
        >
          <Menu className="h-7 w-7" />
        </button>
        <img src={logoImage} alt="NADIM TOGEL" className="h-7" />
      </div>
      <div className="pr-4">
        <button 
          className="h-11 px-6 rounded-md border-2 border-primary font-semibold text-sm transition-all bg-primary text-white shadow-[inset_0_0_0_2px_black]"
          data-testid="button-deposit"
          onClick={onDepositClick}
        >
          Deposit
        </button>
      </div>
    </header>
  );
}
