import { DashboardTop } from "../components/dashboard-top"
import { Leftsidebar } from "../components/leftsidebar"
import { Middlebar } from "../components/middlebar"
import { Rightsidebar } from "../components/rightsidebar"
export function Dashboard(){
    return(
        <>
        <DashboardTop/>
        <Leftsidebar/>
        <Rightsidebar/>
        <Middlebar/>
        </>
    )
}