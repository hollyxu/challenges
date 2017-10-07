import React from 'react';

import ListItem from './ListItem';

type Props = {
  favouriteIdeas: Array<string>,
  onUnfavouriteIdea: (number) => void,
};

class FavouritesPageContents extends React.Component<void, Props, void>{
  favouriteActionGenerator = (index: number) => {
    return (
      <div>
        <button onClick={() => {this.props.onUnfavouriteIdea(index)}}>💔</button>
      </div>
    )
  }

  render() {
    return (
      <div className="rc-FavouritesPageContents">
        {this.props.favouriteIdeas.map(
          (idea, index) =>
            <ListItem
              key={'favourite' + index}
              item={idea}
              actions={this.favouriteActionGenerator(index)}
            />
        )}
        <div className="clear" />
      </div>
    );
  }
}

export default FavouritesPageContents;
