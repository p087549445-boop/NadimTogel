import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import bcaLogo from "@assets/stock_images/bca_blue_logo_bank_c_d64e6c5b.jpg";
import bniLogo from "@assets/stock_images/bni_orange_logo_bank_b669093d.jpg";
import briLogo from "@assets/stock_images/bri_bank_rakyat_indo_f6a36e3f.jpg";
import danaLogo from "@assets/stock_images/dana_digital_wallet__07bfca27.jpg";
import danamonLogo from "@assets/stock_images/danamon_bank_logo_bl_8530276a.jpg";
import gopayLogo from "@assets/stock_images/gopay_green_logo_goj_8177ab46.jpg";
import mandiriLogo from "@assets/stock_images/bank_mandiri_yellow__8672c483.jpg";
import ovoLogo from "@assets/stock_images/ovo_purple_logo_digi_6c9a8ea2.jpg";
import bsiLogo from "@assets/stock_images/bsi_bank_syariah_ind_3a79cf8b.jpg";

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  status: 'online' | 'offline' | 'maintenance';
}

const paymentMethods: PaymentMethod[] = [
  { id: 'bca', name: 'BCA', logo: bcaLogo, status: 'online' },
  { id: 'bni', name: 'BNI', logo: bniLogo, status: 'online' },
  { id: 'bri', name: 'Bank BRI', logo: briLogo, status: 'online' },
  { id: 'bsi', name: 'BSI', logo: bsiLogo, status: 'online' },
  { id: 'dana', name: 'DANA', logo: danaLogo, status: 'online' },
  { id: 'danamon', name: 'Danamon', logo: danamonLogo, status: 'maintenance' },
  { id: 'gopay', name: 'gopay', logo: gopayLogo, status: 'online' },
  { id: 'mandiri', name: 'mandiri', logo: mandiriLogo, status: 'maintenance' },
  { id: 'ovo', name: 'OVO', logo: ovoLogo, status: 'online' },
];

const getStatusColor = (status: 'online' | 'offline' | 'maintenance') => {
  switch (status) {
    case 'online':
      return 'bg-green-500';
    case 'offline':
      return 'bg-red-500';
    case 'maintenance':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};

interface WithdrawSectionProps {
  onCancel: () => void;
}

export default function WithdrawSection({ onCancel }: WithdrawSectionProps) {
  const [amount, setAmount] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Error",
        description: "Masukkan jumlah penarikan yang valid",
        variant: "destructive",
      });
      return;
    }
    if (!password) {
      toast({
        title: "Error",
        description: "Masukkan password",
        variant: "destructive",
      });
      return;
    }
    console.log('Withdraw submitted:', { amount, password });
    toast({
      title: "Penarikan diproses",
      description: "Permintaan penarikan Anda sedang diproses",
    });
  };

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-muted p-4">
        <h2 className="text-xl font-bold text-foreground">Withdraw</h2>
      </div>

      <div className="p-4 space-y-4">
        {/* Jumlah Penarikan */}
        <div className="space-y-2">
          <label className="text-sm text-foreground font-medium">Jumlah Penarikan</label>
          <Input
            type="number"
            placeholder="Masukan jumlah..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-foreground border-border focus-visible:ring-0 focus-visible:ring-offset-0"
            data-testid="input-withdraw-amount"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm text-foreground font-medium">Password</label>
          <Input
            type="password"
            placeholder="Masukan password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-foreground border-border focus-visible:ring-0 focus-visible:ring-offset-0"
            data-testid="input-password"
          />
        </div>

        {/* Dana akan dikirim ke */}
        <div className="space-y-2">
          <h3 className="text-sm text-foreground font-medium">Dana akan dikirim ke</h3>
          <div className="space-y-1 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-foreground min-w-[110px]">Nama Bank</span>
              <span className="text-foreground">: BCA</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-foreground min-w-[110px]">Nama Rekening</span>
              <span className="text-foreground">: Yatna artamevia</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-foreground min-w-[110px]">No Rekening</span>
              <span className="text-foreground">: 587-019-****</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            className="flex-1 h-11 rounded-md border-2 border-primary font-semibold text-sm transition-all bg-primary text-white shadow-[inset_0_0_0_2px_black]"
            onClick={handleSubmit}
            data-testid="button-submit-withdraw"
          >
            Kirim
          </button>
          <button
            className="flex-1 h-11 rounded-md border-2 border-primary font-semibold text-sm transition-all bg-primary text-white shadow-[inset_0_0_0_2px_black]"
            onClick={onCancel}
            data-testid="button-cancel-withdraw"
          >
            Batal
          </button>
        </div>

        {/* Bank Status */}
        <div className="mt-6 mb-6">
          <h3 className="text-center font-bold text-foreground mb-4">Bank Status</h3>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {paymentMethods.map((method) => (
              <Card
                key={method.id}
                className="bg-white dark:bg-white relative h-12 overflow-hidden p-0"
                data-testid={`withdraw-status-${method.id}`}
              >
                <img 
                  src={method.logo} 
                  alt={method.name}
                  className="w-full h-full object-cover"
                />
                <div 
                  className={`absolute top-1.5 left-1.5 w-2.5 h-2.5 rounded-full ${getStatusColor(method.status)} z-10`}
                />
              </Card>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center items-center gap-6 text-sm mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-foreground">Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-foreground">Offline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-foreground">Gangguan</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-muted/30 p-4 rounded-lg">
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>* Minimal Withdraw Nadimtogel adalah Rp 10.000</p>
            <p>* Proses Penarikan Dana / Withdraw akan Kami proses 1x24 jam kecuali Bank Offline / Gangguan.</p>
            <p>* Penarikan Dana akan kami proses berdasarkan Nomor Rekening yang Terdaftar dengan Valid.</p>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center py-4 border-t border-border mt-6">
        <p className="text-xs text-muted-foreground">
          © Copyright 2014 - 2025 . All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
