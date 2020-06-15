import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyzePage } from './analyze.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyzePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyzePageRoutingModule {}
