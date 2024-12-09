import React from "react";

interface MediaBoxProps {
	icon: React.ReactNode;
	link: string;
}

const MediaBox: React.FC<MediaBoxProps> = ({ icon, link }) => {
	return (
		<div style={styles.container}>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				style={styles.link}
			>
				{icon}
			</a>
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "50px",
		height: "50px",
		border: "1px solid #ccc",
		borderRadius: "8px",
		padding: "10px",
		boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
	},
	link: {
		textDecoration: "none",
		color: "inherit",
	},
};

export default MediaBox;
