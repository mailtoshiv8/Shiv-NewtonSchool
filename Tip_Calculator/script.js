function calculate()
{
    var amount = document.getElementById("bill");
    var experience = document.getElementById("experience");
    var text = document.getElementById("text");
    if(experience==="excellent")
    {
        text.innerHTML = amount*15/100;
    }
    else if(experience==="good")
    {
        text.innerHTML = amount/10;
    }
    else
    {
        text.innerHTML = amount*5/100;
    }
}