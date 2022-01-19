import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Datos:any;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.ConsultarDatos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Datos=respuesta;
    });
  }
  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.EliminarDato(id).subscribe((respuesta)=>{
        this.Datos.splice(iControl,1);
      });
    }

  }

}
