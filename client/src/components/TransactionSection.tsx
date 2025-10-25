import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import Footer from "@/components/Footer";
import type { Transaction } from "@shared/schema";

export default function TransactionSection() {
  const [activeTab, setActiveTab] = useState<'old' | 'new'>('new');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: allTransactions, isLoading } = useQuery<Transaction[]>({
    queryKey: ['/api/transactions'],
  });

  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day}\n${hours}:${minutes}:${seconds}`;
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('id-ID');
  };

  const getFilteredTransactions = () => {
    if (!allTransactions) return [];
    
    let filtered = allTransactions;

    if (activeTab === 'new') {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      filtered = allTransactions.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= sevenDaysAgo;
      });
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(transaction => 
        transaction.description.toLowerCase().includes(query) ||
        (transaction.period && transaction.period.toLowerCase().includes(query)) ||
        transaction.status.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  };

  const transactions = getFilteredTransactions();

  if (isLoading) {
    return (
      <div className="px-4 py-6">
        <div className="text-center text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Transaksi Title */}
      <div className="bg-muted px-4 py-4">
        <h1 className="text-2xl font-bold" data-testid="text-transaksi-title">Transaksi</h1>
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
            data-testid="input-search-transaction"
          />
        </div>
      </div>

      {/* Transaction Tabs */}
      <div className="px-4 pb-0 mt-3">
        <div className="flex gap-2 mb-0">
          <button
            onClick={() => setActiveTab('old')}
            className={`flex-1 h-11 rounded-md border-2 border-primary font-semibold text-sm transition-all ${
              activeTab === 'old'
                ? 'bg-primary text-white shadow-[inset_0_0_0_2px_black]'
                : 'bg-black text-foreground'
            }`}
            data-testid="button-old-transactions"
          >
            Transaksi Lama
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`flex-1 h-11 rounded-md border-2 border-primary font-semibold text-sm transition-all ${
              activeTab === 'new'
                ? 'bg-primary text-white shadow-[inset_0_0_0_2px_black]'
                : 'bg-black text-foreground'
            }`}
            data-testid="button-new-transactions"
          >
            Transaksi Baru
          </button>
        </div>

      <div className="bg-black border-2 border-white rounded-md overflow-hidden mt-3">
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 border-white">
              <TableHead className="text-white font-semibold text-xs text-center border-r border-white" data-testid="header-tanggal">Tanggal</TableHead>
              <TableHead className="text-white font-semibold text-xs text-center border-r border-white" data-testid="header-periode">Periode</TableHead>
              <TableHead className="text-white font-semibold text-xs text-center border-r border-white" data-testid="header-keterangan">Keterangan</TableHead>
              <TableHead className="text-white font-semibold text-xs text-center border-r border-white" data-testid="header-status">Status</TableHead>
              <TableHead className="text-white font-semibold text-xs text-center" data-testid="header-saldo">Saldo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions && transactions.length > 0 ? (
              transactions.map((transaction) => (
                <TableRow 
                  key={transaction.id} 
                  className="border-b border-white"
                  data-testid={`row-transaction-${transaction.id}`}
                >
                  <TableCell className="text-xs text-white text-center whitespace-pre-line py-2 border-r border-white" data-testid={`cell-date-${transaction.id}`}>
                    {formatDate(transaction.date)}
                  </TableCell>
                  <TableCell className="text-xs text-white text-center py-2 border-r border-white" data-testid={`cell-period-${transaction.id}`}>
                    {transaction.period || '-'}
                  </TableCell>
                  <TableCell className="text-xs text-white text-center py-2 border-r border-white" data-testid={`cell-description-${transaction.id}`}>
                    {transaction.description}
                  </TableCell>
                  <TableCell className="text-xs text-white text-center py-2 border-r border-white" data-testid={`cell-status-${transaction.id}`}>
                    {transaction.status}
                  </TableCell>
                  <TableCell 
                    className="text-xs font-semibold text-center py-2 text-yellow-500"
                    data-testid={`cell-balance-${transaction.id}`}
                  >
                    {formatNumber(transaction.balance)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-white py-6">
                  {activeTab === 'new' ? 'Tidak ada transaksi dalam 7 hari terakhir' : 'Tidak ada transaksi'}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      </div>
      
      <Footer />
    </div>
  );
}
