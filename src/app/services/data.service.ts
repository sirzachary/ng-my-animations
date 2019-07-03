import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public fakeResponse(): Observable<any> {
    const randomTime = Math.floor(Math.random() * 5000) + 3000;
    return timer(randomTime).pipe(
      take(1)
    );
  }
}
