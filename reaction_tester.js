var start=new Date().getTime(); //function used to get the time

		function getRandomColor(){

			var letters='0123456789ABCDEF'.split('');

			var color='#';

			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random()*16)];
			}
			return color;
		}


		function makeShapeAppear(){
			
			var top=Math.random()*400;
			var left=Math.random()*400;
			var width=(Math.random()*200)+100;
			//var height=Math.random()+400
 				if(Math.random()>0.5)
 				{
 					document.getElementById("Shape").style.borderRadius="50%";
 				}
 				else{
 					document.getElementById("Shape").style.borderRadius="0%";
 				}

			document.getElementById("Shape").style.backgroundColor=getRandomColor();

			document.getElementById("Shape").style.height=width +"px";
			document.getElementById("Shape").style.width=width +"px";
			document.getElementById("Shape").style.top=top+"px";
			document.getElementById("Shape").style.left=left+"px";


			document.getElementById("Shape").style.display="block";
			 start=new Date().getTime(); 
		}
		function appearAfterDelay(){
			setTimeout(makeShapeAppear, Math.random()*2000);
		}

		appearAfterDelay()  

		document.getElementById("Shape").onclick=function(){
			document.getElementById("Shape").style.display="none";
			var end=new Date().getTime();
			var timeTaken=(end-start)/1000;
			document.getElementById("timeTaken").innerHTML=timeTaken+"s";
			//makeShapeAppear();
			appearAfterDelay();
			
		}
