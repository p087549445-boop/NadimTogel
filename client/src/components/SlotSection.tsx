import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import slot1 from '@assets/stock_images/slot_game_x7r2d9f_1761403263483.jpg';
import slot2 from '@assets/stock_images/slot_game_a3k9p1t_1761403262539.jpg';
import slot3 from '@assets/stock_images/slot_game_g5v8e2m_1761403262695.jpg';
import slot4 from '@assets/stock_images/slot_game_p9b4t6z_1761403263026.jpg';
import slot5 from '@assets/stock_images/slot_game_h1q7r3n_1761403262767.jpg';
import slot6 from '@assets/stock_images/slot_game_z0c6u8y_1761403263547.jpg';
import slot7 from '@assets/stock_images/slot_game_m4w2e9j_1761403262892.jpg';
import slot8 from '@assets/stock_images/slot_game_v8n3s5r_1761403263415.jpg';
import slot9 from '@assets/stock_images/slot_game_q2h5x1l_1761403263085.jpg';
import slot10 from '@assets/stock_images/slot_game_k6d9a7g_1761403262830.jpg';
import slot11 from '@assets/stock_images/slot_game_t3b8f4u_1761403263270.jpg';
import slot12 from '@assets/stock_images/slot_game_s7p1v9e_1761403263210.jpg';
import slot13 from '@assets/stock_images/slot_game_r9g2m6k_1761403263145.jpg';
import slot14 from '@assets/stock_images/slot_game_e1w4t8p_1761403262639.jpg';
import slot15 from '@assets/stock_images/slot_game_n5y3h7c_1761403262960.jpg';
import slot16 from '@assets/stock_images/slot_game_u2z9a1d_1761403263341.jpg';

interface SlotProvider {
  id: string;
  name: string;
  image: string;
}

const slotProviders: SlotProvider[] = [
  {
    id: '1',
    name: 'IDNSLOT',
    image: slot1
  },
  {
    id: '2',
    name: 'IDN LOTTERY',
    image: slot2
  },
  {
    id: '3',
    name: 'PRAGMATIC PLAY',
    image: slot3
  },
  {
    id: '4',
    name: 'HABANERO',
    image: slot4
  },
  {
    id: '5',
    name: 'PG POCKET GAMES SOFT',
    image: slot5
  },
  {
    id: '6',
    name: 'TOPTREND GAMING',
    image: slot6
  },
  {
    id: '7',
    name: 'GMW',
    image: slot7
  },
  {
    id: '8',
    name: 'MICROGAMING',
    image: slot8
  },
  {
    id: '9',
    name: 'NOLIMIT CITY',
    image: slot9
  },
  {
    id: '10',
    name: 'PS',
    image: slot10
  },
  {
    id: '11',
    name: 'SLOT MANIA',
    image: slot11
  },
  {
    id: '12',
    name: 'FAT PANDA',
    image: slot12
  },
  {
    id: '13',
    name: 'BOOMING GAMES',
    image: slot13
  },
  {
    id: '14',
    name: '5G GAMING',
    image: slot14
  },
  {
    id: '15',
    name: 'PLAYTECH',
    image: slot15
  },
  {
    id: '16',
    name: 'RED TIGER',
    image: slot16
  }
];

interface SlotSectionProps {
  searchQuery?: string;
}

export default function SlotSection({ searchQuery = '' }: SlotSectionProps) {
  const [, setLocation] = useLocation();
  
  const filteredProviders = slotProviders.filter(provider => 
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProviders.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      {/* Header */}
      <div className="bg-muted/50 p-3 flex items-center mb-3">
        <h2 className="text-lg font-bold text-foreground uppercase tracking-wide">
          SLOT GAMES
        </h2>
      </div>

      {/* Provider Grid */}
      <div className="grid grid-cols-2 gap-1 px-3 pb-0">
        {filteredProviders.map((provider) => (
          <Card
            key={provider.id}
            className="relative overflow-hidden cursor-pointer hover-elevate active-elevate-2 h-24"
            data-testid={`card-slot-provider-${provider.id}`}
            onClick={() => setLocation(`/slot/${encodeURIComponent(provider.name)}`)}
          >
            <img 
              src={provider.image} 
              alt={provider.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-2">
              <span className="text-white text-[10px] font-bold uppercase tracking-wide text-center px-2">
                {provider.name}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
