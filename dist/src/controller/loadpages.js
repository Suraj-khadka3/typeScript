"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.edit = exports.register = exports.home = void 0;
const path_1 = __importDefault(require("path"));
const home = (req, res) => {
    if (req.url == "/home") {
        res.sendFile(path_1.default.join(__dirname + "../../../views/index.html"));
    }
};
exports.home = home;
const register = (req, res) => {
    if (req.url == "/post") {
        res.send("This is register");
    }
};
exports.register = register;
const edit = (req, res) => {
    if (req.url == "/edit") {
        res.send("this is edit");
    }
};
exports.edit = edit;
const remove = (req, res) => {
    if (req.url == "/remove") {
        res.send("this is remove");
    }
};
exports.remove = remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZHBhZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvbG9hZHBhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLGdEQUF3QjtBQUVqQixNQUFNLElBQUksR0FBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0MsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRTtRQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDLENBQUMsQ0FBQztLQUNsRTtBQUNILENBQUMsQ0FBQztBQUpXLFFBQUEsSUFBSSxRQUlmO0FBRUssTUFBTSxRQUFRLEdBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ25ELElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQzlCO0FBQ0gsQ0FBQyxDQUFDO0FBSlcsUUFBQSxRQUFRLFlBSW5CO0FBRUssTUFBTSxJQUFJLEdBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQy9DLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUMxQjtBQUNILENBQUMsQ0FBQztBQUpXLFFBQUEsSUFBSSxRQUlmO0FBRUssTUFBTSxNQUFNLEdBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2pELElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUU7UUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQzVCO0FBQ0gsQ0FBQyxDQUFDO0FBSlcsUUFBQSxNQUFNLFVBSWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGNvbnN0IGhvbWU6IFJlcXVlc3RIYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEudXJsID09IFwiL2hvbWVcIikge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lICsgXCIuLi8uLi8uLi92aWV3cy9pbmRleC5odG1sXCIpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyOiBSZXF1ZXN0SGFuZGxlciA9IChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLnVybCA9PSBcIi9wb3N0XCIpIHtcbiAgICByZXMuc2VuZChcIlRoaXMgaXMgcmVnaXN0ZXJcIik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0OiBSZXF1ZXN0SGFuZGxlciA9IChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLnVybCA9PSBcIi9lZGl0XCIpIHtcbiAgICByZXMuc2VuZChcInRoaXMgaXMgZWRpdFwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZTogUmVxdWVzdEhhbmRsZXIgPSAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS51cmwgPT0gXCIvcmVtb3ZlXCIpIHtcbiAgICByZXMuc2VuZChcInRoaXMgaXMgcmVtb3ZlXCIpO1xuICB9XG59O1xuIl19