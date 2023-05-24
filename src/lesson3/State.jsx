import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "jasurbek",
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };

    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };

    const onChange = ({ target: { value } }) => {
      this.setState({ title: value });
    };

    const onSelect = (e) => {
      console.log(e.target.value);
    };

    const onCheck = (e) => {
      console.log(e.target.checked);
    };

    return (
      <>
        <h1>Count:{this.state.count}</h1>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>

        <input type="text" placeholder="name" onChange={onChange} />
        <h1>{this.state.title}</h1>

        <select onChange={onSelect}>
          <option value="uz" key="">
            uz
          </option>
          <option value="ru" key="">
            ru
          </option>
          <option value="kz" key="">
            kz
          </option>
        </select>

        <input type="checkbox" onChange={onCheck} />
      </>
    );
  }
}
