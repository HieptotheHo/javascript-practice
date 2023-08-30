function getTaxiCount(passengersCount) {
    

    if(passengersCount <= 4) return 1
    else if(passengersCount <=7) return 1
    else {
        return Math.floor(passengersCount/7) + getTaxiCount(passengersCount%7);
    }    
    
}

console.log(getTaxiCount(42));