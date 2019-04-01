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
        '<div class="col-4" style="margin-bottom:20px">'+
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
skills.push(new Skill("img/php.svg","php","PHP",3,"POO, POE, MVC, emails, manipulação de cookies e sessões, conexão ao banco de dados(PDO), manipução de recepção de arquivos, consumo de webservices"));
skills.push(new Skill("img/aspnet.png","aspnet","Asp.net",4,"POO, POE, MVC, emails, manipulação de sessões, conexão ao banco de dados(MySql, SqlServer), Criação e uso de WebServices, cshtml, razer, NUGET, consumo de webservice e apis, geração de relátorios, manipulação e criação de arquivos"));
skills.push(new Skill("img/mysql.svg","mysql","MySql Programmer",4,"Selects(Simples, joins, subselects), funções, uso de Workbench, criação do banco de dados(relação PK, FK, UQ, objeto de resolução), passagem de toda regras de negócio para o banco, criação de views, procedures, functions, cursores, regex, MD5"));
skills.push(new Skill("img/html5.svg", "Html5", "Html5", 3,"Semântica(Atributos, Data's), Seletores(tag, class, id), Iframe, web integrada(Css, JavaScript, Php/Asp.net)"));
skills.push(new Skill("img/css-3.svg","css","Css 3",2,"Seletores(tag, class, id); Animação(Transição), Filtros, eventos(hover, active, visited, etc), Framework(Bootstrap 4.1)"));
skills.push(new Skill("img/js.png","js","Javascript",3,"POO, POE, manipulação de eventos, DOM, Animação, manipução de cookies, Framework/biblioteca(Bootstrap 4.1, Jquery, SweetAlert), consumo de webservices, básico de ecmascript"));
skills.push(new Skill("img/csharp.svg","csharp","C#",4,"POO, POE, MVC, emails, conexão ao banco de dados(MySql, SqlServer), NUGET, consumo de webservice e apis, geração de relátorios, manipulação e criação de arquivos"));
skills.push(new Skill("img/java.svg","java","Java",3,"POO, POE, MVC, emails, conexão ao banco de dados(MySql), geração de relátorios"));
skills.push(new Skill("img/python.png","py","Python",3,"POO, Ponteiros, manipulação de strings, básico de Django(formato MTV), uso de banco de dados mysql, uso de bibliotecas"));
skills.push(new Skill("img/c.svg","c++","C++",3,"POO, POE, Ponteiros, manipulação de strings, manipulação e criação de arquivos"));
skills.push(new Skill("img/arduino.png","arduino","Arduino",3,"POE, POO, Manipulação e recepção das portas digitais e analogicas, uso e monitoramento de Serial, uso de bibliotecas"));
skills.push(new Skill("img/eclipse.png","eclipse","Eclipse",2,"Uso da linguagem Java(POO, POE), programação para Android, conexão ao banco de dados(sqlLite)"));
skills.push(new Skill("img/unity.png","unity","Unity",3,"Uso da linguagem C#(POO, POE), desenvolvimento 2D e 3D, manipução de assets, criação de animação, scriptable objects, bibliotecas(PlayerPrefsX, Dragable), Prefabs, Sistema RPG(exp, combate, história), conexão ao banco de dados(MySql), consumo de webservices"));
skills.push(new Skill("img/jQuery-2.png","jQuery","jQuery",3,"Manipução de eventos, Manipução e recepção de dados, DOM"));
skills.push(new Skill("img/AJAX_logo_by_gengns.svg.png","AJAX","Ajax",2,"Requição de dados via protocolo, manipução dos dados recebidos"));
skills.push(new Skill("img/word.svg","word","Word",3,"Formatação em regras ABNT, uso de funções"));
skills.push(new Skill("img/excel.svg","Excel","Excel",4,"Manipulação de dados, criação de tabelas dinâmicas, Procv, consumo de webservices, uso de fórmulas, gráficos"));
skills.push(new Skill("img/powerpoint.svg","powerpoint","Powerpoint",2,"Animação, vídeo, designer básico"));
skills.push(new Skill("img/autocad.png","autocad","AutoCad",3,"Plot, construção de desenhos 2D (mecânica) e conjuntos 3D(Criação de Corpos e modelagem)"));
skills.push(new Skill("img/fusion.png","fusion","Fusion 360",3,"Model, Sculpt, Plot, construção de desenhos 2D (mecânica) e conjuntos 3D(Criação de Corpos e modelagem), adição de texturas(Materiais)"));
skills.push(new Skill("img/blender.png","blender","Blender",1,"Escultura de corpos, criação de objetos, adição de texturas,"));
skills.push(new Skill("img/cisco.svg","cisco","Cisco Packet Tracer",1,"Análise e dimensionamento de redes[roteador, hub, máquinas servidores(DHCP, HTTP, DNS) e usuários])"));
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
