import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rei-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;
  subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.iconRegistry.addSvgIcon(
      'rei-logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/REI.svg')
    );

    this.navLinks = [
      {
        label: 'Wallets',
        link: './wallets',
        index: 0,
      },
      {
        label: 'Add new wallet',
        link: './addwallet',
        index: 1,
      },
      {
        label: 'Add transaction',
        link: './addtransaction',
        index: 2,
      },
    ];
  }
}
