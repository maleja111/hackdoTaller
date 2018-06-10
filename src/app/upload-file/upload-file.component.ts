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
  idImage = '';
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
      description: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    this.uploadFile(event.target.files);
  }

  onSubmit() {
    this.loading = true;
    if (this.idImage !== '') {
      this.form.get('avatar').setValue(this.idImage);
      const formModel = this.form.value;
      this.uploadFileService.addDescription('https://picx-api.now.sh/media', formModel)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              console.log('Descripción almacenada correctamente');
            }
          },
          (err) => {
            console.log('Saved with Error:', err);
          }, () => {
            console.log('Upload done');
          }
        );
    } else {
      alert('Por favor Adjunta una Imagen!');
    }
  }

  clearFile() {
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
          this.idImage = '';
          if (event instanceof HttpResponse && event.body._id) {
            this.idImage = event.body._id;
            console.log('File is completely loaded! and the image have the Id: ', this.idImage);
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
