import { Component, OnInit } from '@angular/core';
import { AlertDialogService } from 'src/app/shared/alert-dialog/alert-dialog.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(
    private alertDialogService: AlertDialogService
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    console.log('lazy one button');
    const options = {
      title: 'Leave page?',
      message: 'By leaving this page you will permanently lose your form changes.',
      cancelText: 'CANCEL',
      confirmText: 'YES, LEAVE PAGE',
      disableClose: true
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
