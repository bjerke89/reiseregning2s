function pdfThis() {
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
var script2 = document.createElement('script');
script.type = 'text/javascript';
script2.type = 'text/javascript';
script.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js';
script2.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js';

head.appendChild(script);
head.appendChild(script2);

document.addEventListener("load", function(){ 

	html2canvas(document.body, {
		onrendered: function (canvas) {
			
			var img = canvas.toDataURL("image/png");
			var doc = new jsPDF("p", "mm", "a5");
			doc.addImage(img, 'png',0,0,150, 180);
			doc.save('a4.pdf');
			}
		})			
	})

}



