import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Footer from "@/components/Footer";
import extraSlotPromo from "@assets/generated_images/Slot_machine_promo_banner_eb0b0df8.png";
import casinoPromo from "@assets/generated_images/Casino_dealer_promotional_banner_a728a93f.png";
import lotteryPromo from "@assets/generated_images/Lottery_promo_banner_5bc31d9e.png";

interface PromoDetail {
  title: string;
  terms: string[];
  levels?: {
    level: number;
    turnover: string;
    reward: string;
  }[];
  calculation?: string;
  notes?: string[];
}

interface PromoItem {
  id: string;
  title: string;
  image: string;
  detail: PromoDetail;
}

const promoItems: PromoItem[] = [
  {
    id: 'bonus-extra-slot',
    title: 'Bonus Extra Slot 100 JT',
    image: extraSlotPromo,
    detail: {
      title: 'EXTRA BONUS SLOT SAMPAI 100JUTA',
      terms: [
        'Syarat & Ketentuan promo :',
        'Wajib memiliki UserID yang terdaftar pada NADIMTOGEL',
        'EXTRA BONUS TURNOVER SLOT diberikan dari jumlah Turnover permainan SLOT GAMES anda selama 7 hari.',
        'MINIMAL TURNOVER yang harus dicapai untuk mendapatkan bonus adalah sebesar 25.000.000',
        'Pembagian EXTRA BONUS TURNOVER SLOT otomatis di bagikan setiap hari senin diatas jam 10:00 wib ( tanpa perlu di claim )',
      ],
      levels: [
        { level: 1, turnover: 'Rp 25.000.000 - Rp 49.999.999', reward: 'Rp 100.000' },
        { level: 2, turnover: 'Rp 50.000.000 - Rp 99.999.999', reward: 'Rp 250.000' },
        { level: 3, turnover: 'Rp 100.000.000 - Rp 199.999.999', reward: 'Rp 800.000' },
        { level: 4, turnover: 'Rp 200.000.000 - Rp 499.999.999', reward: 'Rp 2.000.000' },
        { level: 5, turnover: 'Rp 500.000.000 - Rp 999.999.999', reward: 'Rp 4.000.000' },
        { level: 6, turnover: 'Rp 1.000.000.000 - Rp 1.999.999.999', reward: 'Rp 8.000.000' },
        { level: 7, turnover: 'Rp 2.000.000.000 - Rp 4.999.999.999', reward: 'Rp 15.000.000' },
        { level: 8, turnover: 'Rp 5.000.000.000 - Rp 9.999.999.999', reward: 'Rp 30.000.000' },
        { level: 9, turnover: 'Rp 10.000.000.000 - Rp 14.999.999.999', reward: 'Rp 50.000.000' },
        { level: 10, turnover: 'Rp 15.000.000.000 - Rp 30.000.000.000', reward: 'Rp 100.000.000' },
      ],
      notes: [
        'Perhitungan EXTRA BONUS TURNOVER SLOT',
        'Contoh : Jika dalam 7 Hari jumlah TurnOver anda pada permainan SLOT GAME mencapai Rp.15.000.000.000 maka bonus yang akan anda dapatkan sebesar Rp.100.000.000 ( BONUS LEVEL 10)',
        'Selalu aktif bermain dan kumpulkan TURNOVER anda sebanyak - banyaknya.',
        'Syarat dan ketentuan dapat berubah sewaktu - waktu tanpa harus ada pemberitahuan lebih lanjut.',
        'Pihak Nadimtogel berhak untuk tidak memberikan bonus deposit jika Kedapatan melakukan tindak kecurangan seperti : Kesamaan Data Player, Penipuan Deposit, Kesamaan Alamat IP, Melakukan Safety Bet, Invest, Maka pihak Nadimtogel Berhak membatalkan bonus deposit tanpa dispensasi.',
      ],
    },
  },
  {
    id: 'bonus-kekalahan',
    title: 'Bonus Kekalahan Slot / Live Game / Turnamen',
    image: casinoPromo,
    detail: {
      title: 'BONUS KEKALAHAN SLOT / LIVE GAME / TURNAMEN',
      terms: [
        'Syarat & Ketentuan promo :',
        'Wajib memiliki UserID yang terdaftar pada NADIMTOGEL',
        'Bonus kekalahan diberikan dari total kekalahan dalam permainan SLOT GAMES, LIVE GAMES, dan TURNAMEN selama 7 hari.',
        'MINIMAL KEKALAHAN yang harus dicapai untuk mendapatkan bonus adalah sebesar 10.000.000',
        'Pembagian bonus kekalahan otomatis di bagikan setiap hari senin diatas jam 10:00 wib ( tanpa perlu di claim )',
      ],
      levels: [
        { level: 1, turnover: 'Rp 10.000.000 - Rp 24.999.999', reward: 'Rp 50.000' },
        { level: 2, turnover: 'Rp 25.000.000 - Rp 49.999.999', reward: 'Rp 150.000' },
        { level: 3, turnover: 'Rp 50.000.000 - Rp 99.999.999', reward: 'Rp 500.000' },
        { level: 4, turnover: 'Rp 100.000.000 - Rp 249.999.999', reward: 'Rp 1.500.000' },
        { level: 5, turnover: 'Rp 250.000.000 - Rp 499.999.999', reward: 'Rp 3.000.000' },
      ],
    },
  },
  {
    id: 'bonus-referral',
    title: 'Bonus Referral Terbesar Setiap Hari 0.3%',
    image: lotteryPromo,
    detail: {
      title: 'BONUS REFERRAL TERBESAR SETIAP HARI 0.3%',
      terms: [
        'Syarat & Ketentuan promo :',
        'Wajib memiliki UserID yang terdaftar pada NADIMTOGEL',
        'Dapatkan bonus referral hingga 0.3% dari total turnover teman yang anda ajak.',
        'Bonus referral dibagikan setiap hari secara otomatis.',
        'Tidak ada batasan maksimal untuk mendapatkan bonus referral.',
        'Ajak sebanyak-banyaknya teman untuk mendapatkan penghasilan pasif.',
      ],
    },
  },
  {
    id: 'cashback-turnover',
    title: 'CashBack Turnover Slot Setiap Minggu 0.5%',
    image: extraSlotPromo,
    detail: {
      title: 'CASHBACK TURNOVER SLOT SETIAP MINGGU 0.5%',
      terms: [
        'Syarat & Ketentuan promo :',
        'Wajib memiliki UserID yang terdaftar pada NADIMTOGEL',
        'Dapatkan cashback hingga 0.5% dari total turnover permainan SLOT GAMES.',
        'Cashback dibagikan setiap hari Senin.',
        'Minimal turnover untuk mendapatkan cashback adalah 10.000.000',
        'Semakin banyak bermain, semakin besar cashback yang didapat.',
      ],
    },
  },
  {
    id: 'bonus-newmember',
    title: 'Bonus Newmember 5X',
    image: casinoPromo,
    detail: {
      title: 'BONUS NEWMEMBER 5X',
      terms: [
        'Syarat & Ketentuan promo :',
        'Wajib memiliki UserID yang terdaftar pada NADIMTOGEL',
        'Bonus new member berlaku untuk member baru yang melakukan deposit pertama kali.',
        'Dapatkan bonus hingga 5x lipat dari deposit pertama anda.',
        'Minimal deposit untuk mendapatkan bonus adalah 50.000',
        'Syarat withdraw adalah 3x dari total deposit + bonus.',
      ],
    },
  },
];

export default function PromosiSection() {
  const [expandedPromos, setExpandedPromos] = useState<Set<string>>(new Set());

  const handleMoreInfo = (promoId: string) => {
    setExpandedPromos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(promoId)) {
        newSet.delete(promoId);
      } else {
        newSet.add(promoId);
      }
      return newSet;
    });
  };

  const handlePlayNow = () => {
    window.open('https://playnow.com', '_blank');
  };

  return (
    <div>
      {/* Promosi Title */}
      <div className="bg-muted px-4 py-4">
        <h1 className="text-2xl font-bold" data-testid="text-promosi-title">Promosi</h1>
      </div>

      {/* Promo Cards */}
      <div className="px-4 py-4 space-y-3">
        {promoItems.map((promo) => (
          <div key={promo.id}>
            <Card className={`overflow-hidden ${expandedPromos.has(promo.id) ? 'rounded-b-none' : ''}`} data-testid={`card-promo-${promo.id}`}>
              <div className="relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-40 object-cover"
                  data-testid={`img-promo-${promo.id}`}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-0">
                <Button
                  variant="outline"
                  className="rounded-none border-0 border-r border-t h-12 font-semibold"
                  onClick={() => handleMoreInfo(promo.id)}
                  data-testid={`button-more-info-${promo.id}`}
                >
                  More Info
                </Button>
                <Button
                  className="rounded-none border-0 border-t h-12 font-semibold bg-cyan-600 hover:bg-cyan-700 text-white"
                  onClick={handlePlayNow}
                  data-testid={`button-play-now-${promo.id}`}
                >
                  Play Now
                </Button>
              </div>
            </Card>

            {/* Promo Detail - Expandable */}
            <AnimatePresence>
              {expandedPromos.has(promo.id) && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-muted rounded-b-md overflow-hidden"
                  data-testid={`detail-promo-${promo.id}`}
                >
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-4 text-foreground">{promo.detail.title}</h2>
                    
                    {/* Terms */}
                    <ul className="space-y-2 mb-4">
                      {promo.detail.terms.map((term, index) => (
                        <li key={index} className="text-sm text-foreground">
                          {term.startsWith('•') ? term : `• ${term}`}
                        </li>
                      ))}
                    </ul>

                    {/* Levels Table */}
                    {promo.detail.levels && promo.detail.levels.length > 0 && (
                      <div className="mb-4 overflow-x-auto">
                        <Table className="border border-foreground">
                          <TableHeader>
                            <TableRow className="border-b border-foreground bg-background">
                              <TableHead className="text-center font-bold border-r border-foreground text-foreground">LEVEL</TableHead>
                              <TableHead className="text-center font-bold border-r border-foreground text-foreground">TOTAL TURNOVER</TableHead>
                              <TableHead className="text-center font-bold text-foreground">TOTAL HADIAH</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {promo.detail.levels.map((level) => (
                              <TableRow key={level.level} className="border-b border-foreground">
                                <TableCell className="text-center border-r border-foreground font-semibold">
                                  Level {level.level}
                                </TableCell>
                                <TableCell className="text-center border-r border-foreground text-sm">
                                  {level.turnover}
                                </TableCell>
                                <TableCell className="text-center font-semibold">
                                  {level.reward}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}

                    {/* Additional Notes */}
                    {promo.detail.notes && promo.detail.notes.length > 0 && (
                      <ul className="space-y-2">
                        {promo.detail.notes.map((note, index) => (
                          <li key={index} className="text-sm text-foreground">
                            {note.startsWith('•') ? note : `• ${note}`}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
