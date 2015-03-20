var Stepper = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },
  increment: function (){
    this.setState({count: this.state.count += 1});
  },
  decrement: function () {
    this.setState({count: this.state.count -= 1});
  },
  render: function (){
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <input type="number" value={this.state.count} readOnly />
      </div>
    );
  }
});

React.render(
  <Stepper/>,
  document.getElementById('content')
);
