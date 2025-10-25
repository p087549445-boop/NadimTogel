import bcaLogo from '@assets/stock_images/bca_blue_logo_bank_c_d64e6c5b.jpg';
import bniLogo from '@assets/stock_images/bni_orange_logo_bank_b669093d.jpg';
import briLogo from '@assets/stock_images/bri_bank_rakyat_indo_f6a36e3f.jpg';
import danaLogo from '@assets/stock_images/dana_digital_wallet__07bfca27.jpg';
import danamonLogo from '@assets/stock_images/danamon_bank_logo_bl_8530276a.jpg';
import gopayLogo from '@assets/stock_images/gopay_green_logo_goj_8177ab46.jpg';
import mandiriLogo from '@assets/stock_images/bank_mandiri_yellow__8672c483.jpg';
import ovoLogo from '@assets/stock_images/ovo_purple_logo_digi_6c9a8ea2.jpg';
import bsiLogo from '@assets/stock_images/bsi_bank_syariah_ind_3a79cf8b.jpg';
import { Card } from '@/components/ui/card';

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  status: 'online' | 'maintenance' | 'offline';
}

const paymentMethods: PaymentMethod[] = [
  { id: 'bca', name: 'BCA', logo: bcaLogo, status: 'online' },
  { id: 'bni', name: 'BNI', logo: bniLogo, status: 'online' },
  { id: 'bri', name: 'Bank BRI', logo: briLogo, status: 'online' },
  { id: 'dana', name: 'DANA', logo: danaLogo, status: 'online' },
  { id: 'danamon', name: 'Danamon', logo: danamonLogo, status: 'maintenance' },
  { id: 'gopay', name: 'GoPay', logo: gopayLogo, status: 'online' },
  { id: 'mandiri', name: 'Mandiri', logo: mandiriLogo, status: 'maintenance' },
  { id: 'ovo', name: 'OVO', logo: ovoLogo, status: 'online' },
  { id: 'bsi', name: 'BSI', logo: bsiLogo, status: 'online' },
];

const getStatusColor = (status: 'online' | 'maintenance' | 'offline') => {
  switch (status) {
    case 'online':
      return 'bg-green-500';
    case 'maintenance':
      return 'bg-yellow-500';
    case 'offline':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export default function Footer() {
  return (
    <footer>
      {/* Copyright */}
      <div className="text-center py-4 border-t border-border mt-6">
        <p className="text-xs text-muted-foreground">
          © Copyright 2014 - 2025 . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
