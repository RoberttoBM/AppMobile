import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from 'src/app/services/asistencias.service'

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  arrayPosts = [];

  constructor(private asistenciasService: AsistenciasService) { }  
  
  ngOnInit(): void {
    this.asistenciasService.getAll().subscribe(resp=>{
      this.arrayPosts = resp;
      console.log(resp);
    })
  }

}

  
  


