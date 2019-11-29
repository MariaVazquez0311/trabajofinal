import React from 'react';
import './App.css';

class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityfilter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      cityfilter: e.target.value
    })
    this.props.onChange(event.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by City: </label>
        <input type="text" id="filter" 
          value={this.state.cityfilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default filterForm

