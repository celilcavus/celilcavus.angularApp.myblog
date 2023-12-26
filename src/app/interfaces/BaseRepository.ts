import { Observable } from "rxjs"

export interface BaseRepository<T>{
    GetAll():Observable<T[]>
    Post(item:T):void
    GetById(id:number):T
    Put(item:T):void
    Delete(item:T):void
}