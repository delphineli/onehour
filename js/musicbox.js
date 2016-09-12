$(function() {
	<!--»ÃµÆÆ¬½Å±¾
$('#slider').cycle({speed:5000, timeout: 60000,random:  1});




// ²¥·ÅÆ÷
    var Player;
    Player = {
        // ¸èÇúÂ·¾¶
        path: 'sound/',
 
        // ¸èÇúÊý¾Ý
        data: null,
 

        // µ±Ç°²¥·Å¸èÇúµÄ Ë÷Òý
        currentIndex: 0,//10ÊÇ¸èÇúÊýÁ¿£¬¸Ä±ä

        //  ²¥·ÅÆ÷ÔªËØjquery¶ÔÏó
        $audio: $('#audio'),

        // ¸èÇúÁÐ±í
        $mList: $('#playlist'),

        //ÕýÔÚ²¥·ÅµÄ¸èÇú
        $rmusic: $('#rmusic'),
		

        // ³õÊ¼»¯ Êý¾Ý
        init: function () {

            // Êý¾ÝÒ»°ãÀ´×Ô·þÎñÆ÷¶Ë,Í¨¹ýajax ¼ÓÔØÊý¾Ý,ÕâÀïÊÇÄ£Äâ
            //¸èÇúµÄÊý¾Ý
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/a2.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/a6.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/g2.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/g1.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/z3.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/z4.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/z5.mp3'];
            //if (class="a") { Player.data = ['a.mp3'];}
        },


        // ¾ÍÐ÷
        ready: function () {
			var playnumber = 0;//²¥µ½µÚ¼¸Ê×¸è
			
			function randomsort(a, b) {return Math.random()>.5 ? -1 : 1; }//Ëæ»úÅÅÁÐ
            // ¿ØÖÆ
            Player.data = Player.data.sort(randomsort);
			//alert(Player.data);
			Player.currentIndex = playnumber;
            Player.audio = Player.$audio.get(0);

                Player.$rmusic.html(Player.data[Player.currentIndex]);               
				var currentMusic=Player.data[Player.currentIndex];
				//²¥·ÅÒôÀÖ 
                currentMusic = currentMusic.substring(0,currentMusic.indexOf('.'));
                console.log("Player.currentIndex : " + Player.currentIndex);
                Player.audio.src =Player.data[Player.currentIndex];
                play.className="pause";
				
				//×Ô¶¯ÏÂÒ»Ê×
                audio.onended=function(){$('#next').click();};
				
//$('#myselect').click(function () {Player.data = ['a.mp3'];$('#next').click();});//换歌
var a=0;//counting
$('#myselect').on('click', function(){
                        a++;
                        if(a>=2){
                        inputValuePreset(document.getElementById("myselect").value);    
                        a=0;}                
                });

    function inputValuePreset(PriceName){//这个是输入数据预处理函数

        switch(PriceName){
            case 'n':
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/1.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/2.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/3.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/4.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/5.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/6.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/16.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/8.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/10.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/11.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/12.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/13.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/14.mp3', 'http://chansound.oss-cn-shanghai.aliyuncs.com/15.mp3'];$('#next').click();
            break;
            case 'a1':
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/a.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/z1.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/z6.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/z2.mp3'];$('#next').click();
            break;
            case 'a2':
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/a2.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/a6.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/g2.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/g1.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/z3.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/z4.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/z5.mp3'];$('#next').click();
            break;
            case 'a3':
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/a3.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/a5.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/a4.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/p1.mp3','http://chansound.oss-cn-shanghai.aliyuncs.com/p2.mp3'];$('#next').click();
            break;
            case 'un':
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/un.mp3'];$('#next').click();
            break;
            case 'ac':
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/ac.mp3'];$('#next').click();
            break;
            case 'fa':
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/fa.mp3'];$('#next').click();
            break;
            case 'ra':
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/ra.mp3'];$('#next').click();
            break;
            case 'wi':
            Player.data = ['http://chansound.oss-cn-shanghai.aliyuncs.com/wi.mp3'];$('#next').click();
            break;
        }
    }



            // ²¥·ÅÔÝÍ£ºÍ¼ÌÐø
            $('#play').click(function () {
				
                if(audio.paused){ 				      
			         play.className="pause";
			         audio.play();
					 //playtn = 0;
			    }else{
			         play.className="play";
			         audio.pause();
					 playtn = 1;
		        }
                if (Player.currentIndex == -1) {
                    $('#btn-next').click();
                }
            });
		
			//ÒôÁ¿

	        var volumec=1;

            $('#volume').click(function () {
			 	
	     	 if(volumec==1){
		  	   audio.volume=audio.volume-0.33;
			   if(audio.volume<=0.7){
			   volume.className="volume3";}
			   if(audio.volume<=0.4){
			   volume.className="volume2";}		   
			   if(audio.volume<=0.1){			   
			   volume.className="volume1";	
			   audio.volume=0;volumec=0;return;} 
	    	 }
	    	 if(volumec==0){			   
			  
			   audio.volume=audio.volume+0.33;
			   if(audio.volume>=0.3){
			   volume.className="volume2";}
			   if(audio.volume>=0.6){
			   volume.className="volume3";}
			   if(audio.volume>=0.9){
			   volume.className="volume4";
			   audio.volume=1;volumec=1;}
	           }	   
	         })

            // ²¥·ÅÖ¸¶¨¸èÇú

            // ÏÂÒ»Çú
            $("#next").click(function () {
                playnumber++; 
				//ÏÂÒ»Çú
                if (Player.currentIndex == -1) {
                    Player.currentIndex = 0;
                } else {
                    Player.currentIndex= playnumber;//²»ÖØ¸´²¥·Å									
				    				 
                    if ( playnumber >= Player.data.length ) {
                         Player.data = Player.data.sort(randomsort);
				         //alert(Player.data);
				         playnumber=0;
                         Player.currentIndex = playnumber; }//²¥ÍêÁÐ±íÖØÐÂËæ»ú
											  
                }

                currentMusic = currentMusic.substring(0,currentMusic.indexOf('.'));
                console.log("Player.currentIndex : " + Player.currentIndex);
                Player.audio.src =Player.data[Player.currentIndex];
				play.className="pause";
				
  
            });

        },
        
    };

    Player.init();
    Player.ready();


});






audio.controls = false;





//ÖØÖÃ²¥·ÅÆ÷
function resetPlayer() {
      audio.currentTime = 0; context.clearRect(0,0,canvas.width,canvas.height);
  playpause.title = "Play";
      playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
}

