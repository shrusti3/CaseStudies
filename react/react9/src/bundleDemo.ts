// Example showing bundle bloat
import _ from "lodash";
import moment from "moment";

export function bundleBloatExample() {
  _.chunk([1, 2, 3, 4], 2);
  moment().format();
}
