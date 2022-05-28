import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocalStoreService } from "../services/local-store.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private localStorage: LocalStoreService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.localStorage.get('token');

        if (token)
            request = request.clone({
                setHeaders: { 'x-access-token': token ? `${token}` : '' }
            });

        return next.handle(request);
    }
}