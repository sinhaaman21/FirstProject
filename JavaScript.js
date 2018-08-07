		var plusTranslateX = document.getElementById("slide");
		var minusTranslateX = document.getElementById("slide");
		var steps = 320;
		
		function moveRight(){
			if (validateTranslateValue(getIntFromTransformProperty(plusTranslateX.style['transform']))){
				plusTranslateX.style['transform'] = transalateX(getIntFromTransformProperty(plusTranslateX.style['transform'] )-steps);
			}
			else {
				plusTranslateX.style['transform'] = transalateX(-1080);
			}			
		}
		
		function moveLeft(){
			if (validateTranslateValue(getIntFromTransformProperty(minusTranslateX.style['transform']))) {
				minusTranslateX.style['transform'] = transalateX(getIntFromTransformProperty(minusTranslateX.style['transform'] )+steps);
			}else {
				minusTranslateX.style['transform'] = transalateX(0);
			}
		}
		
		function getIntFromTransformProperty(t){
			return parseInt(t.slice(t.indexOf("(")+1,t.indexOf(")")))||0;
		}
		
		function transalateX(i){
			return "TranslateX(" + i +"px)"
		}
		function validateTranslateValue(q)
		{
			return (q <= 0 && q >= -1080);
		}
		
		var arrayImage = ["slider1.png", "slider2.png", "slider1.png", "slider2.png", "slider1.png", "slider2.png", "slider1.png"];
		var arrayText = ["Text A", "Text B", "Text C", "Text D", "Text E", "Text F", "Text G"];
		var parent = document.getElementById("slide");

		create();
		
		function create(){

			for (var i=0; i< arrayImage.length; i++){
				var div = document.createElement("div");
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
		}