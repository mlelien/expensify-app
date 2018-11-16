import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("filters init", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("setTextFilter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "test text"
  });
  expect(state.text).toBe("test text");
});

test("sortByDate", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("sortByAmount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("setStartDate", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment(1)
  });
  expect(state.startDate).toEqual(moment(1));
});

test("setEndDate", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment(1)
  });
  expect(state.endDate).toEqual(moment(1));
});
