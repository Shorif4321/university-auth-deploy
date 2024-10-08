"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemestersFilterableFields = exports.academicSemestersSearchableFields = exports.academicSemesterTitleCodeMapper = exports.academicSemesterMonths = exports.academicSemesterCodes = exports.academicSemesterTitles = void 0;
exports.academicSemesterTitles = [
    'Autumn',
    'Summer',
    'Fall',
];
exports.academicSemesterCodes = [
    '01',
    '02',
    '03',
];
exports.academicSemesterMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
exports.academicSemesterTitleCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
};
exports.academicSemestersSearchableFields = ['title', 'code', 'year'];
exports.academicSemestersFilterableFields = [
    'searchTerm',
    'title',
    'year',
    'code',
];
