import * as React from 'react';
import * as ReactIntl from 'react-intl';

const defaultMessage = `
  Hello {name}, you have {unreadCount, number} {unreadCount, plural,
  one {message}
  other {messages}
}`

class App extends React.Component {
  state = {
    name: 'Eric',
    unreadCount: 1000,
  };

  render() {
    const { name, unreadCount } = this.state;

    return (
      <p>
        <ReactIntl.FormattedMessage
          id="helloWorld"
          defaultMessage={defaultMessage}
          values={{ name: <b>{name}</b>, unreadCount }}
        />
      </p>
    );
  }
}

export default ReactIntl.injectIntl(App as any)