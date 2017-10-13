import { Component } from "@angular/core";
import { YouTubeChannelService } from '../platforms/ios/youtubesubscribr/app/services/youtube-channel.service';

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
    <Image src="~/images/apple.jpg"></Image>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here

  constructor(private youTubeService: YouTubeChannelService){
    this.youTubeService.getIvanStats();
  }
}
