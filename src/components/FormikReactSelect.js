import React, {Component} from "react";
import Select from "react-select";

export default class FormikReactSelect extends Component {
    handleChange = value => {
        this.props.onChange(this.props.name, value);
    };
    handleBlur = () => {
        this.props.onBlur(this.props.name, true);
    };
    render() {
        return (
            <Select
                className={`react-select ${this.props.className}`}
                classNamePrefix="react-select"
                options={this.props.options}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.props.value}
            />
        );
    }
}