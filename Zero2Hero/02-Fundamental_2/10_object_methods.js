const john = {
  firstName: "John",
  lastName: "Doe",
  age: 2022 - 1990,
  birthYear: 1990, // V2
  job: "dev",
  friends: ["Micheal", "Peter", "Stephen"],
  hasDriverLecense: true,

  // V1   >>      has parameter in function
  // function in object >> method
  // calcAge : function(birthYear){
  //     return 2022 - birthYear;
  // }

  // V2   >>   not have parameter in function
  // chúng ta sử dụng "this" mà không sử dụng "john" vì chúng ta không muốn vi phạm DRY (Don't Repeat Yourself) principle >>> Nếu sử dụng "john" thì khi đổi object name thành john2 thì sẽ phải đổi ở dưới luôn, nếu không thì sẽ báo lỗi
  // calcAge : function(){
  //     return 2022 - this.birthYear;
  // }

  // V3   >>   modify property in object when calling function
  calcAge: function () {
    return (this.age = 2050 - this.birthYear);
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      john.job
    }, and he has ${this.hasDriverLecense ? "a " : "no "} driver's license.`;
  },
};
console.log(john);

console.log("---------1--------");

// V1
// call method
console.log(john.calcAge(1990));

// object['key'](parameter)
console.log(john["calcAge"](1990));

console.log("---------2--------");

// V2
console.log(john.calcAge());

console.log("---------3--------");

// Challenge
// Create getSummary() method to write this sentence out: "John is a 60-years old dev, and he has a driver's license"

console.log(john.getSummary());
