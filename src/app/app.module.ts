import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
// routed components
import { StatisticsComponent } from './statistics/statistics.component';
import { HomeComponent } from './home/home.component';
import { HistogramComponent } from './histogram/histogram.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ThresholdSegmentationComponent } from './threshold-segmentation/threshold-segmentation.component';
import { IntensitiesComponent } from './intensities/intensities.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SnrCnrComponent } from './snr-cnr/snr-cnr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StatisticsComponent,
    HomeComponent,
    HistogramComponent,
    PageNotFoundComponent,
    ThresholdSegmentationComponent,
    IntensitiesComponent,
    SnrCnrComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
        ReactiveFormsModule,
        ImageCropperModule,
        NgxSliderModule
      
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/medical-imaging'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
