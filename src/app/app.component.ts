import { Component, OnInit } from '@angular/core';
import { PropertyService } from './property.service';
import { Property } from './property';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public properties!: Property[];

  constructor(private propertyService: PropertyService) {}
  
  ngOnInit(): void {
  this.getProperties()      
  }
  public getProperties(): void {
      this.propertyService.getProperties().subscribe(
        (response: Property[]) => {
          this.properties = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

}
