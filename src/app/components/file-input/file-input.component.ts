import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent {
  @Input() img_id: number;
  @Output() file_up = new EventEmitter<number>;

  constructor() {
    this.img_id = 0;
  }

  onFileUp(): void {
    console.log(this.img_id);
    this.file_up.emit(this.img_id);
  }
}
