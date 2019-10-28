import {
  Component,
  OnInit,
  ChangeDetectorRef,
  EventEmitter,
  Output
} from '@angular/core';
import { SpeechRecognizerService } from '../services/speech-recognizer.service';
import { SpeechNotification } from '../model/speech-notification';
import { SpeechError } from '../model/speech-error';
import { SpeechSynthesizerService } from '../services/speech-synthesizer.service';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  recognizing = false;
  finalTranscript = 'Hi';
  placeHolderText = '';
  inputHasText = true;
  sendIsDisabled = false;
  @Output()
  msgToRoot = new EventEmitter();

  constructor(
    private changeDetector: ChangeDetectorRef,
    private speechRecognizer: SpeechRecognizerService,
    private speechSynthesizer: SpeechSynthesizerService
  ) {}

  ngOnInit() {
    this.speechRecognizer.initialize('en-US');
    this.initRecognition();
    this.initSynthesize();
  }

  startRecording(event) {
    if (this.recognizing) {
      this.speechRecognizer.stop();
      return;
    }
    this.speechRecognizer.start(event.timeStamp);
  }

  private initRecognition() {
    this.speechRecognizer.onStart().subscribe(data => {
      this.placeHolderText = 'Listening ...';
      this.recognizing = true;
      this.detectChanges();
    });

    this.speechRecognizer.onEnd().subscribe(data => {
      this.placeHolderText = '';
      this.recognizing = false;
      this.detectChanges();
    });

    this.speechRecognizer.onResult().subscribe((data: SpeechNotification) => {
      const message = data.content.trim();
      if (data.info === 'final_transcript' && message.length > 0) {
        this.placeHolderText = '';
        this.finalTranscript = message;
        this.onInput(message);
        this.detectChanges();
      }
    });

    this.speechRecognizer.onError().subscribe(data => {
      switch (data.error) {
        case SpeechError.BLOCKED:
        case SpeechError.NOT_ALLOWED:
          console.log(`Cannot run the demo.
            Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.
            `);
          break;
        case SpeechError.NO_SPEECH:
          console.log(`No speech has been detected. Please try again.`);
          break;
        case SpeechError.NO_MICROPHONE:
          console.log(
            `Microphone is not available. Plese verify the connection of your microphone and try again.`
          );
          break;
        default:
          break;
      }
      this.recognizing = false;
      this.detectChanges();
    });
  }

  private initSynthesize() {
    this.speechSynthesizer.initSynthesis();
  }

  sendMessage() {
    if (this.finalTranscript === '') {
      return false;
    }
    this.msgToRoot.emit(this.finalTranscript);
    this.finalTranscript = '';
    this.sendIsDisabled = true;
  }

  onInput(event: string): void {
    const passedString = event;
    if (/\S/.test(passedString)) {
      this.sendIsDisabled = false;
    } else {
      this.sendIsDisabled = true;
    }
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }
}
