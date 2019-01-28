import {successHandler} from "./index";

const validationHandler = config => (req, res, next) => {
  let keys = Object.keys(config);
  console.log(keys);
  keys.forEach(key => {
    const items = config[key];
    const values = items.in.map(item => {
      return req[item][key];
    });

    if (items && items.required) {
      values.forEach(value => {
        console.log(items.default);
        console.log(value == '')
        if(value == '') { console.log(items.default)} ;
      });
      const validateValues = values.filter(temp => temp);

      if (validateValues.length != values.length) {
        return next({
          error: "Bad Request",
          message: `${key} required`,
          status: 400
        });
      }
    }
    if (items && items.string) {
      // const validateValues = values.filter(temp => temp);
      console.log(typeof values);
      values.forEach(value => {
        console.log(typeof value);

        if (typeof value != "string") {
          return next({
            error: "Bad Request",
            message: `${key} should be string`,
            status: 400
          });
        }
      });
    }
    if (items && items.number) {
      // const validateValues = values.filter(temp => temp);
      console.log(typeof values);
      values.forEach(value => {
        console.log(typeof value);

        if (typeof value != "number") {
          return next({
            error: "Bad Request",
            message: `${key} should be number`,
            status: 400
          });
        }
      });
    }
    if (items && items.isObject) {
      // const validateValues = values.filter(temp => temp);
      console.log(typeof values);
      values.forEach(value => {
        console.log(typeof value);

        if (typeof value != "object") {
          return next({
            error: "Bad Request",
            message: `${key} should be object`,
            status: 400
          });
        }
      });
    }
    if (items && items.re) {
      values.forEach(value => {
        console.log("value", value);
        const regrex = new RegExp(items.re);
        console.log(regrex.test(value));
        if (!regrex.test(value)) {
          return next({
            error: "Bad Request",
            message: `${key} should be string`,
            status: 400
          });
        }
      });
    }
    if(items && items.custom) {
      items.custom(4);
    }
    // if(items && items.default) {
    //   console.log(items.default);
    // }
  });

  next();
};
export default validationHandler;
