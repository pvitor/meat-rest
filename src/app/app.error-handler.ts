import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse| any) {
        let errorMenssage: string;
        if (error instanceof HttpErrorResponse) {
            const body = error.error;
            errorMenssage = `${error.url}: ao obtera url ${error.status} - ${error.statusText || ''} ${body}`;
        }else {
            errorMenssage = error.errorMenssage ? error.errorMenssage : error.toString();
        }
        console.log(errorMenssage);

        return Observable.throw(errorMenssage);
    }
}
