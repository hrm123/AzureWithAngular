
import * as _ from 'lodash';
import {RESUMES} from "./database-data";


class ClientSideDatabase {

    readResumeDetails() {
        return _.values(RESUMES);
    }

}




export const db = new ClientSideDatabase();


