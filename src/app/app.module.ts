import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UploadFileService } from './shared/services/upload-file/upload-file.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
