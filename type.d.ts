import type {ImageSourcePropType} from "react-native";

// we will do like this in our app it will automaticaly applied no need to import it in every file where we want to use it
// ex:- const MyIcon = ({ focused, icon }: TabIconProps) => { ... }
declare global{
    interface TabIconProps{
        focused: boolean;
        icon: ImageSourcePropType;
    }
}

export{};