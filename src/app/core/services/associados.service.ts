import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Associados, Situacoes } from '../../shared/models/associados.model';
import { catchError, tap, map } from 'rxjs/operators';
import { PQA_API } from '../../config/app.api';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = `${PQA_API}associados`;

@Injectable({
  providedIn: 'root'
})
export class AssociadosService {

  constructor(private http: HttpClient) { }

  getAssociados(): Observable<Associados[]>{
    return this.http.get<Associados[]>(apiUrl)
      .pipe(
        tap(associados => console.log('leu os associados')),
        catchError(this.handleError('getAssociados', []))
      );
  }

  getAssociadoById(id): Observable<Associados>{
    return this.http.get<any>(apiUrl + `/${id}`)
    .pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Associados>(`getAssociadoById id=${id}`))
    );
  }

  getSituacoes(): Observable<Situacoes[]>{
    return this.http.get<any>(apiUrl + `/situacoes`)
    .pipe(
      tap(_ => console.log(``)),
      catchError(this.handleError<Situacoes[]>(``))
    );
  }

  getSituacaoById(id): Observable<Situacoes>{
    return this.http.get<any>(apiUrl + `/situacao/${id}`)
    .pipe(
      tap(_ => console.log(``)),
      catchError(this.handleError<Situacoes>(``))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
