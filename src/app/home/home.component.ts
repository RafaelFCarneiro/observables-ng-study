import { Observable, Observer, Subscription } from 'rxjs/Rx'; // http://reactivex.io/rxjs/
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubs: Subscription;
  numbersWithOperatorObsSubs: Subscription;
  customObsSubs: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numbersObsSubs = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myNumbersWithOperation = Observable.interval(1000).map(
      (data: number) => {
        return data * 2;
      }
    );
    this.numbersWithOperatorObsSubs = myNumbersWithOperation.subscribe(
      (number: number) => {
        console.log(number);
      }
    );


    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customObsSubs = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    this.numbersObsSubs.unsubscribe();
    this.numbersWithOperatorObsSubs.unsubscribe();
    this.customObsSubs.unsubscribe();
  }

}
