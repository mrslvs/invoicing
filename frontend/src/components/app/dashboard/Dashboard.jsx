import InvoiceDash from './InvoiceDash'
import ActionItems from './ActionItems'
import DashboardCard from './DashboardCard'

const Dashboard = ({}) => {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 mr-4 ml-4">
            <DashboardCard>
                <InvoiceDash />
            </DashboardCard>
            <DashboardCard>
                <ActionItems />
            </DashboardCard>
            <DashboardCard>
                <InvoiceDash />
            </DashboardCard>
            <DashboardCard>
                <InvoiceDash />
            </DashboardCard>
        </main>
    )
}

export default Dashboard
