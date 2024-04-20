import { motion } from "framer-motion";
import Link from "next/link";

const UserList: React.FC<{ users: any[] }> = ({ users }) => {
  return (
    <ul>
      {users.map((user: any) => (
        <motion.li
          key={user.id}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-100 p-4 m-2 rounded-md hover:bg-gray-200 shadow-md"
        >
          <Link href={`/users/${user.id}`}>
            <div className="text-blue-500 hover:text-blue-700">{user.name}</div>
          </Link>
          <p className="text-gray-600">{user.email}</p>
        </motion.li>
      ))}
    </ul>
  );
};

export default UserList;
