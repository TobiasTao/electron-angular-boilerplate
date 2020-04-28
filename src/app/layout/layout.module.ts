import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TitleBarComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [TitleBarComponent],
})
export class LayoutModule {}
