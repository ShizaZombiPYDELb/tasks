"use strict";

function liTodo() {
  let taskText = $('#form3').val().trim();
  if (taskText !== "") {
    $(".container").find("p").text(taskText);
    const newTask = $('<li>').addClass('list-group-item todo-item__description d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2 li-item').append($("<input type='checkbox'>").addClass("check-box")).append($('<span>').text(taskText).addClass("todo-item__description")).append($('<button>').addClass("btn btn-secondary btn-sm info").text('info').attr("data-value", taskText)).append($('<button>').addClass('btn btn-danger btn-sm delete-btn').text('Delete'));
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
});
$('.list-group').on("click", ".info", function () {
  const infoText = $(this).attr("data-value");
  $(".container").find("#p").text(infoText);
  $(".container").css("opacity", "1");
});
$(".container").on("click", ".btn-close", function () {
  $(".container").css("opacity", "0");
});
$(".container").on("click", ".close-btn", function () {
  $(".container").css("opacity", "0");
});