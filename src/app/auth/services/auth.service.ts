import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
        console.log('data', data);

        return this.http.post<AuthResponceInterface>(this.url + 'register', data);
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        console.log('login', data);

        return this.http.post<AuthResponceInterface>(this.url + 'login', data);
    }
}