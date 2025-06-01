import { useUser } from "../contexts/UserContext";

export const DashboardPage = () => {
    const { user } = useUser();

    return (
        <h1>Bem-Vindo, <strong>{user?.fullName}</strong>!</h1>
    );
};

export default DashboardPage;