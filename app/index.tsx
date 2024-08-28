import { useState } from "react";
import { Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

const DATE_REGEX = /^(\w{3}\s\w{3}\s\d{2}\s\d{4})/;

export default function Index() {
	const [selectedDate, setSelectedDate] = useState("");

	const handleCalendarClick = (date: Date) => {
		const dateString = date.toString();
		const match = dateString.match(DATE_REGEX);

		if (match && match[1]) {
			setSelectedDate(match[1]);
		} else {
			console.error("Failed to parse date");
		}
	};

	return (
		<View className='flex-col items-center flex-1 bg-teal-100'>
			<Text className='mt-40 text-4xl font-extrabold'>SwoleSociety</Text>
			<Text className='mt-4 mb-20 text-xl'>{selectedDate}</Text>
			<View className=''>
				<CalendarPicker onDateChange={handleCalendarClick} />
			</View>
		</View>
	);
}
