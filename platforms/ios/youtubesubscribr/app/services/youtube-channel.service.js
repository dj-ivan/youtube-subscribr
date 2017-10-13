"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
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
        return this.http.get("https://www.googleapis.com/youtube/v3/channels?id=" + channelId + "&part=snippet%2CcontentDetails%2Cstatistics&key=" + this.youtubeApiKey).map(function (m) { return m.json(); });
    };
    return YouTubeChannelService;
}());
YouTubeChannelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], YouTubeChannelService);
exports.YouTubeChannelService = YouTubeChannelService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS1jaGFubmVsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ5b3V0dWJlLWNoYW5uZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFDckMsaUNBQStCO0FBRS9CLElBQWEscUJBQXFCO0lBSTlCLCtCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixnQkFBVyxHQUFHLDBCQUEwQixDQUFDO1FBQ3pDLGtCQUFhLEdBQUcseUNBQXlDLENBQUM7SUFDbEMsQ0FBQztJQUdqQyw0Q0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwrQ0FBZSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1REFBcUQsU0FBUyx3REFBbUQsSUFBSSxDQUFDLGFBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztJQUNuTCxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLHFCQUFxQjtJQURqQyxpQkFBVSxFQUFFO3FDQUtpQixXQUFJO0dBSnJCLHFCQUFxQixDQWNqQztBQWRZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFlvdVR1YmVDaGFubmVsU2VydmljZXtcblxuICAgIHByaXZhdGUgaXZhbkNoYW5uZWwgPSBcIlVDTXdKYVBRUEM2eXJJQk92OU5nekl1QVwiO1xuICAgIHByaXZhdGUgeW91dHViZUFwaUtleSA9IFwiQUl6YVN5QkoxdUJqZ3hpNk11eDdkZHc0WTU5WFRfVkhoYWNTaHJJXCI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXt9XG5cblxuICAgIGdldEl2YW5TdGF0cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFubmVsU3RhdHModGhpcy5pdmFuQ2hhbm5lbCk7XG4gICAgfVxuXG4gICAgZ2V0Q2hhbm5lbFN0YXRzKGNoYW5uZWxJZDogc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY2hhbm5lbHM/aWQ9JHtjaGFubmVsSWR9JnBhcnQ9c25pcHBldCUyQ2NvbnRlbnREZXRhaWxzJTJDc3RhdGlzdGljcyZrZXk9JHt0aGlzLnlvdXR1YmVBcGlLZXl9YCkubWFwKG0gPT4gbS5qc29uKCkpO1xuICAgIH1cbn0iXX0=