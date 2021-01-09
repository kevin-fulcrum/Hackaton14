import React,{useEffect,useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'
import ScrollCard from '../components/card/ScrollCard';
import axios from 'axios'
import SkeletonShimer from '../components/skeleton/SkeletonShimer'
import conf from "../../config"

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 0.08,
      backgroundColor: '#13b4ec',
    },
    containerCenter: {  
      flex: 0.85,
      backgroundColor: '#f2f2f2',
    },
    containerEnd: {
      flex: 0.07,
      flexDirection: 'row',
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.15
    },
    home:{
      width: 30,
      height: 30,
      borderRadius: 2,
    },
    back:{
      width: width/14,
      height: height/28,
    }
  });

  

const Profile =({navigation, route})=>{
  const [data, setData]=useState({});
  const [visible, setVisible]=useState(false);
  useEffect(()=>{
    axios.post('https://nameless-plains-78392.herokuapp.com/api/token/',{
      "username": conf.APPI_USUARIO,
      "password": conf.APPI_CLAVE
      })
      .then(
      (response)=>{
        const auth="Bearer "+response.data.access
        axios.get('https://nameless-plains-78392.herokuapp.com/dialisis_peritoneal/?search='+route.params,
        {
          headers:{'Authorization ': auth}
        }
        )
        .then(
          (res)=>{
            setData(res.data)
            setVisible(true)
          }
        )
        .catch(
          (res)=>{
            console.warn('Error:', res)
          }
        )
      }
      )
      .catch(
        (response)=>{
          response===404 ? console.warn('lo sientimos no tenemos servicios') :console.warn('Error:' ,response)
        }
      )  
  },[])

    return(
        <>
        
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{flexDirection: 'row',fontWeight: 'bold', marginTop: 5}}> 
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/ultraviolet/40/000000/back.png',
                    }}
                    style={styles.back}> 
                  </Image>
                  <Text style={{color: '#f2f2f2', marginTop: 3}}>Back</Text>
            </View>
            </TouchableOpacity>
        </View>
        <View style={styles.containerCenter}>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <SkeletonShimer visible={visible}/>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <SkeletonShimer visible={visible}/>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <SkeletonShimer visible={visible}/>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <SkeletonShimer visible={visible}/>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <SkeletonShimer visible={visible}/>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <SkeletonShimer visible={visible}/>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <SkeletonShimer visible={visible}/>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <SkeletonShimer visible={visible}/>
        </View>
        <ScrollCard data={data}></ScrollCard>
        </View>
        <View style={styles.containerEnd}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Principal')}}>
            <View>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/ultraviolet/40/000000/home--v1.png',
                    }}
                    style={styles.home}> 
                  </Image>
            </View>
            </TouchableOpacity>
        </View>
        </>
    )
};

export default Profile;