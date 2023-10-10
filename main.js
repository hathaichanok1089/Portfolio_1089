window.onload = pageLoad;

function pageLoad()
{
    var B1=document.getElementById("Button1");
    B1.onclick= next_page;

    var B2=document.getElementById("Button2");
    B2.onclick= back_page;

    var ass4=document.getElementById("as4");
    ass4.onclick= linkas4;

    var ass5=document.getElementById("as5");
    ass5.onclick= linkas5;

    var ass6=document.getElementById("as6");
    ass6.onclick= linkas6;

    var ass7=document.getElementById("as7");
    ass7.onclick= linkas7;
}

function next_page(){
    location.href="project.html";
}

function back_page(){
    location.href="index.html";
}

function linkas4()
{
    location.href = "***";
}

function linkas5()
{
    location.href = "***";
}

function linkas6()
{
    location.href = "***";
}

function linkas7()
{
    location.href = "***";
}