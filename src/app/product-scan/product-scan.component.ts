import { Component, OnInit, Input } from '@angular/core';
import {
  NavParams,
  ModalController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-product-scan',
  templateUrl: './product-scan.component.html',
  styleUrls: ['./product-scan.component.scss'],
})
export class ProductScanComponent implements OnInit {
@Input() item :any ;
  constructor(public navParams : NavParams , public toastController: ToastController,
    public alertController: AlertController,
    public modalController: ModalController, private crud: CrudService) { }

  ngOnInit() {}


  ionViewWillEnter(){
   this.item = this.navParams.get('item');
  }

  dismiss(){
    this.modalController.dismiss({
      dismissed : true,
    });
  }


  async saveCagette(cagette : string){
    let vcagette : string = '';
    this.crud.addCagette(cagette)
     
    
  }

}
