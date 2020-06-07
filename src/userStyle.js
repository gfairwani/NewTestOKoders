import {StyleSheet} from 'react-native'


const userStyle=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:'100%',
        width:'100%'
    },
    itemCellContainer:{
        width:'80%',
        height:120,
        marginBottom:10,
        backgroundColor:'#D3D3D3',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#000'
    },
    itemCellContainerodd:{
        width:'80%',
        height:120,
        alignSelf:'flex-end',
        marginBottom:10,
        backgroundColor:'#D3D3D3',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#000'
    },
    itemnamerow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5
    },
   
    textName:{
        fontSize:13,
        marginLeft:10,
        fontWeight:'bold',
        width:150
        
    },
    emailtext:{
        fontSize:13,
        marginLeft:10,
        width:150
       

    },

    website:{
        fontSize:16,
        marginLeft:10,
        marginTop:10,
        alignSelf:'center',
        textAlign:'center',
        textDecorationLine: 'underline',
        fontWeight:'bold',
        fontStyle:'italic'
        
    },
    activityIndicatordesign:{
       // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      //  height: 80
    },
    imageIcon:{height:20,width:20,marginRight:10},
    image:{
        height:20,
        width:20
    }
})
export default userStyle