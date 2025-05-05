// SPDX-License-Identifier: MIT
"""Arguments

pragma solidity ^0.8.20;

contract Contract {
    uint public x;

    constructor(uint _x) {
        x = _x;
    }
}

-----
""" increement
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contract {
    uint public x;

    constructor(uint _x) {
        x = _x;
    }

    function increment() external {
        x += 1;
    }
}

------------
'''VIEW ADDITION
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contract {
    uint public x;

    constructor(uint _initialX) {
        x = _initialX;
    }

    function increment() external {
        x = x + 1;
    }

    function add(uint _y) external view returns (uint) {
        return x + _y;
    }
}
======
DOUBLE OVERLOAD
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contract {
    function double(uint num) external pure returns (uint) {
        return num * 2;
    }

    function double(uint num1, uint num2) external pure returns (uint, uint) {
        return (num1 * 2, num2 * 2);
    }
}

''Using Console.log

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/console.sol";

contract Contract {
    function winningNumber(string calldata secretMessage) external returns (uint) {
        console.log("Secret Message:", secretMessage);
        return 794; // Arbitrary return value
    }
}

'' Pure function

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Contract {
    function double(uint x) external pure returns (uint) {
        return x * 2;
    }
}

Overloading Functions

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Contract {
    function double(uint x) public pure returns (uint) {
        return x * 2;
    }

    function double(uint x, uint y) external pure returns (uint, uint) {
        return (double(x), double(y));
    }
}
