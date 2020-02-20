import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from './alert-dialog.component';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertDialogService {
  dialogRef: MatDialogRef<AlertDialogComponent>;

  constructor(private dialog: MatDialog) {

  }

  open(options) {
    this.dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
        disableClose: options.disableClose
      }
    });
  }

  confirmed(): Observable<any> {

    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
      return res;
    }
    ));
  }
}
