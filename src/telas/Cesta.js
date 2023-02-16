import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import imagem from '../../assets/topo.png'
import imagemFazendeiro from '../../assets/logo.png'

const width = Dimensions.get('screen').width; // O Dimensions verifica qual é o tamnho da tela

export default function Cesta(){
    return <>
            <Image style={styles.topo} source={imagem} />
            <Text style={styles.titulo}>Detalhes da Cesta</Text>

            <View style={styles.cesta}>
                <Text style={styles.nome}>Cesta de verduras</Text>
                <View style={styles.sessaoFazendeiro}>
                    <Image source={imagemFazendeiro} style={styles.imagemLogoFazendeiro}/>
                    <Text style={styles.nomeFazendeiro}>Jenny Jack Farm</Text> 
                </View>
                <Text style={styles.descricao}>
                    Uma cesta com produtos selecionados
                    cuidadosamente da fazenda direto para sua 
                    cozinha
                </Text>
                <Text style={styles.preco}>R$ 40,00</Text>
            </View>
        </> /*nome disso é um fragment*/
    
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width, //578 é a altura da imagem e 768 é a largura da imagem
    },
    titulo: {
        width: "100%",
        position: "absolute", 
        textAlign: "center",
        color: "#fff", 
        fontWeight: "bold",
        padding: 16,
        fontSize: 16
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    sessaoFazendeiro: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemLogoFazendeiro:{
        width: 32,
        height: 32
    },
    nomeFazendeiro: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 10
    },
    descricao: {
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});