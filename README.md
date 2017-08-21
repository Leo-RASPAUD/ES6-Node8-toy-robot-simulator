# toy-robot-simulator

## Description
This repository has been created for an interview.<br/>
The goal was to create a simple toy robot simulator which can move on a table.<br/>
The whole exercise has been made using a **TDD approach**.

## Environment 
This application runs on multiple platforms. It has been developped using Win10 x64.

## System requirements
- NodeJS 8 or newer

## Installation 
``` 
$ npm install
```
## Prerequisites
The system works using an input file **data.csv** located in the **root folder**.<br/>
The file **MUST** be called "data.csv".

### Input file format :
- Each line represents a command (see below for the command list).
- Format : utf-8
- Line breaks : CR-LF

## Commands
- MOVE
> Moves the robot forward
- LEFT
> Rotates the robot -90°
- RIGHT
> Rotates the robot +90°
- PLACE(X,Y,DIRECTION)
> Places the robot in X,Y facing the entered direction (directions : N, S, E, W)<br/>
``` 
Exemple : PLACE(1,2,N)
Places the robot in the following position {x : 1, y : 2, direction : N }
``` 
- REPORT
> Prints a report with the X,Y and direction

## Usage
``` 
$ npm run start
```

## Tests
``` 
$ npm run test
```

## Coverage
``` 
$ npm run cover
```

## Discussion
This whole project has been made in TDD using mocha and chai. I have used Istanbul to check my code coverage but I'm not really convinced as there is some problems with the latest version (I had to use the alpha to be compatible with es6 + babel).<br/>
I'll probably look into using Jest instead of mocha + chai + istanbul. 

## License
The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.