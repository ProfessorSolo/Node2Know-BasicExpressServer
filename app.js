"use strict";

/**
 * Node2Know — Basic Express Server
 *
 * Express is an opinionated layer on top of Node’s http server:
 * - you get an app object
 * - you attach routes + middleware
 * - you start listening on a port
 */

const express = require("express");

// The ignition: this creates the Express application instance.
// Think of `app` as your server control panel (routes, middleware, config).
const app = express();

// Define the “speed limit” (port):
// - Use the environment variable if the host provides one (common in deployment)
// - Otherwise default to 3000 locally
const PORT = process.env.PORT || 3000;

// Hit the gas: start the server.
// The callback runs once, when the server is successfully listening.
app.listen(PORT, () => {
  console.log(`Created process at PID: ${process.pid}`);
  console.log(`Listening on port: ${PORT}`);
  console.log(`Try: http://localhost:${PORT}`);
});
