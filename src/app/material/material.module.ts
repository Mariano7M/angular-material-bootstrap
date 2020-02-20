import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatToolbarModule,
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatChipsModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatChipsModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
