import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.scss']
})
export class CrearProveedorComponent implements OnInit {

  nombre: string = '';
  localidad: string = '';
  cif: string = '';

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
  }

  addProveedor() {
    this.proveedoresService.postProveedores({
      nombre: this.nombre, 
      localidad: this.localidad,
      cif: this.cif
    })
  }

}
