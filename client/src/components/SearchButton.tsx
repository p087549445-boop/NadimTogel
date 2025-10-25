import { Search } from "lucide-react";

interface SearchButtonProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchButton({ value, onChange }: SearchButtonProps) {
  return (
    <div className="px-4 mt-[5px] mb-[15px]">
      <div className="relative flex items-center bg-card text-card-foreground rounded-md min-h-9 px-4 py-2 hover-elevate active-elevate-2 border-2 border-primary">
        <Search className="h-4 w-4 mr-2 flex-shrink-0 text-muted-foreground/50" />
        <input
          type="text"
          placeholder="Cari"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-card-foreground placeholder:text-muted-foreground/50 focus:outline-none border-0"
          data-testid="input-search"
        />
      </div>
    </div>
  );
}
