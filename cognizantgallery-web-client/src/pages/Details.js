import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  console.log(id);
  return <h1>Details of car no {id}</h1>;
}
