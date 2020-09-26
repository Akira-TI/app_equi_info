import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.page.html',
  styleUrls: ['./equipamentos.page.scss'],
})
export class EquipamentosPage implements OnInit {

public equipamentos=  []

  constructor() { }

  ngOnInit() {
      this.equipamentos= [
   {
	'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjtznZJnyPbXwa4D91U2NHWjPVd603KW1IOw&usqp=CAU',
	'title':'Smartphone',
	'subtitle':'Smartphone mais barato do Brasil!',
	'description':'Motorola G8',

    }
      ]
    }
}