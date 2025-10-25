import { useState } from "react";
import { Copy, Building2, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  { id: 'dana', name: 'DANA', logo: danaLogo, status: 'online' },
  { id: 'danamon', name: 'Danamon', logo: danamonLogo, status: 'offline' },
  { id: 'gopay', name: 'GoPay', logo: gopayLogo, status: 'maintenance' },
  { id: 'mandiri', name: 'Mandiri', logo: mandiriLogo, status: 'maintenance' },
  { id: 'ovo', name: 'OVO', logo: ovoLogo, status: 'online' },
  { id: 'bsi', name: 'BSI', logo: bsiLogo, status: 'maintenance' },
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

export default function DepositSection() {
  const [activeTab, setActiveTab] = useState<'bank' | 'qris'>('qris');
  const [selectedBank, setSelectedBank] = useState('BCA');
  const [amount, setAmount] = useState('');
  const [username, setUsername] = useState('guest');
  const [qrisAmount, setQrisAmount] = useState('');
  const { toast } = useToast();

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
    <div className="bg-background">
      {/* Header */}
      <div className="bg-muted p-4">
        <h2 className="text-xl font-bold text-foreground">Kasir</h2>
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
                  <SelectTrigger className="w-full border-border focus:ring-0 focus:ring-offset-0" data-testid="select-bank">
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
                  className="text-foreground border-border focus-visible:ring-0 focus-visible:ring-offset-0"
                  data-testid="input-amount"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="w-full h-11 rounded-md border-2 border-primary font-semibold text-sm transition-all bg-primary text-white shadow-[inset_0_0_0_2px_black]"
              onClick={handleSubmit}
              data-testid="button-submit"
            >
              Kirim
            </button>

            {/* Bank Status */}
            <div className="mt-6 mb-6">
              <h3 className="text-center font-bold text-foreground mb-4">Bank Status</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {paymentMethods.map((method) => (
                  <Card
                    key={method.id}
                    className="bg-white dark:bg-white relative h-12 overflow-hidden p-0"
                    data-testid={`status-${method.id}`}
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

              {/* Peraturan */}
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="text-center font-bold text-foreground mb-3">Peraturan</h4>
                <ol className="list-decimal list-outside pl-5 space-y-2 text-sm text-muted-foreground text-justify">
                  <li>Minimal Deposit = Bank Transfer IDR 10.000</li>
                  <li>Untuk transfer antar bank / transfer beda mesin atm. Mohon gunakan nominal unik contoh : 25.417, 25.673, 25.189 .</li>
                  <li>Harap perhatikan rekening deposit kami yang sedang aktif sebelum melakukan pengiriman deposit, sehingga deposit anda dapat di proses secepatnya ke dalam dompet utama anda.</li>
                  <li>Deposit Menggunakan account bank selain yang di daftarkan tidak di perbolehkan.</li>
                  <li>Setelah melakukan proses pengiriman dan mengisi form secara benar maka deposit anda akan di proses dalam kurun waktu 5 menit.</li>
                  <li>Maksimal claim deposit 7 hari atau 1 minggu. jika lewat dari itu maka deposit anda tidak bisa kami prosses lagi.</li>
                  <li>Silakan hubungi customer service kami via live chat untuk konfirmasi status deposit anda.</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* QRIS Content */}
        {activeTab === 'qris' && (
          <div className="space-y-4">
            {/* Info Message */}
            <div className="border border-primary rounded-lg p-1 bg-background">
              <p className="text-center text-foreground font-medium leading-relaxed" style={{ fontSize: '10px' }}>
                Setelah pembayaran kami terima Setelah Generate QR atau melakukan pembayaran melalui aplikasi DANA kredit akan langsung masuk ke User ID Anda. Silahkan Refresh Akun Anda
              </p>
            </div>

            {/* QRIS Form */}
            <Card className="p-6 space-y-4 border-2 border-foreground/20">
              {/* Username Field */}
              <div className="space-y-2">
                <label className="text-sm text-foreground font-medium">Username / User ID</label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-muted/50 text-foreground border-border focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-border h-12 text-base"
                  data-testid="input-username"
                  readOnly
                />
              </div>

              {/* Amount Field */}
              <div className="space-y-2">
                <Input
                  type="number"
                  placeholder="Jumlah"
                  value={qrisAmount}
                  onChange={(e) => setQrisAmount(e.target.value)}
                  className="bg-muted/50 text-foreground placeholder:text-muted-foreground/50 border-border focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-border h-12 text-base"
                  data-testid="input-qris-amount"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  className="w-full h-11 rounded-md border-2 border-primary font-semibold text-sm transition-all bg-primary text-white shadow-[inset_0_0_0_2px_black]"
                  onClick={() => {
                    console.log('Generate QR clicked');
                    toast({
                      title: "Generate QR",
                      description: "QR Code sedang dibuat...",
                    });
                  }}
                  data-testid="button-generate-qr"
                >
                  Generate QR
                </button>
              </div>
            </Card>

            {/* Bank Status */}
            <div className="mt-6 mb-6">
              <h3 className="text-center font-bold text-foreground mb-4">Bank Status</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {paymentMethods.map((method) => (
                  <Card
                    key={method.id}
                    className="bg-white dark:bg-white relative h-12 overflow-hidden p-0"
                    data-testid={`status-${method.id}`}
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

              {/* Peraturan */}
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="text-center font-bold text-foreground mb-3">Peraturan</h4>
                <ol className="list-decimal list-outside pl-5 space-y-2 text-sm text-muted-foreground text-justify">
                  <li>Minimal Deposit = Bank Transfer IDR 10.000</li>
                  <li>Untuk transfer antar bank / transfer beda mesin atm. Mohon gunakan nominal unik contoh : 25.417, 25.673, 25.189 .</li>
                  <li>Harap perhatikan rekening deposit kami yang sedang aktif sebelum melakukan pengiriman deposit, sehingga deposit anda dapat di proses secepatnya ke dalam dompet utama anda.</li>
                  <li>Deposit Menggunakan account bank selain yang di daftarkan tidak di perbolehkan.</li>
                  <li>Setelah melakukan proses pengiriman dan mengisi form secara benar maka deposit anda akan di proses dalam kurun waktu 5 menit.</li>
                  <li>Maksimal claim deposit 7 hari atau 1 minggu. jika lewat dari itu maka deposit anda tidak bisa kami prosses lagi.</li>
                  <li>Silakan hubungi customer service kami via live chat untuk konfirmasi status deposit anda.</li>
                </ol>
              </div>
            </div>
          </div>
        )}
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
