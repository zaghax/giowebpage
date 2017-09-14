var  autoprefixer = require('autoprefixer'),
     browserSync  = require('browser-sync'),
     concat       = require('gulp-concat'),
     gulp         = require('gulp'),
     postcss      = require('gulp-postcss'),
     sass         = require('gulp-sass'),
     // sourcemaps   = require('gulp-sourcemaps'),
     uglify       = require('gulp-uglify');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('sass', function(){
  gulp.src(['sass/**/*.sass'])
      .pipe(sass({ 
        outputStyle: 'expanded',
        sourceComments: 'normal'
      }))
      .on('error', handleError)
      // .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer({browsers: ['last 2 versions'] }) ]))
      // .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('css/'))
      .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function(){
  return gulp.src(['srcjs/plugins.js' , 'srcjs/custom.js'])
             .pipe(concat('main.js'))
             // .pipe(uglify())
             .pipe(gulp.dest('js/'))
             .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch(['sass/**/*.sass'], ['sass']);
  gulp.watch(['srcjs/**/*.js'], ['js']);
  gulp.watch("*.html", ['bs-reload']);
});