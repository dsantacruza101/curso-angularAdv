import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js'
import { MultiDataSet, Label, Color } from 'ng2-charts'

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  @Input() public title:string = 'Without Title';

  @Input('labels') public doughnutChartLabels: Label[] = [
    'label1',
    'label2',
    'label3',
  ];
  @Input('data') public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ]
  public colors: Color[] = [
    { backgroundColor: [ '#6857E6','#009FEE', '#F02059' ]}
  ];

}
