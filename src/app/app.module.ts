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
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [AppComponent, WalletsComponent, EmptyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [WalletService],
  bootstrap: [AppComponent],
})
export class AppModule {}
