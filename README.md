# Langton-s-Ant
This Repository contains the interactive simulation of Langton's Ant.

Description:
This repository contains an index.html file and a sketch.js file which can be viewed on the local server.
About the simulation:
The canvas starts with a square grid, click anywhere to spawn the ant. And if the ant is already spawned and on the grid, click to anywhere change the ant's position.
There are two slider on the top left, the first one can be used to change the ant's speed (antsteps/frame). Second one can be used to change the framerate/second.

Optional:
The square grid is easily scalable, this can be done by changing the value of variable 'sqLen'. The constraints on 'sqLen': The value should be a factor of both canvas height and canvas width. The value should be even.

References: https://en.wikipedia.org/wiki/Langton%27s_ant, 
https://p5js.org/reference/
