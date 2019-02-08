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
      errorMessage: 'Limit is invalid',
      in: ['query'],
      // number: true,
      required: false,
    },
    skip: {
      errorMessage: 'Skip is invalid',
      in: ['query'],
      // number: true,
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
      re: /^[a-zA-Z ]+$/,
      required: true,
    },
  },
  postLogin: {
    email: {
      errorMessage: 'id required',
      in: ['body'],
      re: /^.+@.+\..+$/,
      required: true,
      string: true,
    },
    password: {
      errorMessage: 'Name is required',
      in: ['body'],
      required: true,
      string: true,
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
