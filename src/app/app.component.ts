import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  countries = [
    {
      id:1,
      name:"uruguay",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      flag:"https://img.freepik.com/foto-gratis/bandera-uruguay_1401-254.jpg?w=2000"
    },
    {
      id:2,
      name:"argentina",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      flag:"https://media.istockphoto.com/photos/argentinian-flag-picture-id178392703?k=20&m=178392703&s=612x612&w=0&h=wA-Dylj5lssiaZxLv9l20tWKNxHEKkZSmaN56iRlUP8="
    },
    {
      id:3,
      name:"mexico",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      flag:"https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]

}
