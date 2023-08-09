$(document).ready(function() {
    $("#form-tarefa").submit(function(event) {
        event.preventDefault();
        const nomeTarefa = $("#nome-tarefa").val();
        if (nomeTarefa) {
            $("#lista-tarefas").append(`<li>${nomeTarefa}</li>`);
            $("#nome-tarefa").val("");
        }
    });

    $(document).on("click", "li", function() {
        $(this).toggleClass("concluida");
    });
});