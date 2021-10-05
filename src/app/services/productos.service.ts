import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interface/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  productos: Producto[] =[] ;


  constructor(private http: HttpClient) {
    this.caegarProductos();
  }

  private caegarProductos() {

    this.http.get('https://angular-html-483f7-default-rtdb.firebaseio.com/producto.json')
      .subscribe( (resp: any) => {
        console.log(resp);
        
        this.productos = resp;

        this.cargando = false; 
        
      });



  }
}
