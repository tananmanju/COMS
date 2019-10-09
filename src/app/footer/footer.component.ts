import {Component,Inject} from "@angular/core";

@Component({
     selector:'page-footer',
     templateUrl:'./footer.component.html',
     styleUrls:['./footer.component.scss']
})
export class FooterComponent{
     constructor(@Inject('TeamName') private TeamName:string){
          console.log("Inside the Footer Component");
     }
}