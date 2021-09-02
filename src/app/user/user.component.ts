import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { SearchService } from '../search-service/search.service';
import { Users } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user!:Users;
  username!: string;
  Repos:Repo[]=[]
  search(){
    
   this.httpServiceService.findUser(this.username).then(
     ()=>{
       this.user = this.httpServiceService.user;
       console.log(this.user);
     },
     (error: any)=>{
       console.log(error)
     }
   )
    this.httpServiceService.getRepoInfo(this.username).subscribe((response:any) => {
      this.Repos = response;
      console.log(this.Repos)
      
    })
  }
  constructor(private httpServiceService:SearchService) { }

  ngOnInit() {
    this.search();
  }

}
