import React from 'react';
import {
	TabPane
} from 'reactstrap';

const AboutTrackerPane = () => (
	<TabPane tabId="about">
		<p>
			RPThreadTracker allows users to track thread-based roleplay interactions
			and collaborative writing and stay up-to-date on which interactions they
			owe a reply on. Currently the app supports only roleplays on Tumblr,
			but will expand to support other platforms in the future.
		</p>
		<p>
			This site is in no way affiliated with Tumblr or any social media
			platform, nor does it make any direct connections to your account
			or posting permissions. It retrieves information solely through
			public application programming interfaces.
		</p>
		<p>RPThreadTracker is a product of <a href="http://www.blackjack-software.com">Blackjack Software</a>.</p>
	</TabPane>
);

export default AboutTrackerPane;
