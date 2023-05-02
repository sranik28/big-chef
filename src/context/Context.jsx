import { createContext, useContext } from "react";

const ContextCreate = createContext();

const DataProvider = ({ children }) => {

    const allData = {user:"abtahi"}

    return <ContextCreate.Provider value={allData}>
        {children}
    </ContextCreate.Provider>
}

const useDataGlobally = () => {
    return useContext(ContextCreate)
}

export { DataProvider, useDataGlobally }