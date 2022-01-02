import Link from "react-router-dom";

export default function NavigationBar(){
    return (
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/checkout"}>Cart</Link>
            </li>
          </ul>
        </nav>
    );
}