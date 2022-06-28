<template>

  <section class="src-components-formulario">
    <h1>Formulario de carga de notas</h1>
    <vue-form :state="formState" @submit.prevent="enviar()">
      <validate tag="div">
          <label for="nombre">Nombre del alumno</label>
              <input 
              type="text"
              id="nombre"
              name="nombre"
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.nombre" 
              no-espacios  
              required
              :minlength="minimoLength" 
              :maxlength="maximoLength"   
                 
               />

            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">El campo nombre es requerido</div>
               <div slot="no-espacios" class="alert alert-danger mt-1">El campo no puede tener espacios intermedios</div>
              <div slot="minlength" class="alert alert-danger mt-1">El campo tiene un mínimo de {{minimoLength }} caracteres</div>
               <div slot="maxlength" class="alert alert-danger mt-1">El campo tiene un máximo de {{maximoLength }} caracteres</div>
            </field-messages>

          </validate>

      <validate tag="div">
          <label for="apellido">Apellido del alumno</label>
              <input 
              type="text"
              id="apellido"
              name="apellido"
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.apellido" 
              no-espacios  
              required
              :minlength="minimoLength" 
              :maxlength="maximoLength"   
                 
               />

            <field-messages name="apellido" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">El campo apellido es requerido</div>
              <div slot="no-espacios" class="alert alert-danger mt-1">El campo no puede tener espacios intermedios</div>
              <div slot="minlength" class="alert alert-danger mt-1">El campo tiene un mínimo de {{minimoLength }} caracteres</div>
               <div slot="maxlength" class="alert alert-danger mt-1">El campo tiene un máximo de {{maximoLength }} caracteres</div>
            </field-messages>

          </validate>    

      <validate tag="div">
          <label for="nota">Nota del alumno</label>
              <input 
              type="number"
              id="nota"
              name="nota"
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.nota" 
             
              required
              :min=0 
              :max=10 
                 
               />

            <field-messages name="nota" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">El campo nota es requerido</div>
            </field-messages>

          </validate>    
             <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
          <hr>
          <h2>Tabla de notas</h2>
          <div v-if="notas.length" class="table-responsive">
            <table class="table table-dark" >
             <th>Nombre y Apellido</th>
             <th>Nota</th> 
          <tr>
            <tr v-for="(nota,index) in notas" :key="index" >
                <td>{{nota.nombre}}, {{nota.apellido}}</td>
                <td :style="{color: analizarNota(nota).color }">{{nota.nota}}</td>

          </tr>       
          </table>
          <table class="table table-dark" >
            <td :style="{color: analizarPromedio(calculoPromedio).color}">Promedio  {{ calculoPromedio}}</td>
          </table>

          </div>
          <div v-else>
           <h5>No hay notas cargadas</h5>
          </div>








   
    </vue-form>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
         formState : {},
         formData : this.getInitialData(),
         notas:[],
         minimoLength:'3',
         maximoLength:'15'
      }
    },
    methods: {
      getInitialData(){
        return{
          nombre:'',
          apellido:'',
          nota:'',
         
        }   
       },

      enviar(){
        let nota ={...this.formData}
        this.notas.push(nota)
        this.formData=this.getInitialData()
        this.formState._reset()
      },
       analizarNota(nota) {
        let valor = nota.nota
        let color = ''
   
        if(valor<=3) color='#FF0000'
        if(valor>3 && valor<7) color='#FFFF00'
        if(valor>6) color ='#008000'
        return {
          valor : valor,
          color
        }
      },

       analizarPromedio(valor) {
        
        let color = ''
   
        if(valor<=3) color='#FF0000'
        if(valor>3 && valor<7) color='#FFFF00'
        if(valor>6) color ='#008000'
        return {
          valor : valor,
          color
        }
      },


    },
    computed: {
      calculoPromedio(){
        let promedio=0
        let suma=0
          for (var i=0;i<this.notas.length;i++){
              suma=suma+parseInt(this.notas[i].nota)
          }
          promedio=suma/this.notas.length

        return promedio
      }


    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
