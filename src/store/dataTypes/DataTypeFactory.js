import BaseContainerDataType from './BaseContainerDataType'
import AssignDataType from './AssignDataType';
import ExitDataType from './ExitDataType';
import IfDataType from './IfDataType';
import WhileDataType from './WhileDataType';
import BaseFlowDataType from "./BaseFlowDataType";
import TaskDataType from "./TaskDataType";
import XpathDataType from "./XpathDataType";
import FlowDataType from "./FlowDataType";

const classes ={
    BaseFlowDataType,
    BaseContainerDataType,
    AssignDataType,
    ExitDataType,
    IfDataType,
    WhileDataType,
    TaskDataType,
    XpathDataType,
    FlowDataType

}

class DataTypeFactory {
    static createDataType(typeName, config){
        return new classes[typeName](config);
    }
    static getDataTypeClass(typeName){
        return classes[typeName];
    }
}

export default DataTypeFactory;