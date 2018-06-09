import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadFileService } from '../shared/services/upload-file/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  form: FormGroup;
  loading = false;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private uploadFileService: UploadFileService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    // if (event.target.files.length > 0) {
    // const file = event.target.files[0];
    // this.uploadFileService
    //   .saveImage(file)
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    this.uploadFile(event.target.files);
    // this.form.get('avatar').setValue(file);
    // }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    // this.uploadFileService.create('1', '1', '1');
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  uploadFile(files: FileList) {
    if (files.length === 0) {
      console.log('No file selected!');
      return null;
    }
    const img: File = files[0];

    this.uploadFileService.uploadFile('https://picx-api.now.sh/image/upload', img)
      .subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            console.log(`File is ${percentDone}% loaded.`);
          } else if (event instanceof HttpResponse) {
            console.log('File is completely loaded!');
          }
        },
        (err) => {
          console.log('Upload Error:', err);
        }, () => {
          console.log('Upload done');
        }
      );
  }

}
