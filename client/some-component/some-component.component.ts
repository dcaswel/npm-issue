import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
// import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'some-component',
  template: `
      <div></div>
  `
})
export class SomeComponentComponent implements OnInit {
  someObservable$ = new Observable();

  ngOnInit(): void {
    this.someObservable$.pipe(map((item) => item.test));

    /**
     * Currently in my PhpStorm, I get an error on line 16 that says there is no overload for this call. If I comment out
     * line 2 and uncomment line 3, that error goes away but then a new error is shown on line 3 saying that there's no
     * exported member called map. If I rename the node_modules folder on the root level, then everything works fine so that
     * tells me that it's using the wrong one.
     */
  }
}
