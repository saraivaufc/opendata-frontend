import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  fields: any
  
  @Input()
  data: any
  
  constructor() { }

  ngOnInit(): void {
  }

}
