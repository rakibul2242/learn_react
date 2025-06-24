function NestedLoop() {
  const colleges = [
    {
      name: "Greenfield University",
      city: "Dhaka",
      website: "https://greenfield.edu.bd",
      founded: 1998,
      students: [
        {
          id: 1,
          name: "Rakibul Islam",
          age: 22,
          department: "CSE",
          email: "rakibul@greenfield.edu.bd",
        },
        {
          id: 2,
          name: "Afsana Ahmed",
          age: 20,
          department: "EEE",
          email: "afsana@greenfield.edu.bd",
        },
      ],
    },
    {
      name: "Skyline College",
      city: "Chittagong",
      website: "https://skyline.ac.bd",
      founded: 2005,
      students: [
        {
          id: 3,
          name: "Bob Hossain",
          age: 23,
          department: "BBA",
          email: "bob@skyline.ac.bd",
        },
        {
          id: 4,
          name: "Carol Jahan",
          age: 21,
          department: "English",
          email: "carol@skyline.ac.bd",
        },
        {
          id: 5,
          name: "Tanvir Islam",
          age: 22,
          department: "Law",
          email: "tanvir@skyline.ac.bd",
        },
      ],
    },
    {
      name: "Riverdale Institute",
      city: "Khulna",
      website: "https://riverdale.edu.bd",
      founded: 2010,
      students: [
        {
          id: 6,
          name: "Nadia Rahman",
          age: 24,
          department: "Pharmacy",
          email: "nadia@riverdale.edu.bd",
        },
        {
          id: 7,
          name: "Farhan Kabir",
          age: 21,
          department: "CSE",
          email: "farhan@riverdale.edu.bd",
        },
        {
          id: 8,
          name: "Sadia Anjum",
          age: 20,
          department: "Architecture",
          email: "sadia@riverdale.edu.bd",
        },
      ],
    },
    {
      name: "Sunrise University",
      city: "Rajshahi",
      website: "https://sunriseuniv.edu.bd",
      founded: 2015,
      students: [
        {
          id: 9,
          name: "Mahin Reza",
          age: 22,
          department: "Economics",
          email: "mahin@sunriseuniv.edu.bd",
        },
        {
          id: 10,
          name: "Zara Hasan",
          age: 23,
          department: "Sociology",
          email: "zara@sunriseuniv.edu.bd",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-8">College & Student Info</h1>
      <div className="grid gap-6">
        {colleges.map((college, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <p><strong>Name:</strong><span className="ms-1 text-lg font-semibold text-blue-700 mb-2">{college.name}</span></p>
            <p><strong>City:</strong> {college.city}</p>
            <p><strong>Website:</strong> <a href={college.website} target="_blank" className="text-blue-500 underline">{college.website}</a></p>
            <p><strong>Founded:</strong> {college.founded}</p>

            <h3 className="mt-4 font-semibold text-gray-800">Students:</h3>
            <table className="w-full mt-2 border text-sm">
              <thead className="bg-gray-200 text-left">
                <tr>
                  <th className="p-2 border">ID</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Age</th>
                  <th className="p-2 border">Department</th>
                  <th className="p-2 border">Email</th>
                </tr>
              </thead>
              <tbody>
                {college.students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-100">
                    <td className="p-2 border">{student.id}</td>
                    <td className="p-2 border">{student.name}</td>
                    <td className="p-2 border">{student.age}</td>
                    <td className="p-2 border">{student.department}</td>
                    <td className="p-2 border">{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NestedLoop;
