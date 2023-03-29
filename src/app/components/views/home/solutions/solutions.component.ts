import { Solucoes } from './../../../../services/solutions.service';
// import { Solutions } from './solutions.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
  providers: [Solucoes]
})




export class SolutionsComponent implements OnInit {


  constructor(private solucoes: Solucoes){}

  sols: {id: number, title: string, description: string}[] = []

  ngOnInit(){
    this.sols = this.solucoes.sol;
  }

}
