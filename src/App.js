import AddUsers from "./components/addUsers/AddUsers";
import Navbar from "./components/navbar/Navbar";
import ShowUsers from "./components/showUsers/ShowUsers";
import EditUsers from "./components/editUsers/EditUsers";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="Apsp">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<ShowUsers />} />
					<Route path="/add" element={<AddUsers />} />
					<Route path="/edit/:id" element={<EditUsers />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
