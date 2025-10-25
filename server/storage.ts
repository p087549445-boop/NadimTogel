import { type User, type InsertUser, type Transaction, type InsertTransaction, type Invoice, type InsertInvoice } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getTransactions(): Promise<Transaction[]>;
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  getInvoices(): Promise<Invoice[]>;
  createInvoice(invoice: InsertInvoice): Promise<Invoice>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private transactions: Map<string, Transaction>;
  private invoices: Map<string, Invoice>;

  constructor() {
    this.users = new Map();
    this.transactions = new Map();
    this.invoices = new Map();
    this.seedTransactions();
    this.seedInvoices();
  }

  private seedTransactions() {
    const sampleTransactions: Transaction[] = [
      // Oktober 20
      { id: randomUUID(), date: new Date('2025-10-20T14:30:15'), period: null, description: 'Deposit Dana Manual', status: 'Deposit 100.000', amount: 100000, balance: 545000 },
      { id: randomUUID(), date: new Date('2025-10-20T10:15:30'), period: '2920', description: 'Togel 4D', status: 'Menang', amount: 80000, balance: 445000 },
      
      // Oktober 19
      { id: randomUUID(), date: new Date('2025-10-19T21:28:34'), period: '2919', description: 'Togel 3D', status: 'Menang', amount: 50000, balance: 365000 },
      { id: randomUUID(), date: new Date('2025-10-19T15:28:08'), period: '2918', description: 'Slot Game', status: 'Kalah', amount: -25000, balance: 315000 },
      
      // Oktober 18
      { id: randomUUID(), date: new Date('2025-10-18T21:28:04'), period: '2917', description: 'Casino Roulette', status: 'Menang', amount: 40000, balance: 340000 },
      { id: randomUUID(), date: new Date('2025-10-18T15:27:02'), period: '2916', description: 'Togel 2D', status: 'Kalah', amount: -15000, balance: 300000 },
      
      // Oktober 17
      { id: randomUUID(), date: new Date('2025-10-17T21:28:36'), period: '2915', description: 'Slot Machine', status: 'Menang', amount: 35000, balance: 315000 },
      { id: randomUUID(), date: new Date('2025-10-17T15:28:59'), period: '2914', description: 'Togel 4D', status: 'Kalah', amount: -20000, balance: 280000 },
      
      // Oktober 16
      { id: randomUUID(), date: new Date('2025-10-16T21:27:18'), period: '2913', description: 'Casino Blackjack', status: 'Menang', amount: 60000, balance: 300000 },
      { id: randomUUID(), date: new Date('2025-10-16T15:28:52'), period: null, description: 'Bonus Rolling Slot', status: 'rolling 4.200.00', amount: 4200, balance: 240000 },
      
      // Oktober 15
      { id: randomUUID(), date: new Date('2025-10-15T21:29:24'), period: '2912', description: 'Togel 3D', status: 'Menang', amount: 45000, balance: 235800 },
      { id: randomUUID(), date: new Date('2025-10-15T15:26:33'), period: '2911', description: 'Slot Game', status: 'Kalah', amount: -18000, balance: 190800 },
      
      // Oktober 14
      { id: randomUUID(), date: new Date('2025-10-14T18:45:22'), period: null, description: 'Tarik Dana', status: 'Withdraw 50.000', amount: -50000, balance: 208800 },
      { id: randomUUID(), date: new Date('2025-10-14T12:30:10'), period: null, description: 'Deposit Dana Manual', status: 'Deposit 150.000', amount: 150000, balance: 258800 },
      
      // Oktober 13
      { id: randomUUID(), date: new Date('2025-10-13T20:15:45'), period: '2910', description: 'Togel 4D', status: 'Menang', amount: 70000, balance: 108800 },
      { id: randomUUID(), date: new Date('2025-10-13T14:22:11'), period: '2909', description: 'Casino Roulette', status: 'Kalah', amount: -22000, balance: 38800 },
      
      // Oktober 12
      { id: randomUUID(), date: new Date('2025-10-12T19:30:28'), period: '2908', description: 'Slot Machine', status: 'Menang', amount: 38000, balance: 60800 },
      { id: randomUUID(), date: new Date('2025-10-12T13:18:55'), period: null, description: 'Deposit Dana Manual', status: 'Deposit 100.000', amount: 100000, balance: 22800 },
      
      // Oktober 11
      { id: randomUUID(), date: new Date('2025-10-11T21:45:33'), period: '2907', description: 'Togel 2D', status: 'Kalah', amount: -28000, balance: -77200 },
      { id: randomUUID(), date: new Date('2025-10-11T16:12:40'), period: '2906', description: 'Casino Blackjack', status: 'Menang', amount: 52000, balance: -49200 },
      
      // Oktober 10
      { id: randomUUID(), date: new Date('2025-10-10T20:05:18'), period: '2905', description: 'Togel 3D', status: 'Menang', amount: 48000, balance: -101200 },
      { id: randomUUID(), date: new Date('2025-10-10T14:50:25'), period: null, description: 'Tarik Dana', status: 'Withdraw 75.000', amount: -75000, balance: -149200 },
      
      // Oktober 9
      { id: randomUUID(), date: new Date('2025-10-09T19:20:12'), period: '2904', description: 'Slot Game', status: 'Kalah', amount: -16000, balance: -74200 },
      { id: randomUUID(), date: new Date('2025-10-09T12:35:48'), period: '2903', description: 'Togel 4D', status: 'Menang', amount: 65000, balance: -58200 },
      
      // Oktober 8
      { id: randomUUID(), date: new Date('2025-10-08T21:10:05'), period: '2902', description: 'Casino Roulette', status: 'Menang', amount: 42000, balance: -123200 },
      { id: randomUUID(), date: new Date('2025-10-08T15:40:22'), period: null, description: 'Deposit Dana Manual', status: 'Deposit 120.000', amount: 120000, balance: -165200 },
      
      // Oktober 7
      { id: randomUUID(), date: new Date('2025-10-07T18:25:37'), period: '2901', description: 'Togel 2D', status: 'Kalah', amount: -24000, balance: -285200 },
      { id: randomUUID(), date: new Date('2025-10-07T11:15:50'), period: '2900', description: 'Slot Machine', status: 'Menang', amount: 36000, balance: -261200 },
      
      // Oktober 6
      { id: randomUUID(), date: new Date('2025-10-06T20:55:14'), period: '2899', description: 'Togel 3D', status: 'Menang', amount: 55000, balance: -297200 },
      { id: randomUUID(), date: new Date('2025-10-06T14:08:29'), period: null, description: 'Bonus Rolling Slot', status: 'rolling 3.800.00', amount: 3800, balance: -352200 },
      
      // Oktober 5
      { id: randomUUID(), date: new Date('2025-10-05T19:42:51'), period: '2898', description: 'Casino Blackjack', status: 'Kalah', amount: -30000, balance: -356000 },
      { id: randomUUID(), date: new Date('2025-10-05T13:28:36'), period: '2897', description: 'Togel 4D', status: 'Menang', amount: 72000, balance: -326000 },
      
      // Oktober 4
      { id: randomUUID(), date: new Date('2025-10-04T21:15:42'), period: '2896', description: 'Slot Game', status: 'Kalah', amount: -19000, balance: -398000 },
      { id: randomUUID(), date: new Date('2025-10-04T15:22:17'), period: null, description: 'Deposit Dana Manual', status: 'Deposit 80.000', amount: 80000, balance: -379000 },
      
      // Oktober 3
      { id: randomUUID(), date: new Date('2025-10-03T20:38:25'), period: '2895', description: 'Casino Roulette', status: 'Menang', amount: 44000, balance: -459000 },
      { id: randomUUID(), date: new Date('2025-10-03T14:45:58'), period: '2894', description: 'Togel 2D', status: 'Kalah', amount: -21000, balance: -503000 },
      
      // Oktober 2
      { id: randomUUID(), date: new Date('2025-10-02T19:12:33'), period: '2893', description: 'Slot Machine', status: 'Menang', amount: 39000, balance: -482000 },
      { id: randomUUID(), date: new Date('2025-10-02T12:58:46'), period: null, description: 'Tarik Dana', status: 'Withdraw 60.000', amount: -60000, balance: -521000 },
      
      // Oktober 1
      { id: randomUUID(), date: new Date('2025-10-01T21:05:19'), period: '2892', description: 'Togel 3D', status: 'Menang', amount: 51000, balance: -461000 },
      { id: randomUUID(), date: new Date('2025-10-01T15:33:52'), period: '2891', description: 'Casino Blackjack', status: 'Kalah', amount: -27000, balance: -512000 },
      
      // September 30
      { id: randomUUID(), date: new Date('2025-09-30T20:18:41'), period: '2890', description: 'Togel 4D', status: 'Menang', amount: 68000, balance: -485000 },
      { id: randomUUID(), date: new Date('2025-09-30T13:42:27'), period: null, description: 'Deposit Dana Manual', status: 'Deposit 100.000', amount: 100000, balance: -553000 },
      
      // September 29
      { id: randomUUID(), date: new Date('2025-09-29T19:55:08'), period: '2889', description: 'Slot Game', status: 'Kalah', amount: -23000, balance: -653000 },
      { id: randomUUID(), date: new Date('2025-09-29T14:20:15'), period: '2888', description: 'Casino Roulette', status: 'Menang', amount: 46000, balance: -630000 },
      
      // September 28
      { id: randomUUID(), date: new Date('2025-09-28T21:32:54'), period: '2887', description: 'Togel 2D', status: 'Kalah', amount: -17000, balance: -676000 },
      { id: randomUUID(), date: new Date('2025-09-28T16:08:39'), period: null, description: 'Bonus Rolling Slot', status: 'rolling 5.100.00', amount: 5100, balance: -659000 },
      
      // September 27
      { id: randomUUID(), date: new Date('2025-09-27T20:45:22'), period: '2886', description: 'Togel 3D', status: 'Menang', amount: 53000, balance: -664100 },
      { id: randomUUID(), date: new Date('2025-09-27T14:15:47'), period: '2885', description: 'Slot Machine', status: 'Kalah', amount: -20000, balance: -717100 },
      
      // September 26
      { id: randomUUID(), date: new Date('2025-09-26T19:28:11'), period: '2884', description: 'Casino Blackjack', status: 'Menang', amount: 58000, balance: -697100 },
      { id: randomUUID(), date: new Date('2025-09-26T13:52:36'), period: null, description: 'Deposit Dana Manual', status: 'Deposit 90.000', amount: 90000, balance: -755100 },
      
      // September 25
      { id: randomUUID(), date: new Date('2025-09-25T21:18:49'), period: '2883', description: 'Togel 4D', status: 'Menang', amount: 75000, balance: -845100 },
      { id: randomUUID(), date: new Date('2025-09-25T15:35:24'), period: '2882', description: 'Casino Roulette', status: 'Kalah', amount: -26000, balance: -920100 },
      
      // September 24
      { id: randomUUID(), date: new Date('2025-09-24T20:12:38'), period: '2881', description: 'Slot Game', status: 'Menang', amount: 41000, balance: -894100 },
      { id: randomUUID(), date: new Date('2025-09-24T14:48:55'), period: null, description: 'Tarik Dana', status: 'Withdraw 55.000', amount: -55000, balance: -935100 },
      
      // September 23
      { id: randomUUID(), date: new Date('2025-09-23T19:25:16'), period: '2880', description: 'Togel 2D', status: 'Kalah', amount: -18000, balance: -880100 },
      { id: randomUUID(), date: new Date('2025-09-23T13:18:42'), period: '2879', description: 'Casino Blackjack', status: 'Menang', amount: 49000, balance: -862100 },
      
      // September 22
      { id: randomUUID(), date: new Date('2025-09-22T21:42:29'), period: '2878', description: 'Togel 3D', status: 'Menang', amount: 56000, balance: -911100 },
      { id: randomUUID(), date: new Date('2025-09-22T15:55:17'), period: null, description: 'Deposit Dana Manual', status: 'Deposit 110.000', amount: 110000, balance: -967100 },
      
      // September 21
      { id: randomUUID(), date: new Date('2025-09-21T20:08:34'), period: '2877', description: 'Slot Machine', status: 'Kalah', amount: -22000, balance: -1077100 },
      { id: randomUUID(), date: new Date('2025-09-21T14:32:51'), period: '2876', description: 'Togel 4D', status: 'Menang', amount: 62000, balance: -1055100 },
      
      // September 20
      { id: randomUUID(), date: new Date('2025-09-20T19:15:48'), period: '2875', description: 'Casino Roulette', status: 'Menang', amount: 43000, balance: -1117100 },
      { id: randomUUID(), date: new Date('2025-09-20T12:45:23'), period: null, description: 'Deposit Dana Manual', status: 'Deposit 100.000', amount: 100000, balance: -1160100 },
    ];

    sampleTransactions.forEach((t) => {
      this.transactions.set(t.id, t);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getTransactions(): Promise<Transaction[]> {
    return Array.from(this.transactions.values()).sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
  }

  async createTransaction(insertTransaction: InsertTransaction): Promise<Transaction> {
    const id = randomUUID();
    const transaction: Transaction = { 
      ...insertTransaction, 
      id,
      period: insertTransaction.period ?? null 
    };
    this.transactions.set(id, transaction);
    return transaction;
  }

  private seedInvoices() {
    const sampleInvoices: Invoice[] = [
      { id: randomUUID(), date: new Date('2025-10-20T14:30:15'), period: '12106', game: 'TOTO MACAU', amount: 50000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-19T21:28:34'), period: '12105', game: 'SINGAPORE', amount: 75000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-19T15:28:08'), period: '12104', game: 'SYDNEY', amount: 30000, status: 'Pending' },
      { id: randomUUID(), date: new Date('2025-10-18T21:28:04'), period: '12103', game: 'HONGKONG', amount: 100000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-18T15:27:02'), period: '12102', game: 'JAKARTA 1400', amount: 45000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-17T21:28:36'), period: '12101', game: 'TOTO MACAU', amount: 60000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-17T15:28:59'), period: '12100', game: 'CAMBODIA', amount: 25000, status: 'Cancelled' },
      { id: randomUUID(), date: new Date('2025-10-16T21:27:18'), period: '12099', game: 'BRUNEI 14', amount: 80000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-16T15:28:52'), period: '12098', game: 'SINGAPORE', amount: 55000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-15T21:29:24'), period: '12097', game: 'SYDNEY', amount: 40000, status: 'Pending' },
      { id: randomUUID(), date: new Date('2025-10-15T15:26:33'), period: '12096', game: 'TOTO MACAU', amount: 90000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-14T18:45:22'), period: '12095', game: 'HONGKONG', amount: 70000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-14T12:30:10'), period: '12094', game: 'JAKARTA 2330', amount: 35000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-13T20:15:45'), period: '12093', game: 'TOTO MACAU', amount: 65000, status: 'Paid' },
      { id: randomUUID(), date: new Date('2025-10-13T14:22:11'), period: '12092', game: 'BRUNEI 21', amount: 48000, status: 'Cancelled' },
    ];

    sampleInvoices.forEach((i) => {
      this.invoices.set(i.id, i);
    });
  }

  async getInvoices(): Promise<Invoice[]> {
    return Array.from(this.invoices.values()).sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
  }

  async createInvoice(insertInvoice: InsertInvoice): Promise<Invoice> {
    const id = randomUUID();
    const invoice: Invoice = { 
      ...insertInvoice, 
      id,
      period: insertInvoice.period ?? null 
    };
    this.invoices.set(id, invoice);
    return invoice;
  }
}

export const storage = new MemStorage();
