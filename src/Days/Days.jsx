import { nanoid } from 'nanoid';
import { useState } from 'react';
import './Days.css'


function Days({ nowYear, nowMonth, firstWeekDays,  setFullDate,}) {
    function createDays(numOfDayss) {
        let days = [];
        let columns = [[<p key={nanoid()}  className="column__weekday" >Понедельник</p>], [<p key={nanoid()}  className="column__weekday" >Вторник</p>], [<p key={nanoid()}  className="column__weekday" >Среда</p>], [<p key={nanoid()}  className="column__weekday" >Четверг</p>], [<p key={nanoid()}  className="column__weekday" >Пятница</p>], [<p key={nanoid()}  className="column__weekday" >Суббота</p>],[<p key={nanoid()}  className="column__weekday" >Воскресенье</p>]];
        if (firstWeekDays === 0) firstWeekDays = 7;
        for (let i = 0, k = 0; k < numOfDayss; i++) {
            if (i < firstWeekDays - 1) {
                days[i] = <p className="column__item column__item_hidden"  key={nanoid()}><span>.</span></p>;
            } else {
                k++;
                days[i] = <p className='column__item'  onClick={(e) => setCurrentDate(e.target.innerHTML)} key={nanoid()}>{k}</p>;
            }
        }

        function setCurrentDate(elem) {
            setFullDate('' + elem + nowMonth + nowYear);
         
        }

        days.forEach((elem, ind) => {
            for (let i = 0; i < 7; i++) {
                if (ind%7===i) columns[i].push(elem)
            }
        });

        return columns.map(elem => {
            return <div className='days__column column' key={nanoid()}>
                {elem}
            </div>
        });
    }

    return <div className='days'>
        {createDays(new Date(nowYear, nowMonth + 1, 0).getDate())}
    </div>
}

export default Days;

