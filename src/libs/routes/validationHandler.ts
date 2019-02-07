const validationHandler = (config) => (req, res, next) => {
  const keys = Object.keys(config);
  console.log(keys);
  keys.forEach((key) => {
    const items = config[key];
    const values = items.in.map((item) => {
      return req[item][key];
    });

    if (items && items.required) {
      const validateValues = values.filter((temp) => temp);
      if (validateValues.length !== values.length) {
        return next({error: 'Bad Request', message: `${key} required`, status: 400 });
      }
      if (items.string) {
        values.forEach((value) => {
          if (typeof value !== 'string') {
            return next({error: 'Bad Request', message: `${key} should be string`, status: 400 });
          }
        });
      }
      if (items.number) {
        values.forEach((value) => {
          if (typeof value !== 'number') {
            return next({ error: 'Bad Request', message: `${key} should be number`, status: 400 });
          }
        });
      }
      if (items.isObject) {
        values.forEach((value) => {
          if (typeof value !== 'object') {
            return next({ error: 'Bad Request', message: `${key} should be object`, status: 400 });
          }
        });
      }
      if (items.re) {
        values.forEach((value) => {
          const regrex = new RegExp(items.re);
          if (!regrex.test(value)) {
            return next({ error: 'Bad Request', message: `${key} should follow regrex`, status: 400 });
          }
        });
      }
      if (items.custom) {
        items.custom(4);
      }
    } else {
      values.forEach((value) => {
        if (value === '') {
          console.log(items.default);
        }
      });
    }
  });
  next();
};
export default validationHandler;
