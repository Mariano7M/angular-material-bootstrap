import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneLazyRoutingModule } from './one-lazy-routing.module';
import { LazyComponent } from '../components/lazy/lazy.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    OneLazyRoutingModule,
    MaterialModule
  ]
})
export class OneLazyModule { }
