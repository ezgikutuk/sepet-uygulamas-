import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category/category';
import {map} from 'rxjs/operators';

@Injectable()
export class CategoryService {
  constructor(
    private http: HttpClient, // Adım 1
    @Inject('apiUrl') private apiUrl  // Adım 2
  ) { }

  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl + '/categories').pipe(
      map(response => response)
    );
  }
}
