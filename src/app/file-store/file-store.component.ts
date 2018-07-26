import { Component, ViewChild, ElementRef, AfterViewInit, Input , OnInit} from '@angular/core';
// import { Observable, fromEvent, observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { takeUntil } from 'rxjs/operators'
// import { switchMap } from 'rxjs/operators';
// import { pairwise } from 'rxjs/operators';


declare const SVG: any;


@Component({
  selector: 'app-file-store',
  templateUrl: './file-store.component.html',
  styleUrls: ['./file-store.component.css']
})



export class FileStoreComponent implements AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;
  private cx : CanvasRenderingContext2D;
  constructor() { }
  ngAfterViewInit() {

    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');  
   
 }
 drawRect : boolean = false;

 captureEvents(){
    document.getElementById('canvasSVG').style.height = '1500px';
    var drawing = new SVG('canvasSVG').size('100%', '100%');
    var rect = drawing.rect();

  drawing.on('mousedown', function(e){
      rect.draw(e);
  }, true);

  drawing.on('mouseup', function(e){
      rect.draw(e);
  }, true);
  rect.on('drawstop', function(e){
    rect.draw('stop');
  });
 }
 captureEventsS(){  
    document.getElementById('canvasSVGS').style.height = '1500px';
    var drawing = new SVG('canvasSVGS').size('100%', '100%');
    
    var rect = drawing.rect();
  
      drawing.on('mousedown', function(e){
        rect.draw(e);
        }, true);
  
     drawing.on('mouseup', function(e){
        rect.draw(e);
      }, true);
       rect.on('drawstop', function(){
        rect.draw('stop');
      });     
   }
captureEventsL(){
document.getElementById('canvasSVGL').style.height = '1500px';
var drawing = new SVG('canvasSVGL').size('100%', '100%');
var rect = drawing.rect();

drawing.on('mousedown', function(e){
    rect.draw(e);
}, true);

drawing.on('mouseup', function(e){
    rect.draw(e);
}, true);
rect.on('drawstop', function(){
    rect.draw('stop');
   });
 }
 captureEventsX(){
   document.getElementById('canvasSVGXL').style.height = '1500px';
    var drawing = new SVG('canvasSVGXL').size('100%', '100%');
    var rect = drawing.rect();

    drawing.on('mousedown', function(e){
        rect.draw(e);
    }, true);

    drawing.on('mouseup', function(e){
        rect.draw(e);
    }, true);
    rect.on('drawstop', function(){
        rect.draw('stop');
    });   
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
 onClick( ev : MouseEvent ) {
    console.log("x:" + ev.clientX);
    console.log(ev.pageX);
  }
  onPrint(){
    window.print();
  }
}


