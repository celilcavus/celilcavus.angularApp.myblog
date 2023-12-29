import { Observable } from "rxjs"

export interface BaseRepository<T>{
    GetAll():Observable<T[]>
    Post(item:T):void
    GetById(id:number):any
    Put(item:T):void
    Delete(id?:number):void
}