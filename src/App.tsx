import DateFnsAdapter from "@date-io/date-fns";
import { DatepickerProvider } from "./Datepicker/context";
import Datepicker from "./Datepicker";

export default function App() {
  return (
    <div className="App">
      <DatepickerProvider DateAdapter={DateFnsAdapter}>
        <Datepicker />
      </DatepickerProvider>
    </div>
  );
}
