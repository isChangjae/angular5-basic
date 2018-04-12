import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The Initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  chageGoal(goal) {
    this.goals.next(goal);
  }
  
}
