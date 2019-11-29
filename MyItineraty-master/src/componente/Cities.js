import React from 'react'
import {getCities} from './action/cityActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Cities extends React.Component {

  constructor(props){
    super(props)
    this.state={

    }
  }

  static propTypes = {
    getCities: PropTypes.func.isRequired,
    city: PropTypes.object.isRequired, 
  // isAuthenticated: PropTypes.bool
  };

  async componentDidMount(){
    /*  const res =  await axios.get('http://localhost:5000/api/city');
    this.setState({listaPaises:res.data.cities});
    console.log(this.state.listaPaises); */
   await this.props.getCities();
  }
 

  render() {
    const cities = this.props.cities;
      console.log(cities);

    return(
      <div>
        <ul>
        {cities.map((elem, i)=>{return <button><li key={i}>{elem.name}</li></button>})           }
        </ul>
     </div>
      )
    
  }
};
const mapStateToProps= state =>{
  console.log(state);
  
  return{
  cities: state.city.cities}
};

export default  connect(mapStateToProps,{getCities})(Cities);

