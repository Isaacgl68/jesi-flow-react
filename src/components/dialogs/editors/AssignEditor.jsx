import React, {Component, Fragment} from 'react';
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import cloneDeep from 'lodash/cloneDeep';
import '../dialogs.scss';
import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react";
import { observable } from "mobx";
import {pick} from "lodash";


@observer
class AssignEditor extends Component {

    state = {
    };
    @observable workingData = {
        name:'',
        from: '',
        to:''
    };

    constructor(props) {
        super(props);
        this.workingData = pick(props.dataType,['name', 'from', 'to'] );

    }

    handleChange = name => event => {
        this.workingData[name]= event.target.value;
    };

    getValue() {
        const {dataType} = this.props;
        dataType.name = this.workingData.name;
        dataType.from = this.workingData.from;
        dataType.to = this.workingData.to;
        return dataType;

    }


    render() {

        return <form>
            <Grid container direction="column" justify="center" alignItems="flex-start">
                <TextField
                    autoFocus
                    id="nameText"
                    label="Name"
                    className="textField"
                    value={this.workingData.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="fromText"
                    label="From"
                    className="textField"
                    value={this.workingData.from}
                    onChange={this.handleChange('from')}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="fromText"
                    label="To"
                    className="textField"
                    value={this.workingData.to}
                    onChange={this.handleChange('to')}
                    margin="normal"
                    fullWidth
                />

            </Grid>
        </form>
    }
};

AssignEditor.propTypes = {
    dataType: PropTypes.object.isRequired
};

export default AssignEditor;