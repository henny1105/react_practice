import React from 'react';

const TabMenu = ({ activeTab, setActiveTab }) => {
	return (
		<div className='tab_menu'>
			<ul className='tab'>
				{[...Array(2).keys()].map((index) => (
					<li key={index} className={`tab_item ${activeTab === index ? 'active' : ''}`} onClick={() => setActiveTab(index)}>
						탭메뉴{index + 1}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TabMenu;
