import {format} from 'date-fns';


/**
 * 
 * @param {String} string 
 * @param {String} type - 'yyyy.mm.dd'
 * @returns {String}
 * 
 */
export function formatDate(string, type){
  const date = new Date(string);
  return format(date, type);
}