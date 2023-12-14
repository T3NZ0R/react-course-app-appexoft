import {useNavigate} from "react-router-dom";
import {useMemo} from "react";

export function useLogout() {
    const navigation = useNavigate();

    const logout = () => {
        localStorage.removeItem("auth--token");
        navigation("/login");
    }
    return useMemo(() => ({logout}), [navigation]);
}
