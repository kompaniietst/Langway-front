import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { WordRequestInterface } from "../types/word-request.interface";
import { WordInterface } from "../types/word.interface";

@Injectable()
export class WordService {
    url: string = environment.api;
    entityPathSubject = new Subject<string[]>();
    openedDirectories = new Subject<string[]>();

    constructor(private http: HttpClient) { }

    getWords(list_id: string): Observable<WordInterface[]> {
        console.log('list_id  ', list_id);

        this.http.post<WordInterface[]>(this.url + 'words', { list_id: list_id })
            .subscribe(x => console.log('X', x))
        return this.http.post<WordInterface[]>(this.url + 'words', { list_id: list_id });
    }

    create(data: WordRequestInterface): Observable<WordInterface> {
        return this.http.post<WordInterface>(this.url + 'create-word', data);
    }

    remove(id: string): any {
        return this.http.delete(this.url + 'remove');
    }

    clearDB() {
        return this.http.delete(this.url + 'clearDB');
    }
}