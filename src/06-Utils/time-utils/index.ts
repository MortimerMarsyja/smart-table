import { startOfToday,format,getDaysInMonth,add } from 'date-fns'
  
export const monthDays = ():number => {
    const today = startOfToday();
    return getDaysInMonth(today)
}

export const getToday = ():string => {
    return format( startOfToday(),'PPPP');
}

export const getTodayNumber = ():string => {
   return format(startOfToday(),'d');
}

export const nextMonthDays = (date:Date):number => {
    const month = add(date,{
        months: 1
      });
      return getDaysInMonth(month);
}

export const previousMonthDays = (date:Date):number => {
    const month = add(date,{
        months: -1
      });
      return getDaysInMonth(month);
}