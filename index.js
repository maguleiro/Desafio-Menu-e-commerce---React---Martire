//import {v4 as idGenerator } from "uuid";

const test = () =>{

	const date = { year:2022, month:6, day: 30};

const spreadValues ={ time:"17:00", ...date, year: 2000 };
console.log(spreadValues);

const { year } = date;
console.log(date.year);
console.log(year);

const {month, ...rest} = date;
console.log(month);
console.log(rest);

}
test()