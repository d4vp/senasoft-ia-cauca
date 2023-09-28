import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectRecognitionRoutingModule } from './object-recognition-routing.module';
import { FaceDetectionComponent } from './face-detection/face-detection.component';
import { ComponentsModule } from '../components/components.module';
import { ObjectRecognitionPageComponent } from './object-recognition-page/object-recognition-page.component';


@NgModule({
  declarations: [
    FaceDetectionComponent,
    ObjectRecognitionPageComponent
  ],
  imports: [
    CommonModule,
    ObjectRecognitionRoutingModule,
    ComponentsModule
  ]
})
export class ObjectRecognitionModule { }
