import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transaction } from 'src/app/model/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'rei-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.sass'],
})
export class AddTransactionComponent {
  newTransactionForm = new FormGroup({
    walletName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    transactionReference: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    transactionAmount: new FormControl('', [Validators.required]),
  });

  constructor(
    private walletService: WalletService,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit(): void {
    const walletName: string = this.newTransactionForm.value.walletName;
    const transaction: Transaction = {
      reference: this.newTransactionForm.value.transactionReference,
      amount: this.newTransactionForm.value.transactionAmount,
    };
    this.walletService.addTransaction(walletName, transaction).subscribe(
      () => {
        this._snackBar.open(
          `Successfully added transaction:  ${transaction.reference} on ${walletName}`,
          undefined,
          {
            duration: 3000,
          }
        );
        this.newTransactionForm.reset();
      },
      (err) => {
        console.log(err);
        this.newTransactionForm.controls.walletName.setErrors({ err });
      }
    );
  }
}
