'use strict'
var path = require('path')
var gulp = require('gulp')
var gutil = require('gulp-util')

var initGulpTasks = require('gulp-frontend-tools')

var ENV = 'development' //production
if (gutil.env.production) {
  ENV = 'production'
}

var config = {
  project: {
    static_root: '/',
    app_root: path.resolve(__dirname, 'app'),
    dist_root: path.resolve(__dirname, 'dist'),
    webpack: {
      publicPath: '{{ _.static_root }}js/',
      gzip: false,
      hot: false,
      extract_css: false,
      defines: {
        'ENVS': {
          SERVER: 'false',
          'API_ENDPOINT': '"{{ envs.api_endpoint|d("https://u24.services/") }}"',
          'PROJECT_NAME': '"mobile"',
        },

        'PROJECT_NAME': '"mobile"',
        'STATIC_ROOT': '"{{ _.static_root }}"',
        'DEBUG': '{{ envs.debug }}',
        'API_ENDPOINT': '"{{ envs.api_endpoint|d("") }}"',
        'process.env.NODE_ENV': JSON.stringify(ENV),
      },

    },
    context: {
      'STATIC_ROOT': '"{{ _.static_root }}"',
      'IOS': '{{ envs.ios|d("") }}',
      'ANDROID': '{{ envs.android|d("") }}',
    },

  },
  webpack: {
    options: {
      devtool: gutil.env.production ? 'eval-cheap-source-map' : 'inline-source-map',

      resolve: {
        modulesDirectories: [],
        alias: {
          'react-xdsoft-datetimepicker': path.resolve(__dirname, '..'),
        },
      },
    },
  },
}

initGulpTasks(gulp, config, __dirname)
