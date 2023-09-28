import { Component } from '@angular/core';

@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.css']
})
export class FaceDetectionComponent {

  canvas:(HTMLCanvasElement)[] = [
    document.getElementById('img-1')! as HTMLCanvasElement,
  ]

  onUploadImage = async (event:number): Promise<void> => {
    
    let element:HTMLInputElement = document.getElementById(`img-${event}`)! as HTMLInputElement;
    let canva:HTMLCanvasElement = this.canvas[event];
    let ctx = canva.getContext('2d')!;
    console.log(canva);
    
    let img:HTMLImageElement= new Image();
    let reader:FileReader = new FileReader();

    if (element.files) {
      if (element.files[0]) {
        reader.onload = (e) => {
          console.log(e);
          
          // ctx.drawImage(e.target!.result,0,0);
        }
        reader.readAsDataURL(element.files[0])
      }
    }
    
    
  }
}
