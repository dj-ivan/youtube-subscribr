"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var YouTubeChannelService = (function () {
    function YouTubeChannelService(http) {
        this.http = http;
        this.ivanChannel = "UCMwJaPQPC6yrIBOv9NgzIuA";
        this.youtubeApiKey = "AIzaSyBJ1uBjgxi6Mux7ddw4Y59XT_VHhacShrI";
    }
    YouTubeChannelService.prototype.getIvanStats = function () {
        return this.getChannelStats(this.ivanChannel);
    };
    YouTubeChannelService.prototype.getChannelStats = function (channelId) {
        return this.http.get("https://www.googleapis.com/youtube/v3/channels?id=" + channelId + "&part=snippet%2CcontentDetails%2Cstatistics&key=" + this.youtubeApiKey);
    };
    return YouTubeChannelService;
}());
YouTubeChannelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], YouTubeChannelService);
exports.YouTubeChannelService = YouTubeChannelService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS1jaGFubmVsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ5b3V0dWJlLWNoYW5uZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFHckMsSUFBYSxxQkFBcUI7SUFJOUIsK0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLGdCQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDekMsa0JBQWEsR0FBRyx5Q0FBeUMsQ0FBQztJQUNsQyxDQUFDO0lBR2pDLDRDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELCtDQUFlLEdBQWYsVUFBZ0IsU0FBaUI7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVEQUFxRCxTQUFTLHdEQUFtRCxJQUFJLENBQUMsYUFBZSxDQUFDLENBQUM7SUFDaEssQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxxQkFBcUI7SUFEakMsaUJBQVUsRUFBRTtxQ0FLaUIsV0FBSTtHQUpyQixxQkFBcUIsQ0FjakM7QUFkWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBZb3VUdWJlQ2hhbm5lbFNlcnZpY2V7XG5cbiAgICBwcml2YXRlIGl2YW5DaGFubmVsID0gXCJVQ013SmFQUVBDNnlySUJPdjlOZ3pJdUFcIjtcbiAgICBwcml2YXRlIHlvdXR1YmVBcGlLZXkgPSBcIkFJemFTeUJKMXVCamd4aTZNdXg3ZGR3NFk1OVhUX1ZIaGFjU2hySVwiO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7fVxuXG5cbiAgICBnZXRJdmFuU3RhdHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhbm5lbFN0YXRzKHRoaXMuaXZhbkNoYW5uZWwpO1xuICAgIH1cblxuICAgIGdldENoYW5uZWxTdGF0cyhjaGFubmVsSWQ6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NoYW5uZWxzP2lkPSR7Y2hhbm5lbElkfSZwYXJ0PXNuaXBwZXQlMkNjb250ZW50RGV0YWlscyUyQ3N0YXRpc3RpY3Mma2V5PSR7dGhpcy55b3V0dWJlQXBpS2V5fWApO1xuICAgIH1cbn0iXX0=