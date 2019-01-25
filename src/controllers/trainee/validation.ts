const validate = {
  post: {
    id: {
      required: true,
      string: true,
      in: ["body"],
      errorMessage:"id required",
      // custom: function(value) {
      //   console.log("Value", value);
      //   throw { error: "Error Occured", message: "Message" };
      // }
    },
    name: {
      required: true,
      in: ["body"],
      errorMessage: "Name is required"
    }
  },
  delete: {
    id: {
      required: true,
      errorMessage: "Id is required",
      in: ["params"]
    }
  },
  get: {
    skip: {
      required: true,
      default: 0,
      number: true,
      in: ["query"],
      errorMessage: "Skip is invalid"
    },
    limit: {
      required: false,
      default: 10,
      number: true,
      in: ["query"],
      errorMessage: "Limit is invalid"
    }
  },
  update: {
    id: {
      required: true,
      string: true,
      in: ["body"]
    },
    dataToUpdate: {
      in: ["body"],
      required: true,
      isObject: true,
      custom: function(dataToUpdate) {}
    }
  }
};
export default validate ;
