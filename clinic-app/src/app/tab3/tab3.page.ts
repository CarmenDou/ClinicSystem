import { Component, OnInit } from '@angular/core';
import {EChartsOption} from 'echarts';
import { AttackService } from '../attack.service';
import * as moment from 'moment';
import { ParticipantService } from '../participant.service';
import { Participant } from '../participant';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  options: EChartsOption = {}
  data_x! : any[]
  data_y! : any[]
  participant: Participant = new Participant();
  constructor(private attackService: AttackService, private participantService: ParticipantService) {}

  ngOnInit(): void {
    this.participantService.participant$.subscribe(participant => {
      if (participant !== null) {
        // console.log("participantId");
        // console.log(participantId);
        this.loadReport(participant.participantId);
      }
    })
    
  }

  loadReport(id:number){
    this.attackService.getLastSevenDaysReports(id).subscribe(reports => {
      this.data_y = new Array(7).fill(0);
      const now = moment();

      reports.forEach(report => {
        const reportDate = new Date(report.attackDateTime);
        const startDate = new Date(reportDate.getFullYear(), reportDate.getMonth(), reportDate.getDate());
        const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        // Get the difference in time
        const timeDifference = endDate.getTime() - startDate.getTime();
        // Convert time difference to days
        const diff = timeDifference / (1000 * 3600 * 24);
        // console.log(diff);
        if (diff < 7) {
          this.data_y[6 - diff]++;
        }
      });
      this.data_x = [];
      for (let i = 0; i < 7; i++) {
        this.data_x.push(now.subtract(i === 0 ? 0 : 1, 'days').format('YYYY-MM-DD'));
      }
      this.data_x.sort()

      this.options = {
        color: ['#3398DB'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: ['Number of Attack Records'],
          left:20
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              rotate: 90,
            },
            data: this.data_x,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Number of Attack Records',
            type: 'bar',
            barWidth: '60%',
            data: this.data_y
          }
        ]
      };
    })
  }
}
