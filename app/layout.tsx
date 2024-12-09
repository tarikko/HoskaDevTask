import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import "./styles/global.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
