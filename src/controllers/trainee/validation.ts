const validate = {
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: true,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 4,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  post: {
    id: {
      errorMessage: 'id required',
      in: ['body'],
      required: true,
      string: true,
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      re: /^([ a-z0-9 ])$/,
      required: true,
    },
  },
  update: {
    dataToUpdate: {
      custom: ((dataToUpdate)  => {console.log('data updated', dataToUpdate); }),
      in: ['body'],
      isObject: true,
      required: true,
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};
export default validate ;
