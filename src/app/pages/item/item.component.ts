import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion} from 'src/app/interface/producto.descripcion'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion = {};
  id: String ='';

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      // console.log(params.id);

      this.productoService.getProductos(params.id)
      .subscribe((productos: ProductoDescripcion) => {
        // console.log(productos);

        this.id = params.id;
        this.producto = productos;

      });

    });
  }

}
