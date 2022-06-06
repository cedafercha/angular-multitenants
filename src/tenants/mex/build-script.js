const fs = require('fs-extra');
const concat = require('concat');
const glob = require('glob');
var fss = require('fs');

(async function build() {
  await glob('./dist/mex/*-es2015.js', {"ignore":['./dist/mex/polyfills-css-shim-es2015.js', './dist/mex/vendors~polyfills-core-js-es2015.js', './dist/mex/vendors~polyfills-dom-es2015.js']}, (err, files)=>{
     fs.ensureDir('dist')
     concat(files, 'dist/mex/main.js')
  })

  await glob('./dist/mex/*.*', {"ignore":['./dist/mex/main.js']}, (err, files)=>{
    for (var i=0; i<files.length; i++) {
        fss.unlink(`${files[i]}`, function(error) {
        if (error) {
            throw error;
        }
       })
      }
  })
})()
