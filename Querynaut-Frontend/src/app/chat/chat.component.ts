import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { NgFor, NgIf } from '@angular/common'; // Import Angular core directives
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, CommonModule], // Add FormsModule here
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  companies = ['Company 1', 'Company 2', 'Company 3'];
  selectedCompany = 'Company 1';
  messages: { text: string; type: string }[] = [
    {
      text: 'Welcome to Querynaut Support! How can I assist you today?',
      type: 'bot-message',
    },
  ];
  userMessage = '';

  sendMessage() {
    if (this.userMessage.trim() !== '') {
      this.messages.push({ text: this.userMessage, type: 'user-message' });
      this.userMessage = '';
      setTimeout(() => {
        this.messages.push({
          text: 'Thank you for your message. We will get back to you shortly!',
          type: 'bot-message',
        });
      }, 1000);
    }
  }
}
