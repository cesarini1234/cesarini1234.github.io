import { Component, OnInit } from '@angular/core';
//import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(/*private apiS:ApiServiceService*/) { 
    //this.cards = getCatalogo();
    //this.c = getContCatalogo();
  }

  ngOnInit(): void {
  }

  pages: number = 1;
  c: number =1;
  cards: any[] = [
    {
      Nombre: 'b',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      Precio: '25.00',
      Edad: '2'
    }
  ];

  agregarArticulo(): void {
    alert("articulo agregado");
  }

  alfa(){
    this.cards.sort(this.SortAlfabetico);
    console.log(this.cards);
  }

  SortAlfabetico(x:any, y:any){
    return x.Nombre.localeCompare(y.Nombre);
  }

  precioA(){
    this.cards.sort(this.SortPrecioA);
    console.log(this.cards);
  }

  SortPrecioA(x:any, y:any){
    return x.Precio - y.Precio;
  }

  precioD(){
    this.cards.sort(this.SortPrecioD);
    console.log(this.cards);
  }

  SortPrecioD(x:any, y:any){
    return y.Precio - x.Precio;
  }

  edad(){
    this.cards.sort(this.SortEdad);
    console.log(this.cards);
  }

  SortEdad(x:any, y:any){
    return x.Edad - y.Edad;
  }

}
