module.exports = function(grunt) {
  'use strict';
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    srcDir: "src",
    buildDir: "bin",
    libDir: "lib",
    testDir: "test",
    docDir: "doc",

    watch: {
      build: {
        files: ['<%= srcDir %>/*.jsx', '<%= libDir %>/*.jsx'],
        tasks: ['jsx:build']
      },
      test: {
        src: ['<%= libDir %>/*.jsx', '<%= srcDir %>/*.jsx', '<%= testDir %>/*.jsx'],
        files: ['<%= testDir %>/*.jsx'],
        tasks: ['jsx:test']
      }
    },

    exec: {
      testfixture_commonjs: {
        cmd: 'bin/jsx-linker -t commonjs-lib --output test/fixture/sample.common.js test/minify-build.js'
      },
      testfixture_amd: {
        cmd: 'bin/jsx-linker -t amd-lib --output test/fixture/sample.amd.js test/minify-build.js'
      },
      run_test: {
        cmd: 'node test/fixture/run_test.js'
      }
    },

    jsx: {
      build: {
        src: ['<%= srcDir %>/jsx-linker.jsx'],
        add_search_path: ['<%= libDir %>', 'node_modules/esprima.jsx/lib', 'node_modules/getopt.jsx/lib', 'node_modules/hogan.jsx/lib'],
        dest: '<%= buildDir %>/jsx-linker',
        executable: 'node',
        release: true
      },

      test: {
        src: ['<%= testDir %>/test*.jsx'],
        add_search_path: ['<%= libDir %>', '<%= srcDir %>', 'node_modules/esprima.jsx/lib', 'node_modules/getopt.jsx/lib', 'node_modules/hogan.jsx/lib'],
        test: true
      },

      doc: {
        src: ['<%= libDir %>/*.jsx', '<%= srcDir %>/*.jsx'],
        add_search_path: ['<%= libDir %>', '<%= srcDir %>', 'node_modules/esprima.jsx/lib', 'node_modules/getopt.jsx/lib', 'node_modules/hogan.jsx/lib'],
        dest: '<%= docDir %>',
        mode: 'doc'
      }
    }
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jsx:build']);
  grunt.registerTask('build', ['jsx:build']);
  grunt.registerTask('test', ['jsx:test', 'jsx:build', 'exec:testfixture_commonjs', 'exec:testfixture_amd', 'exec:run_test']);
  grunt.registerTask('doc', ['jsx:doc']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:
