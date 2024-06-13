import context from "./context.js";
import useAllState from "./useAllState.jsx";
const contextApi = (props) => {
    const state = useAllState()
    const value = {
        ...state
    }
    return (
        <context.Provider value={value}>
            {props.children}
        </context.Provider>
    )
}
export default contextApi