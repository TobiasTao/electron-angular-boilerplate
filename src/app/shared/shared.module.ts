import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// #region your componets & directives
const COMPONENTS = [PageNotFoundComponent];
const DIRECTIVES = [WebviewDirective];
// #endregion

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, TranslateModule, FormsModule, HttpClientModule],
  exports: [CommonModule, TranslateModule, FormsModule, HttpClientModule, ...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
