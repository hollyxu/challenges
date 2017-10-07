require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import InputPage from './InputPage';
import FavouritesPage from './FavouritesPage';
import NewPage from './NewPage';

type State = {
  currentView: 'input' | 'new' | 'favourites',
  favouriteIdeas: Array<string>,
  newIdeas: Array<string>,
  archivedIdeas: Array<string>
}

class AppComponent extends React.Component<void, void, State>{
  state = {
    currentView: 'input',
    favouriteIdeas: [],
    newIdeas: [],
    archivedIdeas: []
  };

  onEnterIdea = (event: Event) => {
    event.preventDefault()

    const idea = event.target.getElementsByTagName('input')[0].value;

    if (idea && idea.length > 0) {
      this.state.newIdeas.push(idea);
      this.setState({
        newIdeas: this.state.newIdeas.slice()
      });
    }

    event.target.reset();
  }

  openNewView = () => {
    this.setState({
      currentView: 'new'
    });
  }

  openFavouritesView = () => {
    this.setState({
      currentView: 'favourites'
    });
  }

  openInputView = () => {
    this.setState({
      currentView: 'input'
    });
  }

  onUnfavouriteIdea = (index: number) => {
    const item = this.state.favouriteIdeas[index];
    this.state.favouriteIdeas.splice(index, 1);
    this.state.newIdeas.push(item);

    this.setState({
      newIdeas: this.state.newIdeas.slice(),
      favouriteIdeas: this.state.favouriteIdeas.slice()
    });
  }

  onFavouriteIdea = (index: number) => {
    const item = this.state.newIdeas[index];
    this.state.newIdeas.splice(index, 1);
    this.state.favouriteIdeas.push(item);

    this.setState({
      newIdeas: this.state.newIdeas.slice(),
      favouriteIdeas: this.state.favouriteIdeas.slice(),
    });
  }

  onArchiveIdea = (index: number) => {
    const item = this.state.newIdeas[index];
    this.state.newIdeas.splice(index, 1);
    this.state.archivedIdeas.push(item);

    this.setState({
      newIdeas: this.state.newIdeas.slice(),
      archivedIdeas: this.state.archivedIdeas.slice()
    });
  }

  onUnarchiveIdea = (index: number) => {
    const item = this.state.archivedIdeas[index];
    this.state.archivedIdeas.splice(index, 1);
    this.state.newIdeas.push(item);

    this.setState({
      newIdeas: this.state.newIdeas.slice(),
      archivedIdeas: this.state.archivedIdeas.slice()
    });
  }

  render() {
    let currentViewComponent;

    switch(this.state.currentView) {
      case 'new': {
        currentViewComponent = (
          <NewPage
            onClose={this.openInputView}
            newIdeas={this.state.newIdeas}
            archivedIdeas={this.state.archivedIdeas}
            onFavouriteIdea={this.onFavouriteIdea}
            onArchiveIdea={this.onArchiveIdea}
            onUnarchiveIdea={this.onUnarchiveIdea}
          />
        );
        break;
      }
      case 'favourites': {
        currentViewComponent = (
          <FavouritesPage
            onClose={this.openInputView}
            favouriteIdeas={this.state.favouriteIdeas}
            onUnfavouriteIdea={this.onUnfavouriteIdea}
          />
        );
        break;
      }
      default: {
        currentViewComponent = (
          <InputPage
            onOpenFavouritesView={this.openFavouritesView}
            onOpenNewView={this.openNewView}
            onEnterIdea={this.onEnterIdea}
          />
        );
      }
    }

    return (
      <div className="rc-Main">
        {currentViewComponent}
      </div>
    );
  }
}

export default AppComponent;
