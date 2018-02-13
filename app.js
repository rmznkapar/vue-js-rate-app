new Vue({
	el: "#appBox",
	data:{
		stars:{
			0:false,
			1:false,
			2:false,
			3:false,
			4:false
		},
		rate:0,
		isRated:false
	},
	methods:{
		shineStar(lastStar){
			if (!this.isRated) {
				for (var i = 0; i <= lastStar; i++) {
					this.stars[i] = true;
				}
				for (var i = 4; i > lastStar; i--) {
					this.stars[i] = false;
				}
				console.log(this.stars);
				this.rate = ++lastStar;
			}
		}
	}
})