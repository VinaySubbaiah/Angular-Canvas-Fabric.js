import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileStoreComponent } from './file-store/file-store.component';
import { DrawComponent } from './draw/draw.component';

// import { PDFExportModule } from '@progress/kendo-angular-pdf-export';



@NgModule({
  declarations: [
    AppComponent,
    FileStoreComponent,
    DrawComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule,
    // PDFExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
