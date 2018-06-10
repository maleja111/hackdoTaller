import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) { }

  // file from event.target.files[0]
  uploadFile(url: string, img: File): Observable<HttpEvent<any>> {

    const formData = new FormData();
    formData.append('img', img);

    const params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', url, formData, options);
    return this.http.request(req);
  }

  addDescription(url: string, data: any): Observable<any> {
    const dataPost = { description: data.description, image: data.avatar };

    const req = new HttpRequest('POST', url, dataPost);
    return this.http.request(req);
  }
}
