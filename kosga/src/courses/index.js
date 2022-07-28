import React, { Component } from 'react'
import uid from 'uid'
import { categories, courses, teachers } from '../data/'
import CourseAddForm from './CourseAddForm'
import CoursesSearch from './CoursesSearch'
import CoursesList from './CoursesList'
import PropTypes from 'prop-types'



class Courses extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      courses: courses,
      teachers: teachers,
      categories: categories,
      filter: {
        name: '',
        teacher: '',
        categories: [],
        search: ''
      }
    }

    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    this.handleOnSearch = this.handleOnSearch.bind(this)
    this.handleOnFilter = this.handleOnFilter.bind(this)
  }

  handleOnAddCourse(e) {
    //alert('Evento en React')
    e.preventDefault()

    let form = e.target,
      course = {
        id: (form.id.value) ? form.id.value : Courses.defaultProps.id,
        name: (form.name.value) ? form.name.value : Courses.defaultProps.name,
        poster: (form.poster.value) ? form.poster.value : Courses.defaultProps.poster,
        url: (form.url.value) ? form.url.value : Courses.defaultProps.url,
        amount: (form.amount.value) ? form.amount.value : Courses.defaultProps.amount,
        teacher: (form.teacher.value) ? form.teacher.value : Courses.defaultProps.teacher,
        date: form.date.value ? form.date.value : Courses.defaultProps.date,
        categories: (form.categories.value) ? form.categories.value.split(',') : Courses.defaultProps.categories
      }

    this.setState({
      courses: this.state.courses.concat([course])
    })

    form.reset()
  }

  handleOnSearch(e) {
    let newFilter = Object.assign( {}, this.state.filter, { [e.target.name]: [e.target.value] } )

    this.setState({
      filter: newFilter
    })

    //console.log(newFilter)
  }

  handleOnFilter(filter, data) {
    let regex = new RegExp(filter.search, 'i')
    return data.filter(q => ( regex.test(q.name) || regex.test(q.teacher) || regex.test(q.categories) ))
  }

  render() {
    if ( !this.state.courses.length ) {
      return (
        <article className="Main-container">
          <p>No hay cursos :(</p>
        </article>
      )
    } else {
      return(
        <article className="Main-container">
          <CourseAddForm onAddCourse={this.handleOnAddCourse} />
          <CoursesSearch onSearch={this.handleOnSearch} />
          <CoursesList courses={this.handleOnFilter(this.state.filter, this.state.courses)} />
        </article>
      )
    }
  }
}

Courses.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
}

Courses.defaultProps = {
  id: uid(10),
  name: 'Curso Desconocido',
  poster: 'https://ed.team/sites/default/files/edteam-logo-118.png?2abr2017',
  url: 'https://ed.team/cursos',
  amount: 40,
  teacher: 'Profesor No Asignado',
  date: 'Fecha No Definida',
  categories: ['Sin Categoría']
}

export default Courses
