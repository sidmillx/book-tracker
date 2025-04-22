import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-book',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookObj: any = {
    title: '',
    author: '',
    pages: null,
    category: '',
    status: 'to-read',
    dateStarted: null,
    dateCompleted: null,
    lessons: '',
    applications: '',
    rating: null,
    review: ''
  };

  bookArray: any [] = [];

  constructor(private http: HttpClient) { 
    this.getBooks();
  }

  saveBook() {
    this.createBook(this.bookObj);
  }

  getBooks() {
    this.http.get("http://localhost:3000/api/books").subscribe((res: any) => {
      this.bookArray = res;
  });
}

  createBook(obj:any){
    return this.http.post("http://localhost:3000/api/books", obj).subscribe((res: any) => {})
  }
}

