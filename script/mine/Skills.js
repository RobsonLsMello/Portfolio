var skills = [];

class Skill{
    constructor(src, alt, title, prof, conteudo) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.prof = prof;
        this.conteudo = conteudo;
    }
    gerarSkillHtml(){
        var html = 
        '<div class="col-3" style="margin-bottom:20px">'+
            '<div>'+
                '<img src="'+this.src+'" alt="'+this.alt+'" title="'+this.title+'" class="skill"  data-toggle="popover" data-content="'+this.conteudo+'" width="100px" height="100px">'+
            '</div>'+
            '<div>';
        for(var i = 0; i<5; i++)
        {
            html += '<img src="img/star.svg" alt="star" title="star" width="20px" height="20px" class = "';
            if(i >= this.prof)
                html += 'desativado';
            html += '">';
        }
        html += 
            '</div>'+
        '</div>';
        $(function(){
            $("#reSkills").html($("#reSkills").html() + html);
        })
    }
}

function criarSkill(_src, _alt, _title, _prof){
    var skill = {
        src : _src,
        alt : _alt,
        title : _title
    }
    skills.push(skill);
}
skills.push(new Skill("img/html5.svg", "Html5", "Html5", 3,"Semântica"));
skills.push(new Skill("img/css-3.svg","css","css",2,""));
skills.push(new Skill("img/js.png","js","js",3,""));
skills.push(new Skill("img/jQuery-2.png","jQuery","jQuery",3,""));
skills.push(new Skill("img/AJAX_logo_by_gengns.svg.png","AJAX","AJAX",2,""));
skills.push(new Skill("img/php.svg","php","php",3,""));
skills.push(new Skill("img/aspnet.png","aspnet","aspnet",4,""));
skills.push(new Skill("img/c.svg","c++","c++",2,""));
skills.push(new Skill("img/csharp.svg","csharp","csharp",4,""));
skills.push(new Skill("img/java.svg","java","java",3,""));
skills.push(new Skill("img/eclipse.png","eclipse","eclipse",2,""));
skills.push(new Skill("img/mysql.svg","mysql","mysql",4,""));
skills.push(new Skill("img/cisco.svg","cisco","cisco",1,""));
skills.push(new Skill("img/word.svg","word","word",3,""));
skills.push(new Skill("img/excel.svg","excel","excel",4,""));
skills.push(new Skill("img/powerpoint.svg","powerpoint","powerpoint",2,""));

skills.forEach(element => {
    element.gerarSkillHtml();
});
$(function(){
    $(".skill").hover(function(){
        $(this).popover('show');
    }).mouseleave(function(){
        $(this).popover('hide');
    })
})
