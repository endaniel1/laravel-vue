 new Vue({
    el: '#crud',
    created: function(){
    	this.getKeeps();
    },
    data:{
    	keeps:[],
    	pagination:{//variable de paginacion
    		"total"        :0,
            "current_page" :0,
            "per_page"     :0,
            "last_page"    :0,
            "from"         :0,
            "to"           :0
    	},
    	newKeep:"",//variables q carga el nuevo keep
    	errors:[],//variables q carga los errores
    	fillKeep:{"id":"","keep":""},
    	offset: 3,
    },
    computed:{
    	isActived:function(){//para calcular la pagina activa
    		return this.pagination.current_page;
    	},
    	pagesNumber:function(){
    		if (!this.pagination.to) {//sino tenemos hasta
    			return [];//retornamos nada
    		}
    		//controlando el control de la variable desde y si es negativo
    		var from=this.pagination.current_page - this.offset;//compesamos lo de la pagina actual
    		if (from<1) {
    			from=1;
    		}
    		//controlando el control de la variable hasta y si es mayor a la ultima pagina
    		var to=from +(this.offset * 2);
    		if(to >= this.pagination.last_page){
    			to=this.pagination.last_page;
    		}
    		//
    		var pagesArray=[];
    		while(from <= to){
    			pagesArray.push(from);
    			from++;
    		}
    		return pagesArray;
    	}
    },
    methods:{//metodos a utilizar
    	getKeeps:function(page){//metodo q carga la lista y la paginacion de keep
    		var urlkeeps="tasks?page="+page;//url a autilizar
    		axios.get(urlkeeps).then(response=>{
    			this.keeps=response.data.tasks.data,
    			this.pagination=response.data.pagination
    		});
    	},
    	deleteKeep:function(keep){//metodo de eliminacion
    		var url="tasks/"+keep.id;//url a autilizar
    		axios.delete(url).then(response=>{//eliminamos y mandamos registros
    			this.getKeeps();//Aqui cargamos los registros
    			toastr.success("Eliminado Correctamente");//Aqui mensaje
    		});
    	},
    	createKeep:function(){//metodo de crear
    		var url="tasks";//url a autilizar
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
    		var url="tasks/"+id;//url a autilizar
    		axios.put(url,this.fillKeep).then(response=>{
    			this.getKeeps();//Aqui cargamos o listmos los registros
    			this.fillKeep={"id":"","keep":""};//eliminamos los datos de nuestra keep
    			this.errors=[];//eliminamos los errores
    			$("#edit").modal("hide");//ocultamos la model
    			toastr.success("Tarea Actualizada Correctamente");//mostramos el mensaje de exito
    		}).catch(error=>{
    			this.errors=error.response.data;//Aqui cargamos los datos de errores q nos trae la respuesta
    		});
    	},
    	changePages:function(page){//metodo q cambia de pagina
    		this.pagination.current_page=page;//decimos q la paginacion tenga la pagina actual
    		this.getKeeps(page);//cargamos los keep con la pagina actual
    	}

    }
});
