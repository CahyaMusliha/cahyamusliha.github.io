$(document).ready(function(){
    $(".ndut").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_ndut = split[1];

        $(".ndut").removeClass('aktif');
        $("#ndut_"+id_ndut).addClass('aktif');

        

        $("#bagan_1").slideUp();
        $("#bagan_2").slideUp();
        $("#bagan_3").slideUp();
        $("#bagan_"+id_ndut).slideToggle("medium");
    });
});