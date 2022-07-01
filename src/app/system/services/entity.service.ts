import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { EntityRequestInterface } from "../types/entity-request.interface";
import { EntityInterface } from "../types/entity.interface";

@Injectable()
export class EntityService {
    url: string = environment.api;
    entityPathSubject = new Subject<string[]>();
    openedDirectories = new Subject<string[]>();

    constructor(private http: HttpClient) { }

    getEntities(): Observable<EntityInterface> {
        return this.http.get<EntityInterface>(this.url + 'entities');
    }

    create(data: EntityRequestInterface): Observable<EntityInterface> {
        return this.http.post<EntityInterface>(this.url + 'create-entity', data);
    }

    remove(id: string): any {
        return this.http.delete(this.url + 'remove');
    }
}