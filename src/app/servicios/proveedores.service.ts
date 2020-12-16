import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProveedoresService {

  proveedores = [
    {nombre: 'Gas Natural', localidad: 'Bilbao', cif: 'A123456'},
    {nombre: 'Telefónica', localidad: 'Madrid', cif: 'A654321'},
    {nombre: 'Jazztel', localidad: 'Madrid', cif: 'A444222'}
  ]
  
  constructor() { }

  getProveedores() {
    return this.proveedores;
  }

  postProveedores(proveedor: any) {
    this.proveedores.push(proveedor);
  }


}
