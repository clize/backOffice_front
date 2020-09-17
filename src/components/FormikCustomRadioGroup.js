import React, {Component} from "react";
import { CustomInput } from "reactstrap";

export default class FormikCustomRadioGroup extends Component {
    handleChange = value => {
        this.props.onChange(this.props.name, value);
    };

    handleBlur = () => {
        this.props.onBlur(this.props.name, true);
    };

    render() {
        const {
            name,
            value,
            options,
            inline = false
        } = this.props;

        return (
            <React.Fragment>
                {options.map((child, index) => {
                    return (
                        <CustomInput
                            key={`${name}_${child.value}_${index}`}
                            type="radio"
                            id={`${name}_${child.value}_${index}`}
                            onClick={() => this.handleChange(child.value)}
                            onChange={e => console.log(e.target)}
                            name={child.name}
                            onBlur={this.handleBlur}
                            label={child.label}
                            checked={value === child.value}
                            inline={inline}
                        />
                    );
                })}
            </React.Fragment>
        );
    }
}