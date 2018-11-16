import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "Gas bill",
    note: "Utilities",
    amount: 4000,
    createdAt: 0
  },
  {
    id: "2",
    description: "Gum",
    note: "",
    amount: 125,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Coffee",
    note: "",
    amount: 225,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

export default expenses;
