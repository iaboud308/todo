import { createContext } from "react";





export const AppContext = createContext<any>(null);




const AppContextProvider = ({ children }: any) => {



    return (
        <AppContext.Provider value={null}>
            { children }
        </AppContext.Provider>
    );


}



export default AppContextProvider;