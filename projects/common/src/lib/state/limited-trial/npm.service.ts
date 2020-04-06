import { Injectable, Injector } from '@angular/core';
import { DAFService, BaseModeledResponse, Pageable } from '@lcu/common';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NPMService extends DAFService {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector, handler: HttpBackend) {
    super(injector);

    this.http = new HttpClient(handler);
  }

  //  API Methods
  public Search(search: string): Observable<BaseModeledResponse<Pageable<any>>>  {
    if (search) {
      return this.http.get(`https://api.npms.io/v2/search?q=${search}`).pipe(
        this.catchError(),
        map((res: any) => {
          return <BaseModeledResponse<Pageable<any>>>{
            Status: {
              Code: 0,
              Message: 'Success'
            },
            Model: {
              TotalRecords: res.total,
              Items: res.results
            }
          };
        })
      );
    } else {
      return Observable.create((obs: any) => {
        obs.next(<BaseModeledResponse<Pageable<any>>>{
          Status: {
            Code: 0,
            Message: 'Success'
          }
        });

        obs.complete();
      });
    }
  }

  //  Helpers
}
