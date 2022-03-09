import './App.css';
import { useState } from 'react';
import Buttons from './Buttons/Buttons';
import Days from './Days/Days';
import Addition from './Addition/Addition';
import Search from './Search/Search';
import './App.css'
import './Days/Days.css'
import './Buttons/Buttons.css'
import './Addition/Addition.css'

function App() {
  let date = new Date();
  let [nowYear, setNowYear] = useState(date.getFullYear());
  let [nowMonth, setNowMonth] = useState(date.getMonth());
  let firstWeekDays = new Date(nowYear, nowMonth, 1).getDay();
  let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  let [month, setMonth] = useState(months[date.getMonth()]);

  let [editNum, setEditNum] = useState(null);
  let [value, setValue] = useState('');
  let [search, setSearch] = useState('');

  let [notes, setNotes] = useState([]);
  let [fullDate, setFullDate] = useState('');

  let [active, setActive] = useState(false);

  console.log(notes)
  // return <>
  //   <div className='App'>
  //     <div>
  //       {/* <Buttons nowYear={nowYear} setNowYear={setNowYear} nowMonth={nowMonth} setNowMonth={setNowMonth} months={months} month={month} setMonth={setMonth} /> */}
  //       <table>
  //         <thead>
  //         <Buttons nowYear={nowYear} setNowYear={setNowYear} nowMonth={nowMonth} setNowMonth={setNowMonth} months={months} month={month} setMonth={setMonth} />
  //           <Weekdays />
  //           <Days nowYear={nowYear} nowMonth={nowMonth} firstWeekDays={firstWeekDays} notes={notes} setNotes={setNotes} setFullDate={setFullDate} fullDate={fullDate} />
  //         </thead>
  //       </table>
  //     </div>

  //     <div style={{ display: "flex" }}>
  //       <Addition notes={notes} setEditNum={setEditNum} setNotes={setNotes} setSearch={setSearch} setValue={setValue} editNum={editNum} value={value} date={date} fullDate={fullDate} />
  //       <Search setSearch={setSearch} setNotes={setNotes} notes={notes} setEditNum={setEditNum} search={search} />
  //     </div>

  //   </div>
  // </>

  return <>
    <div className='App'>
      <div className='calendar' >
            <Buttons nowYear={nowYear} setNowYear={setNowYear} nowMonth={nowMonth} setNowMonth={setNowMonth} months={months} month={month} setMonth={setMonth} />
            <Days nowYear={nowYear} nowMonth={nowMonth} firstWeekDays={firstWeekDays} setFullDate={setFullDate} active={active} setActive={setActive} />
      </div>

      <div className='edit' >
        <Addition notes={notes} setEditNum={setEditNum} setNotes={setNotes} setSearch={setSearch} setValue={setValue} editNum={editNum} value={value} date={date} fullDate={fullDate} />
        <Search setSearch={setSearch} setNotes={setNotes} notes={notes} setEditNum={setEditNum} search={search} />
      </div>

    </div>
  </>
}






























// let date = new Date();
// let [nowYear, setNowYear] = useState(date.getFullYear());
// let [nowMonth, setNowMonth] = useState(date.getMonth());
// let firstWeekDays = new Date(nowYear, nowMonth, 1).getDays();
// let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
// let [month, setMonth] = useState(months[date.getMonth()]);


// function switchMonth(e, el) {
//   let direction;
//   if (e.target.innerHTML === 'назад') {
//     direction = 'back';
//     if (months[months.indexOf(el) - 1] === undefined) {
//       setNowMonth(11)
//       setMonth(months[11])
//     } else {
//       setNowMonth(nowMonth - 1)
//       setMonth(months[months.indexOf(el) - 1]);
//     }
//   } else {
//     direction = 'forward';
//     if (months[months.indexOf(el) + 1] === undefined) {
//       setNowMonth(0);
//       setMonth(months[0]);
//     } else {
//       setNowMonth(nowMonth + 1);
//       setMonth(months[months.indexOf(el) + 1]);
//     }
//   }
//   if (direction === 'forward' && nowMonth === 11) {
//     setNowYear(nowYear + 1)
//   } else if (direction === 'back' && nowMonth === 0) {
//     setNowYear(nowYear - 1)
//   }
// }

// function createDays(numOfDayss) {
//   let Days = [];
//   if (firstWeekDays === 0) firstWeekDays = 7;
//   for (let i = 0, k = 0; k < numOfDayss; i++) {
//     if (i < firstWeekDays - 1) {
//       Days[i] = <td key={nanoid()}></td>;
//     } else {
//       k++;
//       Days[i] = <td key={nanoid()}>{k}</td>;
//     }
//   }

//   let first = [];
//   let second = [];
//   let third = [];
//   let fourth = [];
//   let fifth = [];
//   let sixth = [];
//   let seventh = [];
//   let main = [
//     <tr key={nanoid()}>{first}</tr>,
//     <tr key={nanoid()}>{second}</tr>,
//     <tr key={nanoid()}>{third}</tr>,
//     <tr key={nanoid()}>{fourth}</tr>,
//     <tr key={nanoid()}>{fifth}</tr>,
//     <tr key={nanoid()}>{sixth}</tr>,
//     <tr key={nanoid()}>{seventh}</tr>,
//   ]

//   Days.forEach((elem, ind) => {
//     if (ind < 7) first.push(elem)
//     else if (ind < 14) second.push(elem)
//     else if (ind < 21) third.push(elem)
//     else if (ind < 28) fourth.push(elem)
//     else if (ind < 35) fifth.push(elem)
//     else if (ind < 42) sixth.push(elem)
//     else if (ind < 49) seventh.push(elem)
//   });
//   return main;
// }

// return <>
//   <div>
//     <div>
//       <button onClick={(e) => switchMonth(e, month)}>назад</button>
//       <span>{nowYear} {month}</span>
//       <button onClick={(e) => switchMonth(e, month)}>вперед</button>
//     </div>
//     <table>
//       <thead>
//         <tr>
//           <td>Понедельник</td>
//           <td>Вторник</td>
//           <td>Среда</td>
//           <td>Четверг</td>
//           <td>Пятница</td>
//           <td>Суббота</td>
//           <td>Воскресенье</td>
//         </tr>
//         {createDays(new Date(nowYear, nowMonth + 1, 0).getDate())}
//       </thead>
//     </table>
//   </div>
// </>



export default App;

