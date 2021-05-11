//var ans1 = 7, ans2 = 7, ans3 = 8;
//arr   index 0, 1, 2

class Car {
    constructor(modal, year) {
        this.modal = modal;
        this.year = year;
    }

    getYear() {
        return this.year;
    }
}

var audiCar = new Car("Audi",1992);
console.log(audiCar);



var modalToggle = document.getElementById('exampleModal');
var myModal = new bootstrap.Modal(modalToggle); //Module
console.log(myModal)
///myModal.show();


var ansArr = [7, 7, 8, 6];

var scoreDiv = document.getElementById("score");
var userAns = [];
function storeAns(ele,queNo) {
    userAns[(queNo -1)] = { ele: ele, val: ele.value };
    var parentEle = ele.parentElement;
    var grandEle = parentEle.parentElement;
    for(var child = 0; child < grandEle.children.length; child++) {
        grandEle.children[child].classList.remove("bg-danger","bg-success");
    }
}
var score;
function checkAns() {
    //alert(queNo);
    score = 0;
    for(var i=0; i<userAns.length; i++ ) {
        console.log(userAns[i])
        if(userAns[i]) {
            var ele = userAns[i].ele, queNo = i+1;
            var parentEle = ele.parentElement;
            if (userAns[i].val == ansArr[queNo - 1]) {
                score++;
                scoreDiv.textContent = score + "/4";
                parentEle.classList.add("bg-success");
            } else {
                parentEle.classList.add("bg-danger");
            }
        }
    }
    showModal();
}

function showModal() {
    if(score >= 3) {
        myModal.show();
    }
}