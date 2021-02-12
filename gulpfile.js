"use strict";

const gulp = require("gulp");
const gulpTS = require("gulp-typescript");
const tsProject = gulpTS.createProject("tsconfig.json");

function build(callback) {
    tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('./dist'));
    callback();
}

exports.build = build;