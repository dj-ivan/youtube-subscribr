"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var youtube_channel_service_1 = require("../platforms/ios/youtubesubscribr/app/services/youtube-channel.service");
var AppComponent = (function () {
    // Your TypeScript logic goes here
    function AppComponent(youTubeService) {
        this.youTubeService = youTubeService;
        this.youTubeService.getIvanStats();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <!-- Your UI components go here -->\n    <Image src=\"~/images/apple.jpg\"></Image>\n  "
    }),
    __metadata("design:paramtypes", [youtube_channel_service_1.YouTubeChannelService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0hBQStHO0FBVS9HLElBQWEsWUFBWTtJQUN2QixrQ0FBa0M7SUFFbEMsc0JBQW9CLGNBQXFDO1FBQXJDLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUN2RCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksWUFBWTtJQVJ4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGtLQUlUO0tBQ0YsQ0FBQztxQ0FJb0MsK0NBQXFCO0dBSDlDLFlBQVksQ0FNeEI7QUFOWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBZb3VUdWJlQ2hhbm5lbFNlcnZpY2UgfSBmcm9tICcuLi9wbGF0Zm9ybXMvaW9zL3lvdXR1YmVzdWJzY3JpYnIvYXBwL3NlcnZpY2VzL3lvdXR1YmUtY2hhbm5lbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cbiAgICA8IS0tIFlvdXIgVUkgY29tcG9uZW50cyBnbyBoZXJlIC0tPlxuICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9hcHBsZS5qcGdcIj48L0ltYWdlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHlvdVR1YmVTZXJ2aWNlOiBZb3VUdWJlQ2hhbm5lbFNlcnZpY2Upe1xuICAgIHRoaXMueW91VHViZVNlcnZpY2UuZ2V0SXZhblN0YXRzKCk7XG4gIH1cbn1cbiJdfQ==