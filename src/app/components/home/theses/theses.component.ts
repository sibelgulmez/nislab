import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-theses',
  templateUrl: './theses.component.html',
  styleUrls: ['./theses.component.scss']
})
export class thesesComponent implements OnInit {

  constructor(
    private router: Router,
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
          console.log(evt);
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }

}
