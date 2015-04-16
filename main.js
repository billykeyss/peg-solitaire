// Main game entry point
(function($) {
    var board = new Board(BOARDS.english);
    var render_board_template = Handlebars.compile($("#board-template").html());

    function render_board() {
        $(".game-main").html(render_board_template({tiles: board.tiles}));
    }

    render_board();

    $(document).on("click", ".tile.filled", function() {
        var row = $(this).data('row');
        var col = $(this).data('col');

        $('.board .tile').removeClass('selected');
        $(this).addClass('selected');
    });
}(jQuery));
