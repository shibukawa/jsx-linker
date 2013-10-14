jsx-linker
===========================================

Synopsis
---------------

JSX postprocessor to support various environment.

Motivation
---------------

JavaScript is an infrastructure language on many environment (like SQL, Lua, Visual Basic etc...).
Each environment use different code structure, assumption because JavaScript doesn't have a standard module system or entry points.

This program converts resulting code of JSX into environment specific code.

Installation
---------------

```sh
$ npm install -g jsx-linker
```

Usage
---------------

```sh
$ jsx-linker [option] [inputjsfile]
```

### option

*   `-t templateName`, `--tempalte=templateName`

    Select template name. You can see all template list on the help description.

*   `-s`, `--stdin`

    Read source code from standard input.

*   `-o`, `--output`

    Output file name. If this option is not specified, it dumps resulting code to standard output.

*   `-h`, `--help``

    Display help

Usage Sample
-------------------

### Direct conversion with JSX

```sh
$ jsx --minify sample-class.jsx | jsx-linker -s -t nodejs-lib > sample-nodelib.js
```

### Convert from file

```sh
$ jsx-linker -s -t nodejs-lib -o sample-nodelib.js sample.js
```

### Show Help

```sh
$ jsx-linker --help
```

Development
-------------

## Repository

* Repository: git://github.com/shibukawa/jsx-linker.git
* Issues: https://github.com/shibukawa/jsx-linker/issues

## Run Test

```sh
$ grunt test
```

## Build

```sh
# Build application or library for JS project
$ grunt build

# Generate API reference
$ grunt doc

```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

MIT

Complete license is written in `LICENSE.md`.
