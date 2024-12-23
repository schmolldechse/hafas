import ("./versions/v1.js").then(() => console.log("Started v1"))
    .catch((err) => console.log("Error starting v1:", err));

import ("./versions/v2.js").then(() => console.log("Started v2"))
    .catch((err) => console.log("Error starting v2:", err));