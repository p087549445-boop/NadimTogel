import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromosiSection from "@/components/PromosiSection";

export default function Promosi() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background pb-0">
      <div className="bg-muted p-4 flex items-center relative">
        <Button
          size="icon"
          variant="ghost"
          className="absolute left-2"
          onClick={handleBack}
          data-testid="button-back"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold text-foreground mx-auto">Promosi</h1>
      </div>
      <div className="mt-[-16px]">
        <PromosiSection />
      </div>
    </div>
  );
}
