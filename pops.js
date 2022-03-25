var puShown = false;
doc_title = document['title']['split'](/[,Â»|]+/)[0]['replace']('\'', '')['replace']('"', '')['replace']('mp3 olarak', '')['replace']('mp3 formatÄ±na', '')['replace']('dÃ¶nÃ¼ÅŸtÃ¼rÃ¼ldÃ¼', '')['replace']('olarak indir', '')['replace']('mp3 indir', '')['replace']('isimli ÅŸarkÄ±', '')['replace']('adli mahni', '')['replace']('yuklenmeye hazirdir', '')['replace']('mp3 yuklenmeye', '')['replace']('indir', '')['replace']('ÅŸarkÄ±yÄ±', '')['replace']('ÅŸarkÄ±sÄ±nÄ±', '')['replace']('ÅŸarkÄ±', '');
console.log();
title_words = doc_title.split(' ')
urlimg = '';
imgmeta = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[property="twitter:image"]');
imgurl = imgmeta && imgmeta.getAttribute("content");
urlimg = imgurl && '&i=' + imgurl;
if (urlimg === null) urlimg = '';
if (title_words.length > 5) doc_title = title_words[0] + ' ' + title_words[1] + ' ' + title_words[2] + ' ' + title_words[3] + ' ' + title_words[4]
newtitle = doc_title && '&title=' + doc_title;
function doOpen(url)
{
if ( puShown == true )
{
return true;
}
win = window.open(url, 'ljPu', 'toolbar,status,resizable,scrollbars,menubar,location,height=760,width=800');
if ( win )
{
win.blur();
puShown = true;
}
return win;
}
function setCookie(name, value, time)
{
var expires = new Date();
expires.setTime( expires.getTime() + time );
document.cookie = name + '=' + value + '; expires=' + expires.toGMTString();
}
function getCookie(name) {
var cookies = document.cookie.toString().split('; ');
var cookie, c_name, c_value;
for (var n=1; n<cookies.length; n++) {
cookieÂ  = cookies[n].split('=');
c_nameÂ  = cookie[0];
c_value = cookie[1];
if ( c_name == name ) {
return c_value;
}
}
return null;
}
function initPu()
{
if ( document.attachEvent )
{
document.attachEvent( 'onclick', checkTarget );
}
else if ( document.addEventListener )
{
document.addEventListener( 'click', checkTarget, false );
}
}
function checkTarget(e)
{
if ( !getCookie('popundr') ) {
var e = e || window.event;
var win = doOpen('https://sandalca.club');
setCookie('popundr', 1, 1*60*60*1000);
}
}
initPu();
