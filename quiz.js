var ans = 7;
var previousEle;
function xyz(ele) {
    var parentEle = ele.parentElement;
    var grandEle = parentEle.parentElement;
    // for(var child = 0; child < grandEle.children.length; child++) {

    //     grandEle.children[child].classList.remove("bg-danger","bg-success");


    // }
    if (previousEle) {
        previousEle.classList.remove("bg-success", "bg-danger");
    }

    if (ele.value == ans) {
        parentEle.classList.add("bg-success");
    } else {
        parentEle.classList.add("bg-danger");
    }

    previousEle = parentEle;
}