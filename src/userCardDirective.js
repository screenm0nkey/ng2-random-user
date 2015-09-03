import {View, Component, For, If} from 'angular2/angular2';
import {Inject, bind} from 'angular2/di';


@Component({
    selector: 'user-card',
    properties: {user: 'user', loading: 'loading'},
    services: [ bind(moment).toValue(moment) ]
})
@View({
    templateUrl: 'userCard.html',
    directives: [If, For]
})

export class UserCard {
    upperWords (string) {
        return string.split(' ').map(word => {
            return word.substr(0, 1).toUpperCase() + word.substr(1);
        }).join(' ');
    }

    constructor() {
        this.properties = [
            {
                title: 'Name',
                getVal: user => this.upperWords(`${user.name.first} ${user.name.last}`)
            },
            {
                title: 'Username',
                getVal: user => user.username
            },
            {
                title: 'Email',
                getVal: user => user.email
            },
            {
                title: 'Address',
                getVal: user =>
                    this.upperWords(`${user.location.street}, ${user.location.city}, ${user.location.state} ${user.location.zip}`)
            },
            {
                title: 'Birthday',
                getVal: user => moment(user.dob * 1000).format('MMMM Do, YYYY')
            },
            {
                title: 'Cell Phone Number',
                getVal: user => user.cell
            }
        ];
    }
}



