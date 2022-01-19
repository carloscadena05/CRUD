import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  elID:any;

  constructor(
    public formulario:FormBuilder,
    private activateRoute:ActivatedRoute,
    private crudService:CrudService,
    private ruteador:Router
  ) {
    this.elID = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ConsultarDato(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.form.setValue({
          nombre:respuesta[0]['nombre'],
          apellido_p:respuesta[0]['apellido_p'],
          apellido_m:respuesta[0]['apellido_m'],
          email:respuesta[0]['email'],
          pwd:respuesta[0]['pwd'],
          sexo:respuesta[0]['sexo'],
          estado:respuesta[0]['estado'],
          texto:respuesta[0]['texto'],
          fecha:respuesta[0]['fecha'],
        })
      }
    );
    this.form=this.formulario.group({
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
    console.log(this.elID);
    console.log(this.form.value);
    this.crudService.EditarDato(this.elID,this.form.value).subscribe(()=>{

    });
    this.ruteador.navigateByUrl('/listar');
  }

}
