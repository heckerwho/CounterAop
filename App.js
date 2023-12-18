import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "./src/components/Button";
// num++ => num = num + 1
//let num = 10;
// let size = 10;
// size = size + 1;
// const [size, setSize] = useState(10);
// muốn thay đổi giá trị: setSize(15);
export default function App() {
	const [size, setSize] = useState(10);
	const [align, setAlign] = useState("center");
	const [color, setColor] = useState("black");
	const [textContent, setTextContent] = useState("Lokey's Counter app");
	const red = "red";
	const green = "green";
	const blue = "blue";
	const maxSize = 20;
	const minSize = 10;
	const [fontStyle, setFontStyle] = useState("");
	let number = 10;
	const plus = () => {
		number++;
	};
	return (
		<View style={[styles.container, {}]}>
			<View
				style={{
					backgroundColor: "white",
					width: "90%",
					height: 100,
					// borderWidth: 1,
					paddingHorizontal: 20,
					justifyContent: "center",
					borderRadius: 16,
					// elevation: 20,
					shadowColor: "#00000",
					shadowOffset: { width: -2, height: 4 },
					shadowOpacity: 0.2,
					shadowRadius: 3,
				}}
			>
				<TextInput
					style={{
						color: color,
						fontSize: size * 3,
						textAlign: align,
						fontStyle: fontStyle == "italic" ? "italic" : "normal", // bold?"bold": "normal"
						fontWeight: fontStyle == "bold" ? "bold" : "normal",
					}}
					onChangeText={setTextContent}
					value={textContent}
				/>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginVertical: 10,
				}}
			>
				<TouchableOpacity
					style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 1 }}
					onPress={() => {
						let newSize = size - 1;
						if (newSize < minSize) newSize = maxSize;
						setSize(newSize);
					}}
				>
					<Text style={{ textAlign: "center", lineHeight: 50 }}>-</Text>
				</TouchableOpacity>
				<Text style={{ marginHorizontal: 8 }}>{size}</Text>
				<TouchableOpacity
					style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 1 }}
					onPress={() => {
						let newSize = size + 1; //giá trị của size sau khi đã validate
						if (newSize > maxSize) newSize = minSize;
						setSize(newSize);
					}}
				>
					<Text style={{ textAlign: "center", lineHeight: 50 }}>+</Text>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginVertical: 10,
				}}
			>
				<TouchableOpacity
					style={{
						width: 50,
						height: 50,
						borderRadius: 25,
						borderWidth: 1,
						backgroundColor: color === red ? red : "#fff",
					}}
					onPress={() => {
						setColor(color == red ? "black" : red);
					}}
				>
					<Text
						style={{
							textAlign: "center",
							lineHeight: 50,
							color: color === red ? "white" : "black",
						}}
					>
						R
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: 50,
						height: 50,
						borderRadius: 50,
						borderWidth: 1,
						marginHorizontal: 10,
						backgroundColor: color === green ? green : "#fff",
					}}
					onPress={() => {
						setColor(green);
					}}
				>
					<Text
						style={{
							textAlign: "center",
							lineHeight: 50,
							color: color === green ? "white" : "black",
						}}
					>
						G
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: 50,
						height: 50,
						borderRadius: 50,
						borderWidth: 1,
						backgroundColor: color === blue ? blue : "#fff",
					}}
					onPress={() => {
						setColor(blue);
					}}
				>
					<Text
						style={{
							textAlign: "center",
							lineHeight: 50,
							color: color === blue ? "white" : "black",
						}}
					>
						B
					</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					style={styles.circle}
					onPress={() => {
						setAlign("left");
					}}
				>
					<Text style={{ textAlign: "center", lineHeight: 70 }}>Left</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderWidth: 1,
						borderRadius: 70,
						width: 70,
						height: 70,
						marginHorizontal: 10,
					}}
					onPress={() => {
						setAlign("center");
					}}
				>
					<Text style={styles.text}>Center</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ borderWidth: 1, borderRadius: 70, width: 70, height: 70 }}
					onPress={() => {
						setAlign("right");
					}}
				>
					<Text style={{ textAlign: "center", lineHeight: 70 }}>Right</Text>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					width: 150,
				}}
			>
				<TouchableOpacity
					style={[
						styles.circle,
						{
							backgroundColor: fontStyle == "bold" ? "black" : "white",
						},
					]}
					onPress={() => {
						// const newFontStyle = fontStyle == "bold" ? "" : "bold";
						// setFontStyle(newFontStyle);
						//bold = true -> false -> true
						setFontStyle(!fontStyle);
					}}
				>
					<Text
						style={[
							styles.text,
							{
								color: fontStyle == "bold" ? "white" : "black",
							},
						]}
					>
						B
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.circle,
						{
							backgroundColor: fontStyle == "italic" ? "black" : "white",
						},
					]}
					onPress={() => {
						const newFontStyle = fontStyle == "italic" ? "" : "italic";
						setFontStyle(newFontStyle);
					}}
				>
					<Text
						style={[
							styles.text,
							{
								color: fontStyle == "italic" ? "white" : "black",
							},
						]}
					>
						I
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	circle: {
		borderWidth: 1,
		borderRadius: 70,
		width: 70,
		height: 70,
	},
	text: { textAlign: "center", lineHeight: 70 },
});
