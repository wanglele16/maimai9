// 引入 gulp 工具
var gulp = require('gulp');

// 引入 gulp-webserver 模块
var webserver = require('gulp-webserver');

// 引入 css 预处理 压缩 模块
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

// 引入 js 模块化工具 gulp-webpack, 获得 js 文件名模块 vinyl-named, js 压缩模块
var named =require('vinyl-named');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');

// 引入 fs url 模块
var fs = require('fs');
var url = require('url');

// 引入 rev revCollector 模块 版本号控制
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');


// 引入 gulp-sequence 模块
var sequence = require('gulp-sequence');

//启动 webserver
gulp.task('webserver', function () { // 这里webserver 名字可以随便起 与上面下面无关
    gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 80,
            directoryListing: {
                enable: true,
                path: './'
            },
            livereload: true,

            // mock 数据
            middleware: function (req, res, next) {
                var urlObj = url.parse(req.url,  true);
                switch (urlObj.pathname) {
<<<<<<< HEAD
                    case '/api/list.php':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/list.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case 'api/users':
                        // ...
                        return;
                    case 'api/cart':
                        // ...
=======
                    case '/api/recSpeIndex':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/recSpeIndex.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/newIndex':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/newIndex.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/hotIndex':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/hotIndex.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/counIndex':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/counIndex.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/hotSeIndex':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/hotSeIndex.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/bannerIndex':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/bannerIndex.json', function (err, data) {
                            res.end(data);
                        });
>>>>>>> b527d6acb0b1302f8d6ab46ea75bd6c7c431f299
                        return;
                    case '/api/show1-all':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/show1-all.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/more-all':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/more-all.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                }
                next();
            }
    }))
});

// css 预处理 压缩
/*var cssFiles = [
    './src/styles/usage/page/app-index.scss'
];*/
gulp.task('scss', function () {
    gulp.src('./src/styles/usage/page/*.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(minifyCSS())
        .pipe(gulp.dest('./build/prd/styles/'));
});

// js 模块化， 合并， 压缩
/*var jsFiles = [
    './src/scripts/!*.js'
];*/
gulp.task('packjs', function () {
    gulp.src('./src/scripts/*.js')
        .pipe(named())
        .pipe(webpack({
            output: {
                filename: '[name].js'
        },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'imports?define=>false',
                        //不解析
                        exclude: './src/scripts/libs/zepto.js'
                    },
                    {
                        test: /\.string$/,
                        loader: 'string'
                    }
                ]
            }
    }))
        .pipe(uglify().on('error', function (err) {
            console.log('\x07', err.lineNumber, err.message);
            return this.end();
        }))
        .pipe(gulp.dest('./build/prd/scripts/'));
});

// 版本号控制
var cssDistFiles = [
    './build/prd/styles/app.css'
];
var jsDistFiles = [
    './build/prd/scripts/app.js'
];
gulp.task('ver', function () {
    gulp.src(cssDistFiles)
        .pipe(rev())
        .pipe(gulp.dest('./build/prd/styles/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build/ver/styles/'));
    gulp.src(jsDistFiles)
        .pipe(rev())
        .pipe(gulp.dest('./build/prd/scripts/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build/ver/scripts/'));
});
gulp.task('html', function () {
    gulp.src(['./build/ver/**/*','./build/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./build/'));
});
gulp.task('min', sequence('copy-index','ver','html'));

// 拷贝 index.html 到 build 文件夹
gulp.task('copy-html', function() {
  gulp.src('./*.html')
    .pipe(gulp.dest('./build/'));
});

// 拷贝 images 到 build 文件夹
gulp.task('copy-images', function(){
  gulp.src('./images/**/*')
    .pipe(gulp.dest('./build/images/'));
});

// 侦测 文件变化 执行相应任务
gulp.task('watch', function () {
   gulp.watch('./*.html', ['copy-html']);
   gulp.watch('./images/**/*', ['copy-images']);
   // gulp.watch('./src/styles/*.{scss,css}',['scss', 'min']);
   gulp.watch('./src/styles/**/*',['scss']);
   // gulp.watch('./src/scripts/*.js',['packjs', 'min']);
   gulp.watch('./src/scripts/**/*',['packjs']);
});

// 配置 default 任务， 执行任务队列  有顺序
gulp.task('default', ['watch', 'webserver'], function () {
   console.log('执行完毕');
});
