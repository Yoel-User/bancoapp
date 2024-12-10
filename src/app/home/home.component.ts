import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  currentBalance: number = 0;
  transfers: any[] = [];

  ngOnInit() {
    if (this.isBrowser() && this.isLocalStorageAvailable()) {
      const storedBalance = localStorage.getItem('currentBalance');
      if (storedBalance) {
        this.currentBalance = parseFloat(storedBalance);
      }

      const storedTransfers = localStorage.getItem('transfers');
      if (storedTransfers) {
        this.transfers = JSON.parse(storedTransfers);
      }
    }
  }

  isLocalStorageAvailable(): boolean {
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
}
