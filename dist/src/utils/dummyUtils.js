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
const express_validator_1 = require("express-validator");
exports.default = (scheme) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield Promise.all((0, express_validator_1.checkSchema)(scheme).map((validation) => validation.run(req)));
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        const extractedErrors = {};
        const keys = [];
        errors.array().forEach((err) => {
            if (!keys.includes(err.param)) {
                keys.push(err.param);
                extractedErrors[err.param] = [err.msg];
                return;
            }
            extractedErrors[err.param].push(err.msg);
        });
        return res.status(422).json({
            errors: extractedErrors,
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXlVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9kdW1teVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseURBQTBFO0FBVzFFLGtCQUFlLENBQUMsTUFBYyxFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1FBQy9ELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDZixJQUFBLCtCQUFXLEVBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQzdELENBQUM7UUFDRixNQUFNLE1BQU0sR0FBRyxJQUFBLG9DQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDZjtRQUNELE1BQU0sZUFBZSxHQUF3QixFQUFFLENBQUM7UUFDaEQsTUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFjLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPO2FBQ1I7WUFDRCxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFLSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLE1BQU0sRUFBRSxlQUFlO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQSxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsaWRhdGlvblJlc3VsdCwgY2hlY2tTY2hlbWEsIFNjaGVtYSB9IGZyb20gXCJleHByZXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG4vLyBpbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnXG5pbnRlcmZhY2UgRXJyb3JUeXBlIHtcbiAgcGFyYW06IHN0cmluZztcbiAgbXNnOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgZXh0cmFjdGVkRXJyb3JzVHlwZSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoc2NoZW1lOiBTY2hlbWEpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgY2hlY2tTY2hlbWEoc2NoZW1lKS5tYXAoKHZhbGlkYXRpb24pID0+IHZhbGlkYXRpb24ucnVuKHJlcSkpXG4gICAgKTtcbiAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0aW9uUmVzdWx0KHJlcSk7XG4gICAgaWYgKGVycm9ycy5pc0VtcHR5KCkpIHtcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuICAgIGNvbnN0IGV4dHJhY3RlZEVycm9yczogZXh0cmFjdGVkRXJyb3JzVHlwZSA9IHt9O1xuICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gW107XG4gICAgZXJyb3JzLmFycmF5KCkuZm9yRWFjaCgoZXJyOiBFcnJvclR5cGUpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhlcnIucGFyYW0pKSB7XG4gICAgICAgIGtleXMucHVzaChlcnIucGFyYW0pO1xuICAgICAgICBleHRyYWN0ZWRFcnJvcnNbZXJyLnBhcmFtXSA9IFtlcnIubXNnXTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXh0cmFjdGVkRXJyb3JzW2Vyci5wYXJhbV0ucHVzaChlcnIubXNnKTtcbiAgICB9KTtcblxuICAgIC8vIGlmIChyZXEuZmlsZSAmJiByZXEuZmlsZS5wYXRoKSB7XG4gICAgLy8gICAgIGF3YWl0IGZzLnVubGluayhyZXEuZmlsZS5wYXRoKVxuICAgIC8vIH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xuICAgICAgZXJyb3JzOiBleHRyYWN0ZWRFcnJvcnMsXG4gICAgfSk7XG4gIH07XG59O1xuIl19