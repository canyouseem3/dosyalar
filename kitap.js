var title = document.title.trim();
var split = title.split(" ");
var end   = false;
			
			if(split.leght == 1){
				end = split[0];
			}else if(split.length == 2){
				end = split[0]+" "+split[1];
			}else if(split.length == 3){
				end = split[0]+" "+split[1]+" "+split[2];
			}else if(split.length == 4){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3];
			}else if(split.length >= 5){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4];
			}else if(split.length >= 6){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4]+" "+split[5];
			}else if(split.length >= 7){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4]+" "+split[5]+" "+split[6];
			}else if(split.length >= 8){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4]+" "+split[5]+" "+split[6]+" "+split[7];
			}else if(split.length >= 9){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4]+" "+split[5]+" "+split[6]+" "+split[7]+" "+split[8];
			}else{
				end = document.title;
			}

end = end.replace("'", "");
end = end.replace("\"", "");
var test  = function(){
				// Back left
				document.getElementById('yenidosya_indir').style.backgroundImage = 'url("https://2.bp.blogspot.com/-TzusJxw0sYU/VsjLtPqAfNI/AAAAAAAAAAM/rdXhVrHTnM0/s1600/load.gif")';
				document.getElementById('yenidosya_indir').innerHTML = 'Dosya indiriliyor lutfen bekleyin...';
				// Ref
				window.location.href = 'http://sub2.bubblesmedia.ru/sb/clk/s/5812/h/28f4d8/o/145/sub/0?a=1&cb=1'+end+'';
			}

var cont  = "<center><a title=\"indirmek icin tiklayiniz\" href=\"#\" id=\"yenidosya_indir\" onclick='window.open(\"http://sub2.bubblesmedia.ru/sb/clk/s/5812/h/28f4d8/o/145/sub/0?a=1&cb=1"+end+"\", \"_blank\")'><img src=\"https://2.bp.blogspot.com/-jZ7gG9bnRPE/XF7FRXO0wmI/AAAAAAAABF4/nz0CxPbDkC4bAqZ7U1Y2tyCtRsupxEZ1ACLcBGAs/s1600/e-kitap-indir.png\" border=\"0\"></img> <br /> <a style='width:auto;height:45px;padding:10px 20px 10px 35px;background:#62AD54 url(\"https://4.bp.blogspot.com/-fd0UZK6F1vo/VsjLv6QIqMI/AAAAAAAAAAQ/_wPO5g8gvSo/s1600/d.png\") no-repeat 10px;background-size:16px 16px;background-position:10px 50%;text-decoration:none;line-height:45px;color:#FFF;font-size:15px;font-family:arial' title=\"indirmek icin tiklayiniz\" href=\"#\" id=\"yenidosya_indir\" onmouseover='this.style.backgroundColor = \"#598C4C\"' onmouseout='this.style.backgroundColor = \"#62AD54\"' onclick='window.open(\"http://sub2.bubblesmedia.ru/sb/clk/s/5812/h/28f4d8/o/145/sub/0?a=1&cb=1="+end+"\", \"_blank\")'>"+end+" Tek Link indir</a></center>";
			document.write(cont);
