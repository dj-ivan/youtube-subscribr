import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { YouTubeChannelService } from './services/youtube-channel.service';
import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptHttpModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [YouTubeChannelService]
})
export class AppModule {}
