import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  agregarCrud = true;

  crudForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
    edad: new FormControl('', [Validators.required])
  })

  crudEliminarForm = new FormGroup({
    nombre: new FormControl('', [Validators.required])
  })

  url: any;

  constructor() { }

  ngOnInit(): void {
  }

  subirProducto(): void {

    console.log(this.crudForm.value.nombre);
    console.log(this.crudForm.value.imagen);
    console.log(this.crudForm.value.precio);
    console.log(this.crudForm.value.edad);

    let producto = {
      name: this.crudForm.value.nombre,
      img: this.crudForm.value.imagen.substring(12,),
      precio: this.crudForm.value.precio,
      edad: this.crudForm.value.edad
    };

    console.log(producto);
    
    this.crudForm.reset();

  }

  eliminarProducto(): void {
    console.log(this.crudEliminarForm.value.nombre);
    let eliminar: string = this.crudEliminarForm.value.nombre;
    this.crudEliminarForm.reset();
  }

  onSelectFile(event:any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
          this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
  }
  }

  mostrarAgregar(): void {
    this.agregarCrud = true;
  }

  mostrarEliminar(): void {
    this.agregarCrud = false;
  }
}
