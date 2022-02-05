import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import Spinner from "./components/UI/Spinner";
import { ToastContainer } from "react-toastify";

function App() {
	const [isLoading, setisLoading] = useState(true);
	useEffect(() => {
		// dispatch(getFlowers());
		setisLoading(false);
	}, []);

	if (isLoading) {
		return <Spinner />;
	}

	const MainRouter = lazy(() => import("./Routes/MainRouter"));

	return (
		<Suspense fallback={<Spinner />}>
			<ToastContainer />
			<MainRouter />
		</Suspense>
	);
}

export default App;
