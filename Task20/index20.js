$("#input").on("input", function() {
    if ($(this).val().trim() !== "") {
        $(".btn-add").css("display", "block");
    } else {
        $(".btn-add").css("display", "none");
    }
});

$(".btn-add").click(function() {
    const taskText = $('#input').val().trim();
    if (taskText !== "") {
        const newTask = $(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${taskText}</span>
                    <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                </li>
            `);
        $("#taskList").append(newTask);
        $("#input").val("");
        $(".btn-add").css("display", "none");
    } else {
        alert("Please enter a task!");
    }
});

$("#taskList").on("click",".delete-btn", function() {
    $(this).closest("li").remove();
});