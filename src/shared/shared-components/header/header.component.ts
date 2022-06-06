import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input('countryName') countryName: string = '';

  constructor(){}

  ngOnInit(){
    console.log(`Header desde ${this.countryName}`);
  }
}
