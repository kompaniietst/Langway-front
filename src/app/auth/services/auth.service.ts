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

    getw() {
        return this.http.post(this.url + 'welcome', {});
    }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        return this.http.post<AuthResponceInterface>(this.url + 'register', data);
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        this.http.post<AuthResponceInterface>(this.url + 'login', data)
            .subscribe(x => console.log('login', x))
        return this.http.post<AuthResponceInterface>(this.url + 'login', data);
    }

    loginW(data: any): any {
        return this.http.post(this.url + 'login', data)

    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        return this.http.get<AuthResponceInterface>(this.url + 'current-user');
    }
}