import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AttendanceService {

    constructor(private _http: HttpClient) {

    }

    get(url: string) {
        const params = new HttpParams();
        url = environment.API_URL_ATTENDANCE + url;
        return this._http.get(url, {params});
    }

    post(url: string, data: any) {
        const params = new HttpParams();
        url = environment.API_URL_ATTENDANCE + url;
        return this._http.post(url, data, {params});
    }

    update(url: string, data: any) {
        const params = new HttpParams();
        url = environment.API_URL_ATTENDANCE + url;
        return this._http.put(url, data, {params});
    }

    delete(url: string) {
        const params = new HttpParams();
        url = environment.API_URL_ATTENDANCE + url;
        return this._http.delete(url, {params});
    }

    upload(url: string, data: any) {
        const params = new HttpParams();
        url = environment.API_URL_ATTENDANCE + url;
        return this._http.post(url, data, {params});
    }
}
