import { Label } from "./Label"

export function PersonalDetails({
    nameUpdater,
    emailUpdater,
    numberUpdater,
    addressUpdater
}) {
    return <fieldset>
        <legend>Personal Details</legend>
        <Label 
            name={"Name"}
            callback={nameUpdater}
            type={"text"}
            id={"name"}        
        />
        <Label 
            name={"Email"}
            callback={emailUpdater}
            type={"email"}
            id={"email"}       
        />
        <Label 
            name={"Phone Number"}
            callback={numberUpdater}
            type={"number"}
            id={"phoneNumber"}          
        />
        <Label 
            name={"Address"}
            callback={addressUpdater}
            type={"text"}
            id={"address"}          
        />
    </fieldset>
}