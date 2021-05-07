import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';
import { WalletsComponent } from './components/wallets/wallets.component';

const routes: Routes = [
  { path: 'wallets', component: WalletsComponent },
  { path: '**', redirectTo: 'wallets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
