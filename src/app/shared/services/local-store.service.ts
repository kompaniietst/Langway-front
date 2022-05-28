import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    }
    catch (err) {
      console.log('err', err);
    }
  }

  get(key: string): any {
    try {
      let data = JSON.parse(localStorage.getItem(key) || '');
      return data;
    }
    catch (err) {
      console.log('err', err);
      return null;
    }
  }

  remove() {alert();
    localStorage.clear();
  }
}
