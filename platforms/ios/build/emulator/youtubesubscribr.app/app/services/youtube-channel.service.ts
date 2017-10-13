import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class YouTubeChannelService{

    private ivanChannel = "UCMwJaPQPC6yrIBOv9NgzIuA";
    private youtubeApiKey = "AIzaSyBJ1uBjgxi6Mux7ddw4Y59XT_VHhacShrI";
    constructor(private http: Http){}


    getIvanStats(){
        return this.getChannelStats(this.ivanChannel);
    }

    getChannelStats(channelId: string){
        return this.http.get(`https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet%2CcontentDetails%2Cstatistics&key=${this.youtubeApiKey}`);
    }
}