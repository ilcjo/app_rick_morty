import React from 'react'
import { connect } from 'react-redux';
import Card from './Card';
import { removeFav } from '../redux/actions';




function Favorites({ myFavorites, onClose, removeFav }) {

  function closeFav(id){
    onClose(id)
    removeFav(id)
  }
  return (
    <div>
      <span>Favorites</span>
      {myFavorites &&
        myFavorites.map((e, index) => {
          return (
            <Card
              key={index}
              id={e.id}
              name={e.name}
              status={e.status}
              species={e.species}
              gender={e.gender}
              origin={e.origin?.name}
              image={e.image}
              onClose={()=> closeFav(e.id)}
            />);
        })}
    </div>
  )
}
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(delet){
  return{
    removeFav: (id) => delet(removeFav(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
