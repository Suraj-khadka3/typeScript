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
    const { name, email, pwd } = req.body;
    console.log(typeof pwd);
    try {
        const user = yield prisma.user.create({
            data: {
                name,
                email,
                pwd,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZHBhZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvbG9hZHBhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDJDQUE4QztBQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFZLEVBQUUsQ0FBQztBQVEzQixNQUFNLElBQUksR0FBbUIsQ0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdEQsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDcEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFQVyxRQUFBLElBQUksUUFPZjtBQUVLLE1BQU0sUUFBUSxHQUFtQixDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6RCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBYSxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtJQUN2QixJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxJQUFJLEVBQUU7Z0JBQ0osSUFBSTtnQkFDSixLQUFLO2dCQUNMLEdBQUc7YUFDSjtTQUNGLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNoQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7QUFDSCxDQUFDLENBQUEsQ0FBQztBQWZXLFFBQUEsUUFBUSxZQWVuQjtBQUVLLE1BQU0sSUFBSSxHQUFtQixDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNyRCxNQUFNLEVBQUUsR0FBVyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDM0MsSUFBSTtRQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ2IsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUN0QixDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7QUFDSCxDQUFDLENBQUEsQ0FBQztBQVpXLFFBQUEsSUFBSSxRQVlmO0FBRUssTUFBTSxNQUFNLEdBQW1CLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3ZELElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtTQUN2QyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQzVDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBVFcsUUFBQSxNQUFNLFVBU2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmludGVyZmFjZSB1c2VyRGF0YSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHdkOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBob21lOiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChfcmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhbGxVc2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KCk7XG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBhbGxVc2VycyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlcjogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcHdkIH06IHVzZXJEYXRhID0gcmVxLmJvZHk7XG4gIGNvbnNvbGUubG9nKHR5cGVvZiBwd2QpXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwd2QsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgdXNlciB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0OiBSZXF1ZXN0SGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBpZDogbnVtYmVyID0gcGFyc2VJbnQocmVxLnBhcmFtcy5pZCk7XG4gIGNvbnN0IHsgZW1haWwsIG5hbWUgfTogdXNlckRhdGEgPSByZXEuYm9keTtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cGRhdGUgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHsgZW1haWwsIG5hbWUgfSxcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih1cGRhdGUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZTogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkZWwgPSBhd2FpdCBwcmlzbWEudXNlci5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHJlcS5wYXJhbXMuaWQpIH0sXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBkZWxldGVkVXNlcjogZGVsIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKTtcbiAgfVxufTtcbiJdfQ==