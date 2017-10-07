// @flow

import React from 'react';

type Props = {
  onOpenFavouritesView: () => void,
  onOpenNewView: () => void,
  onEnterIdea: (e: Event) => void
}

class InputPage extends React.Component<void, Props, void>{
  render() {
    const { onEnterIdea, onOpenNewView, onOpenFavouritesView } = this.props;

    return (
      <div className="rc-InputPage">
        <div className="main-contents">
          <form onSubmit={onEnterIdea}>
            <input
              type="text"
              placeholder={'Enter an idea...'}
              className="main-idea-input"
            />
          </form>
        </div>
        <div className="main-footer">
          <button className="main-footer-link" onClick={onOpenNewView}>
            View New Ideas
          </button>
          <span className="main-footer-spacer">*</span>
          <button className="main-footer-link" onClick={onOpenFavouritesView}>
            View Favourites
          </button>
        </div>
      </div>
    );
  }
}

export default InputPage;
