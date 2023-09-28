import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureComponent } from './azure/azure.component';

const routes: Routes = [
  {
    path: '',
    component: AzureComponent
  },
  {
    path: 'object_recognition',
    loadChildren: () => import('./object-recognition/object-recognition.module').then((module) => module.ObjectRecognitionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
