# toy-robot-simulator
This repository has been created for an interview.
You need to enter the commands in data.csv file to put in the root folder (where package.json is).
It's a simple toy robot program, to execute it just run "npm run start".
Done in TDD, you can launch the tests using the "npm run test" command.

**The table is 5x5, any move command where the robot would fall of the table is ignored**
**Commands format :** 
- MOVE
> Move the robot forward
- LEFT
> Rotate the robot -90°
- RIGHT
> Rotate the robot +90°
- PLACE(X,Y,DIRECTION)
> Place the robot in X,Y facing the entered direction (directions : N, S, E, W)
- REPORT
> Prints a report with the X,Y and direction