"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.edit = exports.register = exports.home = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const home = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.url == "/home") {
        const allUsers = yield prisma.user.findMany();
        res.status(201).json({ allUsers });
    }
});
exports.home = home;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.url == "/register") {
        const { name, email } = req.body;
        const user = yield prisma.user.create({
            data: {
                name,
                email,
            },
        });
        res.status(201).json({ user });
    }
});
exports.register = register;
const edit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.url);
    const id = parseInt(req.params.id);
    const { email, name } = req.body;
    const update = yield prisma.user.update({
        where: { id },
        data: { email, name },
    });
    res.status(201).json(update);
});
exports.edit = edit;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        throw new Error("no ID given");
    }
    const del = yield prisma.user.delete({
        where: { id: parseInt(req.params.id) },
    });
    res.status(201).json({ deletedUser: del });
});
exports.remove = remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZHBhZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvbG9hZHBhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDJDQUE4QztBQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFZLEVBQUUsQ0FBQztBQUUzQixNQUFNLElBQUksR0FBbUIsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckQsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRTtRQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3BDO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFMVyxRQUFBLElBQUksUUFLZjtBQUVLLE1BQU0sUUFBUSxHQUFtQixDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6RCxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksV0FBVyxFQUFFO1FBQzFCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksRUFBRTtnQkFDSixJQUFJO2dCQUNKLEtBQUs7YUFDTjtTQUNGLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNoQztBQUNILENBQUMsQ0FBQSxDQUFDO0FBWFcsUUFBQSxRQUFRLFlBV25CO0FBRUssTUFBTSxJQUFJLEdBQW1CLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLE1BQU0sRUFBRSxHQUFXLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNiLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7S0FDdEIsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUM7QUFUVyxRQUFBLElBQUksUUFTZjtBQUVLLE1BQU0sTUFBTSxHQUFtQixDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7UUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNoQztJQUNELE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0tBQ3ZDLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFBLENBQUM7QUFSVyxRQUFBLE1BQU0sVUFRakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGNvbnN0IGhvbWU6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEudXJsID09IFwiL2hvbWVcIikge1xuICAgIGNvbnN0IGFsbFVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoKTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGFsbFVzZXJzIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXI6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEudXJsID09IFwiL3JlZ2lzdGVyXCIpIHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgdXNlciB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXQ6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcS51cmwpXG4gIGNvbnN0IGlkOiBudW1iZXIgPSBwYXJzZUludChyZXEucGFyYW1zLmlkKTtcbiAgY29uc3QgeyBlbWFpbCwgbmFtZSB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHVwZGF0ZSA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgICBkYXRhOiB7IGVtYWlsLCBuYW1lIH0sXG4gIH0pO1xuICByZXMuc3RhdHVzKDIwMSkuanNvbih1cGRhdGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZTogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKCFyZXEucGFyYW1zLmlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibm8gSUQgZ2l2ZW5cIik7XG4gIH1cbiAgY29uc3QgZGVsID0gYXdhaXQgcHJpc21hLnVzZXIuZGVsZXRlKHtcbiAgICB3aGVyZTogeyBpZDogcGFyc2VJbnQocmVxLnBhcmFtcy5pZCkgfSxcbiAgfSk7XG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGVsZXRlZFVzZXI6IGRlbCB9KTtcbn07XG4iXX0=