import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
// import * as _ from 'lodash';
// import { Observable } from 'rxjs/observable';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import { map, take } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';


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
}
  //   url = 'https://picx-api.now.sh/media';
  //   saveImage(file) {
  //     return this
  //       .http
  //       .post(this.url, file);
  //   }
  // }

  // saveImage(data: any) {
  //   return this.http.post('https://picx-api.now.sh/image/upload', data);
  //   // .map((resp: any) => {
  //   //   return resp.json();
  //   // });
  //   // .pipe(
  //   //   map((res: any) => {
  //   //     console.log('saveSpeakers', res.json());
  //   //     return res.json();
  //   //   }), catchError(error => this.handleError(error))
  //   // );
  // }

//   private handleError(error: Response | any) {
//     let errMsg: string;
//     if (error instanceof Response) {
//       const body: any = error.json() || '';
//       const err = body.error || JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//     } else {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.log('handleError', errMsg);
//     return Observable.throw(errMsg);
//   }

// }
