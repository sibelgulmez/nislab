import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class peopleComponent implements OnInit {
  
  active = 0
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
