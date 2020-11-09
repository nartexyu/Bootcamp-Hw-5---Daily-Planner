var currentDay = new Date($.now());
$("#currentDay").html(currentDay);

var task = JSON.parse(localStorage.getItem("input"));
if(task == null){
    task = ["","","","","","","","","","","",""];
};

for (i = 9; i < 22; i++) {

    $("#"+i.toString()).html(task[i-9])
    if(i === currentDay.getHours()){
        $("#"+i.toString()).attr("class","form-control present");
    };

    if(i < currentDay.getHours()){
        $("#"+i.toString()).attr("class","form-control past");
    };

    if(i > currentDay.getHours()){
        $("#"+i.toString()).attr("class","form-control future");
    };

};

$(".saveBtn").on("click", function(event) {
    var input = $("#" + event.target.value).val();

    task.splice((event.target.value-9), 1, input)

    localStorage.setItem("input", JSON.stringify(task))
    
});