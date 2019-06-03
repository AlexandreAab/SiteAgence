// Fonction header
window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.querySelector("header").style.height = "50px";
                document.querySelector(".menu").style.lineHeight = "50px";
                document.querySelector(".logoimg").style.height = "50px";
                document.querySelector(".logoimg").src = "img/logo-petit.png";
                document.querySelector(".fb").style.marginTop = "1%";
            } else {
                document.querySelector("header").style.height = "139px";
                document.querySelector(".menu").style.lineHeight = "139px";
                document.querySelector(".logoimg").style.height = "139px";
                document.querySelector(".logoimg").src = "img/logo-grand.png";
                document.querySelector(".fb").style.marginTop = "2.5%";
            }
        } 


// Fonction lecteur vidéo
function video(){
    var lec = document.querySelector(".lecteur");
    lec.style.display = "block";
}
function pause(){
    var vid = document.querySelector(".mpeg");
    vid.pause();
}