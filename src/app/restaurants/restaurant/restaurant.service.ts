import {Restaurant} from './restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { MEAT_API } from '../../../../app.api';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RestaurantsService {


    constructor(private http: HttpClient) {}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`);
    }

    restautantById(idRestaurant: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${idRestaurant}`);
    }
}
