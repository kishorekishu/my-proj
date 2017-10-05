import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <div> whats app {{name}} </div>
  <input type = "text" [value]="name" (keyup) = "name = $event.target.value">
  <br/>
  <ul>
  <li>
  <span>{{customers.id}}</span>
  </li>
  </ul>`,
})
export class AppComponent  { name = 'Angular';
customers = [
{id:1, name: 'kishore'},
{id:2, name: 'kishu'},
{id:3, name: 'b'}
	 ];
 }

