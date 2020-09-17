import React, {Component} from 'react'
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color'
import {
    InputGroup,
    Input,
    InputGroupAddon,
    Button
} from 'reactstrap';

class ColorPicker extends Component {

    static defaultProps = {
        initialColor: '#000'
    };

    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
            color: this.props.initialColor,
        };
    }

    handleClick = () => {
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    };

    handleClose = () => {
        this.setState({displayColorPicker: false})
    };

    handleChange = (color) => {
        this.setState({color: color.hex});
        this.props.colorChanged(this.props.id, color.hex);
    };

    handleInit = () => {
        this.setState({color: this.props.initialColor});
        this.props.colorChanged(this.props.id, this.props.initialColor);
    }

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '60px',
                    height: '100%',
                    borderRadius: '2px',
                    //background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
                    background: `${this.state.color}`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (

            <div>
                <div className="d-flex">
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <div style={styles.swatch} onClick={this.handleClick}>
                                <div style={styles.color}/>
                            </div>
                        </InputGroupAddon>
                        <Input value={this.state.color} readOnly={true}/>
                        <InputGroupAddon addonType="append"><Button onClick={this.handleInit}>
                            <div className="glyph-icon simple-icon-reload"/>
                        </Button></InputGroupAddon>
                    </InputGroup>
                </div>

                {
                    this.state.displayColorPicker ?
                        <div style={styles.popover}>
                            <div style={styles.cover} onClick={this.handleClose}/>
                            <SketchPicker color={this.state.color}
                                          onChange={this.handleChange}
                                          disableAlpha={true}
                            />
                        </div> :
                        null
                }

            </div>
        )
    }
}

export default ColorPicker