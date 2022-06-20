import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  elegirMenu = 0;
  verdadera=true;
  verdadera2=true;
  correo = "";
  contra = "";
  id:any = 0;

  loginForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    contrasena: new FormControl('', [Validators.required])
  })

  loginTelefonoForm = new FormGroup({
    numero: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")])
  })

  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    username: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$")]),
    contrasena: new FormControl('', [Validators.required]),
    confirmarContrasena: new FormControl('', [Validators.required])
  })

  constructor(/*private apiS:ApiServiceService*/) {
    this.elegirMenu = parseInt(JSON.parse( localStorage.getItem("tipo") || '0' ),10);
   }

  ngOnInit(): void {
  }

  getLoginForm(): void {

    alert(this.loginForm.get('correo'));
    alert(this.loginForm.get('contrasena'));
    
  }

  cerrarSesion(): void{
    this.elegirMenu = 0;
    alert("Sesión cerrada...");
  }

  onLoginForm(): void {

    if (this.loginForm.dirty && this.loginForm.valid) {
      /*this.id = log(this.correo,this.contra);
      localStorage.setItem('id', JSON.stringify(this.elegirMenu));
      this.elegirMenu = getTipoU(this.id);*/
    }
    localStorage.setItem('tipo', JSON.stringify(this.elegirMenu));
    this.loginForm.reset();

  }

  loginConGoogle(): void {
    alert("Login con Google...");
  }

  loginConTelefono(): void {
    alert("Login con Telefono...");
  }

  onRegisterForm(): void {

    alert("Registra al usuario...");

    if (this.loginForm.dirty && this.loginForm.valid) {
      alert(`Correo: ${this.loginForm.value.correo}`);
      alert(`Contraseña: ${this.loginForm.value.contrasena}`);
    }

    this.registroForm.reset();

  }
  
  funcionverdadero(): void{
    this.verdadera=true;

  }
  funcionfalso(): void{
    this.verdadera=false;

  }
  funcionverdadera2(): void{
    this.verdadera2=false;
  }

}
