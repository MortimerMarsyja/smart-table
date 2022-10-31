import React,{useEffect,useState} from 'react';
import StyledHorCalendar from './HorCalendar.style';
import {HorCalendarCell} from './HorCalendarCell';
import { add,format,set } from 'date-fns'
import {monthDays,nextMonthDays,previousMonthDays} from '../../06-Utils/time-utils';


const formatDate = (date:Date) => {
   return format( date,'PPPP')
}

const HorCalendar = (): JSX.Element => {
    const today = new Date();
    const [currentMonthDays,setCurrentMonthDays] = useState<number>();
    const [currentDate,setCurrentDate] = useState<Date>(new Date());
    const [selectedCells,setSelectedCells] = useState<string[] | []>([]);
    const [multiSelectMode,setMultiSelectMode] = useState<boolean>(false);
    const [initialDate,setInitialDate] = useState<string | undefined>();
    const [finalDate,setFinalDate] = useState<string | undefined>();

    const handleKeyPress = (event:KeyboardEvent) => {
        console.log('I enter here')
        if(event.key === 'Shift'){
            console.log('I pressed shift')
          setMultiSelectMode(!multiSelectMode);
        }
    }

    console.log('multiSelectMode',multiSelectMode);

    console.log(selectedCells,'this are the cells selected')

    const getNextMonthDays = () => {
        setCurrentDate(add(currentDate,{months:1}))
        setCurrentMonthDays(nextMonthDays(currentDate));
    }

    const getPreviousMonthDays = () => {
        setCurrentDate(add(currentDate,{months:-1}))
        setCurrentMonthDays(previousMonthDays(currentDate));
    }

    useEffect(()=>{
        setCurrentMonthDays(monthDays()) 
    },[])

    useEffect(()=>{

    },[initialDate,finalDate])

    const selectionAction = (date:string) => {
        if(multiSelectMode){
            selectedCells.length > 0 && setSelectedCells([])
            !initialDate && !finalDate && setInitialDate(date);
            initialDate && !finalDate && setFinalDate(date);
            initialDate && finalDate && setInitialDate(undefined) && setFinalDate(undefined);
            return
        }
        setSelectedCells([...selectedCells,date])
    }

   return(
    <StyledHorCalendar tabIndex="0" onKeyDown={(e:KeyboardEvent)=>handleKeyPress(e)}>
        <div className="calendar-header">
            <button onClick={getPreviousMonthDays}>
                &larr;	
            </button>
            {currentDate && <p>{format( currentDate,'PPPP')}</p>} 
            <button onClick={getNextMonthDays}>
                &rarr;
            </button>
        </div>
        <div className="calendar-body">
            <div className="calendar-body__cell-wrapper">
                {currentMonthDays && Array.from(
                Array(currentMonthDays)).map((x, index) => 
                <HorCalendarCell 
                        key={index}
                        today={formatDate(today)}
                        date={formatDate(set(currentDate,{date:index + 1}))}
                        onClickAction={selectionAction}
                        arrayOfCells={selectedCells}
                        cellsSelector={(strings:string[])=>setSelectedCells(strings)}
                />)
                }
            </div>
        </div>
    </StyledHorCalendar>
   ) 
}

export default HorCalendar;