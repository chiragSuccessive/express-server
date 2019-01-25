const validationHandler = config => (req, res, next) => {
  let arr = Object.keys(config);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    // console.log(arr[i]);
    // console.log(typeof arr[i]);
    // console.log(config[arr[i]]);

    // console.log(config[arr[i]].required);
    if (config[arr[i]].required) {
      console.log(config[arr[i]].errorMessage);

      //---------------TO CHECK FOR BODY---------------//
      if (config[arr[i]].in.includes("body")) {
         console.log("in includes");
        const { temp } = req.body;
        console.log(temp);
        if (!temp) {
          return next({
            error: "Bad Request",
            message: config[arr[i]].errorMessage,
            status: 400
          });
        }
        // to check whether it is string or not.
        if (config[arr[i]].string) {
          if (typeof temp == "string") {
            continue;
          } else {
            next({
              error: "Bad Request",
              message: "string required",
              status: 400
            });
          }
        }
        // to check whether it is a number or not.
        if (config[arr[i]].number) {
          if (typeof temp == "number") {
          } else {
            next({
              error: "Bad Request",
              message: "number required",
              status: 400
            });
          }
        }
        // to check whether it is a object or not.
        if (config[arr[i]].isObject) {
          if (typeof temp == "object") {
          } else {
            next({
              error: "Bad Request",
              message: "object required",
              status: 400
            });
          }
        }
        // to pass the given default value if given
      }

      //---------------TO CHECK FOR PARAMS---------------//
      if(config[arr[i]].in.includes == 'params') {
        console.log("in includes");
        const { temp } = req.params;
        if (!temp) {
          next({
            error: "Bad Request",
            message: config[arr[i]].errorMessage,
            status: 400
          });
        }
        // to check whether it is string or not.
        if (config[arr[i]].string) {
          if (typeof temp == "string") {
            continue;
          } else {
            next({
              error: "Bad Request",
              message: "string required",
              status: 400
            });
          }
        }
        // to check whether it is a number or not.
        if (config[arr[i]].number) {
          if (typeof temp == "number") {
          } else {
            next({
              error: "Bad Request",
              message: "number required",
              status: 400
            });
          }
        }
        // to check whether it is a object or not.
        if (config[arr[i]].isObject) {
          if (typeof temp == "object") {
          } else {
            next({
              error: "Bad Request",
              message: "object required",
              status: 400
            });
          }
        }
      }
      //---------------TO CHECK FOR QUERY---------------//
      if(config[arr[i]].in.includes == 'query') {
        // console.log("in includes");
        const { temp } = req.query;
        if (!temp) {
          next({
            error: "Bad Request",
            message: config[arr[i]].errorMessage,
            status: 400
          });
        }
        // to check whether it is string or not.
        if (config[arr[i]].string) {
          if (typeof temp == "string") {
            continue;
          } else {
            next({
              error: "Bad Request",
              message: "string required",
              status: 400
            });
          }
        }
        // to check whether it is a number or not.
        if (config[arr[i]].number) {
          if (typeof temp == "number") {
          } else {
            next({
              error: "Bad Request",
              message: "number required",
              status: 400
            });
          }
        }
        // to check whether it is a object or not.
        if (config[arr[i]].isObject) {
          if (typeof temp == "object") {
          } else {
            next({
              error: "Bad Request",
              message: "object required",
              status: 400
            });
          }
        }
      }
    }
  }
};
export default validationHandler;
