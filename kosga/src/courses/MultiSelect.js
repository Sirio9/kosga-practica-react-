import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select'


class MultiSelect extends Component{
  constructor(...props){
  super(...props)

    this.state ={
    	options:this.props.options, 
    	value:[]
    }

     this.handleSelectChange = this.handleSelectChange.bind()

 }
    handleSelectChange(value){
       this.setState({value});

    }
    render(){
        return(
            <Select 
              multi={true}
              simpleValue={true}
              joinValues={true}
              name={this.props.name}
              value={this.state.value}
              options={this.state.options}
              onChange={this.handleSelectChange}
            />


        	)
    }
}

export default MultiSelect