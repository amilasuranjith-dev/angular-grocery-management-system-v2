import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  stats = [
    { label: 'Total Revenue', value: '$24,560', change: '+12%', isPositive: true, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Total Orders', value: '1,240', change: '+5%', isPositive: true, icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
    { label: 'New Customers', value: '350', change: '+8%', isPositive: true, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { label: 'Pending Orders', value: '45', change: '-2%', isPositive: false, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', date: '2023-10-25', status: 'Completed', total: '$120.50' },
    { id: '#ORD-002', customer: 'Jane Smith', date: '2023-10-24', status: 'Pending', total: '$85.00' },
    { id: '#ORD-003', customer: 'Michael Brown', date: '2023-10-24', status: 'Cancelled', total: '$45.00' },
    { id: '#ORD-004', customer: 'Emily Davis', date: '2023-10-23', status: 'Completed', total: '$210.00' },
    { id: '#ORD-005', customer: 'Chris Wilson', date: '2023-10-23', status: 'Pending', total: '$65.75' },
  ];

  topProducts = [
    { name: 'Fresh Apples', sales: '1,200 kg', revenue: '$3,600' },
    { name: 'Organic Milk', sales: '850 units', revenue: '$2,550' },
    { name: 'Whole Wheat Bread', sales: '600 loaves', revenue: '$1,800' },
    { name: 'Bananas', sales: '950 kg', revenue: '$1,425' },
    { name: 'Eggs (Dozen)', sales: '400 packs', revenue: '$1,200' },
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800';
      case 'Pending': return 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-800';
      case 'Cancelled': return 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-200 dark:border-rose-800';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600';
    }
  }
}
