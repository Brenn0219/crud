import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7149/api/User';
  private userDataChanged: Subject<void> = new Subject<void>();
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, ) { }

  getAllUsers(): Observable<User[]> {
    const headers = this.getHttpHeaders();
    return this.http.get<User[]>(this.apiUrl, {headers})
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      tap((response: any) => {
        this.setToken(response.token);
      })
    );
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    const headers = this.getHttpHeaders();
    return this.http.put<User>(url, user, {headers});
  }

  deleteUser(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    const headers = this.getHttpHeaders();
    return this.http.delete<void>(url, { headers });
  }

  emitUserDataChanged(): void {
    this.userDataChanged.next();
  }

  getUserDataChanged(): Observable<void> {
    return this.userDataChanged.asObservable();
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private getHttpHeaders(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    }
    return new HttpHeaders();
  }
}
