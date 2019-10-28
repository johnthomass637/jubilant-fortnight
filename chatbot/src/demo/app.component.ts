import { Component } from '@angular/core';
import { Observable, Subject, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public msg: Subject<any> = new Subject();
  public msgArray: Observable<Array<any>> = new Observable<Array<any>>();

  constructor() {}

  msgFromChatInput(message: any) {
    this.msg.next(message);
  }

  public onMsgReceive(msg: string) {}
}
