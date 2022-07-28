import React from 'react'






const CoursesAddFor =(props) =>(

   
        <form onSubmit={props.onAddCourse}>
              <input type="text" placeholder="Nombre del Curso" name="name" required/>
              <input type="text" placeholder="profesor" name="teacher" required/>
              <input type="hidden" name="id" value={Math.floor(Math.random()*100)}/>
              <input type="submit" value="Guardar"/>
        </form>

         

)


export default CoursesAddFor