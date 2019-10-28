import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatWindowComponent } from '../app/chat-window/chat-window.component';
import { ChatMsgComponent } from '../app/chat-msg/chat-msg.component';
import { ChatInputComponent } from '../app/chat-input/chat-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { SpeechRecognizerService } from 'src/app/services/speech-recognizer.service';
import { SpeechSynthesizerService } from 'src/app/services/speech-synthesizer.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    ChatMsgComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [SpeechRecognizerService, SpeechSynthesizerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
