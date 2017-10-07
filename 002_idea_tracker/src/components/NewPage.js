import React from 'react';

import SecondaryLayout from './SecondaryLayout';
import NewPageContents from './NewPageContents';

type Props = {
  onClose: () => void,
  newIdeas: Array<string>,
  archivedIdeas: Array<string>,
  onFavouriteIdea: (number) => void,
  onArchiveIdea: (number) => void,
  onUnarchiveIdea: (number) => void,
};

class NewPage extends React.Component<void, Props, void>{
  render() {
    return (
      <SecondaryLayout onClose={this.props.onClose} title={'New Ideas'}>
        <NewPageContents
          newIdeas={this.props.newIdeas}
          archivedIdeas={this.props.archivedIdeas}
          onFavouriteIdea={this.props.onFavouriteIdea}
          onArchiveIdea={this.props.onArchiveIdea}
          onUnarchiveIdea={this.props.onUnarchiveIdea}
        />
      </SecondaryLayout>
    );
  }
}

export default NewPage;
