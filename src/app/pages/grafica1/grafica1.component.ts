import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public salesLabel: string[] = ['Pizza', 'Hamburguesa', 'Tacos']
  public salesData: number[] = [25, 25, 50]


}
