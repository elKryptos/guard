import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let cloneRequest = req.clone({
            setHeaders: {
                'Authorization': 'Bearer 123456'
            }
        });
        return next.handle(cloneRequest);
    }
}
