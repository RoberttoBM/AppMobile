import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-bimestre5',
  templateUrl: './bimestre5.page.html',
  styleUrls: ['./bimestre5.page.scss'],
})
export class Bimestre5Page implements OnInit {

  arrayPosts = [];

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notasService.getAll().subscribe(resp => {
      this.arrayPosts = resp;
      console.log(resp);
    })
  }

}
