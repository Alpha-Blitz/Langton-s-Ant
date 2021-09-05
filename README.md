# Langton's Ant 🐜
This Repository contains the interactive simulation of Langton's Ant. 🐜

- **Description:**
This repository contains an index.html file and a sketch.js file which can be viewed on the local server.

- **About the simulation:**
The canvas starts with a square grid, click anywhere to spawn the ant. And if the ant is already spawned and on the grid, click anywhere to change the ant's position.
There are two slider on the top left, the first one can be used to change the ant's speed (antsteps/frame) range 1 to 40 units. Second one can be used to change the framerate/second (range 1 to 80 units).

- **Optional:**
The square grid is easily scalable, this can be done by changing the value of variable 'sqLen' in line 5 (in sketch.js). The constraints on 'sqLen': The value should be a factor of both canvas height and canvas width. The value should be even.

- **References:** [Langton's ant](https://en.wikipedia.org/wiki/Langton%27s_ant "wikipedia"), 
[p5js](https://p5js.org/reference/ "p5js")
