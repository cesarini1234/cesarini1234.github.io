import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  cartaForm = new FormGroup({
    mensaje: new FormControl('', [Validators.required]),
    juguete: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  listaJuguetes = [
    {
      nombre: 'Carrito de Carreras',
    },
    {
      nombre: 'Muñeca Barbie',
    },
    {
      nombre: 'Pistola de Agua',
    },
    {
      nombre: 'Bicicleta',
    },
    {
      nombre: 'Playstation 5',
    },
    {
      nombre: 'Balón de Fútbol',
    },

  ];

}
