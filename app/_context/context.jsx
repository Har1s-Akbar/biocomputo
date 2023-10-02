import React, {useState,useContext,useEffect} from "react"

export const AppContext = React.createContext()

export const ContextProvider = ({children})=> {

    const [open , isOpen] = useState([]);
    // const [] = useState('The Godfather')
    // const [loading,setLoading] = useState(false)

    return <AppContext.Provider value={{open, isOpen}}>
        {children}
    </AppContext.Provider>
}
 export const UseGlobalContext = () => {
    return useContext(AppContext);
}