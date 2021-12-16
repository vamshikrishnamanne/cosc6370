import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-intensities',
  templateUrl: './intensities.component.html',
  styleUrls: ['./intensities.component.scss']
})
export class IntensitiesComponent implements OnInit {
  showplots: boolean = false
  intensityplot : any
  isShown: boolean = false
  rowValue: number = 70;
  rowOptions: Options = {
    floor: 0,
    ceil: 100
  };
  columnValue: number = 70
  columnOptions: Options = {
    floor: 0,
    ceil: 100
  };

  url = '';
  fileData!: File;
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {

      this.fileData = <File>event.target.files[0];
      var reader = new FileReader();
      let img = new Image();

      img.src = window.URL.createObjectURL(this.fileData);
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        const width = img.naturalWidth;
         const height = img.naturalHeight;
        this.rowOptions['ceil'] = height - 1
        this.columnOptions['ceil'] = width - 1
         window.URL.revokeObjectURL(img.src);
        this.url = event.target.result;
        this.isShown = true
      }
    }
  }

  constructor(private http: HttpClient) { }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.intensityplot = reader.result;
    }, false);
  
    if (image) {
       reader.readAsDataURL(image);
    }
   }



  onSubmit(){
    var  formData = new FormData();
  formData.append('file',this.fileData, this.fileData.name );
  formData.append('row', this.rowValue.toString())
  formData.append('column', this.columnValue.toString())
  this.http.post('http://127.0.0.1:5000/plotIntensities',  formData,{ responseType: 'blob' })
 .subscribe((baseImage : any) => {
  this.createImageFromBlob(baseImage);
  this.showplots = true
 
});

  }


  ngOnInit(): void {
  }

}
