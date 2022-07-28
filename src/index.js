import './index.css';
import favicon from './js/components/Favicon';
import wrapper from './js/components/Wrapper.component';
import Form from './js/search/Form';


wrapper.render();
const form = new Form();
form.activationForm();
form.onSumbit();
favicon.addFavicon();
