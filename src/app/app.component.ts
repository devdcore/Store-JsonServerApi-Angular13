import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'store';

  getName(params:void) {
      console.log(`Probando funcion en angular`);
  }

    
}


