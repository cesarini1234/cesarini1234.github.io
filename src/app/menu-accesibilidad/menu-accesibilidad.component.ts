import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-accesibilidad',
  templateUrl: './menu-accesibilidad.component.html',
  styleUrls: ['./menu-accesibilidad.component.css']
})
export class MenuAccesibilidadComponent implements OnInit {

  accessForm = new FormGroup({
    tamanoFuente: new FormControl('', [Validators.required]),
    altoContraste: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  accesibilidad(): void{

    localStorage.setItem('tamanoFuente', this.accessForm.controls['tamanoFuente'].value);
    localStorage.setItem('altoContraste', this.accessForm.controls['altoContraste'].value);

  }

}
