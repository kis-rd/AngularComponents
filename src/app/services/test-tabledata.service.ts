import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiBuildTable } from 'kisNgMaterial';
import { Column } from 'kisNgMaterial';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TestTabledataService extends ApiBuildTable {
  public tableSelection: any;
  constructor(protected http: HttpClient) {
    super(http);
  }
  // urls
  private usersUrl = environment.apiUrl + 'user/users';

  /**
   * allows to recover the license of a user
   */
  public userSelection(): void {
    //   this.manageUserService.getUserLicence({ Username: this.tableSelection.username }).subscribe(
    //     (data: UserLicenceModel) => {
    //       this.manageUserService.licence.next(data);
    //     }
    //   );
  }
  /**
   * get users List
   * getDataCache$ is false only when the application has been initialized or when a new user has been created
   */
  public getData(): Observable<any[]> {

    return of([
      {
        active: true,
        address1: '7 rue JP Timbaud',
        address2: 'Addr2',
        address3: "Addr3",
        city: "Echirolles",
        collectorAgreementNumber: "PUK",
        collectorStationId: "0001",
        country: "France",
        creationTime: 'Wed Jul 17 2019 10:37:28 GMT+0200',
        formatResultHistory: null,
        hovered: false,
        licence: null,
        postalCode: "38130",
        roleNames: ["Admin", "Moderator", "Customer"],
        shopName: "PhotoMe Shop",
        token: null,
        userStat: null,
        username: "Admin"
      },
      {
        active: undefined,
        address1: "7 rue Jean-Pierre Timbaud",
        address2: undefined,
        address3: undefined,
        city: "Echirolles",
        collectorAgreementNumber: "PUK",
        collectorStationId: "0001",
        country: "France",
        creationTime: '18 2019 10:32:58 GMT+0200',
        formatResultHistory: null,
        history: null,
        hovered: false,
        licence: null,
        postalCode: "38130",
        roleNames: ["Customer"],
        shopName: "KIS",
        token: null,
        userStat: null,
        username: "Evelyne"
      },
      {
        active: true,
        address1: "37 rue timbault",
        address2: undefined,
        address3: undefined,
        city: "Echiroles",
        collectorAgreementNumber: "PUK",
        collectorStationId: "MZQ1",
        country: "France",
        creationTime: '19 2019 10: 45: 16 GMT',
        formatResultHistory: null,
        history: null,
        hovered: false,
        licence: null,
        postalCode: "00000",
        roleNames: ["Customer"],
        shopName: "shop lo",
        token: null,
        userStat: null,
        username: "Hichem"
      },
      {
        active: true,
        address1: "7 rue Jean-Pierre Timbaud",
        address2: undefined,
        address3: undefined,
        city: "Echirolles",
        collectorAgreementNumber: "PUK",
        collectorStationId: "WOO1",
        country: "France",
        creationTime: 'Fri Jul 19 2019 11:35:52',
        formatResultHistory: null,
        history: null,
        hovered: false,
        licence: null,
        postalCode: "38130",
        roleNames: ["Admin"],
        shopName: "Photo-Me Shop",
        token: null,
        userStat: null,
        username: "ukadmin"
      },
      {
        active: true,
        address1: "7 rue Jean-Pierre Timbaud",
        address2: undefined,
        address3: undefined,
        city: "Echirolles",
        collectorAgreementNumber: "PUK",
        collectorStationId: "ZCS1",
        country: "France",
        creationTime: 'Fri Jul 19 2019 11:36:29',
        formatResultHistory: null,
        history: null,
        hovered: false,
        licence: null,
        postalCode: "38130",
        roleNames: ["Customer"],
        shopName: "Customer shop",
        token: null,
        userStat: null,
        username: "customer"
      }
    ]);
  }
  /**
   * Returns users table Columns
   */
  public getColumns(): Column[] {
    const columns = new Array(5);

    columns[0] = new Column(
      'admin.adminCreateUser.username',
      'username',
      'string'
    );
    columns[1] = new Column(
      'admin.adminCreateUser.collectorAgreementNumber',
      'collectorAgreementNumber',
      'string'
    );
    columns[2] = new Column(
      'admin.adminCreateUser.shopname',
      'shopName',
      'string'
    );
    columns[3] = new Column(
      'admin.manageUserLicence.creationTime',
      'creationTime',
      'date'
    );
    columns[4] = new Column('admin.adminCreateUser.city', 'city', 'string');
    return columns;
  }
  /**
   * Returns users table title
   */
  public getTitle(): string {
    return 'admin.manageUserLicence.userListTitle';
  }
}
