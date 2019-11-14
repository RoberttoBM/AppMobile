import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-bimestre1',
  templateUrl: './bimestre1.page.html',
  styleUrls: ['./bimestre1.page.scss'],
})
export class Bimestre1Page implements OnInit {

  arrayPosts = [];

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notasService.getAll().subscribe(resp => {
      this.arrayPosts = resp;
      console.log(resp);
    })
  }
}
