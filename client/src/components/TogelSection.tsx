import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface TogelGame {
  id: string;
  name: string;
  number: string;
  time?: string;
  status?: 'live' | 'bet_closed' | 'live_result';
  logo?: string;
  hasStreaming?: boolean;
}

const togelGames: TogelGame[] = [
  {
    id: '1',
    name: '5D TOTO MACAU',
    number: '95561',
    time: '03:54:45'
  },
  {
    id: '2',
    name: '4D TOTO MACAU',
    number: '8193',
    time: '01:38:45'
  },
  {
    id: '3',
    name: 'KING KONG 4D',
    number: '1415',
    time: '05:39:45'
  },
  {
    id: '4',
    name: 'TOTOMALI2030',
    number: '7387',
    time: '08:54:45'
  },
  {
    id: '5',
    name: 'JAKARTA 1400',
    number: '8438',
    time: '02:29:39'
  },
  {
    id: '6',
    name: 'HOKIDRAW',
    number: '5380',
    time: '00:34:39'
  },
  {
    id: '7',
    name: 'TOTOMALI1530',
    number: '4809',
    time: '03:49:39'
  },
  {
    id: '8',
    name: 'JAKARTA 2330',
    number: '7884',
    time: '11:59:39'
  },
  {
    id: '9',
    name: 'TOTOMALI2330',
    number: '6867',
    time: '11:49:39'
  },
  {
    id: '10',
    name: 'SINGAPORE',
    number: '2480',
    time: '06:04:39'
  },
  {
    id: '11',
    name: 'CAMBODIA',
    number: '6072',
    status: 'live'
  },
  {
    id: '12',
    name: 'TOTOCAMBODIA',
    number: '3785',
    status: 'bet_closed'
  },
  {
    id: '13',
    name: 'SYDNEY LOTTO',
    number: '2095',
    time: '02:22:21',
    status: 'live_result',
    hasStreaming: true
  },
  {
    id: '14',
    name: 'BRUNEI 14',
    number: '5895',
    time: '03:03:20'
  },
  {
    id: '15',
    name: 'BRUNEI 21',
    number: '1788',
    time: '10:03:20'
  },
  {
    id: '16',
    name: 'BRUNEI 02',
    number: '3115',
    time: '15:03:20'
  },
  {
    id: '17',
    name: 'CHELSEA 11',
    number: '5924',
    status: 'bet_closed'
  },
  {
    id: '18',
    name: 'CHELSEA 15',
    number: '7790',
    time: '03:32:30'
  },
  {
    id: '19',
    name: 'CHELSEA 19',
    number: '7705',
    time: '07:32:30'
  },
  {
    id: '20',
    name: 'CHELSEA 21',
    number: '6813',
    time: '09:32:30'
  },
  {
    id: '21',
    name: 'HUAHIN 0100',
    number: '6989',
    time: '13:17:30'
  },
  {
    id: '22',
    name: 'HUAHIN 1630',
    number: '6174',
    time: '04:47:30'
  },
  {
    id: '23',
    name: 'HUAHIN 2100',
    number: '9978',
    time: '09:17:30'
  },
  {
    id: '24',
    name: 'BANGKOK 0930',
    number: '0715',
    time: '21:46:11'
  },
  {
    id: '25',
    name: 'BANGKOK 0130',
    number: '1087',
    time: '13:46:11'
  },
  {
    id: '26',
    name: 'CHINA',
    number: '0267',
    time: '03:36:11'
  },
  {
    id: '27',
    name: 'HONGKONG LOTTO',
    number: '3213',
    time: '11:30:11',
    status: 'live_result',
    hasStreaming: true
  },
  {
    id: '28',
    name: 'TAIWAN',
    number: '4561',
    time: '08:51:11'
  },
  {
    id: '29',
    name: 'NEVADA',
    number: '8571',
    time: '09:30:01'
  },
  {
    id: '30',
    name: 'NEWYORKEVE',
    number: '0648',
    time: '21:55:01'
  },
  {
    id: '31',
    name: 'CAROLINADAY',
    number: '8249',
    time: '14:15:01'
  },
  {
    id: '32',
    name: 'FLORIDAEVE',
    number: '8949',
    time: '21:05:01'
  },
  {
    id: '33',
    name: 'CALIFORNIA',
    number: '0667',
    time: '20:55:01'
  },
  {
    id: '34',
    name: 'CAROLINAEVE',
    number: '4827',
    time: '22:47:01'
  },
  {
    id: '35',
    name: 'PCSO',
    number: '1229',
    time: '08:19:17'
  },
  {
    id: '36',
    name: 'MAGNUM',
    number: '8501',
    time: '06:39:17'
  },
  {
    id: '37',
    name: 'OREGON03',
    number: '4388',
    time: '15:19:17'
  },
  {
    id: '38',
    name: 'OREGON06',
    number: '7638',
    time: '18:19:17'
  },
  {
    id: '39',
    name: 'OREGON09',
    number: '1958',
    time: '21:19:17'
  },
  {
    id: '40',
    name: 'OREGON12',
    number: '7759',
    time: '00:19:17'
  },
  {
    id: '41',
    name: 'BULLSEYE',
    number: '0310',
    time: '00:28:30'
  },
  {
    id: '42',
    name: 'NEWYORKMID',
    number: '1850',
    time: '13:43:30'
  },
  {
    id: '43',
    name: 'FLORIDAMID',
    number: '0566',
    time: '12:48:30'
  },
  {
    id: '44',
    name: 'KENTUCKYMID',
    number: '6736',
    time: '12:33:30'
  },
  {
    id: '45',
    name: 'POIPET12',
    number: '8721',
    time: '00:43:30'
  },
  {
    id: '46',
    name: 'POIPET15',
    number: '7072',
    time: '03:43:30'
  },
  {
    id: '47',
    name: 'POIPET19',
    number: '7505',
    time: '07:58:30'
  },
  {
    id: '48',
    name: 'POIPET22',
    number: '5000',
    time: '10:58:30'
  },
  {
    id: '49',
    name: 'KENTUCKYEVE',
    number: '0946',
    time: '22:12:22'
  }
];

function parseTime(timeStr: string): number {
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function formatTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

interface TogelSectionProps {
  searchQuery?: string;
}

export default function TogelSection({ searchQuery = '' }: TogelSectionProps) {
  const [timers, setTimers] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    togelGames.forEach(game => {
      if (game.time) {
        initial[game.id] = parseTime(game.time);
      }
    });
    return initial;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(id => {
          if (updated[id] > 0) {
            updated[id] -= 1;
          }
        });
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredGames = togelGames.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredGames.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <div className="bg-background">
        <h2 className="text-lg font-bold text-white bg-muted/50 px-3 py-3 mb-3 uppercase tracking-wide">
          TOGEL 4D
        </h2>
        <div className="px-3 pb-0">
          <div className="grid grid-cols-2 gap-1">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              className={`backdrop-blur-sm p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover-elevate active-elevate-2 transition-all min-h-[180px] ${
                game.status === 'live_result' 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 border-blue-400' 
                  : 'bg-card/80'
              }`}
              data-testid={`card-togel-${game.id}`}
              onClick={() => console.log(`Togel ${game.name} clicked`)}
            >
              {game.status === 'live_result' && (
                <div className="absolute top-2 left-2 bg-blue-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  LIVE RESULT
                </div>
              )}
              <h3 className={`text-[10px] font-bold text-center uppercase tracking-wide ${
                game.status === 'live_result' ? 'text-white mt-5' : 'text-foreground'
              }`}>
                {game.name}
              </h3>
              <div className={`text-2xl font-bold ${
                game.status === 'live_result' ? 'text-white bg-blue-900/50 px-4 py-1 rounded' : 'text-primary'
              }`}>
                {game.number}
              </div>
              {game.status === 'live' ? (
                <div className="flex items-center gap-1.5 text-sm font-bold text-pink-500">
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                  LIVE
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                </div>
              ) : game.status === 'bet_closed' ? (
                <div className="text-sm font-bold text-pink-500">
                  BET CLOSED
                </div>
              ) : game.status === 'live_result' ? (
                <>
                  <div className="text-sm font-mono text-green-400">
                    {formatTime(timers[game.id] || 0)}
                  </div>
                  {game.hasStreaming && (
                    <button 
                      className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1"
                      data-testid={`button-streaming-${game.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Watch streaming clicked');
                      }}
                    >
                      <span>▶</span>
                      WATCH LIVE STREAMING
                    </button>
                  )}
                </>
              ) : (
                <div className="text-sm font-mono text-muted-foreground">
                  {formatTime(timers[game.id] || 0)}
                </div>
              )}
            </Card>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
