const UserDetails: React.FC<{ user: any }> = ({ user }) => {
  console.log(user);
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Phone: {user.phone}</p>
      <p className="text-gray-600">Company: {user.company.name}</p>
    </div>
  );
};

export default UserDetails;
