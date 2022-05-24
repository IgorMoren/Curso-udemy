import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [350, 450, 100],
        backgroundColor: ['#293462', '#F24C4C', '#EC9B3B','#F7D716' ],
        hoverBackgroundColor: ['#F7D716'] }
      
    ]
    
  };

  public doughnutChartType: ChartType = 'doughnut';

}