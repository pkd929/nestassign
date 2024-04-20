import { useEffect } from "react";
import Link from "next/link";
import { useUsers } from "../hooks/useUser";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const Home = () => {
  const { users, isLoading, isError } = useUsers();
  console.log(users);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data...</div>;

  return (
    <Layout>
      <div className="userList">
        <h1>Users</h1>
        <ul>
          {users.map((user: any) => (
            <motion.li
              key={user.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 rounded-md p-4 mb-4 hover:shadow-md"
            >
              <Link href={`/users/${user.id}`}>
                <div className="text-blue-500 font-semibold hover:text-blue-700">{user.name}</div>
              </Link>
              <p className="text-gray-600">{user.email}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
