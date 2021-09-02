import { Injectable } from '@angular/core';
import { Users } from '../user';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // getRepoInfo(username: any) {
  //   throw new Error('Method not implemented.');
  // }
  user!:Users;

  constructor(private http:HttpClient) { 
    
  }

  findUser(username: string){
    interface ApiResponse{
      login:string;
      html_url:string; 
      avatar_url:string;
      bio:any;
      name:any;
      location:any;
      followers: any;
      following: any;
      public_repos: any
    }
    
    let searchEndpoint = "https://api.github.com/users/"+username
    let promise = new Promise((resolve,reject)=>{
      
      this.http.get<ApiResponse>(searchEndpoint).toPromise().then(
        (results)=>{
        this.user=results;
        console.log(results)
        resolve(Response);
      },error=>{
        
        reject(error);
      }
      )
    })
    return promise;
  }

  getRepoInfo(username: string): Observable<any> {
    return this.http.get("https://api.github.com/users/" + username + '/repos' )
  }
  
}
export class ReposServiceService {
  _URL = 'https://api.github.com/users/';
    constructor(public http: HttpClient ) { 
  
    }
  
 
  }