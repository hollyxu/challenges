# Structure

See code for true component tree. Initial backbone below.

```javascript
<Main /> (currentView, favouriteIdeas, newIdeas, archivedIdeas)
  <InputPage /> (onEnter)
  <NewPage /> (favouriteIdeas, onFavourite, onArchive, onUnarchive)
    <SecondaryLayout /> (title, onClose, contents)
      {title}
      <NewPageContents />
        <ListItem /> (left, right)
  <FavouritesPage />
    <SecondaryLayout /> (title, onClose, contents)
      {title}
      <FavouritesPageContents />
        <ListItem /> (left, right)
```
