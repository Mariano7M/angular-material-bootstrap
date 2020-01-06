import { Component } from '@angular/core';
import { MatDialog } from '@angular/material'
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { InvoiceService } from './services/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';

  constructor(private invoiceService: InvoiceService) {

  }

  openDialog() {
    this.invoiceService.openDialog();
  }
}
