import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceDetectionComponent } from './face-detection/face-detection.component';
import { ObjectRecognitionPageComponent } from './object-recognition-page/object-recognition-page.component';

const routes: Routes = [
  {
    path:'',
    component:ObjectRecognitionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectRecognitionRoutingModule { }
