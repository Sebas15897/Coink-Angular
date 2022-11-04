import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, RouterModule, HomeRoutingModule],
  declarations: [HomeComponent],
})

export class HomeModule {}
