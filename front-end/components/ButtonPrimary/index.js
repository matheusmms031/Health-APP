import { TouchableOpacity, Text } from "react-native";
import styles from './styles'

function ButtonPrimary(props){
    return(
        <TouchableOpacity style={styles.container} {...props}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonPrimary;