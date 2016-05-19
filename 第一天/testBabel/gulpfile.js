var gulp=require("gulp");
var babel=require('gulp-babel');

// 定义任务
gulp.task('babel',function(){
	gulp.src('./src/*.js').pipe(babel()).pipe(gulp.dest('./dest/'));
});

//执行所有任务
gulp.task('all',function(){
	gulp.run('babel');
})

gulp.task('default',function(){
	gulp.run('all');
	gulp.watch('./src/*.js',function(){
		gulp.run('all');
	})

});

