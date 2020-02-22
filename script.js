function pos_plus_1(){
    position++;
    if(position > 2){
        position = position % 3;
    }
}
function pos_less_1(){
    position--;
    if(position < 0){
        position = position % 3;
    }
}
function apply_pos(){
    var c = $('#container');
    c.removeClass();
    c.addClass('move' + position);
}
var position = 0;
$(document).ready (function(){
    $(document).keydown(function(e){
        switch(e.which){
            case 37:
                pos_less_1();
                break;
            case 39:
                pos_plus_1();
                break;
        }
        apply_pos();
    });
});