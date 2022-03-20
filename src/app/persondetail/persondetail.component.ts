import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.scss']
})
export class PersondetailComponent implements OnInit {

  id:string="";
  personobj:any={};
  imageLink:string="https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) {
    this.id = _ActivatedRoute.snapshot.params['id']
   }

  ngOnInit(): void {
    this._MoviesService.personDetail(this.id).subscribe(
      {
        next:(response)=>
        {
          this.personobj = response
          console.log(response)
        }
      }
    )
  }

}
