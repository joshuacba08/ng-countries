import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit, AfterViewInit {
  countries:any;
  loader=true;

  constructor( private countriesService: CountriesService,
               private _liveAnnouncer: LiveAnnouncer
    ){}
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: String[] = ['name','capital','region','languages']
  dataSource:any;


  ngOnInit(): void {
    this.getCountriesFromService();
  }

  ngAfterViewInit() {
    
  }

  getCountriesFromService(){
    this.countriesService.getCountries().subscribe( resp => {
      this.countries = resp;
      this.dataSource = new MatTableDataSource(this.countries);
      this.dataSource.sort = this.sort;
      this.loader = false;
    });
  }

  getValuesFromObject(obj:any){

    return obj ? Object.values(obj) : '-';
  }

  announceSortChange(e:any) {

    console.log(e);
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    // if (sortState.direction) {
    //   this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    // } else {
    //   this._liveAnnouncer.announce('Sorting cleared');
    // }
  }

}
