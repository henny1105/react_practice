import React, { useState } from 'react';
import TabMenu from './components/TabMenu';
import SwiperComponent from './components/SwiperComponent';

function App() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			<TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
			<SwiperComponent activeTab={activeTab} />
		</div>
	);
}

export default App;
