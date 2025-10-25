import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import idnLiveImage from '@assets/stock_images/live_casino_dealer_t_d856faef.jpg';
import pragmaticImage from '@assets/stock_images/live_casino_dealer_t_b073cc5d.jpg';
import idnBannerImage from '@assets/stock_images/live_casino_dealer_t_c3b9d4b3.jpg';
import crashGameImage from '@assets/stock_images/live_casino_dealer_t_54bed41a.jpg';
import rouletteImage from '@assets/stock_images/casino_roulette_whee_e00956d1.jpg';

interface CasinoProvider {
  id: string;
  name: string;
  image: string;
}

interface CasinoGame {
  id: string;
  name: string;
  number: string;
  isNew?: boolean;
  image?: string;
}

const liveCasinoProviders: CasinoProvider[] = [
  {
    id: '1',
    name: 'IDN LIVE',
    image: idnLiveImage
  },
  {
    id: '2',
    name: 'PRAGMATIC PLAY',
    image: pragmaticImage
  }
];

const idnLiveGames: CasinoGame[] = [
  {
    id: '1',
    name: 'ROULETTE 1',
    number: '34'
  },
  {
    id: '2',
    name: 'CHECKMATE RUSH',
    number: '1'
  },
  {
    id: '3',
    name: 'SOCCER ROULETTE',
    number: '35'
  },
  {
    id: '4',
    name: 'GRAND PRIX',
    number: '11,14'
  },
  {
    id: '5',
    name: '9 PUTTS',
    number: '07'
  },
  {
    id: '6',
    name: 'BOUNCE ROULETTE',
    number: '05'
  },
  {
    id: '7',
    name: 'DOMINO LIVE',
    number: 'player'
  },
  {
    id: '8',
    name: '6D COLOR',
    number: '5y,6y,1b'
  },
  {
    id: '9',
    name: 'DUEL DICE',
    number: '1r,2b'
  },
  {
    id: '10',
    name: 'BINGO ROULETTE',
    number: '18'
  },
  {
    id: '11',
    name: '12D THUNDER',
    number: '09 255.180'
  },
  {
    id: '12',
    name: 'DICE 6 FEVER',
    number: '3'
  },
  {
    id: '13',
    name: 'DRAGON TIGER WILD',
    number: 'tiger'
  },
  {
    id: '14',
    name: 'EUROPE BACCARAT',
    number: 'banker'
  },
  {
    id: '15',
    name: 'EUROPE ROULETTE 2',
    number: '04'
  },
  {
    id: '16',
    name: 'EUROPE CEME',
    number: 'player1'
  },
  {
    id: '17',
    name: '24D JACKPOT',
    number: '20'
  },
  {
    id: '18',
    name: 'EUROPE POKER DICE',
    number: '1r,1r,2r,5r,6r'
  },
  {
    id: '19',
    name: 'EUROPE BACCARAT 2',
    number: 'player'
  },
  {
    id: '20',
    name: 'EUROPE DRAGON TIGER',
    number: 'tiger'
  },
  {
    id: '21',
    name: 'SICBO BALL - FAST',
    number: '5,5,1'
  },
  {
    id: '22',
    name: '5D BALL',
    number: '6,1,7,4,7'
  },
  {
    id: '23',
    name: 'SHIO FIGHTS',
    number: 'tian'
  },
  {
    id: '24',
    name: 'GONG BALL JITU',
    number: '6,0,J'
  },
  {
    id: '25',
    name: '48D',
    number: '26'
  },
  {
    id: '26',
    name: 'MONOPOLY',
    number: '🔴'
  },
  {
    id: '27',
    name: '24DSPIN',
    number: '22'
  },
  {
    id: '28',
    name: 'OGLOK',
    number: '🃏🃏🃏'
  },
  {
    id: '29',
    name: 'SUWIT',
    number: '✊ 👌'
  },
  {
    id: '30',
    name: 'POKER DICE',
    number: '⚀⚁⚂⚃⚄'
  },
  {
    id: '31',
    name: 'RED WHITE',
    number: '🟥🟥🟥'
  },
  {
    id: '32',
    name: 'FANTAN',
    number: '4'
  },
  {
    id: '33',
    name: '3D SHIO',
    number: 'rat,dragon,ox'
  },
  {
    id: '34',
    name: '12D',
    number: '6'
  },
  {
    id: '35',
    name: '24D',
    number: '14'
  },
  {
    id: '36',
    name: 'XOC DIA',
    number: 'White,White,Red,Red'
  },
  {
    id: '37',
    name: 'HEAD TAIL',
    number: '🦅🪙🪙'
  },
  {
    id: '38',
    name: 'BACCARAT',
    number: 'player'
  },
  {
    id: '39',
    name: 'DRAGON TIGER',
    number: 'dragon'
  },
  {
    id: '40',
    name: 'EUROPE SUWIT',
    number: 'gunting,jempol'
  },
  {
    id: '41',
    name: 'DICE 6',
    number: '🎲'
  },
  {
    id: '42',
    name: 'BILLIARDS',
    number: '11'
  },
  {
    id: '43',
    name: 'BINGO SICBO',
    number: '4,5,6'
  },
  {
    id: '44',
    name: 'SICBO[DICE]',
    number: '🎲🎲🎲'
  },
  {
    id: '45',
    name: 'GONG BALL',
    number: 'A'
  },
  {
    id: '46',
    name: 'RACE BALL',
    number: '9,10,2,5,6,7,8,4,3,1'
  },
  {
    id: '47',
    name: 'ROULETTE 2 - FAST',
    number: '9'
  },
  {
    id: '48',
    name: 'NIU NIU',
    number: 'player1,player3'
  },
  {
    id: '49',
    name: 'IDN 4 STAND',
    number: 'banker'
  }
];

interface CasinoSectionProps {
  searchQuery?: string;
}

export default function CasinoSection({ searchQuery = '' }: CasinoSectionProps) {
  const filteredIdnGames = idnLiveGames.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredProviders = liveCasinoProviders.filter(provider => 
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProviders.length === 0 && filteredIdnGames.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      {/* LIVE CASINO Section */}
      <div className="mb-0">
        <div className="flex items-center gap-2 mb-3 bg-muted/50 p-3">
          <h2 className="text-lg font-bold text-foreground uppercase tracking-wide">
            LIVE CASINO
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-1 mb-3 px-3">
          {filteredProviders.map((provider) => (
            <Card 
              key={provider.id}
              className="overflow-hidden cursor-pointer hover-elevate active-elevate-2"
              data-testid={`card-casino-provider-${provider.id}`}
              onClick={() => console.log(`${provider.name} clicked`)}
            >
              <div className="relative h-24">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end justify-center pb-2">
                  <span className="text-white text-[10px] font-bold uppercase tracking-wide">
                    {provider.name}
                  </span>
                </div>
              </div>
              <Button 
                className="w-full rounded-none bg-green-500 hover:bg-green-600 text-white font-bold text-sm"
                data-testid={`button-lobby-${provider.id}`}
              >
                LOBBY
              </Button>
            </Card>
          ))}
        </div>

        {/* IDN LIVE New Banner */}
        <Card 
          className="relative overflow-hidden cursor-pointer hover-elevate active-elevate-2 mb-4 mx-3"
          data-testid="card-idn-new-lobby"
          onClick={() => console.log('IDN New Lobby clicked')}
        >
          <div className="relative h-32">
            <img 
              src={idnBannerImage} 
              alt="IDN LIVE"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/60 to-transparent flex items-center justify-between px-4">
              <div className="text-left">
                <div className="text-2xl font-bold text-white tracking-wider mb-1 drop-shadow-lg">
                  IDN LIVE
                </div>
              </div>
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-xs px-4"
                data-testid="button-new-lobby"
              >
                NEW LOBBY
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* IDNLIVE Games Section */}
      <div className="mb-0">
        <div className="flex items-center gap-2 mb-3 bg-muted/50 p-3">
          <h2 className="text-lg font-bold text-foreground uppercase tracking-wide">
            IDNLIVE
          </h2>
        </div>

        {/* Crash Game Banner */}
        <Card 
          className="relative overflow-hidden cursor-pointer hover-elevate active-elevate-2 mb-3"
          data-testid="card-crash-game"
          onClick={() => console.log('Crash Game clicked')}
        >
          <div className="relative h-28">
            <img 
              src={crashGameImage} 
              alt="Crash Game"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/70 to-transparent flex items-center px-4">
              <div className="text-left">
                <div className="text-lg font-bold text-white tracking-wide drop-shadow-lg">
                  CRASH GAME PERTAMA IDNLIVE
                </div>
                <div className="text-xs text-green-300 mt-1">
                  MAINKAN SEKARANG & RAIH KEMENANGAN!
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Game Grid */}
        <div className="grid grid-cols-2 gap-1">
          {filteredIdnGames.map((game) => (
            <Card
              key={game.id}
              className="relative bg-gradient-to-br from-gray-700 to-gray-900 p-4 flex flex-col items-center justify-center gap-3 cursor-pointer hover-elevate active-elevate-2 transition-all min-h-[140px] border-gray-600"
              data-testid={`card-game-${game.id}`}
              onClick={() => console.log(`${game.name} clicked`)}
            >
              {game.image && (
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={game.image} 
                    alt={game.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
              <h3 className="text-[10px] font-bold text-white text-center uppercase tracking-wide z-10">
                {game.name}
              </h3>
              <div className={`text-sm font-bold z-10 ${
                game.number === '34' ? 'text-red-500' : 'text-yellow-500'
              }`}>
                {game.number}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
