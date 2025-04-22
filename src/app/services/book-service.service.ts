import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  apiUrl: string = "http://localhost:3000/api/books"

  constructor(private http: HttpClient) { }

  loadBooks() {
    return this.http.get(this.apiUrl);
  }
}
