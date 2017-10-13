import { Component } from "@angular/core";
import { YouTubeChannelService } from './services/youtube-channel.service';
import { ChannelResponse } from './models/channel-response.model';

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
    <StackLayout orientation="vertical" width="210" height="210" backgroundColor="lightgray">    
    <label [text]="user"></label>
    <label [text]="subscriptions"></label>
    </StackLayout>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
  user: string;
  subscriptions: number;
  constructor(private youTubeService: YouTubeChannelService){
    this.youTubeService.getIvanStats().subscribe((s: ChannelResponse) => {
      var x = s.items[0];
      var subs = x.statistics.subscriberCount;
      this.subscriptions = +x.statistics.subscriberCount;
      this.user = x.snippet.title;
      console.log(x);
    });;
  }
}
