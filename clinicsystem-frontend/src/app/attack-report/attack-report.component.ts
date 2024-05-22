import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AttackService } from '../attack.service';
import moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attack-report',
  templateUrl: './attack-report.component.html',
  styleUrl: './attack-report.component.css',
})
export class AttackReportComponent implements OnInit {
  participantid!: number;
  barOption: any;
  echartsInstance: any;

  constructor(private attackService: AttackService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.participantid = this.route.snapshot.params['id'];
    this.attackService.getLastSevenDaysReports(this.participantid).subscribe(reports => {
      const data_y = new Array(7).fill(0);
      const now = moment();

      reports.forEach(report => {
        const reportDate = new Date(report.attackDateTime);
        const startDate = new Date(reportDate.getFullYear(), reportDate.getMonth(), reportDate.getDate());
        const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        // Get the difference in time
        const timeDifference = endDate.getTime() - startDate.getTime();
        // Convert time difference to days
        const diff = timeDifference / (1000 * 3600 * 24);
        //const diff = now.diff(reportDate, 'days');
        // console.log(diff);
        if (diff < 7) {
          data_y[6 - diff]++;
        }
      });

      const data_x = [];
      for (let i = 0; i < 7; i++) {
        data_x.push(now.subtract(i === 0 ? 0 : 1, 'days').format('YYYY-MM-DD'));
      }
      data_x.sort()

      this.barOption = {
        title: {
          text: 'Last Seven Days Report',
        },
        tooltip: {},
        legend: {
          data: ['Number of Attack Records'],
          bottom: 0
        },
        xAxis: {
          data: data_x
        },
        yAxis: {},
        series: [{
          name: 'Number of Attack Records',
          type: 'bar',
          data: data_y
        }]
      };
    });
    
  }

  onChartInit(chartOpt:any){
    this.echartsInstance=chartOpt;  //echartOpt1是定义的用于接受echart的变量
  }
}
