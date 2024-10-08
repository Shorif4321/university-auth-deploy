"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError extends Error {
    constructor(statusCode, message, stack = '') {
        super(message); // message error er property
        this.statusCode = statusCode;
        // jodi constractorer input a stack thake
        if (stack) {
            this.stack = stack;
        }
        else {
            // stack na thakle
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.default = ApiError;
