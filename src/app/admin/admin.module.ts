import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { AdminModuleRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    AdminModuleRouting,
  ],
  declarations: []
})
export class AdminModule { }
