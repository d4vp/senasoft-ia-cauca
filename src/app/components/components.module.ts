import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FileInputComponent } from './file-input/file-input.component';



@NgModule({
  exports:[
    HeaderComponent,
    FileInputComponent
  ],
  declarations: [
    HeaderComponent,
    FileInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
