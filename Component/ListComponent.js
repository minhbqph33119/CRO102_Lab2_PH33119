import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'

const ListComponent = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [check, setCheck] = useState(false);
    return (
        <View style={styles.khung}>
            <Text style={{color: '#000000', fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>To Do App</Text>
            <TextInput style={styles.tinput} placeholder='Title' onChange={setTitle} />
            <TextInput style={styles.tinput} placeholder='Content' onChange={setContent} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{color: '#000000', alignSelf: 'center', fontWeight: 'bold', marginStart: 20, fontSize: 15 }}>Đã hoàn thành</Text>

                <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    onClick={() => {
                        isChecked: setCheck(!check)
                    }}
                    isChecked={check}

                />
            </View>
            <TouchableOpacity style={{backgroundColor: '#7F7F7F',alignItems: 'center',width: 150, padding: 15, borderRadius: 10}}>
                <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 15}}>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ListComponent

const styles = StyleSheet.create({
    khung: {
        flex: 1,
        alignItems: 'center'
    },
    tinput: {
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        marginTop: 10
    }
})