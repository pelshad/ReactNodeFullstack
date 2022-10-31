import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

let nextId = 0; // todo idx의 정의
const initialState = [];

export const todoSlice = createSlice({
    // reducer 이름
    name : 'todofunction',
    // initialState 데이터 초기값
    initialState,
    // 액션형식 지정
    reducers:{
        add : (state, action) => {
            nextId++;
            state.push({
                id : nextId,
                //action.payload 전달할 값
                //데이터 전달방식에 따라 사용법 다름
                //데이터를 {email:'값'}으로 넘길시 action.payload.email
                //그냥 바로 넘기면 action.payload
                text : action.payload,
                complete : false,
            });
            const ins_user = async() => {
                const response = await axios.post('https://localhost:8080/ins_user',
                {NAME: state});
            }
        },

        remove : (state, action) => {
            return state.filter(e => e.id !== action.payload)
        },

        complete : (state, action) => {
            return state.map(e => e.id === action.payload 
                   ? {...e, complete : !e.complete}
                   : e)
        }

    }
})

export const {add, remove, complete} = todoSlice.actions
//store에서 add, remove, complete 액션을 내보낸다.
export default todoSlice.reducer