import pizzaData from "../data";

function Details(props) {
  return (
    <div className="div">
      <h2>{props.name}</h2>
      <h2>{props.ingredients}</h2>
      <img src={props.img} alt={props.name} />
    </div>
  );
}

export default function Pizza() {
  return (
    <div>
      <h1>Pizza Menu</h1>
      {pizzaData.map((p) => {
        return (
          <div>
            <Details
              key={p.id}
              name={p.name}
              ingredients={p.ingredients}
              img={p.photoName}
            />
          </div>
        );
      })}
    </div>
  );
}
