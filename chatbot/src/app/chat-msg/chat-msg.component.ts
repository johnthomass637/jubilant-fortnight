import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'chat-msg',
  templateUrl: './chat-msg.component.html',
  styleUrls: ['./chat-msg.component.css']
})
export class ChatMsgComponent implements OnInit {
  @Input() msg: object;
  @Output()
  msgToWindow = new EventEmitter();
  public isVisible = false;
  isBtnEnable: boolean;
  constructor() { }

  ngOnInit() {
    this.isBtnEnable = true;
    setTimeout(() => {
      this.isVisible = true;
    }, 0);
  }

  sendBtnMsg(msg: string) {
    this.isBtnEnable = false;
    this.msgToWindow.emit(msg);
  }
}
