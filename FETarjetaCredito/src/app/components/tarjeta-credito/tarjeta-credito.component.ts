import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.scss']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[]=[
    {titular:'Juan Perez', numeroTarjeta: '123123123123123', fechaExpiracion: '11/12', cvv: 123},
    {titular:'Jorge doe', numeroTarjeta: '893854739899889320477', fechaExpiracion: '11/12', cvv: 123},
    {titular:'paco pelusa', numeroTarjeta: '8472384762647858927', fechaExpiracion: '11/12', cvv: 123},
    {titular:'Pepe Pollo', numeroTarjeta: '90492377738947626376', fechaExpiracion: '11/12', cvv: 123}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
