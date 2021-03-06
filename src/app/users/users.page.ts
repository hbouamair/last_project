import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  nom: string = "";
  prenom: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  telephone: number = null;
  role: number =null;
  hideMe : boolean =true ;

  constructor( private router: Router, private crud: CrudService) {
    
   }

  ngOnInit() {

  }

  ionViewDidEnter() {  
    this.crud.getAllUsers()
  }
   
  createUser(){
    this.crud.addUser(this.nom,this.prenom,this.username,this.email,this.password,this.telephone,this.role);
  }
   
  remove(user) {
    this.crud.deleteUser(user);
  }


  loginPage(){

    this.router.navigate(['/login']);

  }

  hide(){
    this.hideMe =false ;
  }
   retour() {
     this.hideMe = true ;
   }
  

}
