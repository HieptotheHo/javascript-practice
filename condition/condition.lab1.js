function getTicketPrice(age) {
    if(!Number.isInteger(age) || age < 0 || age > 125) return 1;
    if(age < 6 || age > 70) return 0;
    else if(age <= 12) return 20000;
    else if(age>12) return 50000;
}


console.log(getTicketPrice(39));