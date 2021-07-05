/* eslint-disable default-case */
const AuthReducer = (stateCurrent, action) =>{
    switch(action.type){
        case "START_SESSION":
            return {
                ...stateCurrent,
                usuEmail: action.data.email,
                usuId: action.data.uid,
                token: action.data.token,
                role:action.data.roles.admin,
                autenticate:true,
                loading:false
            }
        case "CLOSE_SESSION":
            localStorage.removeItem("gdsldfgkl")
            return {
                ...stateCurrent,
                usuEmail:null,
                usuId:null,
                token:null,
                autenticate:false,
                loading:false
            }
    }
}

export default AuthReducer;