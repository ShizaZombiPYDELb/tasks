import ('../style/style22.css')
import ('../style/style22.1.scss');

function liTodo () {

    let taskText = $('#form3').val().trim();

    if (taskText !== "") {
        $(".container").find("p").text(taskText);
        const newTask = $('<li>')
            .addClass('list-group-item todo-item__description d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2 li-item')
            .append($("<input type='checkbox'>").addClass("check-box"))
            .append($('<span>').text(taskText).addClass("todo-item__description"))
            .append($('<button>').addClass("btn btn-secondary btn-sm info").text('info').attr("data-value", taskText))
            .append($('<button>').addClass('btn btn-danger btn-sm delete-btn').text('Delete'));
        $(".list-group").append(newTask);
    }
}

$("#aadd").on("click", function () {
    liTodo();
    $("input").val("");
});

$(".list-group").on("click", ".check-box", function () {
    $(this).siblings(".todo-item__description").toggleClass("todo-item--checked");
});

$('.list-group').on("click", ".delete-btn", function () {
    $(this).closest("li").remove();
})

$('.list-group').on("click", ".info", function () {
    const infoText = $(this).attr("data-value");
    $(".container").find("#p").text(infoText);
    $(".container").css("opacity", "1");
})

$(".container").on("click", ".btn-close", function () {
    $(".container").css("opacity", "0");
});

$(".container").on("click", ".close-btn", function () {
    $(".container").css("opacity", "0");
});
























//     const taskButton = $('<div>')
//         .addClass('modal-content')
//         .append($('<button>').addClass('btn btn-secondary createTask btn-sm').text('createTask'));
//
//     $(".modal-dialog").append(taskButton);


// $(".modal-dialog").on("show.bs.modal", ".createTask", function () {
//     const task = $("<div>").addClass("modal-content")
//         .append("<div>").addClass("modal-header")
//         .append("<h5>").addClass("modal-title")
//         .append("<button>").addClass("btn-close")
//         .append("<div>").addClass("modal-body")
//         .append("<input type='text' placeholder='pidhi tyta...' id='input'>").addClass("btn-close")
//         .append("<div>").addClass("modal-footer")
//         .append("<button data-bs-dismiss='modal' style=\"display: none>").addClass("btn btn-dark btn-add")
//         .append("<button data-bs-dismiss='modal'>").addClass("btn btn-secondary close-btn")
//     $(".modal-dialog").append(task)
// })




// $("#input").on("input", function() {
//     const isVisible = $(this).val().trim() !== "";
//
//     $(".btn-add").css("display", isVisible ? "block" : "none");
// });
//
// $(".btn-add").click(function() {
//     const taskText = $('#input').val().trim();
//     if (taskText !== "") {
//         const newTask = $('<li>')
//             .addClass('list-group-item d-flex justify-content-between align-items-center')
//             .append($('<span>').text(taskText))
//             .append($('<button>').addClass('btn btn-danger btn-sm delete-btn').text('Delete'));
//         $("#taskList").append(newTask);
//         $("#input").val("");
//         $(".btn-add").css("display", "none");
//     } else {
//         alert("Please enter a task!");
//     }
// });
//
// $("#taskList").on("click",".delete-btn", function() {
//     $(this).closest("li").remove();
// });