// src/app/components/book-view/book-view.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import { environment } from '../../../environments/environment.prod';


@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent implements OnInit {
  bookArray: any[] = [];
  selectedBook: Book | null = null; // Track the selected book for details view

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.http.get(`${environment.apiUrl}/api/books`).subscribe({
      next: (res: any) => {
        this.bookArray = res;
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      }
    });
  }

  toggleBookDetails(book: Book){
    this.selectedBook = this.selectedBook === book ? null : book;
  }

  
}