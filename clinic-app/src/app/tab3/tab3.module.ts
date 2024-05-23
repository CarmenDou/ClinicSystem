import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import {NgxEchartsModule} from 'ngx-echarts';

import * as echarts from 'echarts/core';
import {BarChart, GaugeChart, GraphChart, HeatmapChart, LineChart} from 'echarts/charts';
import {CalendarComponent, LegendComponent, TitleComponent, TooltipComponent, VisualMapComponent, GridComponent} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';
import 'echarts/theme/dark.js';

echarts.use(
  [BarChart, LineChart, GaugeChart, GraphChart, HeatmapChart, TitleComponent,
    TooltipComponent, LegendComponent, CalendarComponent, VisualMapComponent, CanvasRenderer, GridComponent]
);

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    NgxEchartsModule.forRoot({echarts}),
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
