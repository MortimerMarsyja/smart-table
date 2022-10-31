import React from 'react';


interface HorCellProps {
    content?:string | JSX.Element;
    date:string;
    today:string;
    onClickAction:(date:string) => void;
    arrayOfCells:string[];
    cellsSelector:(strings:string[] | [])=>void;
}

export const HorCalendarCell = (props:HorCellProps):JSX.Element => {
    const {
        content,
        date,
        today,
        onClickAction,
        arrayOfCells,
        cellsSelector,
    } = props;
    const selectedCondition = arrayOfCells.includes(date)
    const onClickFunction = (date:string) => {
        if(selectedCondition){
            cellsSelector(
                arrayOfCells.filter((item) => item !== date)
            );
            return
        }
        onClickAction(date)
    }
    const isToday = () => date === today ? 'isToday' : '' ;
    const isSelected = () => selectedCondition ? 'isSelected' : '';
  return( 
    <div 
        className={`hor-calendar-cell ${isToday()} ${arrayOfCells && arrayOfCells.length > 0 && isSelected()}`} 
        onClick={()=>onClickFunction(date)}
    >
        <div className="hor-calendar-cell__day">
             {date}
        </div>
        <div className="hor-calendar-cell__content">
            {content && content}
        </div>
    </div>
    ) 
}
