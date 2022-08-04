import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AccesoComponent } from '../acceso/acceso.component';
@Component({
  selector: 'app-cabezal',
  templateUrl: './cabezal.component.html',
  styleUrls: ['./cabezal.component.css']
})
export class CabezalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  abrirLogin(): void {
    this.dialog.open(AccesoComponent);
  }
  ngOnInit(): void {
  }

}
