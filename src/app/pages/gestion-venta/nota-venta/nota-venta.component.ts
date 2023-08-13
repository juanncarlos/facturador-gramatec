import { Component, OnInit } from '@angular/core';
import { Producto02Service } from '../../gestion-inventario/producto02/producto02.service';
import { ClienteService } from '../../gestion-inventario/cliente/cliente.service';

@Component({
  selector: 'app-nota-venta',
  templateUrl: './nota-venta.component.html',
  styleUrls: ['./nota-venta.component.scss']
})
export class NotaVentaComponent implements OnInit {

  constructor(
    private productoService: Producto02Service,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
  }

}
