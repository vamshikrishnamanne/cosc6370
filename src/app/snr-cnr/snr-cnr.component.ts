import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';
import { Dimensions, ImageTransform } from 'ngx-image-cropper';

@Component({
  selector: 'app-snr-cnr',
  templateUrl: './snr-cnr.component.html',
  styleUrls: ['./snr-cnr.component.scss']
})
export class SnrCnrComponent implements OnInit {

  ngOnInit(): void {
   
  }
  constructor(private http: HttpClient) { }
    isShown: boolean = false ;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};
    aspectRatio:any = 1.414;
    mean : any;
    median : any;
    standard_deviation : any;
    result : any
    fileData!: File 

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
        this.fileData = <File>this.imageChangedEvent.target.files[0];
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }

    imageLoaded() {
        this.showCropper = true;
        console.log('Image loaded');
    }

    cropperReady(sourceImageDimensions: Dimensions) {
      this.aspectRatio = sourceImageDimensions.width > sourceImageDimensions.height ? 1.414 : 0.707;
        console.log('Cropper ready', sourceImageDimensions);
    }

    loadImageFailed() {
        console.log('Load failed');
    }

 



    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    toggleContainWithinAspectRatio() {
        this.containWithinAspectRatio = !this.containWithinAspectRatio;
    }


     
    submit(){
      console.log(this.croppedImage)
      var  formData = new FormData();
      formData.append('originalfile', this.fileData, this.imageChangedEvent.target.files[0].name);
      formData.append('croppedpart', base64ToFile(this.croppedImage), this.imageChangedEvent.target.files[0].name);
   this.http.post('http://127.0.0.1:5000/calculateSnrCnr',  formData)
     .subscribe(res => {
      this.result = res
    //    console.log(res);
       this.isShown = true
     })
 }

}
