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
	'title':'Smartphones',
	'description':'Clique aqui e veja mais!',

    },
    {
  'img':'https://cdn.pocket-lint.com/r/s/320x/assets/images/151531-smart-home-buyer-s-guide-best-printers-for-2020-print-at-home-without-hassle-image1-vedn0ywhwl.jpg?v1',
  'title':'Impressoras',
  'description':'Clique aquie veja mais!',

    },
     {
  'img':'https://www.pontofrio-imagens.com.br/acessorioseinovacoes/Monitores/1501982458/1426164887/monitor-led-samsung-s22f350fhlmzd-215-quot-preto-1501982458.jpg',
  'title':'Monitores',
  'description':'Clique aqui e veja mais!',

    },
    {
  'img':'https://images2.kabum.com.br/produtos/fotos/109892/teclado-mecanico-gamer-hp-gk100-rgb-abnt2-7jh28aa-ac4_1581417104_g.jpg',
  'title':'Teclados',
  'description':'Clique aqui e veja mais!',
  
    },
    {
  'img':'https://ae01.alicdn.com/kf/H0bcedc21a22743f4a4f396a01ffb063e9/Willkey-HD-1080P-Webcam-Computador-USB-2-0-Grava-o-de-V-deo-Da-C-mera.jpg',
  'title':'Webcams',
  'description':'Clique aqui e veja mais!',
  
    }

      ]
    }
    
    
}
