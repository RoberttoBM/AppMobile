import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
