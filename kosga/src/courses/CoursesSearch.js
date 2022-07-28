import React from 'react'
import './courses-search.css'

const CoursesSearch = props => (
  <form className="pure-form  SearchForm">
    <input type="search" id="search" name="search" onChange={props.onSearch} placeholder="Cursos, Profesores, Categorías" />
    <label htmlFor="search">
      <i className="fa fa-search"></i>
    </label>
  </form>
)

export default CoursesSearch