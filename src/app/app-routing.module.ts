import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { AddWalletComponent } from './components/add-wallet/add-wallet.component';
import { WalletsComponent } from './components/wallets/wallets.component';

const routes: Routes = [
  { path: 'wallets', component: WalletsComponent },
  { path: 'addwallet', component: AddWalletComponent },
  { path: 'addtransaction', component: AddTransactionComponent },
  { path: '**', redirectTo: 'wallets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
