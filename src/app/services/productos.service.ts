import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interface/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  productos: Producto[] = [];

  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {


    return new Promise<void>((resolve, reject) => {
      this.http.get('https://angular-html-483f7-default-rtdb.firebaseio.com/producto.json')
        .subscribe((resp: any) => {
          // console.log(resp);

          this.productos = resp;

          this.cargando = false;

          resolve();

        });
    })

  }

  getProductos(id: string) {
    return this.http.get(`https://angular-html-483f7-default-rtdb.firebaseio.com/producto_idx/${id}.json`)
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProducto(termino);
      })
    } else {
      this.filtrarProducto(termino);

    }


    this.productoFiltrado = this.productos.filter(producto => {
      return true;
    })

    console.log(this.productoFiltrado);
    // return this
  }



  private filtrarProducto(termino: string) {
    console.log(this.productos);

    this.productoFiltrado = []


    this.productos.forEach(prodx =>{
      if(prodx.categoria?.indexOf(termino)){
        this.productoFiltrado.push(prodx);
      }
    });

  }

}
