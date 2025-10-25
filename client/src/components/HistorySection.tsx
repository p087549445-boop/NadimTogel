import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronsLeft, ChevronsRight, Search } from 'lucide-react';
import Footer from '@/components/Footer';

interface Game {
  id: string;
  name: string;
}

const allGames: Game[] = [
  { id: '1', name: 'Toto Macao 5D' },
  { id: '2', name: 'BANGKOK 0130' },
  { id: '3', name: 'BANGKOK 0930' },
  { id: '4', name: 'BRUNEI 02' },
  { id: '5', name: 'BRUNEI 14' },
  { id: '6', name: 'BRUNEI 21' },
  { id: '7', name: 'BULLSEYE' },
  { id: '8', name: 'CALIFORNIA' },
  { id: '9', name: 'CAMBODIA' },
  { id: '10', name: 'CAROLINADAY' },
  { id: '11', name: 'CAROLINAEVE' },
  { id: '12', name: 'CHELSEA 11' },
  { id: '13', name: 'CHELSEA 15' },
  { id: '14', name: 'CHELSEA 19' },
  { id: '15', name: 'CHELSEA 21' },
  { id: '16', name: 'CHINA' },
  { id: '17', name: 'FLORIDAEVE' },
  { id: '18', name: 'FLORIDAMID' },
  { id: '19', name: 'HOKIDRAW' },
  { id: '20', name: 'HONGKONG' },
  { id: '21', name: 'HUAHIN 0100' },
  { id: '22', name: 'HUAHIN 1630' },
  { id: '23', name: 'HUAHIN 2100' },
  { id: '24', name: 'JAKARTA 1400' },
  { id: '25', name: 'JAKARTA 2330' },
  { id: '26', name: 'KENTUCKYEVE' },
  { id: '27', name: 'KENTUCKYMID' },
  { id: '28', name: 'King Kong 4D' },
  { id: '29', name: 'MAGNUM' },
  { id: '30', name: 'NEVADA' },
  { id: '31', name: 'NEWYORKEVE' },
  { id: '32', name: 'NEWYORKMID' },
  { id: '33', name: 'OREGON03' },
  { id: '34', name: 'OREGON06' },
  { id: '35', name: 'OREGON09' },
  { id: '36', name: 'OREGON12' },
  { id: '37', name: 'PCSO' },
  { id: '38', name: 'POIPET12' },
  { id: '39', name: 'POIPET15' },
  { id: '40', name: 'POIPET19' },
  { id: '41', name: 'POIPET22' },
  { id: '42', name: 'SINGAPORE' },
  { id: '43', name: 'SYDNEY' },
  { id: '44', name: 'TAIWAN' },
  { id: '45', name: 'TOTOCAMBODIA' },
  { id: '46', name: 'TOTOMALI1530' },
  { id: '47', name: 'TOTOMALI2030' },
  { id: '48', name: 'TOTOMALI2330' },
  { id: '49', name: 'Toto Macau' },
  { id: '50', name: 'elottery' },
  { id: '51', name: 'arcade' },
];

const liveGames: Game[] = [
  { id: '52', name: '12D' },
  { id: '53', name: '12D Thunder' },
  { id: '54', name: '24D' },
  { id: '55', name: '24D Jackpot' },
  { id: '56', name: '24Dspin' },
  { id: '57', name: '3D Shio' },
  { id: '58', name: '48D' },
  { id: '59', name: '5D Ball' },
  { id: '60', name: '6D Color' },
  { id: '61', name: '9 Putts' },
  { id: '62', name: 'Baccarat' },
  { id: '63', name: 'Billiards' },
  { id: '64', name: 'Bingo Roulette' },
  { id: '65', name: 'Bingo Sicbo' },
  { id: '66', name: 'Bounce Roulette' },
  { id: '67', name: 'Checkmate Rush' },
  { id: '68', name: 'DICE 6 FEVER' },
  { id: '69', name: 'Dice 6' },
  { id: '70', name: 'Domino Live' },
  { id: '71', name: 'Dragon Tiger' },
  { id: '72', name: 'Dragon Tiger Wild' },
  { id: '73', name: 'Duel Dice' },
  { id: '74', name: 'Europe Baccarat' },
  { id: '75', name: 'Europe Baccarat 2' },
  { id: '76', name: 'Europe Ceme' },
  { id: '77', name: 'Europe Dragon Tiger' },
  { id: '78', name: 'Europe Poker Dice' },
  { id: '79', name: 'Europe Roulette 1' },
  { id: '80', name: 'Europe Roulette 2' },
  { id: '81', name: 'Europe Suwit' },
  { id: '82', name: 'Fantan' },
  { id: '83', name: 'Gong Ball' },
  { id: '84', name: 'Gong Ball Jitu' },
  { id: '85', name: 'Grand Prix' },
  { id: '86', name: 'Head Tail' },
  { id: '87', name: 'IDN 4 Stand' },
  { id: '88', name: 'IDN 4 Stand 2' },
  { id: '89', name: 'Monopoly' },
  { id: '90', name: 'New Grand Prix' },
  { id: '91', name: 'Niu Niu' },
  { id: '92', name: 'Oglok' },
  { id: '93', name: 'Poker Dice' },
  { id: '94', name: 'Race Ball' },
  { id: '95', name: 'Red White' },
  { id: '96', name: 'Roulette' },
  { id: '97', name: 'Roulette 2 - Fast' },
  { id: '98', name: 'Shio Fights' },
  { id: '99', name: 'Sicbo Ball - Fast' },
  { id: '100', name: 'Sicbo[Dice]' },
  { id: '101', name: 'Soccer Roulette' },
  { id: '102', name: 'Suwit' },
  { id: '103', name: 'Xoc Dia' },
];

interface HistoryRecord {
  tanggal: string;
  periode: string;
  angka: string;
}

const generateHistoryData = (): HistoryRecord[] => {
  return [
    { tanggal: '2025-10-19 21:28:34.603', periode: '2906', angka: '73099' },
    { tanggal: '2025-10-19 15:28:08.347', periode: '2905', angka: '02668' },
    { tanggal: '2025-10-18 21:28:04.653', periode: '2904', angka: '30586' },
    { tanggal: '2025-10-18 15:27:02.300', periode: '2903', angka: '90923' },
    { tanggal: '2025-10-17 21:28:36.543', periode: '2902', angka: '95561' },
    { tanggal: '2025-10-17 15:28:59.420', periode: '2901', angka: '63736' },
    { tanggal: '2025-10-16 21:27:18.393', periode: '2900', angka: '35851' },
    { tanggal: '2025-10-16 15:28:52.650', periode: '2899', angka: '14584' },
    { tanggal: '2025-10-15 21:29:24.897', periode: '2898', angka: '61224' },
    { tanggal: '2025-10-15 15:26:33.430', periode: '2897', angka: '62188' },
  ];
};

const togelGames: Game[] = allGames.filter(g => 
  !['elottery', 'arcade'].includes(g.name.toLowerCase())
);

const semuaGames: Game[] = [...togelGames, ...liveGames];

export default function HistorySection() {
  const [activeTab, setActiveTab] = useState<'semua' | 'live' | 'togel'>('semua');
  const [selectedGame, setSelectedGame] = useState<Game | null>(semuaGames[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const historyData = generateHistoryData();
  const totalPages = 8;
  const maxVisiblePages = 5;

  const getGamesToShow = () => {
    let games: Game[] = [];
    if (activeTab === 'live') games = liveGames;
    else if (activeTab === 'togel') games = togelGames;
    else games = semuaGames;

    if (!searchQuery.trim()) return games;
    
    const query = searchQuery.toLowerCase();
    return games.filter(game => 
      game.name.toLowerCase().includes(query)
    );
  };

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    setCurrentPage(1);
  };

  const handleTabChange = (tab: 'semua' | 'live' | 'togel') => {
    setActiveTab(tab);
    if (tab === 'live') {
      setSelectedGame(liveGames[0]);
    } else if (tab === 'togel') {
      setSelectedGame(togelGames[0]);
    } else {
      setSelectedGame(semuaGames[0]);
    }
    setCurrentPage(1);
  };

  const getVisiblePages = () => {
    const pages: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  return (
    <div>
      {/* History Title */}
      <div className="bg-muted px-4 py-4">
        <h1 className="text-2xl font-bold" data-testid="text-history-title">History</h1>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-[5px] mb-4 bg-background">
        <div className="relative flex items-center bg-card text-card-foreground rounded-md min-h-9 px-4 py-2 hover-elevate active-elevate-2 border-2 border-primary">
          <Search className="h-4 w-4 mr-2 flex-shrink-0 text-muted-foreground/50" />
          <input
            type="text"
            placeholder="Cari"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-card-foreground placeholder:text-muted-foreground/50 focus:outline-none border-0"
            data-testid="input-search-history"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 px-4 pb-0 bg-background mt-3">
        <button
          className={`h-11 rounded-md border-2 border-primary font-semibold text-[10px] transition-all ${
            activeTab === 'semua'
              ? 'bg-primary text-white shadow-[inset_0_0_0_2px_black]'
              : 'bg-black text-foreground'
          }`}
          onClick={() => handleTabChange('semua')}
          data-testid="button-tab-semua"
        >
          Semua
        </button>
        <button
          className={`h-11 rounded-md border-2 border-primary font-semibold text-[10px] transition-all ${
            activeTab === 'live'
              ? 'bg-primary text-white shadow-[inset_0_0_0_2px_black]'
              : 'bg-black text-foreground'
          }`}
          onClick={() => handleTabChange('live')}
          data-testid="button-tab-live"
        >
          Live Games
        </button>
        <button
          className={`h-11 rounded-md border-2 border-primary font-semibold text-[10px] transition-all ${
            activeTab === 'togel'
              ? 'bg-primary text-white shadow-[inset_0_0_0_2px_black]'
              : 'bg-black text-foreground'
          }`}
          onClick={() => handleTabChange('togel')}
          data-testid="button-tab-togel"
        >
          Togel
        </button>
      </div>

      {/* Games Grid */}
      <div className="px-4 pb-0 bg-background rounded-b-md mt-3">
        {activeTab === 'semua' ? (
          <>
            {/* Togel Games */}
            <div className="grid grid-cols-3 gap-2">
              {togelGames.map((game) => (
                <Button
                  key={game.id}
                  variant="outline"
                  className={`font-semibold text-[10px] !py-[2px] !min-h-0 h-auto !rounded-none hover-elevate active-elevate-2 ${
                    selectedGame?.id === game.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card text-card-foreground'
                  }`}
                  onClick={() => handleGameClick(game)}
                  data-testid={`button-game-${game.id}`}
                >
                  {game.name}
                </Button>
              ))}
            </div>
            
            {/* Separator */}
            <div className="w-full h-[2px] bg-primary my-3" data-testid="separator-togel-live"></div>
            
            {/* Live Games */}
            <div className="grid grid-cols-3 gap-2">
              {liveGames.map((game) => (
                <Button
                  key={game.id}
                  variant="outline"
                  className={`font-semibold text-[10px] !py-[2px] !min-h-0 h-auto !rounded-none hover-elevate active-elevate-2 ${
                    selectedGame?.id === game.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card text-card-foreground'
                  }`}
                  onClick={() => handleGameClick(game)}
                  data-testid={`button-game-${game.id}`}
                >
                  {game.name}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {getGamesToShow().map((game) => (
              <Button
                key={game.id}
                variant="outline"
                className={`font-semibold text-[10px] !py-[2px] !min-h-0 h-auto !rounded-none hover-elevate active-elevate-2 ${
                  selectedGame?.id === game.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-card-foreground'
                }`}
                onClick={() => handleGameClick(game)}
                data-testid={`button-game-${game.id}`}
              >
                {game.name}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Detail History Table */}
      {selectedGame && (
        <div className="pb-0">
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mb-3 px-4 mt-4">
            {currentPage > 1 && (
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 !rounded-full bg-foreground text-background"
                onClick={() => setCurrentPage(currentPage - 1)}
                data-testid="button-page-prev"
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
            )}
            {getVisiblePages().map((page) => (
              <Button
                key={page}
                size="icon"
                variant="outline"
                className={`h-9 w-9 !rounded-full ${
                  currentPage === page
                    ? 'bg-foreground text-background'
                    : 'bg-background text-foreground'
                }`}
                onClick={() => setCurrentPage(page)}
                data-testid={`button-page-${page}`}
              >
                {page}
              </Button>
            ))}
            {currentPage < totalPages && (
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 !rounded-full bg-foreground text-background"
                onClick={() => setCurrentPage(currentPage + 1)}
                data-testid="button-page-next"
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* History Table */}
          <div className="mx-[10px] mt-3">
            <Table>
              <TableHeader>
                <TableRow className="border border-foreground">
                  <TableHead className="text-center font-bold border-r border-foreground">Tanggal</TableHead>
                  <TableHead className="text-center font-bold border-r border-foreground">Periode</TableHead>
                  <TableHead className="text-center font-bold">Angka</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="[&_tr:last-child]:border">
                {historyData.slice(0, 10).map((record, index) => (
                  <TableRow key={index} className="border border-foreground">
                    <TableCell className="text-center border-r border-foreground">{record.tanggal}</TableCell>
                    <TableCell className="text-center border-r border-foreground">{record.periode}</TableCell>
                    <TableCell className="text-center text-yellow-500">{record.angka}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {/* Footer - Always visible */}
      <Footer />
    </div>
  );
}
