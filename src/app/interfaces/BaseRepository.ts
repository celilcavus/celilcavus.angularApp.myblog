import { Observable } from "rxjs"
import { Category } from "../model/Category"

export interface BaseRepository<T>{
    GetAll(category:Category[]):void
    Post(item:T):void
    GetById(id:number):T
    Put(item:T):void
    Delete(item:T):void
}