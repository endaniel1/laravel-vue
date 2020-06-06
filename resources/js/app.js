 new Vue({
    el: '#crud',
    created: function(){
    	this.getKeeps();
    },
    data:{
    	keeps:[]
    },
    methods:{
    	getKeeps:function(){
    		var urlkeeps="tasks";
    		axios.get(urlkeeps).then(response=>{
    			this.keeps=response.data;
    		});
    	}
    }
});
