import { useState } from 'react';
import Sidebar from '../Sidebar';
import { Button } from '@/components/ui/button';

export default function SidebarExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <div className="relative h-screen">
      <Button onClick={() => setIsOpen(true)}>Open Sidebar</Button>
      <Sidebar 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        activeMenu={activeMenu}
        onMenuClick={setActiveMenu}
      />
    </div>
  );
}
