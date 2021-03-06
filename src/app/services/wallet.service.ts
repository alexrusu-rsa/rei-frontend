import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseWrapper } from '../model/responseWrapper.model';
import { catchError, retry } from 'rxjs/operators';
import { Transaction } from '../model/wallet.model';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  url = '/';

  constructor(private http: HttpClient) {}

  getWallets(): Observable<ResponseWrapper> {
    return this.http.get<ResponseWrapper>(environment.walletsAPI);
  }

  addWallet(name: string): Observable<ResponseWrapper> {
    return this.http
      .post<ResponseWrapper>(environment.walletsAPI, {
        name,
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  addTransaction(
    name: string,
    transaction: Transaction
  ): Observable<ResponseWrapper> {
    return this.http
      .put<ResponseWrapper>(environment.walletsAPI, {
        name,
        transaction,
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
          `body was: ${error.error.message}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(error.error.message);
  }
}
