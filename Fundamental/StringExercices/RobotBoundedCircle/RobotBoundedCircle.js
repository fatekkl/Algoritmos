/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    const dir = {
        x: 0,
        y: 1,
    }

    const coord = {
        x: 0,
        y: 0
    }

    for (let i = 0; i < instructions.length; i++) {
        switch (instructions[i]) {
            case 'G':
                coord.x += dir.x;
                coord.y += dir.y;
                break;
            case 'L':
                if (dir.x === 0 && dir.y === 1) {
                    dir.x = -1;
                    dir.y = 0;
                } else if (dir.x === 0 && dir.y === -1) {
                    dir.x = 1;
                    dir.y = 0;
                } else if (dir.y === 0 && dir.x === -1) {
                    dir.y = -1;
                    dir.x = 0;
                } else if (dir.y === 0 && dir.x === 1) {
                    dir.y = 1;
                    dir.x = 0;
                }
                break;
            case 'R':
                if (dir.x === 0 && dir.y === 1) {
                    dir.x = 1;
                    dir.y = 0;
                } else if (dir.x === 0 && dir.y === -1) {
                    dir.x = -1;
                    dir.y = 0;
                } else if (dir.x === -1 && dir.y === 0) {
                    dir.y = 1;
                    dir.x = 0;
                } else if (dir.x === 1 && dir.y === 0) {
                    dir.y = -1;
                    dir.x = 0;
                }
                break;
        }
    }

    if (coord.x === 0 && coord.y === 0) return true;
    if (dir.y !== 1) return true;
    return false;
};