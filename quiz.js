var ans1 = 7, ans2 = 7, ans3 = 8;
var previousEle;
function xyz(ele, queNo) {
    //alert(queNo);
    var parentEle = ele.parentElement;
    var grandEle = parentEle.parentElement;
    for(var child = 0; child < grandEle.children.length; child++) {

        grandEle.children[child].classList.remove("bg-danger","bg-success");


    }
    var answer; //container jo ki value store karenga
    switch(queNo) {
        case 1:
            answer = ans1;
            break;
        case 2:
            answer = ans2;
            break;
        case 3:
            answer = ans3;
            break;
        default:
            alert("Please select any one of the question");
    }

    if (ele.value == answer) {
        parentEle.classList.add("bg-success");
    } else {
        parentEle.classList.add("bg-danger");
    }


}