import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wallet } from '../model/wallet.model';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  url = '/';

  constructor(private http: HttpClient) {}

  getWallets(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(environment.walletsAPI + this.url);
  }
}
