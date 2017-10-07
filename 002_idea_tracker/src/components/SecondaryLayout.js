import React from 'react';

type Props = {
  children: React$Node,
  onClose: () => void,
  title: string
}

class SecondaryLayout extends React.Component{
  render() {
    return (
      <div className="rc-SecondaryLayout">
        <div className="header">
          <div className="actions">
            <button className="close-button" onClick={this.props.onClose}>
              x
            </button>
          </div>
          <div className="title">
            {this.props.title}
          </div>
        </div>
        <div className="contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SecondaryLayout;
