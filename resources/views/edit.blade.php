<form method="post" v-on:submit.prevent="updateKeep(fillKeep.id)" accept-charset="utf-8">		
	<div class="modal fade" id="edit">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						&times;
					</button>
					<h4>Editar Tarea</h4>
				</div>
				<div class="modal-body">
					<label for="keep"> Editar Tarea</label>
					<input type="text" name="keep" class="form-control" v-model="fillKeep.keep">
					<span v-for="error in errors" class="text-danger"> @{{ error }} </span>
				</div>
				<div class="modal-footer">
					<button type="submit" class="btn btn-primary" value="Actualizar">Guardar</button>
				</div>
			</div>
		</div>
	</div>	
</form>		