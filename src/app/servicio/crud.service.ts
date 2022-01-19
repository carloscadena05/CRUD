import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Ayuda a la comunicación con la API
import { Observable } from 'rxjs'; //Observa lo que sucede en el HTML, cambios
import { Dato } from './Dato';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/crud/';
  constructor( private clienteHttp:HttpClient ) { }

  AgregarDatos(datos:Dato):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datos);
  }
  ConsultarDatos(){
    return this.clienteHttp.get(this.API);
  }
  EliminarDato(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
  ConsultarDato(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  EditarDato(id:any,datos:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datos);
  }

}
