import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create-inv',
  templateUrl: './create-inv.page.html',
  styleUrls: ['./create-inv.page.scss'],
})
export class CreateInvPage implements OnInit {
  titre: string = ""; 
  date: Date ;
  type: string = "";
  hideMe : boolean = true; 



  constructor(private crud: CrudService) {
    

   }


  ngOnInit() {
  }
  
  ionViewDidEnter() {  
    this.crud.getAllInvent()
  }
   
  createInv(){
    this.crud.addInventai(this.titre,this.date,this.type);
    this.hideMe= true ;
  }
   
 

}
