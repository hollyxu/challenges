import React from 'react';

import SecondaryLayout from './SecondaryLayout';
import FavouritesPageContents from './FavouritesPageContents';

type Props = {
  onClose: () => void,
  favouriteIdeas: Array<string>,
  onUnfavouriteIdea: (number) => void,
};

class FavouritesPage extends React.Component<void, Props, void>{
  render() {
    return (
      <SecondaryLayout onClose={this.props.onClose} title={'Favourite Ideas'}>
        <FavouritesPageContents
          favouriteIdeas={this.props.favouriteIdeas}
          onUnfavouriteIdea={this.props.onUnfavouriteIdea}
        />
      </SecondaryLayout>
    );
  }
}

export default FavouritesPage;
