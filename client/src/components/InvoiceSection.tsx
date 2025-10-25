import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Footer from "@/components/Footer";

export default function InvoiceSection() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const games = [
    'JAKARTA 1400', 'JAKARTA 2330', 'TOTOMALI1530',
    'TOTOMALI2030', 'TOTOMALI2330', 'HOKIDRAW',
    'Toto Macau', 'SINGAPORE', 'CAMBODIA',
    'TOTOCAMBODIA', 'SYDNEY', 'BRUNEI 14',
    'BRUNEI 21', 'BRUNEI 02', 'CHELSEA 11',
    'CHELSEA 15', 'CHELSEA 19', 'CHELSEA 21',
    'HUAHIN 0100', 'HUAHIN 1630', 'HUAHIN 2100',
    'BANGKOK 0930', 'BANGKOK 0130', 'CHINA',
    'HONGKONG', 'TAIWAN', 'NEVADA',
    'NEWYORKEVE', 'CAROLINADAY', 'FLORIDAEVE',
    'CALIFORNIA', 'CAROLINAEVE', 'PCSO',
    'MAGNUM', 'OREGON03', 'OREGON06',
    'OREGON09', 'OREGON12', 'BULLSEYE',
    'NEWYORKMID', 'FLORIDAMID', 'KENTUCKYMID',
    'POIPET12', 'POIPET15', 'POIPET19',
    'POIPET22', 'KENTUCKYEVE'
  ];

  const [selectedGame, setSelectedGame] = useState<string>(games[0]);
  const [periode, setPeriode] = useState('12106');

  const getFilteredGames = () => {
    if (!searchQuery.trim()) return games;
    
    const query = searchQuery.toLowerCase();
    return games.filter(game => 
      game.toLowerCase().includes(query)
    );
  };

  const filteredGames = getFilteredGames();

  const handleSubmit = () => {
    console.log('Invoice submitted:', { game: selectedGame, periode });
  };

  return (
    <div>
      {/* Invoice Title */}
      <div className="bg-muted px-4 py-4">
        <h1 className="text-2xl font-bold" data-testid="text-invoice-title">Invoice</h1>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-[5px] mb-4">
        <div className="relative flex items-center bg-card text-card-foreground rounded-md min-h-9 px-4 py-2 hover-elevate active-elevate-2 border-2 border-primary">
          <Search className="h-4 w-4 mr-2 flex-shrink-0 text-muted-foreground/50" />
          <input
            type="text"
            placeholder="Cari"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-card-foreground placeholder:text-muted-foreground/50 focus:outline-none border-0"
            data-testid="input-search-invoice"
          />
        </div>
      </div>

      <div className="px-4">

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-2 mb-0 mt-3">
          {filteredGames.map((game, index) => (
            <Button
              key={index}
              variant="outline"
              className={`font-semibold text-[10px] !py-[2px] !min-h-0 h-auto !rounded-none hover-elevate active-elevate-2 ${
                selectedGame === game
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-card-foreground'
              }`}
              onClick={() => setSelectedGame(game)}
              data-testid={`button-game-${index}`}
            >
              {game}
            </Button>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center text-muted-foreground py-6">
            Tidak ada game yang cocok
          </div>
        )}

        {/* Invoice Form */}
        {selectedGame && (
          <div className="mt-3 bg-muted rounded-lg p-4">
            <h2 className="text-base font-semibold mb-4" data-testid="text-invoice-game">
              Invoice {selectedGame}
            </h2>
            
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Periode</label>
              <div
                className="flex h-9 w-full rounded-md bg-white text-black px-3 py-2 text-base items-center"
                data-testid="text-periode"
              >
                {periode}
              </div>
            </div>

            <button
              className="w-full h-11 rounded-md border-2 border-primary font-semibold text-sm transition-all bg-primary text-white shadow-[inset_0_0_0_2px_black]"
              onClick={handleSubmit}
              data-testid="button-submit-invoice"
            >
              OK
            </button>
          </div>
        )}

      </div>
      
      <Footer />
    </div>
  );
}
