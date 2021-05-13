
var modalToggle = document.getElementById('checkModal');
var myModalObj = new bootstrap.Modal(modalToggle); //Module
//console.log(myModalObj)
///myModal.show();
                //1000ms = 1s * 60 = 60s = 1min * 5 = 5min

var min = 1;
var second  = min * 60; //300s

var timer = document.getElementById('timer');
timer.innerText = min + ':' + '00';  // 5 : 00;

var suSec = 60;

var timeVar = setInterval(function() {
    //display condition
    suSec--;
    timer.innerText = (min - 1) + ':' + ((suSec >= 10) ? suSec : '0' + suSec);
    if(suSec <= 0) {
        min = min - 1;
        suSec = 60;
    }
    //timer condition
    second--;
    if(second <= 0) {
        clearInterval(timeVar);
        checkAns();
    }
},1000);





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
    for(var i=0; i< ansArr.length; i++ ) {
        //console.log(userAns[i])
        var queNo = i+1;
        if(userAns[i]) { //if user have not given any ans (click nahi kia)
            var ele = userAns[i].ele;
            var parentEle = ele.parentElement;
            if (userAns[i].val == ansArr[queNo - 1]) {
                score++;
                scoreDiv.textContent = score + "/4";
                parentEle.classList.add("bg-success");
            } else {
                parentEle.classList.add("bg-danger");
            }
        }
        var grandEle = document.getElementById("q"+queNo);
        showCorrectAns(grandEle,ansArr[queNo - 1]);
    }
    showModal();
}

function showCorrectAns(grandEle, ans) {
    for(var i=0; i<grandEle.children.length; i++ ) {
        if(grandEle.children[i].firstElementChild.value == ans) {
            grandEle.children[i].classList.add("bg-success");
        }
    }
}

function showModal() {
    myModalObj.show(); //programming
}