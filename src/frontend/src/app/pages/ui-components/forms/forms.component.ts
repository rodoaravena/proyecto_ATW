import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class AppFormsComponent {

  nombre: string;


  constructor() {
    this.nombre = "";
  }

  async getSaludo(){

    const result = await fetch('http://localhost:8000/api/core/saludo/');
    const c = await result.json();
    this.nombre = await c.nombre;
    console.log(this.nombre)

  }



}
