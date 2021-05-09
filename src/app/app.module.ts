import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WalletService } from './services/wallet.service';
import { MaterialModule } from './ng-modules/material.module';
import { FormsModule } from '@angular/forms';
import { WalletsComponent } from './components/wallets/wallets.component';
import { AddWalletComponent } from './components/add-wallet/add-wallet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';

@NgModule({
  declarations: [AppComponent, WalletsComponent, AddWalletComponent, AddTransactionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WalletService],
  bootstrap: [AppComponent],
})
export class AppModule {}
