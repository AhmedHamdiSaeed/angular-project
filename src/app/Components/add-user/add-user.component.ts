import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  updateUserId:any; // to store userid in updating user data
  updateUserData:any; // to store the data of user that will be updated after getting it from Api

  //inject service into constructor and getting userid from url  
  constructor(private myService:UsersService,myRoute:ActivatedRoute){
    this.updateUserId=myRoute.snapshot.params["userid"]
  }
  ngOnInit(): void {
    // we will check it is add or update by checking the updateuserid if it undefined so it
    //will be adding .... if it is number so it will be updating
    if(this.updateUserId)
    {
      this.myService.GetUserByID(this.updateUserId).subscribe({
        next:(data)=>{this.updateUserData=data},
        error:(error)=>{console.log(error)}
      })
    }
  }

  AddUser(name:any,email:any,phone:any,city:any,street:any,suite:any)
  { 

    console.log("adduser method")

    var emailregex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!email.match(emailregex))
    {
      alert("Enter Valid Email")
    }
    else
    {

      let newuser={name:name,email:email,phone:phone,address:{city:city,street:street,suite:suite} }
      this.myService.AddNewUser(newuser).subscribe(
      {
        next:(data)=>{console.log(data);alert("added successfully ")},
        error:(error)=>{console.log(error)}
      })
    }
  }



  UpdateUser(name:any,email:any,phone:any,city:any,street:any,suite:any)
  { 
    console.log("updateuser method")

    var emailregex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var phoneregex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(!email.match(emailregex))
    {
      alert("Enter Valid Email")
    }
    else if(!phone.match(phoneregex))
    {
      alert("Enter Valid Phone")
    }
    else
    {

      let updateduser={name:name,email:email,phone:phone,address:{city:city,street:street,suite:suite} }

     this.myService.UpdateUserData(this.updateUserId,updateduser).subscribe(
      {
        next:(data)=>{console.log(data);alert("Updated successfully ")},
        error:(error)=>{console.log(error)}
      })
     
    }
  }


}
