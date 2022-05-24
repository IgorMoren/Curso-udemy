import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {


  constructor(private graficasService: GraficasService) { }

  doughnutChartValues: any[] = [];

  doughnutChartLabels: string[] = [];

  doughnutChartType: ChartType = 'doughnut';

  doughnutChartData!: ChartData<'doughnut'>;
  

  ngOnInit(): void {
    console.log(this.doughnutChartData);
    /* this.graficasService.getUsuariosRedesSociales()
      .subscribe(data => {
        console.log('data', data);
        const labels = Object.keys(data);
        console.log('labels', labels);
        const values: any = Object.values(data);
        console.log('values', values);
        this.doughnutChartLabels = labels;
        console.log('labels this.',this.doughnutChartLabels);
        this.doughnutChartValues = values;
        console.log('values this.', this.doughnutChartValues);
        
        this.doughnutChartData = {
      
          labels: this.doughnutChartLabels,
        
          datasets: [
            {
              data: this.doughnutChartValues,
              backgroundColor: ['#293462', '#F24C4C', '#EC9B3B', '#F7D716'],
              hoverBackgroundColor: ['#F7D716']
            }
      
          ]
      
        };
      }); */

    this.graficasService.getUsuariosRedesSocialesDona()
      .subscribe(({labels, values}) => {
        this.doughnutChartLabels = labels;
        console.log(labels);
        this.doughnutChartValues = values;
        console.log(values);
        this.doughnutChartData = {
        
          labels: this.doughnutChartLabels,
        
          datasets: [
            {
              data: this.doughnutChartValues,
              backgroundColor: ['#293462', '#F24C4C', '#EC9B3B', '#F7D716'],
              hoverBackgroundColor: ['#F7D716']
            }
      
          ]
      
        };
      })


  }

}
