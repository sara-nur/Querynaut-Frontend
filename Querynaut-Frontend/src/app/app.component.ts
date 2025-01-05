import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component'; // Import ChatComponent

@Component({
  selector: 'app-root',
  imports: [ChatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Querynaut';
}
