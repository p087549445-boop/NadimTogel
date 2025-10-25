import { Card } from '@/components/ui/card';
import lottery1 from '@assets/stock_images/slot_machine_casino__778e48e4.jpg';
import lottery2 from '@assets/stock_images/slot_machine_casino__96870206.jpg';
import lottery3 from '@assets/stock_images/casino_slot_game_neo_74ab7377.jpg';
import lottery4 from '@assets/stock_images/casino_slot_game_neo_1e9cb9c8.jpg';
import lottery5 from '@assets/stock_images/casino_slot_game_neo_e6dbda37.jpg';
import lottery6 from '@assets/stock_images/casino_slot_game_neo_24cb8360.jpg';
import lottery7 from '@assets/stock_images/casino_roulette_whee_ba9a5a9d.jpg';
import lottery8 from '@assets/stock_images/casino_roulette_whee_8a3afd4b.jpg';
import lottery9 from '@assets/stock_images/live_casino_dealer_t_f5a873da.jpg';
import lottery10 from '@assets/stock_images/slot_machine_casino__43426d2b.jpg';

interface LotteryGame {
  id: string;
  name: string;
  image: string;
  hasPromo?: boolean;
}

const lotteryGames: LotteryGame[] = [
  {
    id: '1',
    name: 'LONG HU CLASH',
    image: lottery1,
    hasPromo: true
  },
  {
    id: '2',
    name: 'DAVINCI ROLLER',
    image: lottery2,
    hasPromo: true
  },
  {
    id: '3',
    name: 'ROULETTE TRINITY',
    image: lottery3,
    hasPromo: true
  },
  {
    id: '4',
    name: '5D+ DRAGON50',
    image: lottery4
  },
  {
    id: '5',
    name: 'UNIVERSE 5D',
    image: lottery5,
    hasPromo: true
  },
  {
    id: '6',
    name: 'SICBO',
    image: lottery6
  },
  {
    id: '7',
    name: 'MEGA PRIZE 4D',
    image: lottery7
  },
  {
    id: '8',
    name: '9 WINZO WHEELS',
    image: lottery8
  },
  {
    id: '9',
    name: 'BLOODMOON',
    image: lottery9
  },
  {
    id: '10',
    name: 'SICBO12',
    image: lottery10
  }
];

interface ELotterySectionProps {
  searchQuery?: string;
}

export default function ELotterySection({ searchQuery = '' }: ELotterySectionProps) {
  const filteredGames = lotteryGames.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredGames.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      {/* Header */}
      <div className="bg-muted/50 p-3 mb-3">
        <h2 className="text-lg font-bold text-foreground uppercase tracking-wide">
          ELOTTERY GAMES
        </h2>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-2 gap-1 px-3 pb-0">
        {filteredGames.map((game) => (
          <Card
            key={game.id}
            className="relative overflow-hidden cursor-pointer hover-elevate active-elevate-2 h-32"
            data-testid={`card-lottery-${game.id}`}
            onClick={() => console.log(`${game.name} clicked`)}
          >
            <img 
              src={game.image} 
              alt={game.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center pb-3">
              <span className="text-white text-[10px] font-bold uppercase tracking-wide text-center px-2 drop-shadow-lg">
                {game.name}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
