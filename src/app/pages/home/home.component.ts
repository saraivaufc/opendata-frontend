import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services: any = [
    {
      title: '60+ UX courses',
      description: 'The automated process all your website tasks.',
      icon: 'assets/img/icon/icon1.svg'
    },
    {
      title: '60+ UX courses',
      description: 'The automated process all your website tasks.',
      icon: 'assets/img/icon/icon1.svg'
    },
    {
      title: '60+ UX courses',
      description: 'The automated process all your website tasks.',
      icon: 'assets/img/icon/icon1.svg'
    }
  ]
  features: any = [
    {
      title: 'Cotações Históricas B3',
      description: 'The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.',
      href: '/cotacoes-historicas-b3'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
