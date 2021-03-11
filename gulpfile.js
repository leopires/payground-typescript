"use strict";

const gulp = require("gulp");
const gulpTS = require("gulp-typescript");
const tsProject = gulpTS.createProject("tsconfig.json");
const del = require("del");


function clean() {
    return del(["./dist"]);
}

function tsCompile(callback) {
    tsProject.src().pipe(tsProject()).on("error", (error) => {console.log(error)}).js.pipe(gulp.dest('./dist'));
    callback();
}

const build = gulp.series(clean, tsCompile);

exports.build = build;