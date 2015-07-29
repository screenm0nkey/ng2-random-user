import { bootstrap } from 'angular2/angular2';
import { Pipeline } from 'angular2/src/router/pipeline';
import { bind } from 'angular2/di';
import { RandomUser } from './randomUser';
import { App } from './main';


bootstrap(App, [
    // this is a fix to allow to inject services unless we get a
    // "no provider" error message when injecting it
    bind(RandomUser).toValue(new RandomUser(new Pipeline()))
]);