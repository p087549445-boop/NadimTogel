import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import UserBalance from "@/components/UserBalance";
import DepositSection from "@/components/DepositSection";
import WithdrawSection from "@/components/WithdrawSection";
import HistorySection from "@/components/HistorySection";
import TransactionSection from "@/components/TransactionSection";
import InvoiceSection from "@/components/InvoiceSection";
import PromosiSection from "@/components/PromosiSection";
import HadiahSection from "@/components/HadiahSection";
import ContactSection from "@/components/ContactSection";
import CategoryGrid from "@/components/CategoryGrid";
import SearchButton from "@/components/SearchButton";
import PromoBanner from "@/components/PromoBanner";
import TogelSection from "@/components/TogelSection";
import CasinoSection from "@/components/CasinoSection";
import SlotSection from "@/components/SlotSection";
import ELotterySection from "@/components/ELotterySection";
import ArcadeSection from "@/components/ArcadeSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state dengan URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    setActiveMenu(hash);
  }, []);

  // Listen ke browser back/forward dan manual hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setActiveMenu(hash);
      setIsSidebarOpen(false);
    };

    window.addEventListener('popstate', handleHashChange);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('popstate', handleHashChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleMenuClick = (menuId: string) => {
    if (menuId === 'logout') {
      console.log('Logout clicked');
      setIsSidebarOpen(false);
      return;
    }
    
    // Skip pushState jika sudah di menu yang sama
    const currentHash = window.location.hash.slice(1) || 'home';
    if (currentHash === menuId) {
      setIsSidebarOpen(false);
      return;
    }
    
    setActiveMenu(menuId);
    setIsSidebarOpen(false);
    window.history.pushState(null, '', `#${menuId}`);
  };

  const handleDepositClick = () => {
    handleMenuClick('deposit');
  };

  const handleCancelWithdraw = () => {
    handleMenuClick('home');
  };

  return (
    <div className="min-h-screen bg-background pb-0">
      <Header 
        onMenuClick={() => setIsSidebarOpen(true)} 
        onDepositClick={handleDepositClick}
      />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        activeMenu={activeMenu}
        onMenuClick={handleMenuClick}
      />
      <UserBalance username="GUEST" balance={0} />
      
      {activeMenu === 'deposit' ? (
        <DepositSection />
      ) : activeMenu === 'withdraw' ? (
        <WithdrawSection onCancel={handleCancelWithdraw} />
      ) : activeMenu === 'history' ? (
        <HistorySection />
      ) : activeMenu === 'transaksi' ? (
        <TransactionSection />
      ) : activeMenu === 'invoice' ? (
        <InvoiceSection />
      ) : activeMenu === 'promosi' ? (
        <PromosiSection />
      ) : activeMenu === 'hadiah' ? (
        <HadiahSection />
      ) : activeMenu === 'hubungi' ? (
        <ContactSection />
      ) : (
        <>
          <CategoryGrid onCategoryChange={setSelectedCategory} />
          <SearchButton value={searchQuery} onChange={setSearchQuery} />
          <PromoBanner />
          {(selectedCategory === 'semua' || selectedCategory === 'togel') && <TogelSection searchQuery={searchQuery} />}
          {(selectedCategory === 'semua' || selectedCategory === 'casino') && <CasinoSection searchQuery={searchQuery} />}
          {(selectedCategory === 'semua' || selectedCategory === 'slot') && <SlotSection searchQuery={searchQuery} />}
          {(selectedCategory === 'semua' || selectedCategory === 'e-lottery') && <ELotterySection searchQuery={searchQuery} />}
          {(selectedCategory === 'semua' || selectedCategory === 'arcade') && <ArcadeSection searchQuery={searchQuery} />}
          <Footer />
        </>
      )}
    </div>
  );
}
