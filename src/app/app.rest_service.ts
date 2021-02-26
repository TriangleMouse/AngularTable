import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Users} from "./_model/users";

@Injectable({
    providedIn:'root'
})
export class AppRest_service {
    constructor(private http:HttpClient) { }
    url:string='http://fakeapi.jsonparseronline.com/users';
    getUsers(){
        return this.http.get<Users[]>(this.url);
    }


}
