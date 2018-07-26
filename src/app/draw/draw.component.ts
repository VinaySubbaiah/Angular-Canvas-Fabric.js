import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
declare const SVG: any;
@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})

export class DrawComponent implements OnInit {
  startX: number = null;
  startY: number = null;
  drag : boolean = false;

  @ViewChild("myCanvas") myCanvas: ElementRef;

  Draw(){
    let base_image = new Image();
    base_image.src = 'assets/1.png';
    let context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
    base_image.onload = function () {
    context.canvas.height = base_image.height;
    context.canvas.width = base_image.width;
    context.drawImage(base_image, 0, 0);
    }
  }
  mdEvent(e) {
    this.startX = e.clientX;
    this.startY = e.clientY;
   this.drag = false;
  }
  mmEvent(e) {
    if (this.drag) {
      let base_image = new Image();
      base_image.src = 'assets/1.png';
      let context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
      let sx = this.startX;
      let sy = this.startY;
      let canvasTop = this.myCanvas.nativeElement.getBoundingClientRect().top;
      let canvasLeft = this.myCanvas.nativeElement.getBoundingClientRect().left;
      base_image.onload = function () {
        context.canvas.height = base_image.height;
        context.canvas.width = base_image.width;
        context.drawImage(base_image, 0, 0);
        let x = sx - canvasLeft;
        let y = sy - canvasTop;
        let w = e.clientX - canvasLeft - x;
        let h = e.clientY - canvasTop - y;      
        context.setLineDash([0]);
        context.strokeRect(x, y, w, h);
      };
    }
  }
  muEvent(e) {
    let x = this.startX - this.myCanvas.nativeElement.getBoundingClientRect().left;
    let y = this.startY - this.myCanvas.nativeElement.getBoundingClientRect().top;
    let w = e.clientX - this.myCanvas.nativeElement.getBoundingClientRect().left - x;
    let h = e.clientY - this.myCanvas.nativeElement.getBoundingClientRect().top - y;
    this.myCanvas.nativeElement.getContext("2d").setLineDash([0]);
    this.myCanvas.nativeElement.getContext("2d").strokeRect(x, y, w, h);
   this.drag = false;
  }


pdfSrc: string;
pf: boolean = false;

onFileSelected() {
      this.pf = true;
      let $img: any = document.querySelector('#file');
      if (typeof (FileReader) !== 'undefined') {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.pdfSrc = e.target.result;
        };
        reader.readAsArrayBuffer($img.files[0]);
    }
}

 onPrint(){
      window.print();
    }

    captureEvents(){
      document.getElementById('canvasSVG').style.height = '100vh';
      var drawing = new SVG('canvasSVG').size('100%', '100%');
      var rect = drawing.rect();
  
    drawing.on('mousedown', function(e){
        rect.draw(e);
    }, true);
  
    drawing.on('mouseup', function(e){
        rect.draw(e);
    }, true);
    rect.on('drawstop', function(e){
        console.log('')
    });
   }
   captureEventsS(){  
      document.getElementById('canvasSVGS').style.height = '100vh';
      var drawing = new SVG('canvasSVGS').size('100%', '100%');
      var rect = drawing.rect();
    
      drawing.on('mousedown', function(e){
          rect.draw(e);
      }, true);
    
      drawing.on('mouseup', function(e){
          rect.draw(e);
      }, true);
      rect.on('drawstop', function(){
        
      });
      return this;
     }
  captureEventsL(){
  document.getElementById('canvasSVGL').style.height = '100vh';
  var drawing = new SVG('canvasSVGL').size('100%', '100%');
  var rect = drawing.rect();
  
  drawing.on('mousedown', function(e){
      rect.draw(e);
  }, true);
  
  drawing.on('mouseup', function(e){
      rect.draw(e);
  }, true);
  rect.on('drawstop', function(){
    
     });
   }
   captureEventsX(){
      document.getElementById('canvasSVGXL').style.height = '100vh';
      var drawing = new SVG('canvasSVGXL').size('100%', '100%');
      var rect = drawing.rect();
  
      drawing.on('mousedown', function(e){
          rect.draw(e);
      }, true);
  
      drawing.on('mouseup', function(e){
          rect.draw(e);
      }, true);
      rect.on('drawstop', function(){});
   }

  ngOnInit() {
    
    }
}