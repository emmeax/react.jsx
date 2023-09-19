import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/card";
import Welcome from "./components/Welcome";

function App() {
  const arr = [
    {
      id: 1,
      age: 15,
      disable: false,
      description:
        "Software Engineer with a passion for building scalable web applications.",
      position: "Software Engineer",
      company: "TechCorp",
      name: "Alice Johnson",
      image:
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1694620881/cld-sample-3.jpg",
    },
    {
      id: 2,
      age: 20,
      disable: false,
      description:
        "Marketing Specialist with expertise in digital marketing strategies.",
      position: "Marketing Specialist",
      company: "Marketing Pro",
      name: "Bob Smith",
      image:
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1694620880/cld-sample-2.jpg",
    },
    {
      id: 3,
      age: 25,
      disable: false,
      description:
        "Experienced Project Manager skilled in leading cross-functional teams.",
      position: "Project Manager",
      company: "Project Solutions Inc.",
      name: "Carol Davis",
      image:
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1694620880/cld-sample.jpg",
    },
    {
      id: 4,
      age: 30,
      disable: false,
      description:
        "Creative Graphic Designer known for delivering stunning visuals.",
      position: "Graphic Designer",
      company: "DesignMasters",
      name: "David Brown",
      image:
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1694620845/sample.jpg",
    },
  ];
  return (
    <div className="flex text-black flex-col p-20 gap-20 bg-cover bg-[#1C1F33] ">
      {/* <h1
        className="text-3xl font-bold underline bg-[#F7B2BD] text-orange-300  m-10 p-[100px] pt\
    "
      >
        Hello world!
      </h1>
      <div>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br /> Molestias amet repudiandae atque, labore repellat distinctio
          dicta quod reprehenderit corporis ape
        </p>
      </div> */}
      <div className="  ">
        <h1 className="text-5xl text-white">
          An enterprise template to
          <br /> ramp up your company
          <br /> website
        </h1>
        {/* <Welcome /> */}

        <div className="flex gap-5 m-10 h-80 ">
          {arr.map((item) => (
            <Card
              description={item.description}
              position={item.position}
              company={item.company}
              name={item.name}
              image={item.image}
              age={item.age}
              disable={item.disable}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
