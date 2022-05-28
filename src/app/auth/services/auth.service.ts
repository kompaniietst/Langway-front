import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { environment } from "src/environments/environment";
import { AuthResponceInterface } from "../types/auth-response.interface";
import { LoginRequestInterface } from "../types/login-request.interface";
import { RegisterRequestInterface } from "../types/register-request.interface";

@Injectable()
export class AuthService {
    url: string = environment.api;

    constructor(private http: HttpClient) { }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        console.log('regiter data', data);

        return this.http.post<AuthResponceInterface>(this.url + 'register', data);
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        console.log('login data', data);

        return this.http.post<AuthResponceInterface>(this.url + 'login', data);
    }

    getCurrentUser(): Observable<CurrentUserInterface> {

        return this.http.get<AuthResponceInterface>(this.url + 'current-user');
    }
}