import { Component, Input ,OnInit} from '@angular/core';
import { ChartData, ChartType } from 'chart.js'
@Component({
  selector: 'app-dona-e',
  templateUrl: './dona-e.component.html',
  styleUrls: ['./dona-e.component.css']
})
export class DonaEComponent implements OnInit {

  @Input() doughnutChartLabels: string[] = [];
  @Input() valuesNumber : number[]=[];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: this.valuesNumber,
        backgroundColor: ['#373EF0','#4B95E0', '#26E6ED','#4575F7','#45C8F7']
      },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    
    console.log(this.doughnutChartLabels);
    console.log(this.valuesNumber);
    
  }

}
