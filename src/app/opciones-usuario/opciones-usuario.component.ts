import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-usuario',
  templateUrl: './opciones-usuario.component.html',
  styleUrls: ['./opciones-usuario.component.css']
})
export class OpcionesUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headers = ["Nombre", "Edad", "Correo"];

  hijos = [
    {
      nombre: 'José',
      edad: '12',
      correo: 'josesito@gmail.com'
    },
    {
      nombre: 'La Pulga',
      edad: '10',
      correo: 'muchalucha@gmail.com'
    },
    {
      nombre: 'Chicharito Hernandez',
      edad: '28',
      correo: 'arribalaschivas@gmail.com'
    },
  ];

}
