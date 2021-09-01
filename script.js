
//------------------------------------------------------
var firstname = 'amine'
var lastname = 'mohammedi'
var space = ' '
var fullname = firstname + space + lastname

console.log(fullname.indexOf('o'))
console.log(fullname.includes('amine'))
 
function ourlenght(str) {

    var l = 'str'.lenght
    console.log(l)
    return l
}
//var result5 = ourlenght('amine mohammedi')
//console.log(result5)
//----------------------------------------------------
function checkpair(num) {
    var mod = num % 2
    if (mod) {
        return false
    }
    else {

        return true
    }
}
var result6 = checkpair(16)
console.log(result6)
//-----------------------------------------------
function chekSign(num) {
    if (num < 0) {
        console.log(num + ' is negative')
    } else {
        if (num === 0) console.log(num + 'is zero')
        else console.log(num + ' is positive')
    }
}
var result7 = chekSign(10)
console.log(chekSign)
document.write(chekSign)
//-----------------------------------------------
function getIndex(day) {
    switch (day) {
        case 'Diamnche':
            console.log(1);
            break;
        case 'Lundi':
            console.log(2)
            break;
        case 'Mardi':
            console.log(3)
            break;
        default:
            console.log('not found')
    }
}
var result8 = getIndex('Mardi')
//-------------------------------------------------------------
function boocl1() {
    for (var i = 1000; i > 10; i = i - 2) {
        var h1 = document.createElement('h1')
        h1.innerHTML = 'The element ' + i
        document.getElementById('iddiv')
            .appendChild(h1)
    }
}

//------------------------------------------------
function boocl2() {
    var i = 0;
    while (i <= 1000) {
        var h1 = document.createElement('h1')
        h1.innerHTML = 'The element ' + i
        document.getElementById('iddiv')
            .appendChild(h1)
        i = i + 10
    }
}
//-------------------------------------------------------
function boocl() {
    var i = 1000;
    do {
        var h1 = document.createElement('h1')
        h1.innerHTML = 'The element ' + i
        document.getElementById('iddiv')
            .appendChild(h1)
        i = i + 10
    } while (i < 1000)
}

document.write(document.getElementById('title'))
//-----------------------------------------------------------

var person = {
    firstname: 'amine',
    adress: 'alger',
    age: 20,
    status: true

}
console.log(person)

var person1 = {
    age: 20,
    showAge: function () {
        alert(this.age);
    },
}
person1.showAge()
console.log(person)
//-----------------------------------------------------
var customer = {};
var order = new Object();

order.amount = 20.3
customer.firstName = 'ppppp'
customer.address = 'Alger'

//------------------------------------------------
var person = {
    firstName: 'Ahmed',
    address: 'Alger',
    age: 20,
    status: true
}


console.log(person)
console.log(customer)
var customer = {};
var order = new Object();

order.amount = 20.3
customer.firstName = 'ppppp'
customer.address = 'Alger'

//------------------------------------------------------------
var person = {
    firstName: 'Ahmed',
    address: {
        line1: 'Saoula',
        line2: ' Rue 01',
        city: 'Algiers',
        country: 'Algeria'
    },
    age: 20,
    status: true
}


console.log(person.address.country)
console.log(customer)
//--------------------------------------------------------
var names = ['amine', 'yacine', 'hichem']
console.log(names)
//---------------------------------------------------
var amounts = [20, 40, 60, 30]
amounts.push(25)  //ajout fin
amounts.unshift(100) //ajout debut
amounts.pop()    //supprimer a la fin
amounts.shift() //supprimer au debut

console.log(amounts)
/************************************ */
var persons = [
    {
        firstName: 'p1',
        address: {
            line1: 'Saoula',
            line2: ' Rue 01',
            city: 'Algiers',
            country: 'Algeria'
        },
        age: 26,
        status: true
    },
    {
        firstName: 'p2',
        address: {
            line1: 'Saoula',
            line2: ' Rue 01',
            city: 'Algiers',
            country: 'Algeria'
        },
        age: 20,
        status: true
    },
    {
        firstName: 'p3',
        address: {
            line1: 'Saoula',
            line2: ' Rue 01',
            city: 'Algiers',
            country: 'Algeria'
        },
        age: 42,
        status: true
    }]
/***************************************** */


for (var i = 0; i < persons.length; i++) {
    console.log(persons[i])
}
//--------------------------------------
for (var p of persons) {
    console.log(p)
    //--------------------------

    for (var i in persons) {
        console.log(persons[i])

    }
}
//-------------------------------------
function minMax(arr) {
    var min = Math.min(...arr)
    var max = Math.max(...arr)
    return [min, max]
}
//-------------------------------------------
function minMax(arr) {
    var min = arr[0]
    var max = arr[0]
    for (var el of arr) {
        if (min > el) min = el;
        else if (max < el) max = el;
    }
    return [min, max]
}
//-----------------------------------------
function lessThan100(a,b) {
	var sum=a+b
	if(sum<100)return true; 
	else return false;
}
console.log(lessThan100)
//------------------------------------------------
function lessThan100(a, b) {
    return a + b < 100 ? true : false;
}
//----------------------------------------------
function largestSwap(num) {   //num = 14
    var dig1 = num % 10;  //dig1 = 4
    var dig2 = (num - dig1) / 10; //dig2 = 1
    var swiped = (dig1 * 10) + dig2; //swaped = 41
    return swiped <= num ? true : false
}