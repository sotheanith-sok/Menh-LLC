import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBars,
    faCalendarAlt,
    faClock,
    faCopyright,
    faEnvelopeSquare,
    faMapMarkedAlt,
    faPhoneSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* Import font awesome icons */
library.add(faCalendarAlt);
library.add(faClock);
library.add(faMapMarkedAlt);
library.add(faPhoneSquareAlt);
library.add(faEnvelopeSquare);
library.add(faCopyright);
library.add(faBars);

export default FontAwesomeIcon;
