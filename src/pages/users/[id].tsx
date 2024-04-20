import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import UserDetails from "../../components/UserDetails";
import { useStore } from "../../store";
import { useUsers } from "@/hooks/useUser";

const UserDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { users } = useUsers();
  const user = users?.find((u: any) => u?.id === Number(id));
  console.log();

  return <Layout>{user ? <UserDetails user={user} /> : <div>Loading...</div>}</Layout>;
};

export default UserDetailsPage;
