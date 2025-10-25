import { RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface UserBalanceProps {
  username: string;
  balance: number;
}

export default function UserBalance({ username, balance }: UserBalanceProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    console.log('Refresh balance clicked');
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <Card className="rounded-none pt-[1px] px-4 pb-4">
      <div className="flex items-center justify-between">
        <div>
          <p 
            className="inline-block mb-1" 
            style={{ fontSize: '10px', borderBottom: '0.5px solid hsl(var(--primary))' }}
            data-testid="text-name"
          >
            Yatna Artamevia
          </p>
          <h2 className="text-lg font-semibold text-foreground mb-1" data-testid="text-username">
            {username}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Balance:</p>
            <p className="text-sm font-bold text-white" data-testid="text-balance">
              IDR. {balance.toLocaleString('id-ID')}
            </p>
          </div>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="text-primary"
          data-testid="button-refresh"
          onClick={handleRefresh}
        >
          <RefreshCw className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
        </Button>
      </div>
    </Card>
  );
}
