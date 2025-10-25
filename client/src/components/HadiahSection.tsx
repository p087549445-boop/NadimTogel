import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const prizeData = [
  { game: '24D', hadiah: '' },
  { game: '1 Nomor', hadiah: '23X' },
  { game: '2 Nomor', hadiah: '11.5X' },
  { game: '4 Nomor', hadiah: '5.75X' },
  { game: 'Per Baris', hadiah: '3.84X' },
  { game: 'Per Kolom', hadiah: '5.75X' },
  { game: 'Double Baris', hadiah: '1.95X' },
  { game: 'Double Kolom', hadiah: '2.75X' },
  { game: '50-50', hadiah: '' },
  { game: 'Besar', hadiah: '-5%' },
  { game: 'Kecil', hadiah: '-5%' },
  { game: 'Ganjil', hadiah: '-5%' },
  { game: 'Genap', hadiah: '-5%' },
  { game: 'Hitam', hadiah: '-5%' },
  { game: 'Merah', hadiah: '-5%' },
];

export default function HadiahSection() {
  const [activeTab, setActiveTab] = useState<'pools' | 'minigames' | null>(null);

  return (
    <div>
      {/* Hadiah Title - nempel ke balance */}
      <div className="bg-muted px-4 py-4">
        <h1 className="text-2xl font-bold" data-testid="text-hadiah-title">Hadiah</h1>
      </div>

      {/* Buttons */}
      <div className="px-4 pt-4 pb-0">
        <div className="flex gap-2 mb-0">
          <button
            onClick={() => setActiveTab('pools')}
            className={`flex-1 h-11 rounded-md border-2 border-primary font-semibold text-sm transition-all ${
              activeTab === 'pools'
                ? 'bg-primary text-white shadow-[inset_0_0_0_2px_black]'
                : 'bg-black text-foreground'
            }`}
            data-testid="button-pools"
          >
            Pools
          </button>
          <button
            onClick={() => setActiveTab('minigames')}
            className={`flex-1 h-11 rounded-md border-2 border-primary font-semibold text-sm transition-all ${
              activeTab === 'minigames'
                ? 'bg-primary text-white shadow-[inset_0_0_0_2px_black]'
                : 'bg-black text-foreground'
            }`}
            data-testid="button-minigames"
          >
            Minigame
          </button>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-bold text-foreground mb-0" data-testid="text-game-title">
          Hadiah Game 24D
        </h2>

        {/* Table */}
        <div className="bg-black border-2 border-white rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-white">
                <TableHead className="text-white font-semibold text-base text-center border-r border-white" data-testid="header-game">
                  Game
                </TableHead>
                <TableHead className="text-white font-semibold text-base text-center" data-testid="header-hadiah">
                  Hadiah
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prizeData.map((prize, index) => {
                // Check if this is a header row (24D or 50-50)
                const isHeaderRow = prize.hadiah === '';
                
                if (isHeaderRow) {
                  return (
                    <TableRow 
                      key={index} 
                      className="border-b border-white"
                      data-testid={`row-prize-${index}`}
                    >
                      <TableCell 
                        colSpan={2}
                        className="text-sm text-white text-center py-3 font-bold"
                        data-testid={`cell-game-${index}`}
                      >
                        {prize.game}
                      </TableCell>
                    </TableRow>
                  );
                }
                
                return (
                  <TableRow 
                    key={index} 
                    className="border-b border-white"
                    data-testid={`row-prize-${index}`}
                  >
                    <TableCell 
                      className="text-sm text-white text-center py-3 border-r border-white"
                      data-testid={`cell-game-${index}`}
                    >
                      {prize.game}
                    </TableCell>
                    <TableCell 
                      className="text-sm text-white text-center py-3"
                      data-testid={`cell-hadiah-${index}`}
                    >
                      {prize.hadiah}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}
