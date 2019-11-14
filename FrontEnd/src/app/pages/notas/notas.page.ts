import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit{
  
  arrayPosts = [];

  constructor(private notasService: NotasService) { }  

  ngOnInit(): void {
    this.notasService.getAll().subscribe(resp=>{
      this.arrayPosts = resp;
      console.log(resp);
    })
  }

}


