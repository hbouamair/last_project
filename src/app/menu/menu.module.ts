import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

import { InventairePage } from '../inventaire/inventaire.page';
import { UsersPage } from '../users/users.page';
import { FooterPage } from '../footer/footer.page';
import { CreatePage } from '../create/create.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage,UsersPage , InventairePage , FooterPage , CreatePage]
})
export class MenuPageModule {}
