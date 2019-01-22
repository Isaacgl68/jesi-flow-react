import * as FlowNodeTypes from '../utils/consts/FlowNodeTypes';
import {initTypeConfigMap} from './Configuration';

/*import {default as FlowComponent} from "../components/flowComponents/FlowComponent";
import SimpleFlowContainer from "../components/flowComponents/SimpleFlowContainer";
//import BaseFlowDataType from "../store/dataTypes/BaseFlowDataType";
import AssignDataType from "../store/dataTypes/AssignDataType";
import ExitDataType from "../store/dataTypes/ExitDataType";
import IfDataType from "../store/dataTypes/IfDataType";
import WhileDataType from "../store/dataTypes/WhileDataType";
import DataTypeFactory from "../store/dataTypes/DataTypeFactory";*/


const tagsToTypeMapping = new Map([
    ['assign',FlowNodeTypes.ASSIGN],
    ['exit',FlowNodeTypes.EXIT],
    ['if',FlowNodeTypes.IF],
    ['while',FlowNodeTypes.WHILE]

]);

const newTypesSelectionList = [
    FlowNodeTypes.ASSIGN,
    FlowNodeTypes.IF,
    FlowNodeTypes.WHILE,
    FlowNodeTypes.EXIT]


class AppConfiguration{

    _typeConfigMap = null;
    constructor(){
        this.getTypeByName = this.getTypeByName.bind(this);
    }

    get  newTypesSelectionList(){
       return newTypesSelectionList;
    }
    get  typesMap(){
        const that = this;
        if (!that._typeConfigMap)that._typeConfigMap = initTypeConfigMap();
        return that._typeConfigMap;
    }
    getTypeByName(typeName){

        const config = this.typesMap.get(typeName);
        return config;
    }

    getRunTimeTypeByName(typeName,props){

        const runtimeClass = this.getTypeByName(typeName).dataClass;
        return  new runtimeClass(props);
    }

    getTypeByTag(tagName){
        const type =  tagsToTypeMapping.get(tagName);
        return this.typesMap.get(type);
    }
}
export default new AppConfiguration();