"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Management = void 0;
const mongoose_1 = require("mongoose");
const managementSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Management = (0, mongoose_1.model)('Management', managementSchema);
