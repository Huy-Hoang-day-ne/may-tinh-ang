// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import {Observable} from "rxjs";
// import {Store} from "@ngrx/store";
// import { decrement, increment, reset } from './reducers/counter.action';
// import {AsyncPipe} from "@angular/common";
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, AsyncPipe],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'ngrx';
//
// //   count$?: Observable<number>;
// //   constructor(private store: Store<{ counter: number }>) {
// //     this.count$ = this.store.select('counter')
// //   }
// //   increment() {
// //     this.store.dispatch(increment())
// //   }
// //   decrement() {
// //     this.store.dispatch(decrement())
// //   }
// //   reset() {
// //     this.store.dispatch(reset())
// //   }
// // }
//
//   currentInput = '';
//   result = '';
//
//   handleInput(value: string) {
//     this.currentInput += value;
//   }
//
//   clear() {
//     this.currentInput = '';
//     this.result = '';
//   }
//
//   calculate() {
//     try {
//       this.result = eval(this.currentInput);
//     } catch (e) {
//       this.result = 'Invalid expression';
//     }
//   }
// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgForOf } from '@angular/common';
import {CalculatorComponent} from "./caculator/caculator.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgForOf,
    CalculatorComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
}




