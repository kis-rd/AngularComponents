import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export abstract class ApiBuildTable  {
  constructor(
    protected http: HttpClient
  ) {}
  headers: string[];
  public tableSelection: any;
  /**
   * allows to keep the data coming from the back-end, so save saving network calls
   */
  getDataCache$: Observable<any>;
  /**
   * get dato form back-end
   * @param params body of request
   */
  public abstract getData(params?: any): Observable<any>;
  /**
   * get objet columns for tableComponent
   */
  public abstract getColumns(): any[];
  /**
   * get title for tableComponent
   */
  public abstract getTitle(): string;
  public abstract userSelection(): void;
}
