import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  // Inject HttpClient
  constructor(private http: HttpClient) {}

  sendMessage() {
    if (this.userMessage.trim() !== '') {
      const userMessageText = this.userMessage; // Save message before clearing

      // Add user message to chat
      this.messages.push({ text: userMessageText, type: 'user-message' });
      this.userMessage = '';

      // Send HTTP POST request
      const apiUrl = 'http://localhost:5000/api/query';
      const requestBody = {
        query: userMessageText,
      };

      this.http.post<{ response: string }>(apiUrl, requestBody).subscribe({
        next: (response) => {
          console.log(response);
          this.messages.push({
            text: response.response || 'No response received',
            type: 'bot-message',
          });
        },
        error: (err) => {
          console.error('Error sending message:', err);
          this.messages.push({
            text: 'Sorry, there was an error processing your request.',
            type: 'bot-message',
          });
        },
      });
    }
  }
}
