import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTwoRoutingModule } from './lazy-two-routing.module';
import { LazyTwoComponent } from '../components/lazy-two/lazy-two.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LazyTwoComponent,
  ],
  imports: [
    CommonModule,
    LazyTwoRoutingModule,
    MaterialModule
  ]
})
export class LazyTwoModule { }
