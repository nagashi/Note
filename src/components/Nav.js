// load React library
import React from 'react';

// build ES6 class to inherit fron React.Component
class Nav extends React.Component {
  // turn JSX into HTML representation of the component
  render () {
    const { toggleNote, showNote } = this.props;

    return (
      <div className="nav-container">
        <div className="nav=logo">Note</div>
        <div className="nav-button" onClick = {() => toggleNote()}>
          { showNote ? 'Cancel' : '+ Note' }
        </div>
      </div>
    );
  }
}

// export component to be used elsewhere
export default Nav;