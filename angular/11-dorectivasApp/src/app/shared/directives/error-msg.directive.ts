import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement?: ElementRef<HTMLElement>;
  @Input() color:string ='';
  @Input() mensaje:string ='';

  constructor(
    private el: ElementRef<HTMLElement>,
  ) 
  { 
    /*console.log('constructor directive')
    console.log(el);
    el.nativeElement.style.color = 'red';*/
    this.htmlElement = el;
  }

  ngOnInit(): void {
   // console.log('ngOnInit directiva');
    this.setColor();
    this.setMensaje();
  }

  setColor():void{
    this.htmlElement!.nativeElement.style.color =this.color;
  }

  setMensaje():void{
    this.htmlElement!.nativeElement.innerText = this.mensaje;
  }
}

