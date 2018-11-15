import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material';

import { LanguageSelectorComponent } from './language-selector.component';
import { LanguageSelectorService } from './language-selector.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({}),
    MatButtonModule
  ],
  providers: [
    LanguageSelectorService
  ],
  exports: [
    LanguageSelectorComponent
  ],
  declarations: [
    LanguageSelectorComponent
  ]
})
export class LanguageSelectorModule { }
