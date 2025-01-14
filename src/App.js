import { useState } from "react";
import "./App.css";

function App() {
	return (
		<div>
			<TextExpander
				collapsedNumWords={10}
				expandButtonText="Show more"
				buttonColor="#ff6622"
			>
				Space travel is the ultimate adventure! Imagine soaring past the stars
				and exploring new worlds. It's the stuff of dreams and science fiction,
				but believe it or not, space travel is a real thing. Humans and robots
				are constantly venturing out into the cosmos to uncover its secrets and
				push the boundaries of what's possible.
			</TextExpander>
			<br />

			<TextExpander
				collapsedNumWords={20}
				expandButtonText="Show text"
				collapseButtonText="Collapse text"
				buttonColor="#ff6622"
			>
				Space travel requires some seriously amazing technology and
				collaboration between countries, private companies, and international
				space organizations. And while it's not always easy (or cheap), the
				results are out of this world. Think about the first time humans stepped
				foot on the moon or when rovers were sent to roam around on Mars.
			</TextExpander>
			<br />

			<TextExpander
				expanded={true}
				className="box"
				collapsedNumWords={5}
				expandButtonText="Show less"
				buttonColor="#ff6622"
			>
				Space missions have given us incredible insights into our universe and
				have inspired future generations to keep reaching for the stars. Space
				travel is a pretty cool thing to think about. Who knows what we'll
				discover next!
			</TextExpander>
		</div>
	);
}

export default App;

function TextExpander({
	children,
	collapsedNumWords,
	expandButtonText,
	buttonColor,
	expanded,
	className = "",
}) {
	const [collapseState, setCollapseState] = useState(collapsedNumWords);
	const [expandedStat, setExpandedStat] = useState(expanded);

	const textContent = children.split(" ");
	const handleToggleText = () => {
		setExpandedStat((s) => !s);
	};

	return (
		<div className={className}>
			{expandedStat ? (
				<>
					<span>{textContent.slice(0, children.length).join(" ")}</span>
					<button style={{ color: buttonColor }} onClick={handleToggleText}>
						{/* {expandButtonText} show less */}
						{expandedStat ? "show less" : expandButtonText}
					</button>
				</>
			) : (
				<>
					<span>{textContent.slice(0, collapseState).join(" ")}...</span>
					<button style={{ color: buttonColor }} onClick={handleToggleText}>
						{expandButtonText}
					</button>
				</>
			)}
		</div>
	);
}
