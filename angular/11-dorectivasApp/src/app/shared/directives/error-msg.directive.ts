import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit,OnChanges{

  private _color: string = 'red';
  private _mensaje:string = 'Este campo es requerido';

  htmlElement?: ElementRef<HTMLElement>;
  
  @Input() set color(valor: string){
    //this.htmlElement!.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }

  //@Input() mensaje:string ='';
  @Input() set mensaje(valor: string){
    //this.htmlElement!.nativeElement.innerText = valor;
    this._mensaje=valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean){
    if(valor){
      this.htmlElement!.nativeElement.classList.add('hidden');
    }
    else{
      this.htmlElement!.nativeElement.classList.remove('hidden');
    }
  }

  constructor(
    private el: ElementRef<HTMLElement>,
  ) 
  { 
    /*console.log('constructor directive')
    console.log(el);
    el.nativeElement.style.color = 'red';*/
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //this.setMensaje();
    
    /*if(changes["mensaje"]){
      const mensaje = changes["mensaje"].currentValue;
      this.htmlElement!.nativeElement.innerText = mensaje;
    }*/
    
    

    //console.log(changes);
  }

  ngOnInit(): void {
   // console.log('ngOnInit directiva');
    //console.log(this.color);
    //console.log(this.mensaje);
    this.setColor();
    this.setMensaje();
    this.setEStilo();
  }

  setEStilo(): void {
    this.htmlElement!.nativeElement.classList.add('form-text');
  }

 setColor():void{
    this.htmlElement!.nativeElement.style.color =this._color;
    //this.htmlElement!.nativeElement.classList.add('fprm-text');
  }

  setMensaje():void{
    this.htmlElement!.nativeElement.innerText = this._mensaje;
  }
}

