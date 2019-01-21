import { diamond, triangle } from "./patterns";
import { hasPermission, validate } from "./utils";
const users = [
  {
    // user 1
    traineeEmail: "chirag.arora@successive.tech",
    reviewerEmail: "inderjeet.singh@successive.tech"
  },
  {
    // user 2
    traineeEmail: "anytrainee@successive.tech",
    reviewerEmail: "anyreviewer@successive.tech"
  },
  {
    // user 3
    traineeEmail: ".anytrainee@successive.tech",
    reviewerEmail: "anyreviewer@successive.tech"
  },
  {
    // user 4
    traineeEmail: "anytrainee@successive.tech",
    reviewerEmail: "#anyreviewer@successive.tech"
  }
];
diamond(5);
diamond(10);
triangle(4);
triangle(10);
hasPermission("module1", "read", "trainer");
validate(users);
