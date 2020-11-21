import React from 'react';

import css from "./Calendar.module.scss";

export const Calendar = () => {
    return (
        <div className={css.calendar}>
            <div style={{display: "flex"}}>
                <TimesColumn />
                <div className={css.columns}>
                    <Column/>
                    <Column/>
                    <Column/>
                    <Column/>
                    <Column/>
                    <Column/>
                    <Column/>
                </div>
            </div>
        </div>
    );
};

const TimesColumn = () => {
    const times = [
        "",
        "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 AM",
        "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", ""
    ]

    return (
        <div>
            {times.map(time => <div className={css.hourSpan}><Hour>{time}</Hour></div>)}
        </div>
    );
}

const Hour = ({children}) => {
    return children ? 
        (
            <span style={{position: "relative", top: "-.5rem"}}>
                {children}
            </span>
        )
        : null;
}

const Column = () => {
    return <div className={css.column} />;
}

const TopRow = () => {
    // has the create an event button and the dates row
}

const DatesRow = ({startDate}) => {
    const dates = [startDate];
    for (let i = 1; i < 7; i++) {
        const previousDay = dates[i - 1];
        console.log(previousDay);
        dates.push(getNextDay(previousDay));
    }
    return (<div className={css.DatesRow}>
        {dates.map(date => <DateBox date={date} />)}
    </div>);
}

const DateBox = ({date}) => {
    const dayOfMonth = date.getDate();
    const dayName = date.toDateString().substring(0, 3);
    return (
        <div className={css.DateBox}>
            <div>{dayOfMonth}</div>
            <div>{dayName}</div>
        </div>
    );

};

function getNextDay(date) {
    const dayInMs = 24 * 60 * 60 * 1000;
    return new Date(date.getTime() + dayInMs)
}
