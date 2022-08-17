import { Component,EventEmitter,Output,OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent  implements OnInit{

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject<string>();

  termino: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300))
    .subscribe( valor =>{
      this.onDebounce.emit(valor);
      //console.log('debouncer: ', valor );
    })
    
  }

  buscar(){
    const newLocal = this;
    newLocal.onEnter.emit(this.termino);

  }

  teclaPresionanda(event: any){
    this.debouncer.next(this.termino);
  }
}
