$(function(){
    $(window).resize(function(){
        if($(this).width() < 768){
            mdColider();
        }       
        else{
            $("#colider").collapse("show");
            $("#nav").height($(this).height());
            $("#colider").css("margin-top", "200px");
            $(".foto").attr("width", 150);
            $(".foto").attr("height", 150);
            $(".foto").css("visibility", "visible");
            $("#btnColapseShow").attr('hidden', 'hidden');
        } 
    }).ready(function(){
        if($(this).width() < 768){
            mdColider();
        }
        else{
            $("#btnColapseShow").attr('hidden', 'hidden');
        }
    })
})

function mdColider(){
    $("#colider").collapse("hide");
    $("#nav").removeClass("navColider");
    $("#nav").height("100px");
    $("#colider").css("margin-top", "0px");
    $(".foto").attr("width", 0);
    $(".foto").attr("height", 0);
    $(".foto").css("visibility", "hidden");
    $("#btnColapseShow").removeAttr('hidden');
}

$("#ano").html(function(){
    var date = new Date();
    var yInicio = 2018;
    var mInicio = 1;
    var year = date.getFullYear();
    var month = date.getMonth();
    var anoAtual = year - yInicio;
    var semestres  = 0;
    if(month > 6){
        semestres++;        
    }
    if(mInicio == 1)
    {
        semestres++;
    }
    return (semestres+(anoAtual*2)) + "° Semestre, término previsto: Dezembro/2022";
})

$(window).scroll(function(){
   verificar($(this));
});
$(function(){
    verificar($(window));
})
function verificar(windows)
{
    var scroll = windows.scrollTop();
    if(scroll >= $("#sobre").position().top && scroll <= $("#projetos").position().top){
        $("#sobrelink").removeClass("desativado");
        $("#formacaolink").addClass("desativado");
        $("#skillslink").addClass("desativado");
        $("#projetoslink").addClass("desativado");
    }
    else if(scroll >= $("#projetos").position().top && scroll <= $("#formacao").position().top){
        $("#projetoslink").removeClass("desativado");
        $("#sobrelink").addClass("desativado");
        $("#skillslink").addClass("desativado");
        $("#formacaolink").addClass("desativado");
    }
    else if(scroll >= $("#formacao").position().top && scroll <= $("#skills").position().top){
        $("#formacaolink").removeClass("desativado");
        $("#sobrelink").addClass("desativado");
        $("#projetoslink").addClass("desativado");
        $("#skillslink").addClass("desativado");
    }
    else if((scroll + 500) >= $("#skills").position().top){
        $("#skillslink").removeClass("desativado");
        $("#sobrelink").addClass("desativado");
        $("#projetoslink").addClass("desativado");
        $("#formacaolink").addClass("desativado");
    }
}
