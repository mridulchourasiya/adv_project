import swaggerAutogen from "swagger-autogen";
const swaggerAutogenInstance = swaggerAutogen();
const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:5500",
};

const outputFile = "./swagger-output.json";
const routes = [
  "./routes/auth.routes.js",
  "./routes/subscription.routes.js",
  "./routes/user.routes.js",
  "./routes/workflow.routes.js",
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */
swaggerAutogenInstance(outputFile, routes, doc);
