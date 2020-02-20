import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceSendComponent } from './components/shared/invoice-send/invoice-send.component';


const routes: Routes = [
  {
    path: 'invoice',
    component: InvoiceSendComponent
  },
  {
    path: 'lazy-one',
    loadChildren: () => import('./modules/one-lazy.module').then(m => m.OneLazyModule)
  },
  {
    path: 'lazy-two',
    loadChildren: () => import('./modules/lazy-two.module').then(m => m.LazyTwoModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
