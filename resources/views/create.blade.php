<form method="post" v-on:submit.prevent="createKeep" accept-charset="utf-8">		
	<div class="modal fade" id="create">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						&times;
					</button>
					<h4>Nueva Tarea</h4>
				</div>
				<div class="modal-body">
					<label for="keep"> Crear Tarea</label>
					<input type="text" name="keep" class="form-control" v-model="newKeep">
					<span v-for="error in errors" class="text-danger"> @{{ error }} </span>
				</div>
				<div class="modal-footer">
					<button type="submit" class="btn btn-primary" value="Guardar">Guardar</button>
				</div>
			</div>
		</div>
	</div>	
</form>		