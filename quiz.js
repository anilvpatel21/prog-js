//var ans1 = 7, ans2 = 7, ans3 = 8;
//arr   index 0, 1, 2
var ansArr = [7, 7, 8, 6];
var score = 0;
var scoreDiv = document.getElementById("score");
function xyz(ele, queNo) {
    //alert(queNo);
    var parentEle = ele.parentElement;
    console.log(parentEle);
    var grandEle = parentEle.parentElement;
    for(var child = 0; child < grandEle.children.length; child++) {

        grandEle.children[child].classList.remove("bg-danger","bg-success");


    }

    if (ele.value == ansArr[queNo - 1]) {
        score++;
        scoreDiv.textContent = score + "/4";
        parentEle.classList.add("bg-success");
    } else {
        parentEle.classList.add("bg-danger");
    }

    for(var child = 0; child < grandEle.children.length; child++) {
        grandEle.children[child].firstChild.removeAttribute("onclick");
    }


}