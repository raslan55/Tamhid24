// ----------- require gulp and its plugins -----------
const gulp         = require('gulp');
const plumber      = require('gulp-plumber');
const rename       = require('gulp-rename');
const autoPrefixer = require('gulp-autoprefixer');
const cssComb      = require('gulp-csscomb');
const cmq          = require('gulp-merge-media-queries');
const cleanCss     = require('gulp-clean-css');
const uglify       = require('gulp-uglify');
const concat       = require('gulp-concat');
const imageMin     = require('gulp-imagemin');
const notify       = require('gulp-notify');

// ** If U Using Sass REMOVE comment below and make npm install **
// const sass         = require('gulp-sass');
// const sourcemaps   = require('gulp-sourcemaps');

// -------- SASS Task (Only If Using Sass lang) --------------

// gulp.task('sass', function () {
//   return gulp.src('./scss/**/*.scss')
//     // .pipe(sourcemaps.init()) // for using SourceMaps Files
//     .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
//     // .pipe(sourcemaps.write()) // for using SourceMaps Files
//     .pipe(gulp.dest('./css/'))
//     .pipe(notify('SASS task finished'));
// });

// -------- CSS Task ---------------

gulp.task('css', function () {
    gulp.src(['css/*'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(autoPrefixer('last 10 versions'))
        .pipe(cssComb())
        .pipe(cmq({log: true}))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify('css task finished'))
});

// ------- JS task -------------
gulp.task('js', function () {
    gulp.src('js/*'
       
    )
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))

        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))

        .pipe(gulp.dest('dist/js'))
        .pipe(notify('js task finished'))
});

// ------- Images task -------------
gulp.task('image', function () {
    gulp.src(['imges/**/*'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'))
        .pipe(notify('image task finished'))
});

// ------ Fonts Task --------
gulp.task('font', function () {
   gulp.src(['fonts/**/*'])
       .pipe(gulp.dest('dist/fonts'))
       .pipe(notify('moving fonts task finished'))
});

// ------------ Default Task and Watching Files For Changes ------------
gulp.task('default', ['js', 'css', 'image', 'font'], function () {
    gulp.watch('imges/**/*', ['image']);
    gulp.watch('css/**/*.css', ['css']);
    // gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch('fonts/**/*', ['font']);

});

// --------- production task ---------
gulp.task('prod', ['js', 'css', 'image', 'font']);