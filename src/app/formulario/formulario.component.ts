import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;

  constructor(public formulario: FormBuilder,
    private crudService:CrudService) {
    this.form = this.formulario.group({
      form_id:[''],
      txt:[''],
      email:[''],
      pwd:[''],
      fecha:[''],
      sel:[''],
      txtarea:[''],
      radio:[''],
    })
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.form.value)
    this.crudService.AgregarDatos(this.form.value).subscribe();
  }
}
