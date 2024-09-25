var minutesToSeconds = function(time){
    let times = time.split(":");

    let total = (Number(times[0])*60) + Number(times[1]);

    if(Number(times[1] >= 60)){
        return -1;
    }
    else{
        return total;
    }
    
}


console.log(minutesToSeconds("10:45"));