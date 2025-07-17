import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  apiResponse = '';

  constructor(private http: HttpClient) {}

  testProxy() {
    this.http.get('/api/test').subscribe((data: any) => {
      this.apiResponse = JSON.stringify(data, null, 2);
    });
  }
}
