<?php
$url=$_GET['url'];
?>
<html>
<head>
<noscript>
<meta http-equiv="Refresh" content="0;URL=<? echo $url; ?>" />
</noscript>
<script type="text/javascript">
<!--
function exec_refresh()
{
window.status = "<<<-- Yönlendiriliyorsunuz -->>>" + myvar;
myvar = myvar + " .";
var timerID = setTimeout("exec_refresh();", 0);
if (timeout > 0)
{
timeout -= 1;
}
else
{
clearTimeout(timerID);
window.status = "";
window.location = "<? echo $url; ?>";
}
}
 
var myvar = "";
var timeout = 150;
exec_refresh();
//-->
</script>
 
<meta http-equiv="Content-Type" content="text/html; charset=windows-1254">
<title>Sandalca.com - Site Yükleniyor...</title>
<meta name='turbobit' content='wodoodepo@hotmail.com'>
</head>
<body>
<div align="center">
<center>
<p align="center">&nbsp;</p>
<p align="center"><font size="11" color="#FFFFFF" face="Comic Sans MS">
<span style="background-color: #0000FF">Sandalca.com</span></font></p>
<p align="center"><font size="11" color="#FFFFFF" face="Comic Sans MS">
<span style="background-color: #FF0000">İndirme Linkine Yönlendiriliyorsunuz ...</span></font></p>
</center>
</div>
</body>
</html>
