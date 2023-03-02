const express = require("express");
const redis = require("redis");
const session = require("express-session");
const connectRedis = require("connect-redis");
const router = require("./Routes/index");
const app = express();

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  port: 6379,
  host: "localhost"
});

redisClient.on("connect", err => {
  if (!err) {
    console.log("redis connected succesfully");
  } else {
    console.log(`error connecting redis, error: ${err}`);
  }
});

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    name: "sessionId",
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 30, // 30 minutes,
      sameSite: "lax"
    }
  })
);

app.use(router);

// 4. plug in another middleware that will check if the user is authenticated or not
// all requests that are plugged in after this middleware will only be accessible if the user is logged in

// 5. plug in all routes that the user can only access if logged in

app.listen(8080, () => {
  console.log("server is running on 8080...");
});
//testing git username cghange
