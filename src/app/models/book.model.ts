// src/app/models/book.model.ts
export interface Book {
    id?: number; // Optional, assuming your backend assigns an ID
    title: string;
    author?: string;
    pages?: number;
    category?: string;
    status: 'to-read' | 'reading' | 'completed';
    dateStarted?: string; 
    dateCompleted?: string;
    lessons?: string;
    applications?: string;
    rating?: number;
    review?: string;
}