
// function Buttons({ nowYear, setNowYear, nowMonth, setNowMonth, months, month, setMonth }) {
//     function switchMonth(e, el) {
//         let direction;
//         if (e.target.innerHTML === 'назад') {
//             direction = 'back';
//             if (months[months.indexOf(el) - 1] === undefined) {
//                 setNowMonth(11)
//                 setMonth(months[11])
//             } else {
//                 setNowMonth(nowMonth - 1)
//                 setMonth(months[months.indexOf(el) - 1]);
//             }
//         } else {
//             direction = 'forward';
//             if (months[months.indexOf(el) + 1] === undefined) {
//                 setNowMonth(0);
//                 setMonth(months[0]);
//             } else {
//                 setNowMonth(nowMonth + 1);
//                 setMonth(months[months.indexOf(el) + 1]);
//             }
//         }
//         if (direction === 'forward' && nowMonth === 11) {
//             setNowYear(nowYear + 1)
//         } else if (direction === 'back' && nowMonth === 0) {
//             setNowYear(nowYear - 1)
//         }
//     }

//     return <>
//         <tr>
//             <td>
//                 <button onClick={(e) => switchMonth(e, month)}>назад</button>
//             </td>
//             <td></td>
//             <td>{nowYear} </td>
//             <td>
//                 <span className="" >{month}</span>
//             </td>
//             <td></td>
//             <td></td>
//             <td>
//                 <button onClick={(e) => switchMonth(e, month)}>вперед</button>
//             </td>
//         </tr>
//     </>
// }


function Buttons({ nowYear, setNowYear, nowMonth, setNowMonth, months, month, setMonth }) {
    function switchMonth(e, el) {
        let direction;
        if (e.target.innerHTML === 'назад') {
            direction = 'back';
            if (months[months.indexOf(el) - 1] === undefined) {
                setNowMonth(11)
                setMonth(months[11])
            } else {
                setNowMonth(nowMonth - 1)
                setMonth(months[months.indexOf(el) - 1]);
            }
        } else {
            direction = 'forward';
            if (months[months.indexOf(el) + 1] === undefined) {
                setNowMonth(0);
                setMonth(months[0]);
            } else {
                setNowMonth(nowMonth + 1);
                setMonth(months[months.indexOf(el) + 1]);
            }
        }
        if (direction === 'forward' && nowMonth === 11) {
            setNowYear(nowYear + 1)
        } else if (direction === 'back' && nowMonth === 0) {
            setNowYear(nowYear - 1)
        }
    }

    return <>
        <div className="buttons" >
            <button className="buttons__item" onClick={(e) => switchMonth(e, month)}>назад</button>
            <span className="" >{nowYear} {month}</span>
            <button className="buttons__item" onClick={(e) => switchMonth(e, month)}>вперед</button>
        </div>
    </>
}


export default Buttons;

