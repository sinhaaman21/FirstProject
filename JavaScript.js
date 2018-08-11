		var plusTranslateX = document.getElementById("slide");
		var minusTranslateX = document.getElementById("slide");
		var steps = 320;
		
		function moveRight(){
			var x = getIntFromTransformProperty(plusTranslateX.style['transform'] )-steps;
			plusTranslateX.style['transform'] = x > -1080 ? transalateX(x) : transalateX(-1080);
		}
		
		function moveLeft(){
			var x = getIntFromTransformProperty(minusTranslateX.style['transform'] )+steps;
			minusTranslateX.style['transform'] = x < 0 ? transalateX(x) : transalateX(-10);
		}
		
		function getIntFromTransformProperty(t){
			return parseInt(t.slice(t.indexOf("(")+1,t.indexOf(")")))||0;
		}
		
		function transalateX(i){
			return "TranslateX(" + i +"px)"
		}
		
		var arrayImage = ["slider1.png", "slider2.png", "slider1.png", "slider2.png", "slider1.png", "slider2.png", "slider1.png"];
		var arrayText = ["Text A", "Text B", "Text C", "Text D", "Text E", "Text F", "Text G"];
		var parent = document.getElementById("slide");

		create();
		
		function create(){
		 var html ="";

			for (var i=0; i< arrayImage.length; i++){
				html +=`<div class="imagelist">
							<a><img src="`+arrayImage[i]+`">
								<div>`+arrayText[i]+`</div>
							</a>
						 </div>`;
			}
			parent.innerHTML = html;
		}
			
			
			
			/*	var div = document.createElement("div");
				div.className="imagelist";
				parent.appendChild(div);
				var a = document.createElement("a");
				div.appendChild(a);
				var img = document.createElement("img");
				img.src = arrayImage[i];
				a.appendChild(img);
				var div = document.createElement("div");
				div.innerHTML = arrayText[i];
				a.appendChild(div);
			}
		}*/
		
		
		