import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import coinPusherImage from '@assets/stock_images/coin_pusher_arcade_g_b406ee4e.jpg';
import rouletteChickenImage from '@assets/stock_images/roulette_chicken_fig_43bcba06.jpg';
import minesweeperImage from '@assets/stock_images/minesweeper_game_boa_c1d18efc.jpg';
import plinkoImage from '@assets/stock_images/plinko_pinball_game__0a8bddfd.jpg';

interface ArcadeGame {
  id: string;
  name: string;
  title: string;
  image: string;
  badge?: 'NEW' | 'PROMO';
}

const arcadeGames: ArcadeGame[] = [
  {
    id: '1',
    name: 'Coin Pusher',
    title: 'COIN PUSHER',
    image: coinPusherImage,
    badge: 'NEW'
  },
  {
    id: '2',
    name: 'Roulette Fight Chicken',
    title: 'ROULETTE FIGHT CHICKEN',
    image: rouletteChickenImage,
    badge: 'NEW'
  },
  {
    id: '3',
    name: 'Minesweeper Hollywood',
    title: 'MINESWEEPER HOLLYWOOD',
    image: minesweeperImage,
    badge: 'NEW'
  },
  {
    id: '4',
    name: 'Plinko Pinball',
    title: 'PLINKO PINBALL',
    image: plinkoImage,
    badge: 'PROMO'
  }
];

interface ArcadeSectionProps {
  searchQuery?: string;
}

export default function ArcadeSection({ searchQuery = '' }: ArcadeSectionProps) {
  const filteredGames = arcadeGames.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredGames.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <div className="bg-background">
        <h2 className="text-lg font-bold text-white bg-muted/50 px-3 py-3 mb-3 uppercase tracking-wide">
          ARCADE
        </h2>
        <div className="px-3 pb-0">
          <div className="grid grid-cols-2 gap-1">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              className="relative overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all rounded-none border-0"
              data-testid={`card-arcade-${game.id}`}
              onClick={() => console.log(`${game.name} clicked`)}
            >
              <div className="relative">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3">
                  <h3 className="text-white text-[10px] font-bold uppercase tracking-wide">
                    {game.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
