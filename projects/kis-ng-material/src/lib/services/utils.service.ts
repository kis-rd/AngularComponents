import { Injectable, Renderer2, Optional } from '@angular/core';
import { FormatDataPipe } from '../pipes/format-data.pipe';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { PFormatValue } from '../models/pformatValue';
import { Subject, Observable, throwError, EMPTY, NEVER } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/**
 * Provides an API that allows operations common to many components
 */
export class UtilsService {
  /**
  * suffix for start date
  */
  startDateSuffix = 'T00:00:00';
  /**
   * suffix for end date
   */
  endDateSuffix = 'T23:59:59';
  /**
   * statistics dates format
   */
  statisticsDatesFormat = 'yyyy-MM-ddTHH:mm:ss';
  title: string;
  /**
   * Last http error that is occured
   */
  lastHttpErrorResponse: HttpErrorResponse;
  /**
   * feature that triggered the error
   */
  errorFeatureName: string;
  /**
   * date format in app config
   */

  get dateFormat(): any {
    return {
      locale: 'en-US',
      format: 'dd/MM/yyyy HH:mm:ss'
    };
  }
  format: FormatDataPipe;
  effet: string;
  constructor(
  //  @Optional() private appConfig: AppConfigService,
    // @Optional() private translate: TranslateService,
    // @Optional() private alertify: AlertifyService
  ) {
    this.format = new FormatDataPipe();
  }

  /**
   * returns the colors settings values from json configuration file (header)
   */
  // public mergeStyleHeader(): any {
  //   let value: any;
  //   try {
  //     value = {
  //       'background-color': this.appConfig.settings.colors.headerPage
  //         .backgroundColor
  //     };
  //   } catch (error) {
  //     if (!this.appConfig) {
  //       console.error('add config file of type AppConfig in settings property of AppConfigService to use mergeStyleHeader function ');
  //     } else if (!this.appConfig.settings) {
  //       console.error('add config file settings of type AppConfig to use mergeStyleHeader function ');
  //     } else if (!this.appConfig.settings.colors) {
  //       console.error('define color value AppConfig file to use mergeStyleHeader function');
  //     }
  //   }
  //   return value;
  // }

  /**
   * returns the colors settings values from json configuration file (buttons)
   */
  // public mergeStyleButton(): any {
  //   let value: any;
  //   try {
  //     value = {
  //       'background-color': this.appConfig.settings.colors.button.backgroundColor,
  //       'color': this.appConfig.settings.colors.button.color
  //     };
  //   } catch (error) {
  //     this.handlerAppConfigError();
  //   }
  //   return value;
  // }


  // public mergeStyleUnderHeader(): any {

  //   let value: any;

  //   try {
  //     value = {
  //       'background-color': this.appConfig.settings.colors.underHeaderPage.backgroundColor
  //     };
  //   } catch (error) {

  //     if (!this.appConfig) {
  //       console.error('add config file of type AppConfig in settings property of AppConfigService to use mergeStyleHeader function ');
  //     } else if (!this.appConfig.settings) {
  //       console.error('add config file settings of type AppConfig to use mergeStyleHeader function ');
  //     } else if (!this.appConfig.settings.colors) {
  //       console.error('define color value AppConfig file to use mergeStyleHeader function ');
  //     } else if (!this.appConfig.settings.colors.underHeaderPage) {
  //       console.error('define underHeaderPage value AppConfig file to use mergeStyleHeader function ');
  //     }
  //   }
  //   return value;
  // }
  /**
   * recursive action to set style parameters for DOM tree
   * @param mNode root
   * @param mRenderer
   */
  // public mergeStyle(mNode: any, mRenderer: Renderer2): void {
  //   // test tag name

  //   if (mNode) {
  //     switch (mNode.nodeName) {
  //       case 'BUTTON':
  //         mRenderer.setStyle(
  //           mNode,
  //           'background-color',
  //           this.appConfig.settings.colors.button.backgroundColor
  //         );
  //         break;
  //       case 'HEADER':
  //         mRenderer.setStyle(
  //           mNode,
  //           'background-color',
  //           this.appConfig.settings.colors.headerPage.backgroundColor
  //         );
  //         break;
  //       default:
  //     }
  //     this.mergeStyle(mNode.firstChild, mRenderer);
  //     let AC = mNode.nextSibling;
  //     while (AC) {
  //       this.mergeStyle(AC, mRenderer);
  //       AC = AC.nextSibling;
  //     }
  //     AC = null;
  //   }
  // }

  /**
   * return color of background if user over input
   * @param event over mouse event:
   */
  // getHoverColor(event?: any): any {
  //   let value: any;
  //   try {
  //     if (event) {
  //       value = {
  //         'background-color': this.appConfig.settings.colors.button.hoverColor,
  //         cursor: 'pointer'
  //       };
  //     } else {
  //       value = null;
  //     }
  //   } catch (error) {
  //     this.handlerAppConfigError();
  //   }
  //   return value;
  // }

  /**
   * put date in objet for pipe FormatData
   * @param rowData
   * @param column
   */
  pFormatValue(param1?: any, param2?: any, param3?: any): any {
    return new PFormatValue(param1, param2, param3);
  }
  /**
   * add prefix for image base 64
   * @param imageB64 image base 54
   */
  addPrefixBase64Image(imageB64: any): any {
    imageB64.receipt = 'data:image/jpeg;base64,' + imageB64.receipt;
    return imageB64;
  }
  /**
   * convert uri to blob object
   * @param dataURI uri
   */
  convertBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    const byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    // type of base64 data uri
    const mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    const ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    // write the ArrayBuffer to a blob, and you're done
    const blob = new Blob([ab], { type: mimeString }); // extension n'est pas ajouté sur internet explorer
    return blob;
  }

  /**
   * Validators methodes control if start date is more superior than end date
   */
  startDateIsSup(controls: FormGroup) {
    // control is a date input, so we can build the Date from the value
    const startDate = new Date(controls.controls['startDate'].value);
    const endDate = new Date(controls.controls['endDate'].value);
    return startDate <= endDate ? null : { startDateSup: true };
  }

  /**
     * Validators method control if date is more superior than a today date
     */
  dateIsSup(control: FormControl) {
    return new Date(control.value) <= new Date() ? null : { dateSup: true };
  }

  /** disconnect User */
  // public disconnectUser() {
  //   this.alertify.error('You should be logged in !');
  //   this.router.navigate(['home'], {
  //     queryParams: { language: localStorage.getItem('lang') }
  //   });
  //   localStorage.clear();
  // }
  /**
   *  management of event sending dates
   */
  sendInputDatesValue(startDate: Subject<any>, endDate: Subject<any>): Observable<any> {

    return endDate.pipe(
      debounceTime(2000),
      mergeMap(
        val => {
          return startDate.pipe(debounceTime(2000));
        },
        (valueFromSource, valueFromPromise) => {
          if (valueFromSource && valueFromPromise) {
            return { startDate: valueFromPromise, endDate: valueFromSource };
          }
        }
      )
    );
  }

  /**
   * processing dates parameters before sending backend
   */
  processDatesParamsBE(params): any {

    localStorage.removeItem('startDate');
    localStorage.removeItem('endDate');
    localStorage.setItem(
      'startDate',
      params.startDate
    );
    localStorage.setItem('endDate', params.endDate);

    const beginDate = new DatePipe('en-US').transform(
      params.startDate + this.startDateSuffix,
      this.statisticsDatesFormat
    );
    const finishDate = new DatePipe('en-US').transform(
      params.endDate + this.endDateSuffix,
      this.statisticsDatesFormat
    );

    return { StartDate: beginDate, EndDate: finishDate };
  }

  /**
   * return route title
   * @param title view title
   */
  calculTitle(title: string): void {
    this.title = title;
  }
  /**
   * Route relative to parent
   * @param path: path
   * @param activeRoute:activated route
   */
  // routeRelToP(path: string, activeRoute: ActivatedRoute): void {
  //   this.router.navigate(['../' + path], { relativeTo: activeRoute });
  // }

  /**
   * handler resolver Undefined return
   * @param path path
   */
  // handlerResolverUnde(path: string): void {
  //   try {
  //     this.router.navigate([path]);
  //     this.alertify.error(this.translate.instant('error.undefined'));
  //   } catch (error) {
  //     if (!this.alertify) {
  //       console.error('Add Alertify.js package to use this function');
  //     } else if (!this.translate) {
  //       console.error('Add Ngx translate to use this function');
  //     }
  //   }
  // }


  /**
   * handle HttpErrorResponse
   * @param error HttpErrorResponse come back to server
   */
  handleError(error: HttpErrorResponse, featureName: string): Observable<never> {
    // recuvor HttpErrorResponse object
    // route to error page
    localStorage.removeItem('errorPageObject');
    localStorage.removeItem('errorPageFeatureName');
    localStorage.setItem('errorPageObject', JSON.stringify(error));
    localStorage.setItem('errorPageFeatureName', featureName);
    this.lastHttpErrorResponse = JSON.parse(localStorage.getItem('errorPageObject'));
    this.errorFeatureName = localStorage.getItem('errorPageFeatureName');
    // this.router.navigate(['errorPage']);
    return NEVER;
  }

  /**
   * handle HttpErrorResponse ou undefined stream
   * @param error HttpErrorResponse come back to server
   */
  // handleErrorbyAlertify(error?: HttpErrorResponse): Observable<never> {


  //   try {
  //     this.alertify.error(this.translate.instant('errorProgressEvent'));
  //     if (error) {
  //       return throwError(error);
  //     } else { return EMPTY; }

  //   } catch (error) {
  //     if (!this.alertify) {
  //       console.error('Add Alertify.js package to use this function');
  //     } else if (!this.translate) {
  //       console.error('Add Ngx translate to use this function');
  //     }
  //   }


  // }
  /**
   * generate new collector station id
   */
  public calculTrigramme(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 3; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  /**
   * Convert time in seconde to millisecond
   * @param time
   */
  public convertToMilli(time: number) {
    let value: number;
    if (time < 0) {
      value = undefined;
    } else {
      value = time * 1000;
    }
    return value;
  }


  // handlerAppConfigError() {


  //   if (!this.appConfig) {
  //     console.error('add config file of type AppConfig in settings property of AppConfigService to use mergeStyle functions ');
  //   } else if (!this.appConfig.settings) {
  //     console.error('add config file settings of type AppConfig to use mergeStyle functions ');
  //   } else if (!this.appConfig.settings.colors) {
  //     console.error('define color value AppConfig file');
  //   } else if (!this.appConfig.settings.colors.button) {
  //     console.error('define button color value AppConfig file');
  //   }
  // }
}
