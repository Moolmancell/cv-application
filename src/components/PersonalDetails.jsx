import { Label } from "./Label"

export function PersonalDetails({
    nameUpdater,
    emailUpdater,
    numberUpdater,
    addressUpdater
}) {
    return <fieldset className="border border-gray-200 p-5 pt-0 rounded-lg shadow-md mb-4 bg-gray-50">
        <legend className="mb-3 text-lg font-bold text-slate-600">Personal Details</legend>
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