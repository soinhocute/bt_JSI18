//class animal {
// constructor(name) {
//     this.name = name;
// }
// }
// class Rabbit extends animal {
//     super(name) {
//     this.name = name
//     this.created = Date.now();
// }
// }
// let rabbit = new Rabbit("white rabbit");
// alert(rabbit.name);

// class Clock {
//     constructor({ template }) { 
//         this.template = template;
//     }
//     render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds(); 
//     if (secs < 10) secs = '0' + secs;
    
//     let output = this.template
//         .replace('h', hours)
//         .replace('m', mins) 
//         .replace('s', secs);
    
//         console.log(output);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 100)
//     }
//     }

//     class ExtendedClock extends Clock {
//         constructor({ template, dcx = 1000 }) {
//           super({ template });
//           this.dcx = dcx;
//         }
      
//         start() {
//           this.render();
//           this.timer = setInterval(() => this.render(), this.precision);
//         }
        
//       }

//     let clock = new ExtendedClock({ template: 'h:m:s', precision: 500 });
//     clock.start();


// class Phanso {
//     constructor(tu_so, mau_so) {
//         this.tu_so = tu_so
//         this.mau_so = mau_so
//     }
//     cong(ps) {
//         console.log(this.tu_so + "/" + this.mau_so + " + " + ps.tu_so + "/" + ps.mau_so)
//         let tu_moi = this.tu_so * ps.mau_so + ps.tu_so * this.mau_so
//         let mau_moi = this.mau_so * ps.mau_so
//         return new Phanso(tu_moi, mau_moi)
//     }
//     tru(ps) {
//         console.log(this.tu_so + "/" + this.mau_so + " - " + ps.tu_so + "/" + ps.mau_so)
//         let tu_moi = this.tu_so * ps.mau_so - ps.tu_so * this.mau_so
//         let mau_moi = this.mau_so * ps.mau_so
//         return new Phanso(tu_moi, mau_moi)
//     }
//     nhan(ps) {
//         console.log(this.tu_so + "/" + this.mau_so + " x " + ps.tu_so + "/" + ps.mau_so)
//         let tu_moi = this.tu_so * ps.tu_so
//         let mau_moi = this.mau_so * ps.mau_so
//         return new Phanso(tu_moi, mau_moi)
//     }
//     chia(ps) {
//         console.log(this.tu_so + "/" + this.mau_so + " : " + ps.tu_so + "/" + ps.mau_so)
//         let tu_moi = this.tu_so * ps.mau_so
//         let mau_moi = this.mau_so * ps.tu_so
//         return new Phanso(tu_moi, mau_moi)
//     }
//     export() {
//         console.log ("= " + this.tu_so + "/" + this.mau_so)
//     }
//     static nhap() {
//         let tu_so = prompt("tử số: ")
//         let mau_so = prompt("mẫu số: ")
//         return new Phanso(tu_so, mau_so)
//     }
// }

// let phan_so1 = Phanso.nhap()
// let phan_so2 = Phanso.nhap()
// console.log("cộng phân số: ")
// phan_so1.cong(phan_so2).export()
// console.log("trừ phân số: ")
// phan_so1.tru(phan_so2).export()
// console.log("nhân phân số: ")
// phan_so1.nhan(phan_so2).export()
// console.log("chia phân số: ")
// phan_so1.chia(phan_so2).export()



