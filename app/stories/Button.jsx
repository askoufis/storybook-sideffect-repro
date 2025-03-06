// Importing the same side-effect as preview.tsx causes incorrect bundling in a storybook production build
import "side-effect-package/check";

// Importing a different side-effect doesn't cause the same issue (comment out the line above and uncomment the line below)
// import "side-effect-package/other";

import React from 'react';

export const Button = () => <button>Click me!</button>;
