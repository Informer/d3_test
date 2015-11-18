var svg = dimple.newSvg("#graph",350,400);

var nd = [{
	"label" : "Mobile",
	"value": 95
	
},
{
	"label" : "Smartphone",
	"value": 74
	
},
{
	"label" : "tablet",
	"value": 46
	
}

];



console.log(nd);


var chart = new dimple.chart(svg,nd);

var x	= chart.addCategoryAxis("x", "label");
var y	= chart.addMeasureAxis("y", "value");


    
   x.hidden = true;
   y.hidden = true;
   chart.defaultColors = [new dimple.color("#ffc7b7", "#ffffff")];
   chart.addSeries(null, dimple.plot.bar);
   chart.ease = "bounce";
   chart.draw(3000);



$( ".ct" ).text( "UK Mobile stats" );

/* export to png*/



$('#png_DL').click(function(){
	svgenie.save( "#card", {
    name : "graph.png"
})
});


