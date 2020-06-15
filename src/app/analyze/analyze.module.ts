import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalyzePageRoutingModule } from './analyze-routing.module';

import { AnalyzePage } from './analyze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalyzePageRoutingModule
  ],
  declarations: [AnalyzePage]
})
export class AnalyzePageModule {}
