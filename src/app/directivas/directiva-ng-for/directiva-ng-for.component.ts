import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.scss']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: any = [];

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
  }

}
