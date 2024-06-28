import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit{

  @Input('value') public progreso: number = 50;
  @Input() public btnClass: string = 'btn-primary';
  @Output() public changeValueOut: EventEmitter<number> = new EventEmitter()

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeValue( value: number ) {

    if ( this.progreso >= 100 && value >= 0 ) {
      this.changeValueOut.emit(100);
      return this.progreso = 100;
    }

    if ( this.progreso <= 0 && value < 0 ) {
      this.changeValueOut.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + value;
    this.changeValueOut.emit(this.progreso);
  }

  onChange( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progreso = 100;
    }
    else if ( newValue <= 100 ) {
      this.progreso = 0;
    }
    else {
      this.progreso = newValue;
    }
    this.changeValueOut.emit( newValue )
  }

}
