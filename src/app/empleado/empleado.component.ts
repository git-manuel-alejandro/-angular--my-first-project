import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Manuel Roa'
  edad = 31
  title = 'my-first-project';
  saludo = 'hola'

  textoRegistrado = 'usuario registrado';

  setusuarioRegistrado(){
    this.textoRegistrado =  'usuario no registrado';
  }



  constructor() { }

  ngOnInit(): void {
  }

}
