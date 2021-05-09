import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponseWrapper } from 'src/app/model/responseWrapper.model';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'rei-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.sass'],
})
export class AddWalletComponent {
  newWalletForm = new FormGroup({
    walletName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(
    private walletService: WalletService,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit(): void {
    const walletName: string = this.newWalletForm.value.walletName;
    this.walletService.addWallet(walletName).subscribe(
      () => {
        this._snackBar.open(
          `Successfully added wallet:  ${walletName}`,
          undefined,
          {
            duration: 3000,
          }
        );
        this.newWalletForm.reset();
      },
      (err) => {
        this.newWalletForm.controls.walletName.setErrors({ err });
      }
    );
  }
}
