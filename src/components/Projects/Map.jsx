const usersData = [
  { id: "1", name: "Rakibul Islam", gmail: "rakibul@example.com", age: "22" },
  { id: "2", name: "Alice Smith", gmail: "alice@example.com", age: "25" },
  { id: "3", name: "Bob Johnson", gmail: "bob@example.com", age: "30" },
  { id: "4", name: "Carol Lee", gmail: "carol@example.com", age: "28" },
  { id: "5", name: "David Brown", gmail: "david@example.com", age: "34" },
  { id: "6", name: "Emily Davis", gmail: "emily@example.com", age: "21" },
  { id: "7", name: "Frank Miller", gmail: "frank@example.com", age: "27" },
  { id: "8", name: "Grace Wilson", gmail: "grace@example.com", age: "26" },
  { id: "9", name: "Henry Moore", gmail: "henry@example.com", age: "33" },
  { id: "10", name: "Ivy Taylor", gmail: "ivy@example.com", age: "29" },
  { id: "11", name: "Jack Anderson", gmail: "jack@example.com", age: "24" },
  { id: "12", name: "Karen Thomas", gmail: "karen@example.com", age: "31" },
  { id: "13", name: "Leo Martin", gmail: "leo@example.com", age: "23" },
  { id: "14", name: "Mia White", gmail: "mia@example.com", age: "20" },
  { id: "15", name: "Nina Harris", gmail: "nina@example.com", age: "32" },
];

function Map() {
  return (
    <div className="bg-gray-900 h-screen text-white flex items-center justify-center p-6">
      <table className="table-auto border-collapse border border-gray-600 w-full max-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-800 text-gray-300 uppercase text-xs">
            <th className="border border-gray-600 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-600 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-600 px-4 py-2 text-left">
              G-mail
            </th>
            <th className="border border-gray-600 px-4 py-2 text-left">Age</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((usersData) => (
            <User usersData={usersData} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
function User({ usersData }) {
  return (
    <>
        <tr className="bg-gray-700 hover:bg-gray-600 transition-colors" key={usersData.id}>
            <td className="border border-gray-600 px-4 py-2">{usersData.id}</td>
            <td className="border border-gray-600 px-4 py-2">{usersData.name}</td>
            <td className="border border-gray-600 px-4 py-2">{usersData.gmail}</td>
            <td className="border border-gray-600 px-4 py-2">{usersData.age}</td>
        </tr>
    </>
  );
}

export default Map;
