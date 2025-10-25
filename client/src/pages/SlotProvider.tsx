import { useRoute } from 'wouter';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { useState } from 'react';
import game1 from '@assets/stock_images/colorful_slot_machin_732ddb86.jpg';
import game2 from '@assets/stock_images/colorful_slot_machin_592079cb.jpg';
import game3 from '@assets/stock_images/colorful_slot_machin_c1850bd7.jpg';
import game4 from '@assets/stock_images/colorful_slot_machin_79f62bca.jpg';
import game5 from '@assets/stock_images/colorful_slot_machin_7b3fc6ad.jpg';
import game6 from '@assets/stock_images/colorful_slot_machin_485209ea.jpg';
import game7 from '@assets/stock_images/colorful_slot_machin_0648807d.jpg';
import game8 from '@assets/stock_images/colorful_slot_machin_28a2e4bb.jpg';
import game9 from '@assets/stock_images/colorful_slot_machin_9bbc5225.jpg';

interface SlotGame {
  id: string;
  name: string;
  image: string;
  isExclusive?: boolean;
  isNew?: boolean;
}

const gamesByProvider: Record<string, SlotGame[]> = {
  'PRAGMATIC PLAY': [
    { id: '1', name: 'Starlight Princess', image: game1, isNew: true },
    { id: '2', name: 'Lava Balls', image: game2 },
    { id: '3', name: 'Chests Of Cai Shen', image: game3 },
    { id: '4', name: 'Wrath Of Nezha', image: game4 },
    { id: '5', name: 'Big Bass Halloween', image: game5 },
    { id: '6', name: 'Pandemic Rising', image: game6, isExclusive: true },
    { id: '7', name: 'Sweet Rush Megaways', image: game7 },
    { id: '8', name: 'Bingo Mania', image: game8, isExclusive: true },
    { id: '9', name: "Mermaid's Treasure", image: game9 },
  ],
  'HABANERO': [
    { id: '1', name: 'Jump!', image: game1 },
    { id: '2', name: 'Pumpkin Patch', image: game2 },
    { id: '3', name: 'Disco Beats', image: game3 },
    { id: '4', name: 'Zeus', image: game4 },
    { id: '5', name: 'Wealth Inn', image: game5 },
    { id: '6', name: 'Candy Tower', image: game6 },
  ],
  'IDNSLOT': [
    { id: '1', name: 'Golden Lotus', image: game1 },
    { id: '2', name: 'Lucky Koi', image: game2 },
    { id: '3', name: 'Treasure Bowl', image: game3 },
    { id: '4', name: 'Dragon King', image: game4 },
    { id: '5', name: 'Phoenix Rising', image: game5 },
    { id: '6', name: 'Fortune Tree', image: game6 },
  ],
  'IDN LOTTERY': [
    { id: '1', name: 'Lottery Draw', image: game1 },
    { id: '2', name: 'Lucky Numbers', image: game2 },
    { id: '3', name: 'Mega Ball', image: game3 },
    { id: '4', name: 'Power Pick', image: game4 },
    { id: '5', name: 'Golden Ticket', image: game5 },
    { id: '6', name: 'Fortune Wheel', image: game6 },
  ],
  'PG POCKET GAMES SOFT': [
    { id: '1', name: 'Fortune Tiger', image: game1, isNew: true },
    { id: '2', name: 'Dragon Hatch', image: game2 },
    { id: '3', name: 'Mahjong Ways', image: game3 },
    { id: '4', name: 'Candy Bonanza', image: game4 },
    { id: '5', name: 'Wild Bandito', image: game5 },
    { id: '6', name: 'Lucky Neko', image: game6 },
  ],
  'TOPTREND GAMING': [
    { id: '1', name: 'Triple Fortune', image: game1 },
    { id: '2', name: 'Mega Cash', image: game2 },
    { id: '3', name: 'Gold Rush', image: game3 },
    { id: '4', name: 'Diamond Strike', image: game4 },
    { id: '5', name: 'Royal Wins', image: game5 },
    { id: '6', name: 'Lucky 777', image: game6 },
  ],
  'CWM': [
    { id: '1', name: 'Wild West', image: game1 },
    { id: '2', name: 'Ocean Paradise', image: game2 },
    { id: '3', name: 'Fire Dragon', image: game3 },
    { id: '4', name: 'Ice Queen', image: game4 },
    { id: '5', name: 'Thunder Strike', image: game5 },
    { id: '6', name: 'Magic Forest', image: game6 },
  ],
  'MICROGAMING': [
    { id: '1', name: 'Mega Moolah', image: game1 },
    { id: '2', name: 'Immortal Romance', image: game2 },
    { id: '3', name: 'Book of Oz', image: game3 },
    { id: '4', name: 'Thunderstruck II', image: game4 },
    { id: '5', name: 'Break Da Bank', image: game5 },
    { id: '6', name: 'Lucky Firecracker', image: game6 },
  ],
  'NOLIMIT CITY': [
    { id: '1', name: 'Mental', image: game1 },
    { id: '2', name: 'San Quentin', image: game2 },
    { id: '3', name: 'Fire in the Hole', image: game3 },
    { id: '4', name: 'Tombstone RIP', image: game4 },
    { id: '5', name: 'Das xBoot', image: game5 },
    { id: '6', name: 'East Coast vs West Coast', image: game6 },
  ],
  'PS': [
    { id: '1', name: 'Fortune Gems', image: game1 },
    { id: '2', name: 'Lucky Lion', image: game2 },
    { id: '3', name: 'Wild Circus', image: game3 },
    { id: '4', name: 'Golden Empire', image: game4 },
    { id: '5', name: 'Mystic Treasures', image: game5 },
    { id: '6', name: 'Lucky Stars', image: game6 },
  ],
  'SLOT MANIA': [
    { id: '1', name: 'Triple Crown', image: game1 },
    { id: '2', name: 'Mega Jackpot', image: game2 },
    { id: '3', name: 'Fruit Blast', image: game3 },
    { id: '4', name: 'Classic 777', image: game4 },
    { id: '5', name: 'Diamond Rush', image: game5 },
    { id: '6', name: 'Gold Mine', image: game6 },
  ],
  'FAT PANDA': [
    { id: '1', name: 'Panda Fortune', image: game1 },
    { id: '2', name: 'Bamboo Grove', image: game2 },
    { id: '3', name: 'Lucky Panda', image: game3 },
    { id: '4', name: 'Dragon Dance', image: game4 },
    { id: '5', name: 'Golden Panda', image: game5 },
    { id: '6', name: 'Fortune Cookie', image: game6 },
  ],
  'BOOMING GAMES': [
    { id: '1', name: 'Wild Jester', image: game1 },
    { id: '2', name: 'TNT Bonanza', image: game2 },
    { id: '3', name: 'Aztec Palace', image: game3 },
    { id: '4', name: 'Pharaoh Treasure', image: game4 },
    { id: '5', name: 'Pirate Gold', image: game5 },
    { id: '6', name: 'Mystic Fortune', image: game6 },
  ],
  'SPADEGAMING': [
    { id: '1', name: 'Fist of Gold', image: game1 },
    { id: '2', name: 'Lucky Koi', image: game2 },
    { id: '3', name: 'Zeus', image: game3 },
    { id: '4', name: 'Cai Shen 888', image: game4 },
    { id: '5', name: 'Brother Kingdom', image: game5 },
    { id: '6', name: 'Ace Racer', image: game6 },
  ]
};

const providerColors: Record<string, string> = {
  'PRAGMATIC PLAY': 'from-cyan-500 to-purple-500',
  'HABANERO': 'from-orange-500 to-red-500',
  'IDNSLOT': 'from-yellow-500 to-amber-600',
  'IDN LOTTERY': 'from-emerald-500 to-teal-600',
  'PG POCKET GAMES SOFT': 'from-blue-500 to-indigo-500',
  'TOPTREND GAMING': 'from-green-500 to-teal-500',
  'CWM': 'from-violet-500 to-purple-600',
  'MICROGAMING': 'from-red-500 to-pink-500',
  'NOLIMIT CITY': 'from-slate-600 to-gray-700',
  'PS': 'from-lime-500 to-green-600',
  'SLOT MANIA': 'from-fuchsia-500 to-pink-600',
  'FAT PANDA': 'from-amber-500 to-orange-600',
  'BOOMING GAMES': 'from-rose-500 to-red-600',
  'SPADEGAMING': 'from-sky-500 to-blue-600',
};

export default function SlotProvider() {
  const [, params] = useRoute('/slot/:provider');
  const [searchQuery, setSearchQuery] = useState('');
  
  const providerName = params?.provider ? decodeURIComponent(params.provider) : '';
  const allGames = gamesByProvider[providerName] || gamesByProvider['PRAGMATIC PLAY'];
  const gradientClass = providerColors[providerName] || 'from-cyan-500 to-purple-500';

  const getFilteredGames = () => {
    if (!searchQuery.trim()) return allGames;
    
    const query = searchQuery.toLowerCase();
    return allGames.filter(game => 
      game.name.toLowerCase().includes(query)
    );
  };

  const games = getFilteredGames();

  return (
    <div className="min-h-screen pb-20">
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${gradientClass} p-4 flex items-center justify-center`}>
        <h1 className="text-xl font-bold text-white">{providerName}</h1>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-[5px] mb-[15px]">
        <div className="relative flex items-center bg-card text-card-foreground rounded-md min-h-9 px-4 py-2 hover-elevate active-elevate-2 border-2 border-primary">
          <Search className="h-4 w-4 mr-2 flex-shrink-0 text-muted-foreground/50" />
          <input
            type="text"
            placeholder="Cari"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-card-foreground placeholder:text-muted-foreground/50 focus:outline-none border-0"
            data-testid="input-search-slot"
          />
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-3 gap-1 px-3 pb-3">
        {games.map((game) => (
          <Card
            key={game.id}
            className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 p-0 flex flex-col"
            data-testid={`card-game-${game.id}`}
            onClick={() => {
              if (providerName === 'PRAGMATIC PLAY') {
                window.open('https://cloud.html-5.me/', '_blank');
              } else if (providerName === 'IDNSLOT') {
                window.open('https://idnslot.html-5.me/', '_blank');
              }
            }}
          >
            {game.image && (
              <img 
                src={game.image} 
                alt={game.name}
                className="w-full aspect-[4/3] object-cover"
              />
            )}
            
            {/* Game Name */}
            <div className="bg-primary p-1.5">
              <p className="text-white text-[10px] font-semibold">
                {game.name.length > 13 ? `${game.name.slice(0, 13)}...` : game.name}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
