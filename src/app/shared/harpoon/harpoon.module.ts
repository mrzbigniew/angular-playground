import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HarpoonComponent } from './harpoon/harpoon.component';
import { HarpoonChainComponent } from './harpoon-chain/harpoon-chain.component';
import { HarpoonArrowComponent } from './harpoon-arrow/harpoon-arrow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HarpoonComponent, HarpoonChainComponent, HarpoonArrowComponent]
})
export class HarpoonModule { }
