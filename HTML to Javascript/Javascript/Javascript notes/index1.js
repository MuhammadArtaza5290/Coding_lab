// Var, let and const ----- line by line comparison.
//  declaration and initialization.

var num; // declaration
var num = 1232; // declaration and initialization

// jab bhi hum variable ko var sy create krta han then wo variable window me add hota hai.
// ye hamsha function scoped hota ha.
// var ke sath jo variable bna ho ga us ko hum dobara sy declare kr sakta han same name sy.
// suppose 
var num = 24;
var num = "structuredCl";
console.log(num);



// <==================== Hoisting ====================>
    // jab bhi js code ko run krta han then ik global execution context create hota hai. is global execution context me do phase hota hai. pehla phase hota hai memory creation phase aur dusra hota hai execution phase.
    // memory creation phase me js engine code ko line by line read krta hai aur jab bhi wo var keyword dekhta hai to wo us variable ke liye memory allocate krta hai aur us variable ko undefined value assign krta hai. is process ko hoisting kehte hain.
    // execution phase me js engine code ko line by line execute krta hai.
    console.log(a);
    var a = 10;
    // is code ko js engine line by line read krta ha. first memory phase me jitna bhi variable hota han un ko just declare kiya jata ha or variable sirf declare kiya jay to us ki value js me undefined hoti ha. then execution phase me code line by line read hota ha console.log(a) execute ho ga or ye variable a ki value ko memory phase sy pick kra ga var a; is ko memory phase sy mila so its means it is undefined, so ya terminal me undefined print krwa dy ga, then next line me a variable ko 10 value assign kr dy ga.
    
    console.log('output of b',b);
    let b;
    // Jab code run hota hai to pehle memory phase me let b declare hota hai, lekin usay undefined assign nahi hota balki wo TDZ me hota hai (uninitialized).Phir execution phase me jab console.log('output of b', b) run hota hai to engine b ko access karta hai. b memory me to mil jata hai, lekin wo abhi tak initialize nahi hua hota (TDZ me hota hai), is liye ReferenceError: Cannot access 'b' before initialization aata hai.❌ Error aate hi execution stop ho jata hai, is liye next line let b; kabhi run nahi hoti.

    console.log('output of c',c);
    const c = 20;
    // Jab code run hota hai to pehle memory phase me const c declare hota hai, lekin usay undefined assign nahi hota balki wo TDZ me hota hai (uninitialized).Phir execution phase me jab console.log('output of c', c) run hota hai to engine c ko access karta hai. c memory me to mil jata hai, lekin wo abhi tak initialize nahi hua hota (TDZ me hota hai), is liye ReferenceError: Cannot access 'c' before initialization aata hai.❌ Error aate hi execution stop ho jata hai, is liye next line const c = 20; kabhi run nahi hoti.

    console.log("global execution starts");
    var globalVar = "I am global variable";
    function globalFunc() {
        console.log("I am a global function");
    }
    console.log(globalVar); // Output: I am global variable
    globalFunc(); // Output: I am a global function
    console.log("global execution ends");

    // in this case memory phase me globalVar aur globalFunc dono declare ho jate hain. globalVar is undefined hota hai aur globalFunc is function definition ke sath memory me store ho jata hai. then execution phase me first console.log("global execution starts") chla ga then  console.log(globalVar) run hota hai to wo globalVar ki value ko print krta hai jo ki "I am global variable" hoti hai, then globalFunc() run hota hai to wo apna ik local execution context create krta ha is ke bhi 2 phases hota han ik memory and dusra execution phase is me bhi same process perform hota ha globalFunc function ko execute krta hai aur "I am a global function" print krta hai. and after exection the function local execution context destroy ho jata hai. then last me console.log("global execution ends") run hota hai to wo "global execution ends" print krta hai.