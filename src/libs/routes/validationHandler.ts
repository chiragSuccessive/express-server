const validationHandler = (config) => (req, res, next) => {
  const keys = Object.keys(config);
  keys.forEach((key) => {
    const items = config[key];
    const values = items.in.map((item) => {
      return req[item][key];
    });
    const validateValues = values.filter((temp) => temp);
    if (items && items.required) {
      if (validateValues.length !== values.length) {
        return next({error: 'Bad Request', message: `${key} required`, status: 400 });
      }
      if (items.custom) {
        items.custom(4);
      }
    }
    if (items && items.string) {
      validateValues.forEach((value) => {
        if (typeof value !== 'string') {
          return next({error: 'Bad Request', message: `${key} should be string`, status: 400 });
        }
      });
    }
    if (items && items.number) {
      validateValues.forEach((value) => {
        if (typeof value !== 'number') {
          return next({ error: 'Bad Request', message: `${key} should be number`, status: 400 });
        }
      });
    }
    if (items && items.isObject) {
      validateValues.forEach((value) => {
        if (typeof value !== 'object') {
          return next({ error: 'Bad Request', message: `${key} should be object`, status: 400 });
        }
      });
    }
    if (items && items.re) {
      validateValues.forEach((value) => {
        const regrex = new RegExp(items.re);
        if (!regrex.test(value)) {
          return next({ error: 'Bad Request', message: `${key} should follow regrex`, status: 400 });
        }
      });
    }
  });
  next();
};
export default validationHandler;
