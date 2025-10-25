import { useState } from "react";
import { ArrowLeft, Copy, Building2, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import bcaLogo from "@assets/stock_images/bca_blue_logo_bank_c_d64e6c5b.jpg";
import bniLogo from "@assets/stock_images/bni_orange_logo_bank_b669093d.jpg";
import briLogo from "@assets/stock_images/bri_bank_rakyat_indo_f6a36e3f.jpg";

export default function Deposit() {
  const [activeTab, setActiveTab] = useState<'bank' | 'qris'>('qris');
  const [selectedBank, setSelectedBank] = useState('BCA');
  const [amount, setAmount] = useState('');
  const { toast } = useToast();

  const handleBack = () => {
    window.history.back();
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Berhasil disalin",
      description: "Nomor rekening telah disalin",
    });
  };

  const handleSubmit = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Error",
        description: "Masukkan jumlah deposit yang valid",
        variant: "destructive",
      });
      return;
    }
    console.log('Deposit submitted:', { amount, bank: selectedBank });
    toast({
      title: "Deposit diproses",
      description: "Silakan lakukan transfer sesuai instruksi",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
        <h1 className="text-xl font-bold text-foreground">Kasir</h1>
      </div>

      <div className="p-4">
        {/* Tabs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Card
            className={`p-4 flex flex-col items-center justify-center cursor-pointer hover-elevate active-elevate-2 border-2 ${
              activeTab === 'bank' ? 'border-primary' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('bank')}
            data-testid="tab-bank"
          >
            <Building2 className={`h-8 w-8 mb-2 ${activeTab === 'bank' ? 'text-primary' : 'text-white'}`} />
            <span className={`text-sm font-semibold ${activeTab === 'bank' ? 'text-primary' : 'text-white'}`}>Bank</span>
          </Card>
          <Card
            className={`p-4 flex flex-col items-center justify-center cursor-pointer hover-elevate active-elevate-2 border-2 ${
              activeTab === 'qris' ? 'border-primary' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('qris')}
            data-testid="tab-qris"
          >
            <QrCode className={`h-8 w-8 mb-2 ${activeTab === 'qris' ? 'text-primary' : 'text-white'}`} />
            <span className={`text-sm font-semibold ${activeTab === 'qris' ? 'text-primary' : 'text-white'}`}>Auto QRIS Depo</span>
          </Card>
        </div>

        {/* Bank Transfer Content */}
        {activeTab === 'bank' && (
          <div className="space-y-4">
            {/* Bank Account 1 */}
            <Card className="p-4 space-y-3">
              <div className="grid grid-cols-[120px_10px_1fr] gap-2 items-center text-sm">
                <span className="text-muted-foreground">Nama Bank</span>
                <span className="text-muted-foreground">:</span>
                <span className="font-semibold text-foreground">BCA</span>
              </div>
              <div className="grid grid-cols-[120px_10px_1fr] gap-2 items-center text-sm">
                <span className="text-muted-foreground">Nama Rekening</span>
                <span className="text-muted-foreground">:</span>
                <span className="font-semibold text-foreground">YATNA ARTAMEVIA</span>
              </div>
              <div className="grid grid-cols-[120px_10px_1fr] gap-2 items-center text-sm">
                <span className="text-muted-foreground">No Rekening</span>
                <span className="text-muted-foreground">:</span>
                <span className="font-semibold text-foreground">587-019-****</span>
              </div>
              <div className="grid grid-cols-[120px_10px_1fr] gap-2 items-center text-sm">
                <span className="text-muted-foreground">Pilih Bank</span>
                <span className="text-muted-foreground">:</span>
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger className="w-full" data-testid="select-bank">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BCA">
                      <div className="flex items-center gap-2">
                        <span>BCA</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="BNI">BNI</SelectItem>
                    <SelectItem value="BRI">BRI</SelectItem>
                    <SelectItem value="MANDIRI">MANDIRI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            <div className="border-t border-muted-foreground/20"></div>

            {/* Bank Account 2 */}
            <Card className="p-4 space-y-3">
              <div className="grid grid-cols-[120px_10px_1fr] gap-2 items-center text-sm">
                <span className="text-muted-foreground">Nama Bank</span>
                <span className="text-muted-foreground">:</span>
                <span className="font-semibold text-foreground">BCA</span>
              </div>
              <div className="grid grid-cols-[120px_10px_1fr] gap-2 items-center text-sm">
                <span className="text-muted-foreground">Nama Rekening</span>
                <span className="text-muted-foreground">:</span>
                <span className="font-semibold text-foreground">ADITYA SAPUTRA</span>
              </div>
              <div className="grid grid-cols-[120px_10px_1fr] gap-2 items-center text-sm">
                <span className="text-muted-foreground">Nomor Rekening</span>
                <span className="text-muted-foreground">:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">0690675005</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 text-xs"
                    onClick={() => handleCopy('0690675005')}
                    data-testid="button-copy"
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </Card>

            {/* BCA Internet Banking Button */}
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-12"
              data-testid="button-internet-banking"
              onClick={() => console.log('Internet Banking clicked')}
            >
              <img src={bcaLogo} alt="BCA" className="h-6 w-6 mr-2 rounded" />
              Internet Banking
            </Button>

            {/* Amount Input */}
            <div className="space-y-2">
              <div className="grid grid-cols-[120px_10px_1fr] gap-2 items-center">
                <label className="text-sm text-muted-foreground">Jumlah</label>
                <span className="text-muted-foreground">:</span>
                <Input
                  type="number"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-foreground"
                  data-testid="input-amount"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12"
              onClick={handleSubmit}
              data-testid="button-submit"
            >
              Kirim
            </Button>

            {/* Bank Status */}
            <div className="mt-6">
              <h3 className="text-center font-bold text-foreground mb-4">Bank Status</h3>
              <div className="flex justify-center items-center gap-4">
                <div className="relative" data-testid="status-bca">
                  <img src={bcaLogo} alt="BCA" className="h-12 w-auto" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                </div>
                <div className="relative" data-testid="status-bni">
                  <img src={bniLogo} alt="BNI" className="h-12 w-auto" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                </div>
                <div className="relative" data-testid="status-bri">
                  <img src={briLogo} alt="BRI" className="h-12 w-auto" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* QRIS Content */}
        {activeTab === 'qris' && (
          <div className="text-center py-12">
            <QrCode className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">QRIS Deposit akan segera tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
}
