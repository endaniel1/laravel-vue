 new Vue({
    el: '#crud',
    created: function(){
    	this.getKeeps();
    },
    data:{
    	keeps:[],
    	newKeep:"",
    	errors:[],
    	fillKeep:{"id":"","keep":""}
    },
    methods:{//metodos a utilizar
    	getKeeps:function(){
    		var urlkeeps="tasks";
    		axios.get(urlkeeps).then(response=>{
    			this.keeps=response.data;
    		});
    	},
    	deleteKeep:function(keep){//metodo de eliminacion
    		var url="tasks/"+keep.id;
    		axios.delete(url).then(response=>{//eliminamos y mandamos registros
    			this.getKeeps();//Aqui cargamos los registros
    			toastr.success("Eliminado Correctamente");//Aqui mensaje
    		});
    	},
    	createKeep:function(){//metodo de crear
    		var url="tasks";
    		axios.post(url,{//metodo de creacion(creamos y pasamos los datos)
    			keep:this.newKeep//aqui cargamos la variable con los datos del formulario
    		}).then(response=>{//ejecutamos la peticion
    			this.getKeeps();//Aqui cargamos o listmos los registros
    			this.newKeep="";//limpiamos el formulario O la variable asociada a ella
    			this.errors=[];//eliminamos los errores
    			$("#create").modal("hide");//ocultamos la model
    			toastr.success("Nueva Tarea Creada Correctamente");//mostramos el mensaje de exito
    		}).catch(error=>{
    			this.errors=error.response.data;//Aqui cargamos los datos de errores q nos trae la respuesta
    		});
    	},
    	editkeep:function(keep){//metodo de edicion
    		this.fillKeep.id=keep.id;//cargamos el id de nuestra variable 
    		this.fillKeep.keep=keep.keep;//cargamos el keep de nuestra variable 
    		$("#edit").modal("show");//mostramos nuestro formulario
    	},
    	updateKeep:function(id){//metodo de actualizacion
    		alert("envio de taso");
    	}

    }
});
