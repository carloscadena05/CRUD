import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  form: FormGroup;

  constructor(public formulario: FormBuilder,
    private crudService:CrudService,
    private ruteador:Router) {
    this.form = this.formulario.group({
      nombre:[''],
      apellido_p:[''],
      apellido_m:[''],
      email:[''],
      pwd:[''],
      sexo:[''],
      estado:[''],
      texto:[''],
      fecha:[''],
    })
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.form.value)
    this.crudService.AgregarDatos(this.form.value).subscribe(resp=>{
      console.log(resp);
    });
    this.ruteador.navigateByUrl('/listar');
  }
}
