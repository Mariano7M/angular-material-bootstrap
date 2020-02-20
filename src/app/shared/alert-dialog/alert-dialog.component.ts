import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      message: string,
      showConfirmText: boolean,
      showCancelText: boolean,
      confirmText: string,
      cancelText: string,
      disableClose: boolean
    },
    private alertDialogRef: MatDialogRef<AlertDialogComponent>) {
    this.alertDialogRef.disableClose = this.data.disableClose;
  }

  ngOnInit() {
  }

  public cancel() {
    this.close(false);
  }
  public close(value) {
    this.alertDialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
}
