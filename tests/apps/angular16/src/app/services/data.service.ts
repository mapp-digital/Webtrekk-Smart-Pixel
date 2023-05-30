import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Content } from '../models/content.model';
import { Product } from '../models/product.model';
@Injectable()
export class DataService {
  apiURL = 'https://phoenix:4001';
  constructor(private http: HttpClient) {}

  getContent(slug: string): Observable<Content> {
    return this.http
      .get<Content[]>(`${this.apiURL}/api/fixture/pages/slug/${slug}`)
      .pipe(retry(1), catchError(this.handleError))
      .pipe(map(contentArray => {
        return contentArray[0];
      }));
  }

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.apiURL}/api/fixture/products`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getProduct(id: number): Observable<Product> {
    return this.http
      .get<Product[]>(`${this.apiURL}/api/fixture/products/id/${id}`)
      .pipe(retry(1), catchError(this.handleError)).pipe(map(products => {
        return products[0];
      }));;
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
