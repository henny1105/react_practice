import React, { useState } from 'react';
import TabMenu from './TabMenu';
import SwiperComponent from './SwiperComponent';

function SwiperContent() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			<TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
			<SwiperComponent activeTab={activeTab} />
		</div>
	);
}

export default SwiperContent;
