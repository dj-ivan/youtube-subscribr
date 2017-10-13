"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var youtube_channel_service_1 = require("./services/youtube-channel.service");
var AppComponent = (function () {
    function AppComponent(youTubeService) {
        var _this = this;
        this.youTubeService = youTubeService;
        this.youTubeService.getIvanStats().subscribe(function (s) {
            var x = s.items[0];
            var subs = x.statistics.subscriberCount;
            _this.subscriptions = +x.statistics.subscriberCount;
            _this.user = x.snippet.title;
            console.log(x);
        });
        ;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <!-- Your UI components go here -->\n    <StackLayout orientation=\"vertical\" width=\"210\" height=\"210\" backgroundColor=\"lightgray\">    \n    <label [text]=\"user\"></label>\n    <label [text]=\"subscriptions\"></label>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [youtube_channel_service_1.YouTubeChannelService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOEVBQTJFO0FBYzNFLElBQWEsWUFBWTtJQUl2QixzQkFBb0IsY0FBcUM7UUFBekQsaUJBUUM7UUFSbUIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBa0I7WUFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztZQUN4QyxLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7WUFDbkQsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksWUFBWTtJQVh4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLG9VQU9UO0tBQ0YsQ0FBQztxQ0FLb0MsK0NBQXFCO0dBSjlDLFlBQVksQ0FheEI7QUFiWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBZb3VUdWJlQ2hhbm5lbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3lvdXR1YmUtY2hhbm5lbC5zZXJ2aWNlJztcbmltcG9ydCB7IENoYW5uZWxSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2NoYW5uZWwtcmVzcG9uc2UubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB3aWR0aD1cIjIxMFwiIGhlaWdodD1cIjIxMFwiIGJhY2tncm91bmRDb2xvcj1cImxpZ2h0Z3JheVwiPiAgICBcbiAgICA8bGFiZWwgW3RleHRdPVwidXNlclwiPjwvbGFiZWw+XG4gICAgPGxhYmVsIFt0ZXh0XT1cInN1YnNjcmlwdGlvbnNcIj48L2xhYmVsPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICB1c2VyOiBzdHJpbmc7XG4gIHN1YnNjcmlwdGlvbnM6IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB5b3VUdWJlU2VydmljZTogWW91VHViZUNoYW5uZWxTZXJ2aWNlKXtcbiAgICB0aGlzLnlvdVR1YmVTZXJ2aWNlLmdldEl2YW5TdGF0cygpLnN1YnNjcmliZSgoczogQ2hhbm5lbFJlc3BvbnNlKSA9PiB7XG4gICAgICB2YXIgeCA9IHMuaXRlbXNbMF07XG4gICAgICB2YXIgc3VicyA9IHguc3RhdGlzdGljcy5zdWJzY3JpYmVyQ291bnQ7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSAreC5zdGF0aXN0aWNzLnN1YnNjcmliZXJDb3VudDtcbiAgICAgIHRoaXMudXNlciA9IHguc25pcHBldC50aXRsZTtcbiAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgIH0pOztcbiAgfVxufVxuIl19