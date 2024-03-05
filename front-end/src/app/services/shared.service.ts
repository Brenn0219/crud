import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private actionSubject: Subject<string> = new Subject<string>();
  action$ = this.actionSubject.asObservable();

  emitAction(action: string): void {
    this.actionSubject.next(action);
  }
}
