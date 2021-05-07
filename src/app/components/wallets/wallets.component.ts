import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Wallet } from 'src/app/model/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'rei-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class WalletsComponent implements OnDestroy, AfterViewInit {
  wallets: MatTableDataSource<Wallet> = new MatTableDataSource<Wallet>();
  walletSubscription: Subscription = new Subscription();
  expandedElement!: Wallet | null;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  displayedColumns = [
    'id',
    'name',
    'balance',
    'transactions',
    'transactionsTotal',
  ];

  constructor(private walletService: WalletService) {
    this.walletSubscription = this.walletService
      .getWallets()
      .subscribe((wallets: Wallet[]) => {
        this.wallets.data = wallets.sort(
          (wallet1: Wallet, wallet2: Wallet) =>
            wallet2.balance - wallet1.balance
        );
        console.log();
      });
  }

  ngAfterViewInit(): void {
    this.wallets.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.walletSubscription.unsubscribe();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.wallets.filter = filterValue.trim().toLowerCase();

    if (this.wallets.paginator) {
      this.wallets.paginator.firstPage();
    }
  }
}
