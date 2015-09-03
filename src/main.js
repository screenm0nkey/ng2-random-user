import {View, Component} from 'angular2/angular2';
import {RandomUser} from 'randomUserService';
import {UserCard} from 'userCardDirective';


@Component({
    selector: 'main',
    injectables: [RandomUser]
})
@View({
    directives : [UserCard],
    templateUrl: 'main.html'
})

export class App {
    constructor(randomUser: RandomUser) {
        this.buttonText = 'Get New User';
        this.getUser = randomUser.getUser;
        this.loading = false;
    }

    getRandomUser () {
        this.loading = true;
        this.getUser().then(user => {
            console.log('got user from api', user);
            this.user = user;
            this.loading = false;
        }).catch(() => this.loading = false);
    }
}
