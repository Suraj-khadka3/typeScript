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
const home = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield prisma.user.findMany();
        res.status(201).json({ allUsers });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.home = home;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const user = yield prisma.user.create({
            data: {
                name,
                email,
            },
        });
        res.status(201).json({ user });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.register = register;
const edit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { email, name } = req.body;
    try {
        const update = yield prisma.user.update({
            where: { id },
            data: { email, name },
        });
        res.status(201).json(update);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.edit = edit;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const del = yield prisma.user.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.status(201).json({ deletedUser: del });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.remove = remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZHBhZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvbG9hZHBhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDJDQUE4QztBQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFZLEVBQUUsQ0FBQztBQUUzQixNQUFNLElBQUksR0FBbUIsQ0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdEQsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDcEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFQVyxRQUFBLElBQUksUUFPZjtBQUVLLE1BQU0sUUFBUSxHQUFtQixDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6RCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDakMsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxFQUFFO2dCQUNKLElBQUk7Z0JBQ0osS0FBSzthQUNOO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ2hDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBYlcsUUFBQSxRQUFRLFlBYW5CO0FBRUssTUFBTSxJQUFJLEdBQW1CLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3JELE1BQU0sRUFBRSxHQUFXLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNqQyxJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDYixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1NBQ3RCLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzlCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBWlcsUUFBQSxJQUFJLFFBWWY7QUFFSyxNQUFNLE1BQU0sR0FBbUIsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdkQsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQ3ZDLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDNUM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFUVyxRQUFBLE1BQU0sVUFTakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGNvbnN0IGhvbWU6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFsbFVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoKTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGFsbFVzZXJzIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSByZXEuYm9keTtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgdXNlciB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0OiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBpZDogbnVtYmVyID0gcGFyc2VJbnQocmVxLnBhcmFtcy5pZCk7XG4gIGNvbnN0IHsgZW1haWwsIG5hbWUgfSA9IHJlcS5ib2R5O1xuICB0cnkge1xuICAgIGNvbnN0IHVwZGF0ZSA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YTogeyBlbWFpbCwgbmFtZSB9LFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHVwZGF0ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRlbCA9IGF3YWl0IHByaXNtYS51c2VyLmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcGFyc2VJbnQocmVxLnBhcmFtcy5pZCkgfSxcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGRlbGV0ZWRVc2VyOiBkZWwgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3IpO1xuICB9XG59O1xuIl19