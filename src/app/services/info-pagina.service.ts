import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  equipo: any = [];


  constructor(private http: HttpClient) {
     this.cargaInfo();
    this.cargaEquipo();

    console.log("aquiii")
  }

  private cargaInfo() {
    //leer archivo Json previamente construido
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;

        console.log(resp);
        console.log('asdas')
      });
  }


  private cargaEquipo() {
    this.http.get('https://angular-html-483f7-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {

        this.equipo = resp;
        console.log("resp")
        console.log(resp);
      });
  }

}

