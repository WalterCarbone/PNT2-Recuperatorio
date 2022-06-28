<template>

  <section class="src-components-respuestas">
    <h1>Multiple Choice</h1>


     <table class="table table-dark" >
      <th>Número de pregunta</th>
      <th>Respuesta</th> 
       <tr>
            <tr v-for="(pregunta,index) in preguntas" :key="index" >
                <td>{{pregunta.numero}}</td>
                <td>{{pregunta.respuestas}}</td>

          </tr>  
      </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
          preguntas :[
            {numero: 1, respuestas:"c,d"},
            {numero:2, respuestas:'c'},
            {numero:3, respuestas:'b'}
          ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas {

  }
</style>
