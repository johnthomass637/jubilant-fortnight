import { Injectable } from '@angular/core';

// Ai api Client
import { ApiAiClient } from '../client/ApiAiClient';

// RxJs modules
import { BehaviorSubject } from 'rxjs';
import { SpeechSynthesizerService } from './speech-synthesizer.service';

export class Message {
  constructor(
    public content: string,
    public sendBy: ESendBy,
    public options: string[]
  ) {}
}

export enum ESendBy {
  user = 'user',
  bot = 'bot'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private client;

  conversation = new BehaviorSubject<Message[]>([]);

  constructor(private speechSynthesizer: SpeechSynthesizerService) {}

  public converse(msg: string) {
    if (!isNaN(Number(msg.replace(/ /g, '')))) {
      msg = msg.replace(/ /g, '');
    }
    const userMessage = new Message(msg, ESendBy.user, []);
    this.update(userMessage);
    return this.client.textRequest(msg).then(res => {
      const speech = res.response;
      const options = res.options;
      this.speechSynthesizer.speak(speech, 'en-US');
      this.client.setSession(res.session);
      const botMessage = new Message(speech, ESendBy.bot, options);
      this.update(botMessage);
    });
  }

  public update(msg: Message) {
    this.conversation.next([msg]);
  }

  public init(serviceid: string) {
    this.client = new ApiAiClient({ serviceid: serviceid, session: null });
  }
}
