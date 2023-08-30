function formatTime(seconds) {
    let tempSec = seconds;
    let hh,mm,ss;
    if(!((0 <= seconds<= 86400))) return false;
    hh = Math.floor(seconds/3600)
    mm = Math.floor((seconds - hh*3600)/60);
    ss = Math.floor((seconds - hh*3600 - mm*60));
    return format(hh)+":"+format(mm)+":"+format(ss);
}

//minor function
function format(n) {
    return ('0'+n.toString()).slice(-2);
}


console.log(formatTime(4256));
console.log(formatTime(0));
console.log(formatTime(9) )
console.log(formatTime(3600) ) 