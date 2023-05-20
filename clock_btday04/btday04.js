const minutes1 = document.getElementById("minutes1")
const seconds1 = document.getElementById("seconds1")
const start_1 = document.getElementById("clock_1_start")
const stop_1 = document.getElementById("clock_1_stop")
const pause_1 = document.getElementById("clock_1_pause")

const minutes2 = document.getElementById("minutes2")
const seconds2 = document.getElementById("seconds2")
const start_2 = document.getElementById("clock_2_start")
const stop_2 = document.getElementById("clock_2_stop")
const pause_2 = document.getElementById("clock_2_pause")

const minutes3 = document.getElementById("minutes3")
const seconds3 = document.getElementById("seconds3")
const start_3 = document.getElementById("clock_3_start")
const stop_3 = document.getElementById("clock_3_stop")
const pause_3 = document.getElementById("clock_3_pause")

const minutes4 = document.getElementById("minutes4")
const seconds4 = document.getElementById("seconds4")
const start_4 = document.getElementById("clock_4_start")
const stop_4 = document.getElementById("clock_4_stop")
const pause_4 = document.getElementById("clock_4_pause")

const minutes5 = document.getElementById("minutes5")
const seconds5 = document.getElementById("seconds5")
const start_5 = document.getElementById("clock_5_start")
const stop_5 = document.getElementById("clock_5_stop")
const pause_5 = document.getElementById("clock_5_pause")
let myTime1 = null
let myTime2 = null
let myTime3 = null
let myTime4 = null
let myTime5 = null
second = 0
minute = 0

class clock {
    constructor(minute, second) {
        this.minute = minute 
        this.second = second 
    }

    start_clock1(mm, ss) {
        myTime1 = setInterval(Time, 1000)
        function Time() {
            ss ++
            if (ss === 60) {
                mm++
                ss = 0
            }
            minutes1.textContent = padZero(mm)
            seconds1.textContent = padZero(ss)
        }
    }
    stop_clock1(mm, ss) {
        clearInterval(myTime1)
        minutes1.textContent = padZero(mm)
        seconds1.textContent = padZero(ss)
    }
    pause_clock1(){
        clearInterval(myTime1)
    }

    start_clock2(mm, ss) {
        myTime2 = setInterval(Time, 1000)
        function Time() {
            ss++
            if (ss === 60) {
                mm ++
                ss = 0
            }
            minutes2.textContent = padZero(mm)
            seconds2.textContent = padZero(ss)
    }
    }
    stop_clock2(mm, ss) {
        clearInterval(myTime2)
        minutes2.textContent = padZero(mm)
        seconds2.textContent = padZero(ss)
    }
    pause_clock2() {
        clearInterval(myTime2)    
    }

    start_clock3(mm, ss) {
        myTime3 = setInterval(Time, 1000)
        function Time() {
            ss ++
            if (ss === 60) {
                mm++
                ss = 0
            }
            minutes3.textContent = padZero(mm)
            seconds3.textContent = padZero(ss)
        }
    }
    stop_clock3(mm, ss) {
        clearInterval(myTime3)
        minutes3.textContent = padZero(mm)
        seconds3.textContent = padZero(ss)
    }
    pause_clock3(){
        clearInterval(myTime3)
    }

    start_clock4(mm, ss) {
        myTime4 = setInterval(Time, 1000)
        function Time() {
            ss ++
            if (ss === 60) {
                mm++
                ss = 0
            }
            minutes4.textContent = padZero(mm)
            seconds4.textContent = padZero(ss)
        }
    }
    stop_clock4(mm, ss) {
        clearInterval(myTime4)
        minutes4.textContent = padZero(mm)
        seconds4.textContent = padZero(ss)
    }
    pause_clock4(){
        clearInterval(myTime4)
    }

    start_clock5(mm, ss) {
        myTime5 = setInterval(Time, 1000)
        function Time() {
            ss ++
            if (ss === 60) {
                mm++
                ss = 0
            }
            minutes5.textContent = padZero(mm)
            seconds5.textContent = padZero(ss)
        }
    }
    stop_clock5(mm, ss) {
        clearInterval(myTime5)
        minutes5.textContent = padZero(mm)
        seconds5.textContent = padZero(ss)
    }
    pause_clock5(){
        clearInterval(myTime5)
    }
}

const clock1 = new clock(0,0)
function start1() {
    clock1.start_clock1(0,0)
}
function stop1() {
    clock1.stop_clock1(0,0)
}
function pause1() {
    clock1.pause_clock1()
}

const clock2 = new clock(0,0)
function start2() {
    clock2.start_clock2(0,0)
}
function stop2() {
    clock2.stop_clock2(0,0)
}
function pause2(){
    clock2.pause_clock2()
}

const clock3 = new clock(0,0)
function start3() {
    clock3.start_clock3(0,0)
}
function stop3() {
    clock3.stop_clock3(0,0)
}
function pause3(){
    clock3.pause_clock3()
}

const clock4 = new clock(0,0)
function start4() {
    clock4.start_clock4(0,0)
}
function stop4() {
    clock4.stop_clock4(0,0)
}
function pause4(){
    clock4.pause_clock4()
}
const clock5 = new clock(0,0)
function start5() {
    clock5.start_clock5(0,0)
}
function stop5() {
    clock5.stop_clock5(0,0)
}
function pause5(){
    clock5.pause_clock5()
}

function padZero(num) {
    return num.toString().padStart(2, "0");
}