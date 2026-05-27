import { useEffect } from "react"
import { UserService } from "../services/UserService";

export function  DashboardPage() {
    useEffect(() => {
        const service = new UserService();


        service.getPatienData().then((data) => {
            console.log(data);
        });
    }, []);



    return <div>HOLA</div>
}