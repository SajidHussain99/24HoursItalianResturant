
console.clear();
clock();
function clock() 
{
    let d = new Date(),
            h = d.getHours(),
            m = d.getMinutes(),
            s = d.getSeconds();

    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;

    document.querySelector('.hour').textContent = h;
    document.querySelector('.min').textContent = m;
    document.querySelector('.sec').textContent = s;



    setTimeout(clock, 1000);
    if((h >=12 && m >= 30) && (h <= 23 && m <= 59))
    {
        document.getElementById("clock").classList.add("resOpen");
        document.getElementById("clock").classList.remove("resClosed");
        document.getElementById("R-open").classList.remove("d-none");
        document.getElementById("R-closed").classList.add("d-none");
    }
    else
    {
        document.getElementById("clock").classList.remove("resOpen");
        document.getElementById("clock").classList.add("resClosed");
        document.getElementById("R-open").classList.add("d-none");
        document.getElementById("R-closed").classList.remove("d-none");

    }
}

    ///////////////////function for copying email and number ////////

    function copyEmail() 
    {
        var copyText = "Clearbusiness.adrianvenoin@gmail.com";
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: Clearbusiness.adrianvenoin@gmail.com");
      }
    function copyNumber() 
    {
            var copyText = "01895447000";
            navigator.clipboard.writeText(copyText.value);
            alert("Copied the text: 01895447000");
    }