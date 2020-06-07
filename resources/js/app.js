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
    	},
    	deleteKeep:function(keep){
    		var url="tasks/"+keep.id;
    		axios.delete(url).then(response=>{//eliminamos y mandamos registros
    			this.getKeeps();//Aqui cargamos los registros
    			toastr.success("Eliminado Correctamente");//Aqui mensaje
    		});
    	}
    }
});
