import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {
  

  ngOnInit(): void { }
  histogram: any;
  isShown: boolean = false;
  constructor(private http: HttpClient) {

  }

  

fileData!: File 
fileUploadProgress!: string 


 
fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      
}
 
createImageFromBlob(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.histogram = reader.result;
  }, false);

  if (image) {
     reader.readAsDataURL(image);
  }
 }
 
onSubmit() {

  var  formData = new FormData();
  formData.append('file',this.fileData, this.fileData.name );
this.http.post('http://127.0.0.1:5000/generateHistogram',  formData,{ responseType: 'blob' })
 .subscribe((baseImage : any) => {
  this.createImageFromBlob(baseImage);
 this.isShown = true
});

 }
}
