"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loadpages_1 = require("../../controller/loadpages");
const checkEmail_1 = require("../../middleware/checkEmail");
const dummyUtils_1 = __importDefault(require("../../utils/dummyUtils"));
const router = (0, express_1.Router)();
router.get("/home", loadpages_1.home);
router.post("/register", (0, dummyUtils_1.default)(checkEmail_1.loginValidation), loadpages_1.register);
router.patch("/edit/:id", loadpages_1.edit);
router.delete("/remove/:id", loadpages_1.remove);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFpQztBQUNqQywwREFBMEU7QUFDMUUsNERBQThEO0FBQzlELHdFQUE4QztBQUU5QyxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUV4QixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxnQkFBSSxDQUFDLENBQUM7QUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3ZCLElBQUEsb0JBQVEsRUFBQyw0QkFBZSxDQUFDLEVBQ3pCLG9CQUFRLENBQUMsQ0FBQztBQUVWLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLGdCQUFJLENBQUMsQ0FBQztBQUVoQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxrQkFBTSxDQUFDLENBQUM7QUFFckMsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IGhvbWUsIHJlZ2lzdGVyLCBlZGl0LCByZW1vdmUgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlci9sb2FkcGFnZXNcIjtcbmltcG9ydCB7IGxvZ2luVmFsaWRhdGlvbiB9IGZyb20gXCIuLi8uLi9taWRkbGV3YXJlL2NoZWNrRW1haWxcIjtcbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi4vLi4vdXRpbHMvZHVtbXlVdGlsc1wiO1xuLy8gaW1wb3J0IHsgbG9naW5WYWxpZGF0aW9uIH0gZnJvbSBcIi4uLy4uL21pZGRsZXdhcmUvY2hlY2tFbWFpbFwiO1xuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoXCIvaG9tZVwiLCBob21lKTtcblxucm91dGVyLnBvc3QoXCIvcmVnaXN0ZXJcIiwgXG52YWxpZGF0ZShsb2dpblZhbGlkYXRpb24pLCBcbnJlZ2lzdGVyKTtcblxucm91dGVyLnBhdGNoKFwiL2VkaXQvOmlkXCIsIGVkaXQpO1xuXG5yb3V0ZXIuZGVsZXRlKFwiL3JlbW92ZS86aWRcIiwgcmVtb3ZlKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19