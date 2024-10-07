import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class publicationsComponent implements OnInit {
  
  active = 0
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
