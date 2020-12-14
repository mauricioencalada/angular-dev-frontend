import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    constructor(private _authService: AuthService) {
    }

    ngOnInit(): void {
    }

    getUsers() {
        this._authService.get('users').subscribe(response => {

        }, error => {

        })
    }

}
