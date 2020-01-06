import { Injectable } from '@angular/core';
import { DialogExampleComponent } from '../components/dialog-example/dialog-example.component';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(public matDialog: MatDialog) { }

  openDialog() {
    this.matDialog.open(DialogExampleComponent, {
      disableClose: true
    });
  }
}
