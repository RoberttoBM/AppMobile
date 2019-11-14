import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-bimestre4',
  templateUrl: './bimestre4.page.html',
  styleUrls: ['./bimestre4.page.scss'],
})
export class Bimestre4Page implements OnInit {

  arrayPosts = [];

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notasService.getAll().subscribe(resp => {
      this.arrayPosts = resp;
      console.log(resp);
    })
  }

}
