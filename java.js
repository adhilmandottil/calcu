function buttonclick(val)
{
document.getElementById("screen").value=document.getElementById("screen").value+val

}
function clearscreen()
{
    document.getElementById("screen").value=""
}
function  sumclick()
{
    var adil=document.getElementById("screen").value
    var result=eval(adil)
    document.getElementById('screen').value=result
}
