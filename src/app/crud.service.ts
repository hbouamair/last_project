import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class CrudService {
  
  private dbInstance: SQLiteObject;
  readonly db_name: string = "remotestack.db";
  readonly db_table: string = "Product";
  readonly db_users: string = "users";
   readonly db_emplacement: string = "emplacement";
  readonly db_inventaire: string = "Inventaire";
  Prodcuts: Array <any> ;
  Inventaire :Array <any>;
  Users : Array <any>;

  constructor(
    private platform: Platform,
    private sqlite: SQLite   ,
    private router: Router 
  ) { 
    this.databaseConn();
  }

    // Create SQLite database 
    databaseConn() {
        this.platform.ready().then(() => {
          this.sqlite.create({
              name: this.db_name,
              location: 'default'
            }).then((sqLite: SQLiteObject) => {
              this.dbInstance = sqLite;
              sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_table} (
                product_id INTEGER PRIMARY KEY, 
                material varchar(255),
                description varchar(255),
                cagette varchar(255)

              )` ,    []) ,  
               sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_inventaire} (
                inventaire_id INTEGER PRIMARY KEY, 
                titre varchar(255),
                date Date ,
                type varchar(255)

              )` ,    []),
               sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_users} (
                user_id INTEGER PRIMARY KEY, 
                nom varchar(255),
                prenom varchar(255),
                username varchar(255),
                email varchar(255),
                password varchar(255),
                telephone INTEGER, 
                role INTEGER

              )`, []),
               sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_emplacement} (
                emplacement_id INTEGER PRIMARY KEY, 
                reference varchar(255),
                rayon varchar(255),
                qrcode varchar(255)

              )`, [])
                .then((res) => {
                   //alert(JSON.stringify(res));
                })
                .catch((error) => alert(JSON.stringify(error)));
            })
            .catch((error) => alert(JSON.stringify(error)));
        });   
    }

    // Crud
    public addProduct(n, e ,c) {
      // validation
      if (!n.length || !e.length  || !c.length ) { 
        alert('Provide both email & name');
        return; 
      }
      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table} (material, description , cagette) VALUES ('${n}', '${e}' , '${c}')`, [])
        .then(() => {
          alert("Success");
          this.getAllProducts();
        }, (e) => {
          alert(JSON.stringify(e.err));
        });
    }

      public addCagette(c) {
     
      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table}(cagette) VALUES ('${c}')`, [])
        .then(() => {
          alert("Success");
          this.getAllProducts();
        }, (e) => {
          alert(JSON.stringify(e.err));
        });
    }

    getAllProducts() {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
        this.Prodcuts = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.Prodcuts.push(res.rows.item(i));
          }
          return this.Prodcuts;
        }
      },(e) => {
        alert(JSON.stringify(e));
      });
    }

    // Get user
    getProduct(id): Promise<any> {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE product_id = ?`, [id])
      .then((res) => { 
        return {
          product_id: res.rows.item(0).product_id,
          material: res.rows.item(0).material,  
          description : res.rows.item(0).description,
          cagette : res.rows.item(0).cagette,
        }
      });
    }

    // Update
    updateProduct(id, material, description , cagette) {
      let data = [material, description , cagette];
      return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET material = ?, description = ? , cagette = ? WHERE product_id = ${id}`, data)
    }  

    // Delete
    deleteProduct(product) {
      this.dbInstance.executeSql(`
      DELETE FROM ${this.db_table} WHERE product_id = ${product}`, [])
        .then(() => {
          alert("produit deleted!");
          this.getAllProducts();
        })
        .catch(e => {
          alert(JSON.stringify(e))
        });
    }
    

    public addInventai(n, e ,c) {
    
      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_inventaire} (titre, date , type) VALUES ('${n}', '${e}' , '${c}')`, [])
        .then(() => {
          alert("Success");
          this.getAllInvent();
        }, (e) => {
          alert(JSON.stringify(e.err));
        });
    }

    getAllInvent() {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_inventaire}`, []).then((res) => {
        this.Inventaire = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.Inventaire.push(res.rows.item(i));
          }
          return this.Inventaire;
        }
      },(e) => {
        alert(JSON.stringify(e));
      });
    }

    // Get user
    getInvent(id): Promise<any> {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_inventaire} WHERE inventaire_id = ?`, [id])
      .then((res) => { 
        return {
          inventaire_id: res.rows.item(0).inventaire_id,
          titre: res.rows.item(0).titre,  
          date : res.rows.item(0).date,
          type : res.rows.item(0).type,
        }
      });
    }

    // Update
    updateInvent(id, titre, date , type) {
      let data = [titre, date , type];
      return this.dbInstance.executeSql(`UPDATE ${this.db_inventaire} SET titre = ?, date = ? , type = ? WHERE inventaire_id = ${id}`, data)
    }  

    // Delete
    deleteInevent(invent) {
      this.dbInstance.executeSql(`
      DELETE FROM ${this.db_inventaire} WHERE inventaire_id = ${invent}`, [])
        .then(() => {
          alert("inventaire deleted!");
          this.getAllInvent();
        })
        .catch(e => {
          alert(JSON.stringify(e))
        });
    }



    public addUser(n, p ,u , e ,pa , te , r ) {
      // validation
     
      this.dbInstance.executeSql(`
      INSERT INTO ${this.db_users} (nom, prenom , username , email , password ,telephone , role ) VALUES ('${n}', '${p}' , '${u}' , '${e}' , '${pa}', '${te}' ,  '${r}')`, [])
        .then(() => {
          alert("Success");
          this.getAllUsers();
        }, (e) => {
          alert(JSON.stringify(e.err));
        });
    }

    getAllUsers() {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_users}`, []).then((res) => {
        this.Users = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.Users.push(res.rows.item(i));
          }
          return this.Users;
        }
      },(e) => {
        alert(JSON.stringify(e));
      });
    }

    // Get user
    getUser(id): Promise<any> {
      return this.dbInstance.executeSql(`SELECT * FROM ${this.db_users} WHERE user_id = ?`, [id])
      .then((res) => { 
        return {
          user_id: res.rows.item(0).user_id,
          nom: res.rows.item(0).nom,  
          prenom : res.rows.item(0).prenom,
          username : res.rows.item(0).username,
          email : res.rows.item(0).email,
          password : res.rows.item(0).password,
          telephone : res.rows.item(0).telephone,
          role : res.rows.item(0).role,
          

        }
      });
    }

    // Update
    updateUser(id, nom, prenom , username , email, password , tele , role) {
      let data = [nom, prenom ,username, email, password, tele , role];
      return this.dbInstance.executeSql(`UPDATE ${this.db_users} SET nom = ?, prenom= ? , username = ? , email =? , password =? , telephone =? ,role =? WHERE user_id = ${id}`, data)
    }  

    // Delete
    deleteUser(user) {
      this.dbInstance.executeSql(`
      DELETE FROM ${this.db_users} WHERE product_id = ${user}`, [])
        .then(() => {
          alert("User deleted!");
          this.getAllUsers();
        })
        .catch(e => {
          alert(JSON.stringify(e))
        });
    }



async login( username: string , password :string ){

      return this.dbInstance.executeSql('SELECT * FROM users', []).then(data => {
        
   
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            
            if (data.rows.item(i).username != '' && data.rows.item(i).username == username && data.rows.item(i).username == username && data.rows.item(i).password == password && data.rows.item(i).password != '' && data.rows.item(i).role == 0  ) {
            
                this.router.navigate(['/menu']);
            }
            else if(data.rows.item(i).username != '' && data.rows.item(i).username == username && data.rows.item(i).username == username && data.rows.item(i).password == password && data.rows.item(i).password != '' && data.rows.item(i).role == 1  ){
              this.router.navigate(['/create']);
  
          }
          else if(data.rows.item(i).username != '' && data.rows.item(i).username == username && data.rows.item(i).username == username && data.rows.item(i).password == password && data.rows.item(i).password != '' && data.rows.item(i).role == 2 ){
            this.router.navigate(['/inventaire']);
  
          }
        }
      }
    })
  }
}
