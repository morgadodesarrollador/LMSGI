import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input() data: any = null;
  @Input() labels: any = null;

  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
