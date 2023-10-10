window.onload = pageLoad;

function pageLoad()
{
    var B2=document.getElementById("Button2");
    B2.onclick= back_page;
}

function back_page(){
    location.href="index.html";
}