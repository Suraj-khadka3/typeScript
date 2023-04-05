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
router.post("/register", (0, dummyUtils_1.default)(checkEmail_1.loginValidation), dummyUtils_1.default, loadpages_1.register);
router.patch("/edit/:id", loadpages_1.edit);
router.delete("/remove/:id", loadpages_1.remove);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFpQztBQUNqQywwREFBMEU7QUFDMUUsNERBQThEO0FBQzlELHdFQUE4QztBQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUV4QixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxnQkFBSSxDQUFDLENBQUM7QUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3ZCLElBQUEsb0JBQVEsRUFBQyw0QkFBZSxDQUFDLEVBQ3pCLG9CQUFRLEVBQ1Isb0JBQVEsQ0FBQyxDQUFDO0FBRVYsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsZ0JBQUksQ0FBQyxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLGtCQUFNLENBQUMsQ0FBQztBQUVyQyxrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgaG9tZSwgcmVnaXN0ZXIsIGVkaXQsIHJlbW92ZSB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVyL2xvYWRwYWdlc1wiO1xuaW1wb3J0IHsgbG9naW5WYWxpZGF0aW9uIH0gZnJvbSBcIi4uLy4uL21pZGRsZXdhcmUvY2hlY2tFbWFpbFwiO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuLi8uLi91dGlscy9kdW1teVV0aWxzXCI7XG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyLmdldChcIi9ob21lXCIsIGhvbWUpO1xuXG5yb3V0ZXIucG9zdChcIi9yZWdpc3RlclwiLCBcbnZhbGlkYXRlKGxvZ2luVmFsaWRhdGlvbiksIFxudmFsaWRhdGUsXG5yZWdpc3Rlcik7XG5cbnJvdXRlci5wYXRjaChcIi9lZGl0LzppZFwiLCBlZGl0KTtcblxucm91dGVyLmRlbGV0ZShcIi9yZW1vdmUvOmlkXCIsIHJlbW92ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==