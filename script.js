$(document).ready(function(){
    //current date
    var date = new Date();
    $("#date").html(date);
//---------------------------------------------------------------------------------------------------------
function colorTime() {
    $(".event").each(function (el, element) {
        // console.log(el , element);
        var currentId = parseInt($(this).attr("id"));
        // console.log(currentId);

        //current time
        var currentTime = parseInt(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        if (currentId === currentTime) {
            $(this).addClass('present');
        }
        if (currentId < currentTime) {
            $(this).addClass('past');
        }
        if (currentId > currentTime) {
            $(this).addClass('future');
        }
    });
};
function showEvents() {
    var savedTasks = localStorage.getItem("task");
    var savedTime = localStorage.getItem("taskTime")
    
    console.log(savedTasks);
    console.log(savedTime);  
};
$(".lock").on("click", function () {
    var storeTask = (taskTime , task);
    console.log(storeTask);
    var task = $(this).prev().find(".input").val();
    var taskTime = $(this).prev("id");
            console.log(storeTask);
            $(this).prev().append(" " + "task:" +" "+ task + " ");
            localStorage.setItem( 1, storeTask) 
            // console.log(localStorage);
            // console.log(localStorage.getItem("task"));          
            $(".input").val("");
        });
        $(".newDay").on("click" , function(){
            localStorage.clear();
            location.reload();
        });
        colorTime();
        showEvents();
});