import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSource = new Subject<any>();
  data$ = this.dataSource.asObservable();

  sendData(data: any) {
    this.dataSource.next(data);
  }


  constructor() { }
}
