enquire.register("screen and (min-width:1024px)", {
	match:function() {
		console.log("uuhhhh")
		$("#gallery-brewers").cycle();
	},
	unmatch:function() {
		$("#gallery-brewers").cycle("destroy");
		$("#gallery-brewers img").attr("style","");
	}
}).listen();