g-image-search
=====

Another Google Image Search Node module. The nature of these things is that they eventually break as GIS changes, but this one works as of 4/10/2016.

Installation
------------

    npm install g-image-search

Usage
-----

    var gis = require('g-image-search');
    gis('cats').then(function logResults(results) {
			console.log(results);
    }).catch(function(err){
			console.log(err);
    });

Output:

    [
      "http://animalia-life.com/data_images/cat/cat2.jpg",
      "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
      "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg",
      ...
    ]

License
-------

The MIT License (MIT)

Copyright (c) 2015 Stefan Hayden

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
