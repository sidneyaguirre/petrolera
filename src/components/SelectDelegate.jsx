import React, { Component } from "react";

class SelectDelegate extends Component {
  render() {
    return (
      <div>
        <select name={this.props.name} onChange={this.props.onChange} className="form-control">
            <option value="">Seleccione...</option>
            {this.props.delegate.map(person => {
                return (
                <option value={person.name} key={person.email}>
                    {person.name}
                </option>
                );
            })}
        </select>
      </div>
    );
  }
}

export default SelectDelegate;