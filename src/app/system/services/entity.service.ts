import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { EntityRequestInterface } from "../types/entity-request.interface";
import { EntityInterface } from "../types/entity.interface";

@Injectable()
export class EntityService {
    url: string = environment.api;

    constructor(private http: HttpClient) { }

    create(data: EntityRequestInterface): Observable<EntityInterface> {
        return this.http.post<EntityInterface>(this.url + 'create-entity', data);
    }

    // login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    //     return this.http.post<AuthResponceInterface>(this.url + 'login', data);
    // }

    // getCurrentUser(): Observable<CurrentUserInterface> {
    //     return this.http.get<AuthResponceInterface>(this.url + 'current-user');
    // }
}