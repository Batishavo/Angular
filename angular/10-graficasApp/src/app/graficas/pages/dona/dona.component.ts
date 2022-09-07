import { Component, } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js'

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Orders' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 350, 450, 100,400 ],
        backgroundColor: ['#373EF0','#4B95E0', '#26E6ED','#4575F7','#45C8F7']
      },
      
      /*{ data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }*/
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
