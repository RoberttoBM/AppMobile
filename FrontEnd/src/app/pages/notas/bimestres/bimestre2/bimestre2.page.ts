import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-bimestre2',
  templateUrl: './bimestre2.page.html',
  styleUrls: ['./bimestre2.page.scss'],
})
export class Bimestre2Page implements OnInit {

  arrayPosts = [];

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notasService.getAll().subscribe(resp => {
      this.arrayPosts = resp;
      console.log(resp);
    })
  }

}
