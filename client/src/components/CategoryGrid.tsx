import { Grid3x3, Spade, Hash, Cherry, Ticket, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

const topCategories: Category[] = [
  { 
    id: 'semua', 
    name: 'SEMUA', 
    icon: <Grid3x3 className="h-6 w-6" />,
    color: ''
  },
  { 
    id: 'casino', 
    name: 'CASINO', 
    icon: <Spade className="h-6 w-6" />,
    color: ''
  },
  { 
    id: 'togel', 
    name: 'TOGEL', 
    icon: <Hash className="h-6 w-6" />,
    color: ''
  },
  { 
    id: 'slot', 
    name: 'SLOT', 
    icon: <Cherry className="h-6 w-6" />,
    color: ''
  },
];

const bottomCategories: Category[] = [
  { 
    id: 'e-lottery', 
    name: 'E-LOTTERY', 
    icon: <Ticket className="h-6 w-6" />,
    color: ''
  },
  { 
    id: 'arcade', 
    name: 'ARCADE', 
    icon: <Gamepad2 className="h-6 w-6" />,
    color: ''
  },
];

interface CategoryGridProps {
  onCategoryChange?: (categoryId: string) => void;
}

export default function CategoryGrid({ onCategoryChange }: CategoryGridProps) {
  const [selected, setSelected] = useState('semua');

  const handleCategoryClick = (categoryId: string) => {
    setSelected(categoryId);
    console.log(`Category ${categoryId} selected`);
    onCategoryChange?.(categoryId);
  };

  return (
    <div className="px-4 mt-4">
      {/* Baris 1: 4 card */}
      <div className="grid grid-cols-4 gap-1 mb-1">
        {topCategories.map((category) => (
          <Card
            key={category.id}
            className={`py-2 px-1 flex flex-col items-center justify-center gap-1 cursor-pointer hover-elevate active-elevate-2 transition-all ${
              selected === category.id ? 'ring-2 ring-primary' : ''
            }`}
            data-testid={`card-category-${category.id}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className={selected === category.id ? 'text-primary' : 'text-white'}>{category.icon}</div>
            <span className={`text-[10px] font-medium uppercase tracking-wide text-center leading-tight ${
              selected === category.id ? 'text-primary' : 'text-white'
            }`}>
              {category.name}
            </span>
          </Card>
        ))}
      </div>

      {/* Baris 2: 2 card */}
      <div className="grid grid-cols-2 gap-1">
        {bottomCategories.map((category) => (
          <Card
            key={category.id}
            className={`py-2 px-1 flex flex-col items-center justify-center gap-1 cursor-pointer hover-elevate active-elevate-2 transition-all ${
              selected === category.id ? 'ring-2 ring-primary' : ''
            }`}
            data-testid={`card-category-${category.id}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className={selected === category.id ? 'text-primary' : 'text-white'}>{category.icon}</div>
            <span className={`text-[10px] font-medium uppercase tracking-wide text-center leading-tight ${
              selected === category.id ? 'text-primary' : 'text-white'
            }`}>
              {category.name}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
