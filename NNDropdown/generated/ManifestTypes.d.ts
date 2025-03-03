/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    primarycontrol: ComponentFramework.PropertyTypes.StringProperty;
    relationshipname: ComponentFramework.PropertyTypes.StringProperty;
    relationshipentityname: ComponentFramework.PropertyTypes.StringProperty;
    targetentityname: ComponentFramework.PropertyTypes.StringProperty;
    primaryfieldname: ComponentFramework.PropertyTypes.StringProperty;
    enableLogging: ComponentFramework.PropertyTypes.StringProperty;
    targetentityfilter: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    primarycontrol?: string;
}
