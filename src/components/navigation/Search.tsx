import React from 'react';

import '../../assets/styles/components/navigation/Search.scss';

class Search extends React.Component {
  private containerRef = React.createRef<HTMLDivElement>();
  private inputRef = React.createRef<HTMLInputElement>();

  handleSubmit = (event?: React.FormEvent) => {
    event?.preventDefault();
  };

  handleClick = () => {
    this.inputRef.current?.focus();
  };

  handleFocus = () => {
    this.containerRef.current?.classList.add('Search__container--highlight');
  };

  handleBlur = () => {
    this.containerRef.current?.classList.remove('Search__container--highlight');
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.inputRef.current?.blur();
      this.handleSubmit();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          ref={this.containerRef}
          className="Search__container"
          onClick={this.handleClick}
        >
          <input
            ref={this.inputRef}
            className="Search__input"
            placeholder="Buscar..."
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </form>
    );
  }
}

export default Search;
