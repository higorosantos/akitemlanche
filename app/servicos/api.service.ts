import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Lanchonete } from '../models/lanchonete';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  // API path
  base_path = 'http://localhost:3000/Lanchonetes';
 
  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
     
      console.error('Ocorreu um erro:', error.error.message);
    } else {
     
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
   
    return throwError(
      'Ocorreu um erro. Por favor volte mais tarde..');
  };
 
 

  createItem(item): Observable<Lanchonete> {
    return this.http
      .post<Lanchonete>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
 
  getItem(nome): Observable<Lanchonete> {
    return this.http
      .get<Lanchonete>(`${this.base_path}?nome=${nome}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
 
  getList(): Observable<Lanchonete> {
    return this.http
      .get<Lanchonete>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getDestaque(): Observable<Lanchonete>{
    return this.http
    .get<Lanchonete>(this.base_path + '?destaque=true' )
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

 

  updateItem(id, item): Observable<Lanchonete> {
    return this.http
      .put<Lanchonete>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  alterarItem(id) {
    return this.http
      .delete<Lanchonete>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  
  deleteItem(id) {
    return this.http
      .delete<Lanchonete>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
}