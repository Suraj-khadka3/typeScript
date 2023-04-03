"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loadpages_1 = require("../controller/loadpages");
const router = (0, express_1.Router)();
router.get("/home", loadpages_1.home);
router.post("/register", loadpages_1.register);
router.patch("/edit", loadpages_1.edit);
router.delete("/remove", loadpages_1.remove);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMsdURBQXVFO0FBQ3ZFLE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGdCQUFJLENBQUMsQ0FBQztBQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxvQkFBUSxDQUFDLENBQUM7QUFFbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsZ0JBQUksQ0FBQyxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGtCQUFNLENBQUMsQ0FBQztBQUVqQyxrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgaG9tZSwgcmVnaXN0ZXIsIGVkaXQsIHJlbW92ZSB9IGZyb20gXCIuLi9jb250cm9sbGVyL2xvYWRwYWdlc1wiO1xuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoXCIvaG9tZVwiLCBob21lKTtcblxucm91dGVyLnBvc3QoXCIvcmVnaXN0ZXJcIiwgcmVnaXN0ZXIpO1xuXG5yb3V0ZXIucGF0Y2goXCIvZWRpdFwiLCBlZGl0KTtcblxucm91dGVyLmRlbGV0ZShcIi9yZW1vdmVcIiwgcmVtb3ZlKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19