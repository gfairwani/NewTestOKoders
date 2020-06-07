import React,{Component} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
   FlatList,
   Text,
   TouchableOpacity,
   ActivityIndicator,
   Image
    
  } from 'react-native';
import axios from 'axios'
import * as constString from './constants/stringConstants'
import userStyle from './userStyle'


export default class Userlist extends Component{

    constructor(props){
        super(props)
        this.state={
            userlist:[],
            isVisible:true,
            setonLoad:false,
            fetchingStatus:false
            
           
        }
      this.pageCount=0
    }

    hitAPIUserList=()=>{
        let that=this
        that.pageCount=that.pageCount+1;
        console.log("pageCount"+that.pageCount)
        that.setState({fetchingStatus:true})

        const url=constString.URL+"?"+"tags=story&page="+that.pageCount

        axios.get(url).then(response=>{
            if(response.data!=null){
              //  console.log("hello"+JSON.stringify(response.data.hits))
                this.setState({userlist:response.data.hits,isVisible:false,setonLoad:true})
            }

        }).catch((error=>{
            this.setState({setonLoad:false,fetchingStatus:false})
        }))
    }

    componentDidMount(){
        
        setInterval(() => {
            this.hitAPIUserList()
            
        }, 10000);
        


    }

    renderLoader=()=>{
        return(
            <View>
            {(this.state.fetchingStatus)
            ? <ActivityIndicator animating = {this.state.isVisible}
           color = '#bc2b78'
           size = "large" style={userStyle.activityIndicatordesign}/>
           :null}
           </View>
           

        )
    }
   

      
    //  componentDidUpdate(){
    //      setInterval(() => {
    //          this.hitAPIUserList()
             
    //      }, 10000);
    //  }    
  

    render(){
        if(this.state.isVisible===true){
            return(
                <View style={userStyle.container}>
                <ActivityIndicator animating = {this.state.isVisible}
               color = '#bc2b78'
               size = "large" style={userStyle.activityIndicatordesign}/>
                </View>

            )
        }


        return(
            <View style={userStyle.container}>
            
               <FlatList 
               style={{marginTop:30}} 
               showsVerticalScrollIndicator={false}
               initialNumToRender={5}
               maxToRenderPerBatch={3}
               onEndReachedThreshold={0.5}
               onEndReached={()=>{
                   this.hitAPIUserList()
               }}
               ListFooterComponent={this.renderLoader}



                    data={this.state.userlist}  
                   
               

                    renderItem={({item,index}) =>  {
                        if(index % 2===0){
        return(
        
        <View style={userStyle.itemCellContainer}>
        <View style={userStyle.itemnamerow}>
        <View style={{flexDirection:'row'}}>


        
        <Text style={userStyle.textName}>Title:</Text>
        <Text numberOfLines={1} style={userStyle.textName}>{item.title}</Text>
        </View>
       

        </View>
        <View style={{flexDirection:'row'}}>


        
<Text style={userStyle.emailtext}>URL:</Text>
<Text numberOfLines={1} style={userStyle.emailtext}>{item.url}</Text>
</View>
 
 <View style={{flexDirection:'row'}}>


        
<Text style={userStyle.emailtext}>author:</Text>
<Text style={userStyle.emailtext}>{item.author}</Text>
</View>
<Text numberOfLines={1} style={userStyle.website}>{item.created_at}</Text>



        

           
        </View>)}
        else{
            return(
                <View style={userStyle.itemCellContainerodd}>
        <View style={userStyle.itemnamerow}>
        <View style={{flexDirection:'row'}}>


        
        <Text style={userStyle.textName}>Title:</Text>
        <Text numberOfLines={1} style={userStyle.textName}>{item.title}</Text>
        </View>
       

        </View>
        <View style={{flexDirection:'row'}}>


        
<Text style={userStyle.emailtext}>URL:</Text>
<Text numberOfLines={1} style={userStyle.emailtext}>{item.url}</Text>
</View>

 <View style={{flexDirection:'row'}}>


        
<Text style={userStyle.emailtext}>Author:</Text>
<Text numberOfLines={1} style={userStyle.emailtext}>{item.author}</Text>
</View>


        
<Text style={userStyle.website}>{item.created_at}</Text>

           
        </View>
            )


        }
                    }}/>
                    </View>)

                   
            

                    
                    
    




}}