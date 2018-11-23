function loadXMLDoc(dname)
{
if (window.XMLHttpRequest)
 {
 var xhttp=new XMLHttpRequest();
 }
else
 {
 var xhttp=new ActiveXObject("Microsoft.XMLHTTP");
 }
xhttp.open("GET",dname,false);
xhttp.setRequestHeader("Content-Type", "text/xml");
xhttp.send();
return xhttp.responseXML;
}