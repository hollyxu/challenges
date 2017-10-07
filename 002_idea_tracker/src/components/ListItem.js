import React from 'react';

type Props = {
  item: string,
  actions: React$Element,
  className: string
}

class ListItem extends React.Component<void, Props, void>{
  render() {
    return (
      <div className={'rc-ListItem ' + this.props.className}>
        <div className="item">
          {this.props.item}
        </div>
        <div className="actions">
          {this.props.actions}
        </div>
      </div>
    );
  }
}

export default ListItem;
