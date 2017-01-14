import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actions';

class UsersList extends Component {

  componentWillMount() {
    if(!this.props.users.length){
      this.props.fetchUsers();
    }
  }

  renderUsers () {
    return this.props.users.map(user => {
      const picSize = {
        height: '45px',
        width: '60px',
        margin: '1em auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        'WebkitBorderRadius': '99em',
        'MozBorderRadius': '99em',
        borderRadius: '99em',
        border: '3px solid #eee',
        boxShadow: '0 3px 2px rgba(0, 0, 0, 0.3)'
      };
      return (
          <img className="network-images" key={user.name} style={picSize} src={user.imageUrl} />
        )
    });
  }

  render() {

    return(
      <div>
        {this.renderUsers.bind(this)()}
      </div>
    );
  }

}

function mapStateToProps (state ) {
  return { users: state.users };
}


export default connect(mapStateToProps, { fetchUsers })(UsersList); //currying {stateData, action ==> component}
