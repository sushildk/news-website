import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PoliticComponent } from './politic/politic.component';
import { NewsService } from 'src/app/admin/news/service/news.service';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    PoliticComponent
  ],
  providers:[NewsService],
  imports: [
    CommonModule,
    CarouselModule,
    DashboardRoutingModule,
    SharedModule,

  ]

})
export class DashboardModule { }
