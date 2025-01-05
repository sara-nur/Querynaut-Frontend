import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component'; // Import ChatComponent
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  imports: [ChatComponent, DropdownComponent], // Add ChatComponent here to use it
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Querynaut';
}
