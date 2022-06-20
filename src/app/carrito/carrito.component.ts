import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  tipo:number = 0;

  constructor(/*private apiS:ApiServiceService*/) {
    this.tipo = parseInt(JSON.parse( localStorage.getItem("tipo") || '0' ),0);
   /* if(this.tipo == 1){
      
      for(let i = 0; i < this.numH; i++){
        if( i == 1)
          //this.dataset1 = getCarrito(idp:any,nh:any,np:any):
        if( i == 2)
          //this.dataset1 = getCarrito(idp:any,nh:any,np:any):
        if( i == 3)
         // this.dataset1 = getCarrito(idp:any,nh:any,np:any):
      }
      this.dataset = this.dataset1.concat(this.dataset2,this.dataset3);
    }
    else if(this.tipo == 1){
      this.dataset = this.dataset1.concat(this.dataset2,this.dataset3);
    }
    */
   }

  ngOnInit(): void {
  }

  numH:number = 0;
  pages: number = 1;

  dataset: any[] = [
    {
      Nombre: 'b',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      Precio: '25.00',
      Edad: '2'
    }
  ];

  dataset1: any[] = [
    {
      Nombre: 'b',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      Precio: '25.00',
      Edad: '2'
    }
  ];
  dataset2: any[] = [
    {
      Nombre: 'b',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      Precio: '25.00',
      Edad: '2'
    }
  ];
  dataset3: any[] = [
    {
      Nombre: 'b',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      Precio: '25.00',
      Edad: '2'
    }
  ];

  eliminarArticulo(): void {
    alert("articulo eliminado");
  }

  alfa(){
    if(this.tipo == 1){
      this.dataset.sort(this.SortAlfabetico);
      console.log(this.dataset);
    }
    else{
      this.dataset = this.dataset1.concat(this.dataset2,this.dataset3);
    }
  }

  SortAlfabetico(x:any, y:any){
    return x.Nombre.localeCompare(y.Nombre);
  }

  precioA(){
    this.dataset.sort(this.SortPrecioA);
    console.log(this.dataset);
  }

  SortPrecioA(x:any, y:any){
    return x.Precio - y.Precio;
  }

  precioD(){
    this.dataset.sort(this.SortPrecioD);
    console.log(this.dataset);
  }

  SortPrecioD(x:any, y:any){
    return y.Precio - x.Precio;
  }

  edad(){
    this.dataset.sort(this.SortEdad);
    console.log(this.dataset);
  }

  SortEdad(x:any, y:any){
    return x.Edad - y.Edad;
  }
}

