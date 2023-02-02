import { Image, StyleSheet, Dimensions, Text } from 'react-native';
import imagem from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return(
        <>
            <Image style={styles.topo} source={imagem} />
            <Text style={styles.titulo}>Detalhes da Cesta</Text>
        </> /*nome disso é um fragment*/
    );
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: "16",
        color: "#fff", 
        fontWeight: "bold",
        padding: 16
    }
});