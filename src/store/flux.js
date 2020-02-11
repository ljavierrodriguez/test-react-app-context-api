const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            name: 'Eliud',
            isAuthenticated: false,
            currentUser: {}
        },
        actions: {
            getLogin(){
                setStore({
                    currentUser: { user: {id: 1, username: 'eliud'}},
                    isAuthenticated: true,
                })
            }
        }
    }
}

export default getState;