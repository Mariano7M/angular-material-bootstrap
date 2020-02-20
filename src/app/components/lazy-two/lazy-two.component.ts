import { Component, OnInit } from '@angular/core';
import { AlertDialogService } from 'src/app/shared/alert-dialog/alert-dialog.service';

@Component({
  selector: 'app-lazy-two',
  templateUrl: './lazy-two.component.html',
  styleUrls: ['./lazy-two.component.css']
})
export class LazyTwoComponent implements OnInit {

  constructor(
    private alertDialogService: AlertDialogService
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    console.log('lazy two button');
    const options = {
      title: 'Leave page on lazy two?',
      message: 'By leaving this page you will permanently lose your form changes.',
      cancelText: 'CANCEL',
      confirmText: 'YES, LEAVE PAGE',
      disableClose: false
    };

    this.alertDialogService.open(options);

    this.alertDialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        console.log('OK');
      } else {
        console.log('CANCEL');

      }
    });
  }
}
