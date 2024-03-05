import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private actionSubject: Subject<string> = new Subject<string>();
  private userForUpdateSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  action$ = this.actionSubject.asObservable();

  emitAction(action: string): void {
    this.actionSubject.next(action);
  }

  emitUserForUpdate(user: User): void {
    this.userForUpdateSubject.next(user);
  }

  getUserForUpdate(): BehaviorSubject<User | null> {
    return this.userForUpdateSubject;
  }
}
