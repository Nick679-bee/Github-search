import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { SearchService } from '../search-service/search.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class ReposComponent implements OnInit {
  Repos: Repo[] = [];
  repoName:string =''
    constructor(private searchService:SearchService) { }
    searchRepo()  {
      this.searchService.getRepoInfo(this.repoName).subscribe((response:any) => {
        this.Repos = response;
        console.log(this.Repos)
        
      })
    }
    ngOnInit() {
      this.searchRepo();
    }
  
  
  }