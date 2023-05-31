import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class UsersService {
  constructor(private myClient:HttpClient) { }
  private BaseUrl="  http://localhost:3000/users";
  AddNewUser(newU:any){return this.myClient.post(this.BaseUrl,newU);}
  GetUserByID(id:any){return this.myClient.get(this.BaseUrl+"/"+id);}
  DeleteUser(updateId:any){return this.myClient.delete(this.BaseUrl+"/"+updateId);}
  UpdateUserData(updateId:any,User:any)
  {return this.myClient.patch(this.BaseUrl+"/"+updateId,User);}
  GetAllUsers(){return this.myClient.get(this.BaseUrl);}
}
