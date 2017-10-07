import React from 'react';

import ListItem from './ListItem';

type Props = {
  newIdeas: Array<string>,
  archivedIdeas: Array<string>,
  onFavouriteIdea: (number) => void,
  onArchiveIdea: (number) => void,
  onUnarchiveIdea: (number) => void,
};

class NewPageContents extends React.Component<void, Props, void>{
  newIdeaActionGenerator = (index: number) => {
    return (
      <div>
        <button onClick={() => {this.props.onFavouriteIdea(index)}} >❤️</button>
        <button onClick={() => {this.props.onArchiveIdea(index)}} >🚫</button>
      </div>
    )
  }

  archivedIdeaActionGenerator = (index: number) => {
    return (
      <div>
        <button onClick={() => {this.props.onUnarchiveIdea(index)}} >🔺</button>
      </div>
    )
  }

  render() {
    return (
      <div className="rc-NewPageContents">
        {this.props.newIdeas.map(
          (idea, index) =>
            <ListItem
              key={'newIdeas' + index}
              item={idea}
              className="new-idea"
              actions={this.newIdeaActionGenerator(index)}
            />
        )}
        {this.props.archivedIdeas.map(
          (idea, index) =>
            <ListItem
              key={'archivedIdeas' + index}
              item={idea}
              className="archived-idea"
              actions={this.archivedIdeaActionGenerator(index)}
            />
        )}
        <div className="clear" />
      </div>
    );
  }
}

export default NewPageContents;
