import { FC } from 'react';
import CreateEvent from '../components/ui/CreateEvent';
import Header from '../components/ui/Header';


const CreateEventPage: FC = () => {
	return (
		<div>
			<Header/>
			<CreateEvent/>
		</div>
	);
};

export default CreateEventPage;
